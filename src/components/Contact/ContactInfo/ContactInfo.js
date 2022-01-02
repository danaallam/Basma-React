import React from "react";
import "./ContactInfo.css";
import ContactInfoWay from "./ContactInfoWay/ContactInfoWay";

const ContactInfo = () => {
  return (
    <div className="infoDiv">
      <p className="titleText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Comm facilis
        magni repudiandae molestiae sapiente dignissimos rerum accusamus dolores
        velit aspernatur.
      </p>
      <ContactInfoWay
        img="assets/form-house.svg"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <ContactInfoWay
        img="assets/form-phone.svg"
        text="+1 230 456 789-012 345 6789"
      />
      <ContactInfoWay
        img="assets/form-mail.svg"
        text="exampledomain@domain.com"
      />
    </div>
  );
};

export default ContactInfo;
