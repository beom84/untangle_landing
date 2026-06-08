import * as amplitude from "@amplitude/analytics-browser";

let initialized = false;

export function initAmplitude() {
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
  if (!apiKey || initialized || typeof window === "undefined") return;
  amplitude.init(apiKey, { autocapture: false });
  initialized = true;
}

export function track(event: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  amplitude.track(event, props);
}
