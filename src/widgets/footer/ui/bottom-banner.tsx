import { useTranslations } from "next-intl";
import Link from "next/link";
import { Logo } from "@/shared/ui";

export default function BottomBanner() {
  const t = useTranslations();

  return (
    <div className="mb-8 flex w-full flex-col justify-between gap-4 md:mb-0 md:flex-row md:items-center md:gap-0">
      <div>
        <Link href="/">
          <Logo alt="Link Squeeze" height={100} sizes="100px" width={100} />
        </Link>
      </div>
      <div>
        &copy; 2025 {t("metaData.title")} | {t("page.home.heading")}
      </div>
      <div>
        <div>Made by</div>
        <Link
          className="cursor-pointer font-semibold underline decoration-1 underline-offset-4"
          href="https://github.com/jong-k"
          rel="noopener noreferrer"
          target="_blank"
        >
          {t("metaData.author")}
        </Link>
      </div>
    </div>
  );
}
