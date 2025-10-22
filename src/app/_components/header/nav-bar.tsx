"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/shared/shadcn-ui/components/ui/button";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <Image alt="Link Squeeze" height={100} src="/images/logo.png" width={100} />
      </Link>
      <Button className="cursor-pointer" onClick={() => toast.info("🚧 기능 준비중 🚧")} variant="ghost">
        공지사항
      </Button>
    </nav>
  );
}
