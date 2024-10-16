export interface ContactAvatarProps {
  avatar: string;
}

export interface ContactProps extends ContactAvatarProps {
  name: string;
  role: string[];
  mail: string;
  location: string;
  phone: string;
}
