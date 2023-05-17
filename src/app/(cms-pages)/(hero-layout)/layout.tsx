import { Footer, Navbar, PageLayout } from "@/components/layout";
import React from "react";

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar className="hero bg-transparent" />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
