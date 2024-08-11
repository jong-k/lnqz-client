"use client";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LIST, GNB_HEIGHT } from "@/constants";

export default function GNB() {
  const [bgHasColor, setBgHasColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > GNB_HEIGHT) {
        setBgHasColor(true);
      } else {
        setBgHasColor(false);
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={clsx(
        "h-gnb",
        "fixed",
        "left-0",
        "top-0",
        "z-gnb",
        "flex",
        "w-full",
        "items-center",
        bgHasColor ? "bg-slate-900" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-full w-full items-center justify-between px-4">
        <div className="text-2xl font-bold text-white">
          <Link href="/">김종한의 기술 블로그</Link>
        </div>
        <ul className="flex gap-4">
          {NAV_LIST.map(({ label, href }) => (
            <li key={label} className="font-mono text-2xl font-semibold text-white">
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
