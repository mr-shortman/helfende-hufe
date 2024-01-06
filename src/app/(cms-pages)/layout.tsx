import { Footer, Navbar, PageLayout } from "@/components/layout";
import { getSiteConfig, getSiteNavigator } from "@/lib/utils";
import React from "react";

async function Layout({ children }: LayoutProps) {
  const siteConfig = await getSiteConfig();

  return (
    <>
      <Navbar className=" bg-transparent" siteConfig={siteConfig} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
