import React from "react";
import "./ContactInfo.css";
import ContactInfoWay from "./ContactInfoWay/ContactInfoWay";

const ContactInfo = ({ eng }) => {
  return (
    <div className={eng ? "infoDiv": "infoDivA"}>
      <p className={eng ? "titleText": "titleTextA"}>
        {eng
          ? " Lorem ipsum dolor sit amet consectetur adipisicing elit. Comm facilis magni repudiandae molestiae sapiente dignissimos rerum accusamus dolores velit aspernatur."
          : "هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن "}
      </p>
      <ContactInfoWay
        eng={eng}
        img="assets/form-house.svg"
        text={
          eng
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : "هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم حقيقةن "
        }
      />
      <ContactInfoWay
        eng={eng}
        img="assets/form-phone.svg"
        text="+1 230 456 789-012 345 6789"
      />
      <ContactInfoWay
        eng={eng}
        img="assets/form-mail.svg"
        text="exampledomain@domain.com"
      />
    </div>
  );
};

export default ContactInfo;
