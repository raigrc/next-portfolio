import React from "react";

const Description = ({ description }: { description: string }) => {
  return (
    <div className="overflow-hidden text-ellipsis h-20 py-4 text-sm text-muted-foreground">
      {description}
    </div>
  );
};

export default Description;
