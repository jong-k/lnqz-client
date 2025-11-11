"use client";

import { useState } from "react";
import { toast } from "sonner";
import { createShortUrl } from "@/features/shorten-url/lib/create-short-url";
import { urlSchema } from "@/features/shorten-url/model/schemas";

export function useShortenUrl() {
  const [isInvalidUrl, setIsInvalidUrl] = useState<boolean>(false);
  const [generatedShortUrl, setGeneratedShortUrl] = useState<string>("");

  const onUrlChange = (value: string) => {
    if (value) {
      const result = urlSchema.safeParse({ targetUrl: value });
      setIsInvalidUrl(!result.success);
    } else {
      setIsInvalidUrl(false);
    }
  };

  const submit = async (value: string) => {
    const targetUrl = value?.trim();
    if (!targetUrl) {
      toast.error("URL을 입력해주세요.");
      return;
    }

    if (isInvalidUrl) {
      toast.error("유효한 URL을 입력해주세요.");
      return;
    }

    try {
      const shortUrl = await createShortUrl(targetUrl);
      setGeneratedShortUrl(shortUrl);
      toast.success("단축 URL 생성에 성공했습니다");
    } catch {
      toast.error("단축 URL 생성에 실패했습니다");
    }
  };

  return { isInvalidUrl, generatedShortUrl, onUrlChange, submit };
}
