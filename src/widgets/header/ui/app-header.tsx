import { ResponsiveWrapper } from "@/shared/ui";
import NavBar from "./nav-bar";
import TopBanner from "./top-banner";

export function AppHeader() {
  return (
    <header className="relative z-10 w-full shadow-sm">
      <TopBanner />
      <ResponsiveWrapper>
        <NavBar />
      </ResponsiveWrapper>
    </header>
  );
}
