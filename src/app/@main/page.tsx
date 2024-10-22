import About from "@/components/main/about/about";
import CardWrapper from "@/components/main/card-wrapper";
import Navbar from "@/components/navbar/navbar";
import Skills from "@/components/main/skills/skills";
import React from "react";

const MainLayout = () => {
  return (
    <div className="flex w-full snap-y flex-col gap-6">
      <Navbar />

      <CardWrapper title="About me" id="about">
        <About />
      </CardWrapper>

      <CardWrapper title="Skills" id="skills">
        <Skills />
      </CardWrapper>
    </div>
  );
};

export default MainLayout;
