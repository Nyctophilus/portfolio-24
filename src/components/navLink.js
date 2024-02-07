"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ url, title }) => {
  const pathname = usePathname();
  return (
    <Link
      key={url}
      href={url}
      className={`${
        pathname === url ? "bg-black text-white" : ""
      } px-2 py-1 rounded capitalize`}
    >
      {title}
    </Link>
  );
};
export default NavLink;
