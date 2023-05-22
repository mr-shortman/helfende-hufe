import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Icons } from "@/components";
import NavLink from "./nav-link";
import { getSiteNavigator } from "@/lib/utils";

interface NavbarProps {
  className?: string;
  // siteConfig: SiteConfig;
}

async function Navbar({ className }: NavbarProps) {
  const navigator = await getSiteNavigator();

  // console.log(siteConfig);

  return (
    <div className={`relative z-20 bg-muted ${className}`}>
      <div className="flex justify-between items-center container py-4 ">
        <Link href={"/"} className="flex items-center gap-2">
          {/* <Icons.logo className="w-12 text-white" /> */}
          <span className="text-3xl font-bold text-muted-foreground">
            Helfende Hufe e.V.
          </span>
        </Link>
        {/* <div className="flex gap-10 items-center"> */}
        <ul className="flex items-center gap-5">
          {navigator?.links &&
            navigator?.links.map((link, idx) => {
              // if (!link?.label || link?.path) return null;
              return (
                <li key={idx}>
                  <NavLink label={`${link?.label}`} path={`${link?.path}`} />
                </li>
              );
            })}
        </ul>

        <ul className="flex items-center gap-5">
          {navigator?.buttons &&
            navigator?.buttons.map((button, idx) => {
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
