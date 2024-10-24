import Image from "next/image";
import React from "react";
import { SkillsDataProps } from "@/types";

const Skills: React.FC<SkillsDataProps> = ({ skills }) => {
  return (
    <div
      className="grid grid-cols-3 place-items-center gap-4 md:grid-cols-4 lg:grid-cols-5"
      id="skills"
    >
      {skills.map((skill, index) => (
        <div key={index} className="group grid place-items-center">
          <Image
            src={skill.src}
            alt={skill.name}
            className="size-12 transition-all duration-300 hover:scale-75"
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
