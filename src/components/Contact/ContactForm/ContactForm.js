import React from "react";
import Button from "../../Button/Button";
import "./ContactForm.css";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  return (
    <form className="formDiv">
      <input type="text" placeholder="Name" className="subInput formInput" />
      <input type="text" placeholder="Email" className="subInput formInput" />
      <input type="text" placeholder="Subject" className="subInput formInput" />
      <textarea placeholder="Message" rows="5" className="subInput formInput" />
      <Button title="Send Message" icon={IoIosSend} />
    </form>
  );
};

export default ContactForm;
