"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactAvatar from "./avatar";
import { ContactProps } from "@/types";
import { Typewriter } from "react-simple-typewriter";
import { MailIcon, MapPin, Phone } from "lucide-react";
import Socials from "./socials";
import { Button } from "../ui/button";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";

const ContactInfo: React.FC<ContactProps> = ({
  avatar,
  name,
  role,
  mail,
  phone,
  location,
}) => {
  return (
    <Card className="relative h-full w-full md:w-[300px] lg:sticky lg:top-20">
      <ContactAvatar avatar={avatar} />
      <CardHeader className="pb-16 pt-24 text-center">
        <CardTitle className="tracking-wide">{name}</CardTitle>
        <CardDescription className="h-px text-primary">
          <Typewriter words={role} loop={0} />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          <MailIcon size={16} />
          <Link href={`mailto:${mail}`}>
            {mail}
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Phone size={16} />
          <p>{phone}</p>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin size={16} />
          <p>{location}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full space-x-1">
          <IoMdDownload />
          <Link
            href="/RAVEN_JUSTIN_P_GARCIA_RESUME.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            // locale={false}
          >
            Download CV
          </Link>
        </Button>
      </CardFooter>
      <CardFooter>
        <Socials />
      </CardFooter>
    </Card>
  );
};

export default ContactInfo;
