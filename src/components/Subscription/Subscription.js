import React from "react";
import Button from "../Button/Button";
import "./Subscription.css";

const Subscription = ({ eng }) => {
  return (
    <div className="subDiv">
      <div className="subTitleDiv">
        <h1 className="codeTitle">
          {eng ? "Subscribe to get updates" : "اشترك للحصول على التحديثات"}
        </h1>
        <p className="titleText">
          {eng
            ? "By subscribing you will get newsleter, promotions adipisicing elit Culpa assumenda totam, ex repudiandae debitis a quam numquam beatae deleniti."
            : "هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو منكد وي."}
        </p>
        <input
          type="text"
          placeholder={eng ? "Enter your email" : "أدخل بريدك الإلكتروني"}
          className="subInput"
        />
        <Button title={eng ? "Subscribe" : "إشترك"} />
      </div>
    </div>
  );
};

export default Subscription;
