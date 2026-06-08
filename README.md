# Untangle ADHD Landing

Landing page for Untangle's ADHD-focused pre-registration flow.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy [.env.local.example](/Users/beom/Documents/untangle_landing/untangle_adhd/.env.local.example) to `.env.local` and fill in:

- `APPS_SCRIPT_URL`: Google Apps Script web app URL for registration and survey writes
- `NEXT_PUBLIC_AMPLITUDE_API_KEY`: Amplitude browser key

## Google Sheets Integration

The app sends all writes through two server routes:

- [src/app/api/register/route.ts](/Users/beom/Documents/untangle_landing/untangle_adhd/src/app/api/register/route.ts:1)
- [src/app/api/survey/route.ts](/Users/beom/Documents/untangle_landing/untangle_adhd/src/app/api/survey/route.ts:1)

Both routes post to the same Apps Script web app.

### 1. Create the Sheet

Create a Google Sheet and name the first tab `registrations`.

Recommended columns:

```text
createdAt
submissionKey
contactMode
contactValue
surveyStep
painMoment
currentMethods
currentMethodsOther
biggestGap
surveyCompleted
surveyCompletedAt
updatedAt
```

The script will also create or reset these headers automatically.

### 2. Paste the Apps Script

Use [scripts/google-apps-script/Code.gs](/Users/beom/Documents/untangle_landing/untangle_adhd/scripts/google-apps-script/Code.gs:1) as the contents of your Apps Script project.

### 3. Deploy the Script

1. Open the sheet.
2. Go to `Extensions` -> `Apps Script`.
3. Paste `Code.gs`.
4. Click `Deploy` -> `New deployment`.
5. Choose `Web app`.
6. Set `Execute as`: `Me`.
7. Set `Who has access`: `Anyone`.
8. Copy the `/exec` URL into `APPS_SCRIPT_URL`.

### 4. Verify the Flow

1. Submit a phone number or email on the landing page.
2. Confirm a new row appears with `submissionKey`.
3. Complete survey step 1, then refresh the page.
4. Confirm the draft is restored and `surveyStep` is updated.
5. Finish step 3 and confirm `surveyCompleted` becomes `TRUE`.

## Notes

- Phone numbers are normalized before saving.
- Survey progress is auto-saved during typing and on each step transition.
- The browser also keeps a local draft so users can resume on the same device.
