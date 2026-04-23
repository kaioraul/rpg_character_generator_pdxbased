"use client";

import Link from "next/link";
import css from "./NavLink.module.css";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ children, href }: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link href={href} className={path.startsWith(href) ? css.active : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
