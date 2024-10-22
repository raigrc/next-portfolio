import React from "react";

const MainHeader = ({ headerTitle }: { headerTitle: string }) => {
  return (
    <h1 className="relative bg-gradient-to-b from-primary from-40% to-muted text-4xl font-bold tracking-wider text-transparent bg-clip-text">
      {headerTitle}
    </h1>
  );
};

export default MainHeader;
