import React from "react";
import Button from "../../Button/Button";
import "./Title.css";

const Title = ({ eng }) => {
  return (
    <div className={eng ? "titleIntro" : "titleIntroA"}>
      <h1 className="title">
        {eng
          ? "Creative way to Showcase your App"
          : "طريقة إبداعية لعرض تطبيقك"}
      </h1>
      <p className="titleText">
        {eng
          ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique, enim neque esse, velit quibusdam sed dignissimos officiis odio aperiam libero incidunt magni eos sequi non consequatur molestiae eveniet aliquid."
          : "لن لا د أن أوضح ل أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن بفضل هؤلاء لأشخاص الذين لا يدكون بأن العادة لا ب أن نستشعره بورة أ عقلانة ومنقية فعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو للم ولكن تجة لروف ما قد تكم اسعده فيا نتحله منكد وي."}
      </p>
      <Button title={eng ? "Get Started" : "ابدأ الآن"} />
    </div>
  );
};

export default Title;
