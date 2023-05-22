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
  if (!data.page.blocks)
    return (
      <div className="min-h-screen flex justify-center items-center text-muted-foreground/50">
        Keine Blöcke gefunden.
      </div>
    );
  return (
    <div className="min-h-screen">
      <Blocks blocks={data.page.blocks as PageBlocks[]} />
    </div>
  );
}

export default TinaPageWrapper;
