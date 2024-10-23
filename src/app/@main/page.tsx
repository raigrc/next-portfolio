import About from "@/components/main/about/about";
import CardWrapper from "@/components/main/card-wrapper";
import Navbar from "@/components/navbar/navbar";
import Skills from "@/components/main/skills/skills";
import React from "react";
import Projects from "@/components/main/projects/projects";
import skills from "@/lib/skills";
import projects from "@/lib/projects";

const MainLayout = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <Navbar />

      <CardWrapper title="About me" id="about">
        <About />
      </CardWrapper>

      <CardWrapper title="Projects" id="projects">
        <Projects projects={projects} />
      </CardWrapper>

      <CardWrapper title="Skills" id="skills">
        <Skills skills={skills} />
      </CardWrapper>
    </div>
  );
};

export default MainLayout;
