import { MaxWidthWrapper } from "@/shared/ui";
import Shortener from "./_components/shortener";

export default function Home() {
  return (
    <div className="w-full bg-slate-100 py-20">
      <MaxWidthWrapper>
        <Shortener />
      </MaxWidthWrapper>
    </div>
  );
}
