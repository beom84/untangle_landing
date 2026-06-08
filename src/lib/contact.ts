export type ContactMode = "phone" | "email";

function stripPhoneDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function normalizePhoneNumber(value: string) {
  const digits = stripPhoneDigits(value);

  if (!/^01\d{8,9}$/.test(digits)) {
    return null;
  }

  if (digits.length === 10) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  if (digits.length === 11) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  }

  return null;
}

export function normalizeContactValue(contactMode: ContactMode, value: string) {
  const trimmed = value.trim();

  if (contactMode === "email") {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ? trimmed : null;
  }

  return normalizePhoneNumber(trimmed);
}
