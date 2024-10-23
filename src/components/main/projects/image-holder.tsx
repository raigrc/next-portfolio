import Image, { StaticImageData } from "next/image";
import React from "react";

const ImageHolder = ({ img }: { img: StaticImageData }) => {
  return (
    <Image
      src={img}
      alt={`${img} name`}
      className="rounded-t-xl brightness-50 transition-all duration-300 group-hover:brightness-100 h-40 object-cover"
    />
  );
};

export default ImageHolder;
