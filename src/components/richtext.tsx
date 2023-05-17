import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface RichTextProps {
  content: any;
  className?: string;
}

function RichText({ content, className }: RichTextProps) {
  return <TinaMarkdown content={content} />;
}

export default RichText;
