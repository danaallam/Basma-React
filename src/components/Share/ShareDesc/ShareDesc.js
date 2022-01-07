import React from "react";
import Feature from "./Feature/Feature";
import { RiStackFill } from "react-icons/ri";
import Button from "../../Button/Button";
import { FaBrush, FaCartArrowDown } from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";

const ShareDesc = ({ eng }) => {
  return (
    <div className={eng ? "titleIntro" : "titleIntroA"}>
      <h1 className={eng ? "codeTitle" : "codeTitleA"}>
        {eng
          ? "Share your photos with friends easily"
          : "شارك صورك مع الأصدقاء بسهولة"}
      </h1>
      <Feature
        eng={eng}
        icon={RiStackFill}
        text={
          eng
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere adipisci, unde nostrum enim magni omnis."
            : "ن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة أحدل "
        }
      />
      <Feature
        eng={eng}
        icon={FaBrush}
        text={
          eng
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere adipisci, unde nostrum enim magni omnis necessitatibus iusto ad corrupti deleniti, sunt fugit laboriosam."
            : "ن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تللا أحد يرفضل "
        }
      />
      <Feature
        eng={eng}
        icon={MdWaterDrop}
        text={
          eng
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere adipisci, unde nostrum enim magni omnis."
            : "ن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفعادة البشرية، فلا أحد  فضل "
        }
      />
      <Feature
        eng={eng}
        icon={FaCartArrowDown}
        text={
          eng
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere adipisci, unde nostrum enim magni omnis."
            : "ن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد التفجنب الشعور بالسعاد فضل "
        }
      />
      <Button title={eng ? "Learn More" : "تعلم أكثر"} />
    </div>
  );
};
export default ShareDesc;
