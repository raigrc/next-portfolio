"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Description = ({ description }: { description: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="py-4 text-sm text-muted-foreground">
      <div
        className={`${isExpanded ? "h-auto" : "h-20"} overflow-hidden text-ellipsis`}
      >
        {description}
      </div>
      <Button variant="link" onClick={toggleDescription} className="px-0">
        {isExpanded ? "See less" : "See more"}
      </Button>
    </div>
  );
};

export default Description;
