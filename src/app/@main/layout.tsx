import Navbar from "@/components/navbar/navbar";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import BLogo from "@/assets/black-logo.png";

const MainLayout = ({ pages }: { pages: React.ReactNode }) => {
  return (
    <div className="w-full space-y-4 flex flex-col">
      <Navbar />
      <Card className="h-full">
        <CardContent className="p-6">
          <Image
            src={BLogo}
            alt="crow logo"
            className="absolute left-1/2 opacity-20 object-contain"
            height={250}
            width={250}
          />
          {pages}
        </CardContent>
      </Card>
    </div>
  );
};

export default MainLayout;
