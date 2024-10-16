import React from "react";
import { Github } from "lucide-react";
import { Button } from "../ui/button";

const Socials = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="ghost">
        <Github />
      </Button>
    </div>
  );
};

export default Socials;
