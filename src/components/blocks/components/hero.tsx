import React from "react";
import { PageBlocksHero } from "../../../../tina/__generated__/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site-config";
import { SectionWrapper } from "@/hoc";
import { Icons } from "@/components/icons";
import Image from "@/components/image";

interface Props {
  data: PageBlocksHero;
}

function Hero({ data }: Props) {
  const {
    headline,
    heroDescription,
    bigImage,
    smallImage,
    bigImagePosition,
    smallImagePosition,
  } = data;

  return (
    <div className="flex  min-h-[740px] gap-5 mt-10 lg:px-20">
      {/* Hero Content */}
      <div className="w-full flex flex-col gap-5">
        <div className=" flex flex-col justify-between  w-full h-full px-8 lg:py-28 bg-muted rounded-large gap-10">
          <h1 className="font-black text-6xl w-full max-w-2xl">{headline}</h1>
          <p className="text-muted-foreground text-xl w-full max-w-sm">
            {heroDescription}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-5 h-52">
          {/* image */}
          <div className="w-full rounded-large overflow-hidden bg-muted h-full">
            <Image
              src={smallImage}
              imageRest={{
                alt: "image-button",
                className: "w-full h-full object-cover",
                style: {
                  objectPosition: smallImagePosition,
                },
              }}
            />
          </div>
          <button
            className="h-full w-96 bg-primary rounded-large text-primary-foreground flex items-center justify-center 
                      group hover:brightness-90 transition-all duration-300 "
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <Icons.arrowRight
              width={150}
              height={150}
              className="rotate-45 group-hover:scale-90 transition-all duration-300"
            />
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full bg-muted overflow-hidden rounded-large ">
        <Image
          src={bigImage}
          containerRest={{
            className: "w-full h-full",
          }}
          imageRest={{
            className: "w-full h-full object-cover",
            alt: "image-button",
            style: {
              objectPosition: bigImagePosition,
            },
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
