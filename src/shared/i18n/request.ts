import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "ko";

  return {
    locale,
    // eslint-disable-next-line unicorn/no-await-expression-member
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
