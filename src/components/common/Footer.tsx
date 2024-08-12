import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-footer w-full bg-slate-900 font-semibold text-white">
      <div className="container-box flex h-full w-full items-center justify-between">
        <h2 className="text-xl text-slate-500">
          © {currentYear} 김종한. All rights reserved.
        </h2>
        <ul className="flex gap-4">
          <li>
            <Link href="/">깃허브</Link>
          </li>
          <li>
            <Link href="/">링크드인</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
