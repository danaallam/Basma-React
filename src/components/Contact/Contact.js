import React from "react";
import CodeTitle from "../Code/CodeTitle/CodeTitle";
import "./Contact.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";

const Contact = () => {
  return (
    <div className="contactDiv">
      <CodeTitle
        title="Stay Tuned"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam pariatur iste quaerat quas nulla placeat distinctio ipsam."
      />
      <div className="contactSubDiv">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
