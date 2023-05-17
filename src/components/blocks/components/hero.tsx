import React from "react";
import { PageBlocksHero } from "../../../../tina/__generated__/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site-config";
import { SectionWrapper } from "@/hoc";
import { Icons } from "@/components/icons";

interface Props {
  data: PageBlocksHero;
}

function Hero({ data }: Props) {
  const { headline, tagline, image, cta } = data;
  return (
    <div className="hero min-h-screen flex items-center -mt-20">
      <>
        {/* Background Image */}
        <img
          src={`${image}`}
          alt="hero-image"
          className="absolute w-full h-full top-0 left-0 object-cover -z-10"
        />
        <div className="absolute w-full h-full -z-10 bg-gradient-to-r from-black/75 via-black/75 to-black/25 top-0 left-0" />
      </>

      {/* Main Content */}
      <div className="flex container items-center gap-5">
        {/* <img
          className="rounded-full w-52 h-52"
          src={siteConfig.logoUrl}
          alt=""
        /> */}
        <Icons.logo className="w-64 text-white" />
        <div className="flex flex-col gap-2 ">
          <Badge className="w-max font-light">{tagline}</Badge>
          <h1 className="font-black text-white text-6xl max-w-lg">
            {headline}
          </h1>
          {/* <Button className="w-max">{cta?.text}</Button> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
