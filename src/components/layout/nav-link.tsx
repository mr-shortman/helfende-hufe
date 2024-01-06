"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";

interface NavLinkProps extends NavLink {
  isButton?: boolean;
  className?: string;
}

function NavLink({ label, path, isButton, icon, className }: NavLinkProps) {
  const pathname = usePathname();
  if (!isButton)
    return (
      <Link
        href={`${path}`}
        className={cn(
          `${
            pathname === path
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground/75"
          }`,
          className
        )}
      >
        {label}
      </Link>
    );
  return (
    <Button>
      <Link href={path} className={cn("flex items-center gap-1", className)}>
        {icon && <Icons.heart />}
        <span>{label}</span>
      </Link>
    </Button>
  );
}

export default NavLink;
