import React from "react";
import type { Page, PageBlocks } from "../../../tina/__generated__/types";
import { Content, Event, Hero } from "./components";

interface Props {
  blocks: PageBlocks[];
}
interface SectionWrapperProps {
  children: JSX.Element;
  id: string;
  container: boolean;
}
const SectionWrapper = ({ children, id, container }: SectionWrapperProps) => {
  return (
    <section className={`${container ? "container " : ""}`} id={id}>
      {children}
    </section>
  );
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
                    <SectionWrapper
                      id={block.id ?? `Hero-${i}`}
                      container={false}
                    >
                      <Hero data={block} />
                    </SectionWrapper>
                  </React.Fragment>
                );
              case "PageBlocksContent":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <SectionWrapper
                      id={block.id ?? `Content-${i}`}
                      container={true}
                    >
                      <Content data={block} />
                    </SectionWrapper>
                  </React.Fragment>
                );
              case "PageBlocksEvent":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <SectionWrapper
                      id={block.id ?? `Events-${i}`}
                      container={true}
                    >
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
