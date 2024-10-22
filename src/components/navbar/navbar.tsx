"use client";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <Card className="h-auto">
      <CardContent className="flex items-center justify-center space-x-4 px-6 py-2">
        <Link
          href="/#about"
          className={`${
            pathname == "/#about"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          } transition-all duration-300 hover:text-primary/70`}
        >
          About
        </Link>
        <Link
          href="/#skills"
          className={`${
            pathname == "/#skills"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          } transition-all duration-300 hover:text-primary/70`}
        >
          Skills
        </Link>
        <Link
          href="/#projects"
          className={`${
            pathname == "/projects"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          } transition-all duration-300 hover:text-primary/70`}
        >
          Projects
        </Link>
      </CardContent>
    </Card>
  );
};

export default Navbar;
