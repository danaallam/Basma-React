import React from "react";
import CodeTitle from "../Code/CodeTitle/CodeTitle";
import "./Contact.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";

const Contact = ({ eng }) => {
  return (
    <div className="contactDiv">
      <CodeTitle
        title={eng ? "Stay Tuned" : "ابق متابع"}
        text={
          eng
            ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam pariatur iste quaerat quas nulla placeat distinctio ipsam."
            : "هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن "
        }
      />
      <div className={eng ? "contactSubDiv" : "contactSubDivA"}>
        <ContactInfo eng={eng} />
        <ContactForm eng={eng} />
      </div>
    </div>
  );
};

export default Contact;
