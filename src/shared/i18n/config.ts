export const DEFAULT_LANGUAGE = "ko";
export const LANGUAGES = [DEFAULT_LANGUAGE, "en"] as const;
export type Language = (typeof LANGUAGES)[number];
