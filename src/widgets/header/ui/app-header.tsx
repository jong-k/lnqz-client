"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ResponsiveWrapper } from "@/shared/ui";
import NavBar from "./nav-bar";
import TopBanner from "./top-banner";

export function AppHeader() {
  const pathname = usePathname();
  const showTopBanner = pathname === "/";
  const t = useTranslations();

  return (
    <header className="relative z-10 w-full shadow-sm">
      {showTopBanner && (
        <TopBanner
          className="hidden sm:flex"
          text={`🎉 ${t("metaData.title")} ${t("ui.topBanner.serviceLaunch")} 🎉`}
          url="/"
        />
      )}
      <ResponsiveWrapper>
        <NavBar />
      </ResponsiveWrapper>
    </header>
  );
}
