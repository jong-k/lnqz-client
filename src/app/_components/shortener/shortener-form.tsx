"use client";

import { debounce } from "es-toolkit/function";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/shared/shadcn-ui/components/ui/button";
import { Input } from "@/shared/shadcn-ui/components/ui/input";

const urlSchema = z.object({
  targetUrl: z.url({
    protocol: /^https?$/,
  }),
});

export default function ShortenerForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInvalidUrl, setIsInvalidUrl] = useState<boolean>(false);

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const result = urlSchema.safeParse({ targetUrl: e.target.value });
      if (result.success) {
        setIsInvalidUrl(false);
      } else {
        setIsInvalidUrl(true);
      }
    } else {
      setIsInvalidUrl(false);
    }
  };

  const debouncedHandleChange = debounce(handleChange, 300);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const targetUrl = inputRef.current?.value;
    if (!targetUrl) {
      toast.error("URL을 입력해주세요.");
      return;
    }
    if (isInvalidUrl) {
      toast.error("유효한 URL을 입력해주세요.");
      return;
    }

    try {
      const result = await fetch("/api/urls", {
        body: JSON.stringify({ targetUrl }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const { data } = await result.json();
      console.log(data);
    } catch (error) {
      toast.error("단축 URL 생성에 실패했습니다");
      console.error(error);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="relative">
        <Input
          className="peer border-2 pr-10 selection:bg-sky-500 focus:outline-2 focus:outline-sky-500 focus-visible:border-sky-500 focus-visible:ring-sky-500/50"
          onChange={debouncedHandleChange}
          placeholder="https://example.com/"
          ref={inputRef}
        />
        <button
          aria-label="입력값 지우기"
          className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 text-muted-foreground transition-colors peer-placeholder-shown:pointer-events-none peer-placeholder-shown:opacity-0 hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          onClick={clearInput}
          type="button"
        >
          <X aria-hidden className="size-4" />
        </button>
      </div>
      <div className="h-5">{isInvalidUrl && <p className="text-sm text-red-500">URL이 유효하지 않습니다.</p>}</div>
      <Button className="cursor-pointer bg-sky-500 hover:bg-sky-400" type="submit">
        단축 URL 생성
      </Button>
    </form>
  );
}
