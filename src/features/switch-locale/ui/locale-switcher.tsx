"use client";

import type { AppLocale } from "@/shared/i18n/lib";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/shadcn-ui/components/ui/select";
import { changeLocale } from "../api";
import { LOCALE_OPTIONS } from "../lib";

interface LocaleSwitcherProps {
  currentLocale: AppLocale;
}

export function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const currentLocaleLabel = LOCALE_OPTIONS.find(option => option.value === currentLocale)?.label ?? "한국어";

  return (
    <Select defaultValue={currentLocale} onValueChange={value => changeLocale(value as AppLocale)}>
      <SelectTrigger className="min-w-[100px]">
        <SelectValue placeholder={currentLocaleLabel} />
      </SelectTrigger>
      <SelectContent className="min-w-[100px]">
        {LOCALE_OPTIONS.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
