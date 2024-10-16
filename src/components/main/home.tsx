import Image from "next/image";
import React from "react";
import WLogo from "@/assets/white-logo.png";

const Home = () => {
  return (
    <div className="relative">
      <Image
        className="object-contain absolute top-0 left-1/2 -translate-x-1/2 opacity-30"
        src={WLogo}
        alt="Moon Crow"
        width={250}
        height={250}
      />
    </div>
  );
};

export default Home;
