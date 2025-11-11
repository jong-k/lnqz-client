import { MaxWidthWrapper } from "@/shared/ui";
import BottomBanner from "./bottom-banner";
import Divider from "./divider";
import FooterMenu from "./footer-menu";

export function AppFooter() {
  return (
    <MaxWidthWrapper>
      <FooterMenu />
      <Divider />
      <BottomBanner />
    </MaxWidthWrapper>
  );
}
