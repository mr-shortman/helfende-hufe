import Link from "next/link";
import React from "react";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

function Footer({ className }: Props) {
  const sitemap = [
    ...siteConfig.navigator.links,
    ...(siteConfig.navigator.buttons ?? []),
  ];
  return (
    <footer className={cn("bg-muted text-muted-foreground shadow", className)}>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <Link
            href="/"
            className="flex items-center justify-center md:justify-start mb-4 sm:mb-0 gap-2"
          >
            <Icons.logo className="w-10" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {siteConfig.siteName}
            </span>
          </Link>
          <ul className="flex flex-wrap items-center justify-center md:justify-start mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {sitemap.map(({ label, path }, idx) => (
              <li key={idx}>
                <Link href={path} className="mr-4 hover:underline md:mr-6">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center text-muted-foreground">
          © 2023{" "}
          <Link href="/" className="underline hover:text-foreground/75">
            {siteConfig.siteName}
          </Link>
          . alle Rechte vorbehalten.
          <Link
            href="/impressum"
            className="underline ml-2 hover:text-foreground/75"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="underline ml-2 hover:text-foreground/75"
          >
            Datenschutz
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
