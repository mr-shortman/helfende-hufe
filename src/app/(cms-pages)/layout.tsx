import { Footer, Navbar, PageLayout } from "@/components/layout";
import React from "react";

function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* @ts-expect-error */}
      <Navbar className=" bg-transparent" />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
