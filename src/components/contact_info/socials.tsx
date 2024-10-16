import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { IconContext } from "react-icons";

const Socials = () => {
  return (
    <div className="flex mx-auto space-x-2">
      <IconContext.Provider
        value={{
          size: "1.2rem",
          className:
            "fill-accent-foreground/70 transition duration-300 hover:fill-primary",
        }}
      >
        <Link href="" target="blank">
          <FaGithub />
        </Link>
        <Link href="" target="blank">
          <FaLinkedin />
        </Link>
        <Link href="" target="blank">
          <FaFacebook />
        </Link>
      </IconContext.Provider>
    </div>
  );
};

export default Socials;
