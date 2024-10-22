import Image from "next/image";
import React from "react";
import HTML from "@/assets/file-type-html.svg";
import skills from "@/lib/skills";

const Skills = () => {
  return (
    <div className="grid grid-cols-4 place-items-center gap-4" id="skills">
      {skills.map((skill, index) => (
        <div key={index} className="group grid place-items-center">
          <Image
            src={skill.src}
            alt={skill.name}
            className="size-16 transition-all duration-300 hover:scale-75"
          />
          <p className="text-center group-hover:font-semibold group-hover:text-primary transition-all duration-300 tracking-wider">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
