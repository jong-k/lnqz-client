"use client";

import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { createShortUrl } from "@/entities/url/api/create-short-url";
import { urlSchema } from "@/entities/url/model/schemas";

export function useShortenUrl() {
  const [isInvalidUrl, setIsInvalidUrl] = useState<boolean>(false);
  const [generatedShortUrl, setGeneratedShortUrl] = useState<string>("");
  const t = useTranslations();

  const onUrlChange = useCallback((value: string) => {
    if (value) {
      const result = urlSchema.safeParse({ targetUrl: value });
      setIsInvalidUrl(!result.success);
    } else {
      setIsInvalidUrl(false);
    }
  }, []);

  const submit = async (value: string) => {
    const targetUrl = value?.trim();
    if (!targetUrl) {
      toast.error(t("notification.needUrl"));
      return;
    }

    if (isInvalidUrl) {
      toast.error(t("notification.needValidUrl"));
      return;
    }

    try {
      const shortUrl = await createShortUrl(targetUrl);
      setGeneratedShortUrl(shortUrl);
      toast.success(t("notification.createShortUrl.success"));
    } catch {
      toast.error(t("notification.createShortUrl.error"));
    }
  };

  return { isInvalidUrl, generatedShortUrl, onUrlChange, submit };
}
