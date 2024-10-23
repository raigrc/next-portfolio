import React from "react";
import { Badge } from "@/components/ui/badge";

const Badges = ({ title }: { title: string }) => {
  return <Badge className="m-1 bg-primary/50">{title}</Badge>;
};

export default Badges;
