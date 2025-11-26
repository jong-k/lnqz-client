import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Logo } from "@/shared/ui";

export default async function BottomBanner() {
  const t = await getTranslations("metaData");

  return (
    <div className="mb-8 flex w-full flex-col justify-between gap-4 md:mb-0 md:flex-row md:items-center md:gap-0">
      <div>
        <Link href="/">
          <Logo alt="Link Squeeze" height={100} sizes="100px" width={100} />
        </Link>
      </div>
      <div>
        &copy; {new Date().getFullYear()} {t("title")} | {t("slogan")}
      </div>
      <div>
        <div>Made by</div>
        <Link
          className="cursor-pointer font-semibold underline decoration-1 underline-offset-4"
          href="https://github.com/jong-k"
          rel="noopener noreferrer"
          target="_blank"
        >
          {t("author")}
        </Link>
      </div>
    </div>
  );
}
