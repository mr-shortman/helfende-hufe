import React from "react";
import type { Page, PageBlocks } from "../../../tina/__generated__/types";
import { Content, Event, Hero } from "./components";

interface Props {
  blocks: PageBlocks[];
}
interface SectionWrapperProps {
  children: JSX.Element;
}
const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return <section className="container py-10">{children}</section>;
};

export const Blocks = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-20">
      {props.blocks
        ? props.blocks.map(function (block, i) {
            if (!block) return null;
            switch (block.__typename) {
              case "PageBlocksHero":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Hero data={block} />
                  </React.Fragment>
                );
              case "PageBlocksContent":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <SectionWrapper>
                      <Content data={block} />
                    </SectionWrapper>
                  </React.Fragment>
                );
              case "PageBlocksEvent":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <SectionWrapper>
                      <Event data={block} />
                    </SectionWrapper>
                  </React.Fragment>
                );
              default:
                return null;
            }
          })
        : null}
    </div>
  );
};
