import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface TopBannerProps {
  text: string;
  url?: string;
}

export default function TopBanner({ text, url }: TopBannerProps) {
  return (
    <div className="flex items-center justify-center gap-2 bg-linear-to-r from-[#e4c678] via-[#f2e5c2] to-[#e8d199] px-3.5 py-2.5">
      <Badge variant="default">NEW</Badge>
      {text}
      {url && (
        <Link className="font-semibold underline decoration-1 underline-offset-4" href={url}>
          자세히 알아보기
        </Link>
      )}
    </div>
  );
}
