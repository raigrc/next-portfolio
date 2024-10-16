import { StaticImageData } from "next/image";

export interface ContactAvatarProps {
  avatar: string | StaticImageData;
}

export interface ContactProps extends ContactAvatarProps {
  name: string;
  role: string[];
  mail: string;
  location: string;
  phone: string;
}
