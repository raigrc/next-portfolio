import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";
import { ContactAvatarProps } from "@/types";

const ContactAvatar: React.FC<ContactAvatarProps> = ({ avatar }) => {
  return (
    <Avatar className="size-32 absolute -top-16 left-1/2 -translate-x-1/2 border-2 border-muted-foreground">
      <AvatarImage src={avatar} />
      <AvatarFallback>
        <UserRound />
      </AvatarFallback>
    </Avatar>
  );
};

export default ContactAvatar;
