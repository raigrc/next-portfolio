import { SkillsProps } from "@/types";
import HTML from "@/assets/file-type-html.svg";
import CSS from "@/assets/file-type-css.svg";
import JS from "@/assets/file-type-js-official.svg";
import React from "@/assets/file-type-reactjs.svg";
import TS from "@/assets/file-type-typescript-official.svg";
import Node from "@/assets/file-type-node.svg";
import Blade from "@/assets/file-type-blade.svg";
import Tailwind from "@/assets/file-type-tailwind.svg";
import SCSS from "@/assets/file-type-scss2.svg";
import PHP from "@/assets/file-type-php.svg";
import Git from "@/assets/file-type-git.svg";
import Mongo from "@/assets/file-type-mongo.svg";
import Express from "@/assets/file-type-express.svg";
import NextJS from "@/assets/file-type-nextjs.svg";
import Prisma from "@/assets/file-type-light-prisma.svg";

const skills: SkillsProps[] = [
  { name: "HTML", src: HTML },
  { name: "CSS", src: CSS },
  { name: "Javascript", src: JS },
  { name: "Next JS", src: NextJS },
  { name: "React", src: React },
  { name: "Typescript", src: TS },
  { name: "Node JS", src: Node },
  { name: "Laravel", src: Blade },
  { name: "Express JS", src: Express },
  { name: "PHP", src: PHP },
  { name: "Tailwind CSS", src: Tailwind },
  { name: "SCSS", src: SCSS },
  { name: "Git", src: Git },
  { name: "Mongo DB", src: Mongo },
  { name: "Prisma", src: Prisma },
];

export default skills;
