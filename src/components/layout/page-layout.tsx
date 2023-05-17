import React from "react";
import { Navbar, Footer } from ".";

function PageLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
