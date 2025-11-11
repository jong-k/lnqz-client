import { ShortenerContainer } from "@/features/shorten-url/ui";
import { MaxWidthWrapper } from "@/shared/ui";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <ShortenerContainer />
    </MaxWidthWrapper>
  );
}
