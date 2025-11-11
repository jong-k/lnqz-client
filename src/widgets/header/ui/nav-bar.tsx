"use client";

import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/shared/shadcn-ui/components/ui/button";
import { Logo } from "@/shared/ui";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <Logo alt="Link Squeeze" height={100} priority sizes="100px" width={100} />
      </Link>
      <Button className="cursor-pointer" onClick={() => toast.info("🚧 기능 준비중 🚧")} variant="ghost">
        공지사항
      </Button>
    </nav>
  );
}
