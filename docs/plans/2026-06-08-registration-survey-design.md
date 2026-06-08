## Registration And Survey Flow

### Goals

- Allow phone submissions even when the user omits hyphens.
- Automatically normalize valid Korean mobile numbers before sending them.
- After registration succeeds, require the user to complete a three-step survey.
- Save survey progress incrementally so partial answers are preserved even if the user leaves mid-flow.

### Recommended Flow

1. The user submits a phone number or email in the pre-registration form.
2. The registration endpoint validates and stores the contact, then returns a `submissionKey`.
3. The client opens a blocking survey modal with steps `1/3`, `2/3`, `3/3`.
4. Each step saves its latest answers to the survey endpoint before advancing.
5. The last step marks the survey as completed and shows a thank-you modal.

### Data Model

- One Google Sheets row per registrant.
- Shared key: `submissionKey`
- Registration fields:
  - `createdAt`
  - `submissionKey`
  - `contactMode`
  - `contactValue`
- Survey fields:
  - `surveyStep`
  - `painMoment`
  - `currentMethods`
  - `currentMethodsOther`
  - `biggestGap`
  - `surveyCompleted`
  - `surveyCompletedAt`
  - `updatedAt`

### API Shape

- `POST /api/register`
  - Input: `contactMode`, `value`
  - Output: `ok`, `submissionKey`
  - Apps Script payload includes `action: "register"`
- `POST /api/survey`
  - Input: `submissionKey`, `step`, answers, optional `completed`
  - Output: `ok`
  - Apps Script payload includes `action: "survey"`

### UX Notes

- Phone input accepts freeform characters, but only valid normalized mobile numbers are sent.
- Step `1/3` uses a single-select objective list for the recent pain-point question.
- Step `2/3` supports multi-select and a freeform `other` input when needed.
- Step `3/3` uses multi-select objective choices, with a freeform `other` input when selected.
- The survey modal can be dismissed mid-flow with a close button, while keeping the draft for a later restore on refresh.
- Partial saves happen on step transitions to keep server writes predictable.
