"use client";

import React, { useState } from "react";
import { Maybe } from "../../tina/__generated__/types";
import Image from "next/image";

interface ImageProps {
  src?: string | Maybe<string> | undefined;
  imageRest?: any;
  containerRest?: any;
}

function ImageComponent({ src, imageRest, containerRest }: ImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const imageDefault = {
    className: `w-full h-full object-cover rounded-large`,
  };
  return (
    <>
      <div
        className="overflow-hidden rounded-large "
        {...containerRest}
        onClick={() => setIsOpen(true)}
      >
        {src && (
          <Image
            alt=""
            src={src}
            width={1080}
            height={720}
            {...imageDefault}
            {...imageRest}
            unoptimized
          />
        )}
      </div>
      {isOpen && (
        <div
          className="fixed w-full h-full left-0 top-0 bg-black/75 z-50 p-20 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          {src && (
            <Image
              fill
              src={src}
              alt=""
              {...imageDefault}
              {...imageRest}
              className="object-contain rounded-large"
              unoptimized
            />
          )}
        </div>
      )}
    </>
  );
}

export default ImageComponent;
