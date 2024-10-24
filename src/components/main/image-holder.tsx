import React from "react";
import Image, { StaticImageData } from "next/image";

const ImageHolder = ({ image }: { image: StaticImageData }) => {
  return (
    <Image
      src={image}
      alt="moon raven"
      width={0}
      height={0}
      className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 object-contain opacity-30 z-0"
    />
  );
};

export default ImageHolder;
