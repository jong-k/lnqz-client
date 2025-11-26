import { getTranslations } from "next-intl/server";
import ShortenerForm from "./shortener-form";

export async function ShortenerContainer() {
  const t = await getTranslations();

  return (
    <div>
      <h3 className="text-center text-3xl font-semibold">{t("metaData.slogan")}</h3>
      <p className="my-4 text-center text-xl">{t("page.home.subHeading")}</p>
      <div className="mx-auto max-w-2xl rounded-md bg-white p-8 shadow-md">
        <ShortenerForm />
      </div>
    </div>
  );
}
