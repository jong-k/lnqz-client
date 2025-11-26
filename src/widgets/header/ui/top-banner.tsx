"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { Badge } from "@/shared/shadcn-ui/components/ui/badge";
import { cn } from "@/shared/shadcn-ui/lib";

export default function TopBanner() {
  const pathname = usePathname();
  const showTopBanner = pathname === "/";
  const t = useTranslations();

  if (!showTopBanner) {
    return;
  }

  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center gap-2 bg-linear-to-r from-[#e4c678] via-[#f2e5c2] to-[#e8d199] px-3.5 py-2.5 sm:flex-row"
      )}
    >
      <Badge variant="default">NEW</Badge>

      {`🎉 ${t("metaData.title")} ${t("ui.topBanner.serviceLaunch")} 🎉`}

      <button
        className="cursor-pointer font-semibold underline decoration-1 underline-offset-4"
        onClick={() => toast.info(`🚧 ${t("notification.comingSoon")} 🚧`)}
      >
        {t("button.learnMore")}
      </button>
    </section>
  );
}
