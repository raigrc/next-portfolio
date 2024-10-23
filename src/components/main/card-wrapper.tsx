import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CardWrapperProps } from "@/types";
import MainHeader from "./header";
import ImageHolder from "./image-holder";
import BLogo from "@/assets/black-logo.png";

const CardWrapper: React.FC<CardWrapperProps> = ({ children, title, id }) => {
  return (
    <Card className="relative scroll-my-6 hover:shadow-lg" id={id}>
      <ImageHolder image={BLogo} />
      <CardHeader>
        <MainHeader headerTitle={title} />
      </CardHeader>
      <CardContent className="relative">{children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
