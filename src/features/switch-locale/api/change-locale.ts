"use server";

import { cookies } from "next/headers";

export const changeLocale = async (locale: string) => {
  const cookieStore = await cookies();
  cookieStore.set("locale", locale, { httpOnly: true });
};
