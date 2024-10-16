import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { ContactAvatarProps } from "@/types";
import Image from "next/image";

const ContactAvatar: React.FC<ContactAvatarProps> = ({ avatar }) => {
  const avatarSrc = typeof avatar === "string" ? avatar : avatar.src;
  return (
    <Avatar className="size-32 absolute -top-16 left-1/2 -translate-x-1/2 border-2 border-primary">
      <Image
        className="object-cover"
        src={avatarSrc}
        alt="graduation picture"
        layout="fill"
      />
    </Avatar>
  );
};

export default ContactAvatar;
