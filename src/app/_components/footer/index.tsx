import { MaxWidthWrapper } from "@/shared/ui";
import BottomBanner from "./bottom-banner";
import Divider from "./divider";
import FooterMenu from "./footer-menu";

export default function Footer() {
  return (
    <footer>
      {/* footer element 없애면 쪼그라듬 */}
      <MaxWidthWrapper>
        <FooterMenu />
        <Divider />
        <BottomBanner />
      </MaxWidthWrapper>
    </footer>
  );
}
