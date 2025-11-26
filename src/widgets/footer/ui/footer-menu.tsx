"use client";

import { toast } from "sonner";
import { Button } from "@/shared/shadcn-ui/components/ui/button";

const handleContactClick = () => {
  const EMAIL_ADDRESS = "dev.jonghankim@gmail.com";
  navigator.clipboard.writeText(EMAIL_ADDRESS);
  toast.success(`메일 주소 ${EMAIL_ADDRESS} 를 클립보드에 복사했습니다`);
};

export default function FooterMenu() {
  return (
    <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
      {/* 1열 */}
      <div>
        <h3 className="mb-4 text-xl">Support</h3>
        <div>
          <Button className="w-fit cursor-pointer" onClick={handleContactClick} variant="link">
            개발자에게 문의
          </Button>
        </div>
      </div>
      {/* 2열 */}
      <div>
        <h3 className="mb-4 text-xl">Terms & Policy</h3>
        <div className="flex w-full flex-col">
          <Button className="w-fit cursor-pointer" onClick={() => toast.info("🚧 기능 준비중 🚧")} variant="link">
            개인정보처리방침
          </Button>
          <Button className="w-fit cursor-pointer" onClick={() => toast.info("🚧 기능 준비중 🚧")} variant="link">
            이용약관
          </Button>
        </div>
      </div>
    </div>
  );
}
