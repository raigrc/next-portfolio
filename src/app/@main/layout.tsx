import Navbar from "@/components/navbar/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
