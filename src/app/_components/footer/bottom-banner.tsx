import Image from "next/image";
import Link from "next/link";

export default function BottomBanner() {
  return (
    <div className="mb-8 flex w-full flex-col justify-between gap-4 md:mb-0 md:flex-row md:items-center md:gap-0">
      <div>
        <Link href="/">
          <Image alt="Logo" height={100} src="/images/logo.png" width={100} />
        </Link>
      </div>
      <div>© 2025 링크 스퀴즈 | 링크를 줄이세요, 당신의 시간은 소중하니까</div>
      <div>
        <div>Made by</div>
        <Link
          className="cursor-pointer font-semibold underline decoration-1 underline-offset-4"
          href="https://github.com/jong-k"
          rel="noopener noreferrer"
          target="_blank"
        >
          김종한
        </Link>
      </div>
    </div>
  );
}
