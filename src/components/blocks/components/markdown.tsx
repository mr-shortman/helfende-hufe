import React from "react";
import { PageBlocksMarkdown } from "../../../../tina/__generated__/types";
import RichText from "@/components/richtext";

interface Props {
  data: PageBlocksMarkdown;
}

function MarkdownBlock({ data }: Props) {
  const { content } = data;
  return (
    <>
      <RichText content={content} />
    </>
  );
}

export default MarkdownBlock;
