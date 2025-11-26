"use client";

import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Button } from "@/shared/shadcn-ui/components/ui/button";

const handleContactClick = (t: ReturnType<typeof useTranslations>) => {
  const EMAIL_ADDRESS = "dev.jonghankim@gmail.com";
  navigator.clipboard.writeText(EMAIL_ADDRESS);
  toast.success(t("notification.copyEmail", { email: EMAIL_ADDRESS }));
};

export default function FooterMenu() {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <h3 className="mb-4 text-xl">{t("ui.footer.support")}</h3>
        <div>
          <Button className="w-fit cursor-pointer" onClick={() => handleContactClick(t)} variant="link">
            {t("ui.footer.contactDeveloper")}
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xl">{t("ui.footer.termsAndPolicy")}</h3>
        <div className="flex w-full flex-col">
          <Button
            className="w-fit cursor-pointer"
            onClick={() => toast.info(`🚧 ${t("notification.comingSoon")} 🚧`)}
            variant="link"
          >
            {t("ui.footer.serviceTerms")}
          </Button>
          <Button
            className="w-fit cursor-pointer"
            onClick={() => toast.info(`🚧 ${t("notification.comingSoon")} 🚧`)}
            variant="link"
          >
            {t("ui.footer.privacyPolicy")}
          </Button>
        </div>
      </div>
    </div>
  );
}
