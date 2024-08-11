import GNB from "@/components/common/GNB";
import HeroImage from "@/components/base/HeroImage";

export default function Header() {
  return (
    <header>
      <GNB />
      <HeroImage src="/images/header-background.jpg" />
    </header>
  );
}
