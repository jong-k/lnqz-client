"use client";

import { toast } from "sonner";
import { Badge } from "@/shared/shadcn-ui/components/ui/badge";
import { cn } from "@/shared/shadcn-ui/lib";

interface TopBannerProps {
  className?: string;
  text: string;
  url?: string;
}

export default function TopBanner({ className, text, url }: TopBannerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 bg-linear-to-r from-[#e4c678] via-[#f2e5c2] to-[#e8d199] px-3.5 py-2.5",
        className
      )}
    >
      <Badge variant="default">NEW</Badge>
      {text}
      {url && (
        <button
          className="cursor-pointer font-semibold underline decoration-1 underline-offset-4"
          onClick={() => toast.info("🚧 기능 준비중 🚧")}
        >
          자세히 알아보기
        </button>
      )}
    </div>
  );
}
