"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/shared/shadcn-ui/components/ui/button";
import { Logo } from "@/shared/ui";
import SelectLocale from "./select-locale";

export default function NavBar() {
  const t = useTranslations();

  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <Logo alt="Link Squeeze" height={100} priority sizes="100px" width={100} />
      </Link>
      <div className="flex items-center gap-2">
        <SelectLocale />
        <Button
          className="cursor-pointer"
          onClick={() => toast.info(`🚧 ${t("notification.comingSoon")} 🚧`)}
          variant="ghost"
        >
          {t("ui.header.announcement")}
        </Button>
      </div>
    </nav>
  );
}
