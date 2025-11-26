import Link from "next/link";
import { Logo } from "@/shared/ui";
import AnnouncementButton from "./announcement-button";
import SelectLocale from "./select-locale";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <Logo alt="Link Squeeze" height={100} priority sizes="100px" width={100} />
      </Link>
      <div className="flex items-center gap-2">
        <SelectLocale />
        <AnnouncementButton />
      </div>
    </nav>
  );
}
