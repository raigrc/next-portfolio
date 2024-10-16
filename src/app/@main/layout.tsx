import Navbar from "@/components/navbar/navbar";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const MainLayout = ({ pages }: { pages: React.ReactNode }) => {
  return (
    <div className="w-full space-y-4 flex flex-col">
      <Navbar />
      <Card className="h-full">
        <CardContent className="p-6">{pages}</CardContent>
      </Card>
    </div>
  );
};

export default MainLayout;
