import React from "react";
import ImageHolder from "./image-holder";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ProjectTitle from "./project-title";
import Description from "./description";
import Badges from "./badges";
import { ProjectDataProps } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

const Projects: React.FC<ProjectDataProps> = ({ projects }) => {
  projects.sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="grid md:grid-cols-2 place-items-start gap-4">
      {projects.map((projects, index) => (
        <Card
          className="group ring-2 hover:shadow-lg hover:shadow-primary"
          key={index}
        >
          <CardHeader className="m-0 p-0">
            <ImageHolder img={projects.image} />
          </CardHeader>
          <CardContent className="p-4">
            <ProjectTitle title={projects.title} />
            <Description description={projects.description} />
            {projects.techStack.map((stack, index) => (
              <Badges title={stack} key={index} />
            ))}
          </CardContent>
          <CardFooter className="float-right">
            <Button className="space-x-2" size="sm">
              <FiGithub size={12} />
              <Link href={projects.url} target="_blank">
                Source Code
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
