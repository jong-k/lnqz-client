"use client";

import { debounce } from "es-toolkit/function";
import { X } from "lucide-react";
import { useRef } from "react";
import type { ChangeEvent } from "react";
import { useShortenUrl } from "@/features/shorten-url/model/use-shorten-url";
import { Alert, AlertDescription, AlertTitle } from "@/shared/shadcn-ui/components/ui/alert";
import { Button } from "@/shared/shadcn-ui/components/ui/button";
import { Input } from "@/shared/shadcn-ui/components/ui/input";

export default function ShortenerForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { isInvalidUrl, generatedShortUrl, onUrlChange, submit } = useShortenUrl();

  const debouncedHandleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    onUrlChange(e.target.value);
  }, 300);

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value ?? "";
    await submit(value);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="relative">
        <Input
          className="peer h-10 border-2 pr-10 selection:bg-sky-500 focus:outline-2 focus:outline-sky-500 focus-visible:border-sky-500 focus-visible:ring-sky-500/50"
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
      <Button className="cursor-pointer bg-sky-500 font-semibold shadow-sm hover:bg-sky-400" size="lg" type="submit">
        단축 URL 생성
      </Button>
      {generatedShortUrl && (
        <Alert className="bg-slate-100 shadow-sm">
          <AlertTitle>생성된 단축 URL</AlertTitle>
          <AlertDescription className="w-full">
            <a
              className="underline hover:text-sky-600"
              href={generatedShortUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {generatedShortUrl}
            </a>
          </AlertDescription>
        </Alert>
      )}
    </form>
  );
}
