"use client";

import React, { useState } from "react";
import { Maybe } from "../../tina/__generated__/types";

interface ImageProps {
  src?: string | Maybe<string> | undefined;
  imageRest?: any;
  containerRest?: any;
}

function Image({ src, imageRest, containerRest }: ImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const imageDefault = {
    className: `w-full h-full object-cover rounded-large`,
  };
  if (isOpen) {
    return (
      <div
        className="fixed w-full h-full left-0 top-0 bg-black/75 z-50 p-20 flex items-center justify-center"
        onClick={() => setIsOpen(false)}
      >
        {src && <img src={src} {...imageDefault} {...imageRest} />}
      </div>
    );
  }
  return (
    <div
      className="overflow-hidden rounded-large "
      {...containerRest}
      onClick={() => setIsOpen(true)}
    >
      {src && <img src={src} {...imageDefault} {...imageRest} />}
    </div>
  );
}

export default Image;
