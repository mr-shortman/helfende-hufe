import React from "react";
import TinaPageWrapper from "@/components/tina-page-wrapper";
import { getTinaPage } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function Home({ params }: any) {
  try {
    const page = await getTinaPage(`${params.slug}.mdx`);

    return <TinaPageWrapper page={page} />;
  } catch (e) {
    return notFound();
  }
}
