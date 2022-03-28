import React from "react";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import ContactUsBanner from "../components/ContactUsBanner/ContactUsBanner";
import Map from "../components/Map/Map";

const ContactUs = () => {
  return (
    <div>
      <ContactUsBanner />
      <ContactInfo />
      <Map />
    </div>
  );
};

export default ContactUs;
