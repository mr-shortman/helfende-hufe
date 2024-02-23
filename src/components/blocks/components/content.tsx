import React from "react";
import { PageBlocksContent } from "../../../../tina/__generated__/types";
import RichText from "@/components/richtext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ImageComponent from "@/components/image";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { tinaField } from "tinacms/dist/react";

interface Props {
  data: PageBlocksContent;
}

function Content({ data }: Props) {
  const { title, image, description, label, cta, reverse, cta2 } = data;

  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-0 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
          <div data-tina-field={tinaField(data, "image")}>
            <ImageComponent
              containerRest={{
                className: cn(
                  "border-2 mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full",
                  reverse ? "order-last" : "order-first"
                ),
              }}
              src={`${image}`}
              imageRest={{
                alt: "image",
              }}
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge
                variant={"outline"}
                data-tina-field={tinaField(data, "label")}
              >
                {label}
              </Badge>
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
                data-tina-field={tinaField(data, "title")}
              >
                {title}
              </h2>
              <div data-tina-field={tinaField(data, "description")}>
                <RichText
                  content={description}
                  className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {!!cta?.text?.length && (
                <Link
                  data-tina-field={tinaField(data, "cta")}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href={`${cta.link}`}
                >
                  {cta.text}
                </Link>
              )}
              {!!cta2?.text?.length && (
                <Link
                  data-tina-field={tinaField(data, "cta2")}
                  className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                  href={`${cta2.link}`}
                >
                  {cta2.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
