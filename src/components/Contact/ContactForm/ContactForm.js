import React from "react";
import Button from "../../Button/Button";
import "./ContactForm.css";
import { IoIosSend } from "react-icons/io";

const ContactForm = ({ eng }) => {
  return (
    <form className="formDiv" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder={eng ? "Name" : "اسم"}
        className={eng ? "subInput formInput": "subInput formInputA"}
      />
      <input
        type="text"
        placeholder={eng ? "Email" : "البريد الإلكتروني"}
        className={eng ? "subInput formInput": "subInput formInputA"}
      />
      <input
        type="text"
        placeholder={eng ? "Subject" : "الموضوع"}
        className={eng ? "subInput formInput": "subInput formInputA"}
      />
      <textarea
        placeholder={eng ? "Message" : "الرسالة"}
        rows="5"
        className={eng ? "subInput formInput": "subInput formInputA"}
      />
      <Button title={eng ? "Send Message" : "إرسال رسالة"} icon={IoIosSend} />
    </form>
  );
};

export default ContactForm;
