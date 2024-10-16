import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiUser } from "react-icons/ci";
import { ContactAvatarProps } from "@/types";
import Image from "next/image";

const ContactAvatar: React.FC<ContactAvatarProps> = ({ avatar }) => {
  const avatarSrc = typeof avatar === "string" ? avatar : avatar.src;
  return (
    <Avatar className="size-32 absolute -top-16 left-1/2 -translate-x-1/2 border-2 border-primary">
      <Image
        className="object-contain scale-125 translate-y-2"
        src={avatarSrc}
        alt="graduation picture"
        loading="lazy"
        layout="fill"
      />
      <AvatarFallback>
        <CiUser />
      </AvatarFallback>
    </Avatar>
  );
};

export default ContactAvatar;
