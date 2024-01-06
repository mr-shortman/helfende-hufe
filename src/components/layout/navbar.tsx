"use client";

import React from "react";
import Link from "next/link";
import NavLink from "./nav-link";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavbarProps {
  className?: string;
  siteConfig: SiteConfig;
}

function Navbar({ className, siteConfig }: NavbarProps) {
  // const [open, setOpen] = React.useState(false);

  const siteNavigator = siteConfig.navigator;

  return (
    <div className={cn(`relative z-20 bg-muted`, className)}>
      <div className="flex justify-between items-center container py-4 ">
        <Link href={"/"} className="flex items-center gap-2">
          <span className="text-3xl font-bold text-muted-foreground">
            {siteConfig.siteName}
          </span>
        </Link>

        <Sheet>
          <SheetTrigger className="visible lg:hidden">
            <Icons.menu />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle className="text-2xl">
                {siteConfig.siteName}
              </SheetTitle>
              {siteNavigator?.links ? (
                <ul className="absolute w-full left-0 top-20 flex flex-col px-4 gap-1 bg-background">
                  {siteNavigator.links.map((link, idx) => (
                    <NavLink
                      key={idx}
                      {...link}
                      className="text-2xl font-bold"
                    />
                  ))}
                </ul>
              ) : null}
            </SheetHeader>
          </SheetContent>
        </Sheet>

        {/* Desktop Nav */}
        <ul className=" gap-5 hidden lg:flex items-center">
          {siteNavigator?.links
            ? siteNavigator.links.map((link, idx) => {
                return (
                  <li key={idx}>
                    <NavLink label={`${link?.label}`} path={`${link?.path}`} />
                  </li>
                );
              })
            : null}
        </ul>

        <ul className="hidden lg:flex items-center gap-5">
          {siteNavigator?.buttons &&
            siteNavigator?.buttons.map((button, idx) => {
              return (
                <li key={idx}>
                  <NavLink
                    label={`${button?.label}`}
                    path={`${button?.path}`}
                    icon={`${button?.icon}`}
                    isButton={true}
                  />
                </li>
              );
            })}
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Navbar;
