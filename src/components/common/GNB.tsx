import clsx from "clsx";
import Link from "next/link";
import { NAV_LIST } from "@/constants";

export default function GNB() {
  return (
    <nav className="h-gnb fixed left-0 top-0 z-gnb flex w-full items-center bg-white">
      <div className="container mx-auto flex h-full w-full items-center justify-between px-4">
        <div className="bg-amber-200 text-xl">
          <Link href="/">김종한의 기술 블로그</Link>
        </div>
        <ul className="flex gap-4">
          {NAV_LIST.map(({ label, href }) => (
            <li key={label} className="font-mono text-xl">
              <Link className="nav-link" href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
