import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-footer w-full bg-slate-900 font-semibold text-white">
      <div className="container mx-auto flex h-full w-full items-center justify-between px-4">
        <h2 className="text-xl text-slate-500">© 김종한</h2>
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
