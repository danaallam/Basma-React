import React from "react";
import Arrow from "./Arrow/Arrow";
import Step from "./Step/Step";
import "./StepsBox.css";

const StepsBox = ({ eng }) => {
  return (
    <div className={eng ? "stepsBoxDiv" : "stepsBoxDivA"}>
      <Step
        img="./assets/download.png"
        title={eng ? "Install the App" : "تثبيت التطبيق"}
        text={
          eng
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit deserunt ea nemo nulla, ex cupiditate inventore."
            : "وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن "
        }
      />
      <Arrow eng={eng} />
      <Step
        img="./assets/settings.png"
        title={eng ? "Setup your profile" : "إعداد ملف التعريف الخاص بك"}
        text={
          eng
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit deserunt ea nemo nulla, ex cupiditate inventore."
            : "وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن "
        }
      />
      <Arrow eng={eng} />
      <Step
        img="./assets/app.png"
        title={eng ? "Enjoy the features!" : "استمتع بالميزات"}
        text={
          eng
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit deserunt ea nemo nulla, ex cupiditate inventore."
            : "وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن "
        }
      />
    </div>
  );
};

export default StepsBox;
