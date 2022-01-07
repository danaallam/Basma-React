import React from "react";
import "./StepsTitle.css";

const StepsTitle = ({ eng }) => {
  return (
    <div className="stepsTitleDiv">
      <h1 className="stepsTitle">{eng ? "Code Challenge" : "تحدي الكود"}</h1>
      <p className="stepsTitleText">
        {eng
          ? " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor fuga rerum adipisci temporibus eligendi ex aliquam quo, assumenda iste atque inventore ullam amet perspiciatis! Eos deleniti dolore modi accusamus."
          : " وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن بفضل هؤلاء لأشخاص الذين لا يدكون بأن العادة لا ب أن نستشعره بورة أ عقلانة ومنقي"}
      </p>
    </div>
  );
};

export default StepsTitle;
