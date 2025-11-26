"use server";

import { cookies } from "next/headers";
import type { AppLocale } from "@/shared/i18n/lib";

export const changeLocale = async (locale: AppLocale) => {
  const cookieStore = await cookies();
  cookieStore.set("locale", locale, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
};
