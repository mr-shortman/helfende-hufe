"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons";

interface NavLinkProps extends NavLink {
  isButton?: boolean;
}

function NavLink({ label, path, isButton, icon }: NavLinkProps) {
  const pathname = usePathname();
  if (!isButton)
    return (
      <Link
        href={`${path}`}
        className={`${
          pathname === path
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground/75"
        }`}
      >
        {label}
      </Link>
    );
  return (
    <Button>
      <Link href={path} className="flex items-center gap-1">
        {icon && <Icons.heart />}
        <span>{label}</span>
      </Link>
    </Button>
  );
}

export default NavLink;
