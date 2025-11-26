export const DEFAULT_LOCALE = "ko";
export const LOCALES = [
  { label: "한국어", value: "ko" },
  { label: "English", value: "en" },
] as const;
export type Locale = (typeof LOCALES)[number]["value"];
