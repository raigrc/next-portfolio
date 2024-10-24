import { StaticImageData } from "next/legacy/image";
import React from "react";

export interface ContactAvatarProps {
  avatar: StaticImageData;
}

export interface ContactProps extends ContactAvatarProps {
  name: string;
  role: string[];
  mail: string;
  location: string;
  phone: string;
}

export interface CardWrapperProps {
  children: React.ReactNode;
  title: string;
  id: string;
}

export interface SkillsProps {
  name: string;
  src: string | StaticImageData;
}

export interface SkillsDataProps {
  skills: SkillsProps[];
}

export interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  image: StaticImageData;
  date: Date;
  url: string;
}

export interface ProjectDataProps {
  projects: ProjectProps[];
}
