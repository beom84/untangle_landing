import Clarity from "@microsoft/clarity";
import { isTrackingEnabled } from "@/lib/tracking";

const CLARITY_PROJECT_ID = "x7bml321qk";

let initialized = false;

export function initClarity() {
  if (initialized || !isTrackingEnabled()) return;
  Clarity.init(CLARITY_PROJECT_ID);
  initialized = true;
}
