import { PageLayout } from "@/components/layout";
import React from "react";

function Layout({ children }: LayoutProps) {
  return <PageLayout>{children}</PageLayout>;
}

export default Layout;
