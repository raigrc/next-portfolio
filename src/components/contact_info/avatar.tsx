import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { ContactAvatarProps } from "@/types";
import Image from "next/legacy/image";

const ContactAvatar: React.FC<ContactAvatarProps> = ({ avatar }) => {
  // const avatarSrc = typeof avatar === "string" ? avatar : avatar.src
  return (
    <Avatar className="absolute -top-16 left-1/2 size-32 -translate-x-1/2 border-2 border-primary">
      <Image
        className="object-contain translate-y-2 scale-125"
        src={avatar}
        alt="graduation picture"
      />
    </Avatar>
  );
};

export default ContactAvatar;
