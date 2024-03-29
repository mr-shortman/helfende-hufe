import React from "react";
import { PageBlocksHero } from "../../../../tina/__generated__/types";
import { Button } from "@/components/ui/button";

import { Icons } from "@/components/icons";
import ImageComponent from "@/components/image";
import { tinaField } from "tinacms/dist/react";
import { cn } from "@/lib/utils";

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
    <div className="flex flex-col lg:flex-row h-screen pb-36 gap-5 mt-10 px-4 lg:px-20">
      {/* Hero Content */}
      <div className="w-full flex flex-col gap-5">
        <div
          className={cn(
            " flex flex-col justify-center  w-full h-full px-6 py-4   bg-muted gap-10 rounded-xl rounded-tl-3xl"
          )}
        >
          {headline && (
            <h1
              className="font-black text-7xl w-full "
              data-tina-field={tinaField(data, "headline")}
            >
              {headline}
            </h1>
          )}
          {heroDescription && (
            <p
              className="text-muted-foreground text-xl w-full"
              data-tina-field={tinaField(data, "heroDescription")}
            >
              {heroDescription}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row  gap-5 ">
          <div
            className="w-full overflow-hidden bg-blue-400 bg-muted h-full rounded-xl rounded-bl-3xl"
            data-tina-field={tinaField(data, "bigImage")}
          >
            <ImageComponent
              src={smallImage}
              imageRest={{
                alt: "image-button",
                className: " object-cover",
                style: {
                  objectPosition: smallImagePosition,
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div
        className="w-full  bg-muted overflow-hidden rounded-xl rounded-r-3xl "
        data-tina-field={tinaField(data, "bigImage")}
      >
        <ImageComponent
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
