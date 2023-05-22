import React from "react";
import { Navbar, Footer } from ".";

function PageLayout({ children }: LayoutProps) {
  return (
    <>
      {/* @ts-expect-error */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
