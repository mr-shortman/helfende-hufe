import React from "react";
import type { PageBlocks } from "../../../tina/__generated__/types";
import { Content, Event, Hero } from "./components";
import MarkdownBlock from "./components/markdown";

interface Props {
  blocks: PageBlocks[];
}
interface SectionWrapperProps {
  children: JSX.Element;
  id: string;
  container?: boolean;
}
const SectionWrapper = ({
  children,
  id,
  container = true,
}: SectionWrapperProps) => {
  return (
    <section className={`${container ? "container " : ""}`} id={id}>
      {children}
    </section>
  );
};

const getBlockComponent = (
  data: any
): { [key: string]: { component: JSX.Element; container?: boolean } } => ({
  PageBlocksHero: { component: <Hero data={data} />, container: false },
  PageBlocksContent: { component: <Content data={data} /> },
  PageBlocksEvent: { component: <Event data={data} /> },
  PageBlocksMarkdown: { component: <MarkdownBlock data={data} /> },
});

export const Blocks = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-20">
      {props.blocks.length
        ? props.blocks.map((blockData, idx) => {
            const block =
              getBlockComponent(blockData)[blockData.__typename as string];
            if (block)
              return (
                <React.Fragment key={`${idx + blockData.__typename!}`}>
                  <SectionWrapper
                    container={block.container ?? true}
                    id={
                      blockData.__typename ?? `${blockData.__typename}-${idx}`
                    }
                  >
                    {block.component}
                  </SectionWrapper>
                </React.Fragment>
              );
            return null;
          })
        : null}
    </div>
  );
};
