import React from "react";
import TinaPageWrapper from "@/components/tina-page-wrapper";
import { getTinaPage } from "@/lib/utils";

export default async function Home() {
  const page = await getTinaPage("start.mdx");
  return <TinaPageWrapper page={page} />;
}
