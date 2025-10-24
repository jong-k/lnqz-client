"use client";

import { X } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";
import { Button } from "@/shared/shadcn-ui/components/ui/button";
import { Input } from "@/shared/shadcn-ui/components/ui/input";

export default function ShortenerForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const targetUrl = inputRef.current?.value;
    // url validation 추가
    if (!targetUrl) {
      toast.error("URL을 입력해주세요.");
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
          placeholder="https://example.com/"
          ref={inputRef}
          type="url"
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
      {/* 입력값 밸리데이션 */}
      <Button className="cursor-pointer bg-sky-500 hover:bg-sky-400" type="submit">
        단축 URL 생성
      </Button>
    </form>
  );
}
