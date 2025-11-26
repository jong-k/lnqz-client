"use client";

import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Button } from "@/shared/shadcn-ui/components/ui/button";

export default function AnnouncementButton() {
  const t = useTranslations();

  return (
    <Button
      className="cursor-pointer"
      onClick={() => toast.info(`🚧 ${t("notification.comingSoon")} 🚧`)}
      variant="ghost"
    >
      {t("ui.header.announcement")}
    </Button>
  );
}
