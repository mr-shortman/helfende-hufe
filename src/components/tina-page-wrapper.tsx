"use client";

import React from "react";

import { useTina } from "tinacms/dist/react";
import { Blocks } from "./blocks";
import { PageBlocks } from "../../tina/__generated__/types";

interface TinaPageWrapperProps {
  page: any;
}

function TinaPageWrapper({ page }: TinaPageWrapperProps) {
  const { data } = useTina({
    query: page.query,
    variables: page.variables,
    data: page.data,
  });
  if (!data.page.blocks) return <div>Keine Blöcke gefunden.</div>;
  return <Blocks blocks={data.page.blocks as PageBlocks[]} />;
}

export default TinaPageWrapper;
