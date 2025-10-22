import { MaxWidthWrapper } from "@/shared/ui";
import NavBar from "./nav-bar";
import TopBanner from "./top-banner";

export default function Header() {
  return (
    <header className="relative z-10 w-full shadow-sm">
      <TopBanner className="hidden sm:flex" text="🎉 Link Squeeze 서비스 오픈 🎉" url="/" />
      <MaxWidthWrapper>
        <NavBar />
      </MaxWidthWrapper>
    </header>
  );
}
