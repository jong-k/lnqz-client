import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/shadcn-ui/components/ui/button";

export default function NotFound() {
  return (
    <div className="m-auto flex w-fit flex-col items-center gap-4 rounded-md bg-white p-8 shadow-md">
      <div className="flex items-center gap-2 text-[clamp(1rem,5vw,1.5rem)] font-semibold">
        <TriangleAlert />
        페이지를 찾을 수 없습니다
      </div>
      <p>요청하신 단축 URL이 유효하지 않습니다.</p>
      <Button asChild className="bg-sky-500 hover:bg-sky-400">
        <Link href="/">메인으로 돌아가기</Link>
      </Button>
    </div>
  );
}
