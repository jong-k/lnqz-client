"use client";

import type { AppLocale } from "@/shared/i18n/lib";
import { changeLocale } from "../api";
import { LOCALE_OPTIONS } from "../lib";

interface LocaleSwitcherProps {
  currentLocale: AppLocale;
}

const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  changeLocale(e.target.value as AppLocale);
};

export function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  return (
    <select defaultValue={currentLocale} onChange={handleChange}>
      {LOCALE_OPTIONS.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
