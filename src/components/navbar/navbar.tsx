"use client";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <Card className="h-auto">
      <CardContent className="flex items-center space-x-4 justify-center px-6 py-2">
        <Link
          href="/"
          className={`${
            pathname == "/"
              ? "text-primary font-bold "
              : "text-muted-foreground"
          } hover:text-primary/70 transition-all duration-300`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            pathname == "/about"
              ? "text-primary font-bold"
              : "text-muted-foreground"
          } hover:text-primary/70 transition-all duration-300`}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`${
            pathname == "/projects"
              ? "text-primary font-bold"
              : "text-muted-foreground"
          } hover:text-primary/70 transition-all duration-300`}
        >
          Projects
        </Link>
        <Link
          href="/skills"
          className={`${
            pathname == "/skills"
              ? "text-primary font-bold"
              : "text-muted-foreground"
          } hover:text-primary/70 transition-all duration-300`}
        >
          Skills
        </Link>
      </CardContent>
    </Card>
  );
};

export default Navbar;
