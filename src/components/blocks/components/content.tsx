import React from "react";
import { PageBlocksContent } from "../../../../tina/__generated__/types";
import RichText from "@/components/richtext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ImageComponent from "@/components/image";

interface Props {
  data: PageBlocksContent;
}

function Content({ data }: Props) {
  const { title, image, description, label, cta, reverse } = data;
  return (
    <div className="flex flex-col lg:flex-row lg:items-center  justify-between gap-10">
      <ImageComponent
        containerRest={{
          className: `w-full max-w-2xl rounded-large ${
            reverse ? "order-last" : "order-first"
          }`,
        }}
        imageRest={{
          alt: "image",
        }}
        src={`${image}`}
      />
      <div className="flex flex-col gap-3 w-full ">
        <Badge>{label}</Badge>
        <h3 className="text-4xl font-bold">{title}</h3>
        <RichText content={description} />
        {cta && (
          <Button variant={"outline"}>
            <Link href={`${cta.link}`}>{cta.text}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}

export default Content;
