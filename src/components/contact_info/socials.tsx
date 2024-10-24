import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { IconContext } from "react-icons";

const Socials = () => {
  return (
    <div className="mx-auto flex space-x-2">
      <IconContext.Provider
        value={{
          size: "1.2rem",
          className:
            "fill-accent-foreground/70 transition duration-300 hover:fill-primary",
        }}
      >
        <Link href="https://github.com/raigrc" target="_blank">
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/raigrc/" target="_blank">
          <FaLinkedin />
        </Link>
        <Link href="https://www.facebook.com/xraigrc/" target="_blank">
          <FaFacebook />
        </Link>
      </IconContext.Provider>
    </div>
  );
};

export default Socials;
