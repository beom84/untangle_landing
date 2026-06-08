import * as amplitude from "@amplitude/analytics-browser";
import { LANDING_VARIANT } from "@/lib/experiment";

let initialized = false;

function getDefaultEventProps() {
  return {
    landing_variant: LANDING_VARIANT,
  };
}

export function initAmplitude() {
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
  if (!apiKey || initialized || typeof window === "undefined") return;
  amplitude.init(apiKey, { autocapture: false });
  initialized = true;
}

export function track(event: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  amplitude.track(event, {
    ...getDefaultEventProps(),
    ...props,
  });
}
