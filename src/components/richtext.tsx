import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface RichTextProps {
  content: any;
  className?: string;
}

function RichText({ content, className }: RichTextProps) {
  return (<div className="tina-markdown">
      <TinaMarkdown content={content} />
    </div>);
}

export default RichText;
