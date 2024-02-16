import { Footer, Navbar } from "@/components/layout";
import { getSiteConfig } from "@/lib/utils";
import React from "react";

async function Layout({ children }: LayoutProps) {
  const siteConfig = await getSiteConfig();

  return (
    <>
      <Navbar className="bg-transparent" siteConfig={siteConfig} />
      {children}
      <Footer className="mt-20" />
    </>
  );
}

export default Layout;
