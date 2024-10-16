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

const ContactInfo: React.FC<ContactProps> = ({
  avatar,
  name,
  role,
  mail,
  phone,
  location,
}) => {
  return (
    <Card className="w-[300px] relative">
      <ContactAvatar avatar={avatar} />
      <CardHeader className="text-center pt-24 pb-16">
        <CardTitle className="tracking-wide">{name}</CardTitle>
        <CardDescription className="h-px">
          <Typewriter words={role} loop={0} />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          <MailIcon size={16} />
          <p>{mail}</p>
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
        <Socials />
      </CardFooter>
    </Card>
  );
};

export default ContactInfo;
