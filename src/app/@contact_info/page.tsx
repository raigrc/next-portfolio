import ContactInfo from "@/components/contact_info/contacts";
import React from "react";
import Avatar from "@/assets/Avatar.png";

const Contacts = () => {
  return (
    <ContactInfo
      avatar={Avatar}
      name="Raven Justin P. Garcia"
      role={[
        "Next JS Developer",
        "React Developer",
        "Front-end Developer",
        "Software Engineer",
        "Web Developer",
      ]}
      mail="ravenjstn.grc@gmail.com"
      phone="+63 994 6916 633"
      location="Laguna, Philippines"
    />
  );
};

export default Contacts;
