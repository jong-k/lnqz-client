import { APP_LOCALES } from "@/shared/i18n/lib";

const LOCALE_LABEL_MAP = {
  ko: "한국어",
  en: "English",
} as const;

export const LOCALE_OPTIONS = APP_LOCALES.map(locale => ({
  label: LOCALE_LABEL_MAP[locale],
  value: locale,
}));
