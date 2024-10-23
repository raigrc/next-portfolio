import React from "react";

const ProjectTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-xl font-semibold leading-none tracking-wider">
      {title}
    </div>
  );
};

export default ProjectTitle;
