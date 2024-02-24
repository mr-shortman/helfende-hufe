import React from "react";
import TinaPageWrapper from "@/components/tina-page-wrapper";
import { getSiteConfig, getTinaPage } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const request = await getTinaPage(`${params.slug}.mdx`);
  const page = request?.data.page!;
  const config = await getSiteConfig();

  return {
    title: page?.title?.length ? page.title : config.siteName,
    description: page?.description ?? "",
  };
}

export default async function Home({ params }: any) {
  const page = await getTinaPage(`${params.slug}.mdx`);
  if (!page) return notFound();
  return <TinaPageWrapper page={page} />;
}
