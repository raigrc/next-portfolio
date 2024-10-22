import Image from "next/image";
import React from "react";
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
          <p className="text-center tracking-wider transition-all duration-300 group-hover:font-semibold group-hover:text-primary">
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
