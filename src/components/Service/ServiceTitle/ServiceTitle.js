import React from "react";

const ServiceTitle = ({ eng }) => {
  return (
    <div className="stepsTitleDiv">
      <h1 className="stepsTitle">
        {eng
          ? "BASMA is available for all devices"
          : "Basma متاح لجميع الأجهزة"}
      </h1>
      <p className="stepsTitleText">
        {eng
          ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor fuga rerum adipisci temporibus eligendi ex aliquam quo, assumenda iste atque inventore ullam amet perspiciatis! Eos deleniti dolore modi accusamus."
          : "هذه الأفكار المغلوطة حول استنكار أن نستشعره بورة أ عقلانة ومنقية فعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو للم ولكن تجة لروف ما قد تكم اسعده فيا نتحله منكد وي."}
      </p>
    </div>
  );
};

export default ServiceTitle;
