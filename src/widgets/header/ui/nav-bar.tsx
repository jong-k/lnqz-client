import { getLocale } from "next-intl/server";
import Link from "next/link";
import { LocaleSwitcher } from "@/features/switch-locale/ui";
import type { AppLocale } from "@/shared/i18n/lib";
import { Logo } from "@/shared/ui";
import AnnouncementButton from "./announcement-button";

export default async function NavBar() {
  const locale = (await getLocale()) as AppLocale;

  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <Logo alt="Link Squeeze" height={100} priority sizes="100px" width={100} />
      </Link>
      <div className="flex items-center gap-2">
        <LocaleSwitcher currentLocale={locale} />
        <AnnouncementButton />
      </div>
    </nav>
  );
}
