"use client";
import React from "react";
import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Icons } from "@/components";

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  return (
    <div className={`bg-muted ${className}`}>
      <div className="flex justify-between items-center container py-4 ">
        <Link href={"/"} className="flex items-center gap-2">
          {/* <Icons.logo className="w-12 text-white" /> */}
          <span className="text-3xl font-bold text-muted-foreground">
            Helfende Hufe e.V.
          </span>
        </Link>
        <div className="flex gap-10 items-center">
          <ul className="flex items-center gap-5">
            {siteConfig.navigator.links.map(({ label, path }, idx) => (
              <li key={idx}>
                <Link
                  href={path}
                  className={`${
                    pathname === path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground/75"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-5">
            {siteConfig.navigator.buttons?.map(({ label, path, icon }, idx) => (
              <Button key={idx}>
                <Link href={path} className="flex items-center gap-1">
                  {icon && <Icons.heart />}
                  <span>{label}</span>
                </Link>
              </Button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
