"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { NAV_LIST, GNB_HEIGHT } from "@/constants";

export default function GNB() {
  const [bgHasColor, setBgHasColor] = useState(false);
  const [currentPageParam, setCurrentPageParam] = useState("");
  const pathname = usePathname();
  const getCurrentPageParam = useCallback(() => {
    if (pathname === "/" || pathname.startsWith("/blog")) return "/blog";
    if (pathname.startsWith("/about")) return "/about";
    return "/blog";
  }, [pathname]);

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

  useEffect(() => {
    setCurrentPageParam(getCurrentPageParam());
  }, [getCurrentPageParam, pathname]);

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
      <div className="container-box flex h-full w-full items-center justify-between font-mono text-2xl text-white">
        <div className="font-bold">
          <Link href="/">jonghan.log</Link>
        </div>
        <ul className="flex gap-4">
          {NAV_LIST.map(({ label, href }) => {
            return (
              <li key={label} className="font-semibold">
                <Link
                  onMouseEnter={() => setCurrentPageParam(href)}
                  onMouseLeave={() => setCurrentPageParam(getCurrentPageParam())}
                  className={clsx(
                    "nav-link",
                    currentPageParam === href && "after:scale-x-100",
                  )}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
