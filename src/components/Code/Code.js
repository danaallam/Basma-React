import React from "react";
import CodeIcon from "./CodeIcon/CodeIcon";
import CodeTitle from "./CodeTitle/CodeTitle";
import {
  MdOutlineTouchApp,
  MdOutlineFingerprint,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { VscSettingsGear, VscGlobe } from "react-icons/vsc";
import "./Code.css";

const Code = ({ eng }) => {
  return (
    <div className="codeDiv">
      <CodeTitle
        title={eng ? "Code Challenge" : "تحدي الكود"}
        text={
          eng
            ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi aut reiciendis quae temporibus doloremque, molestias excepturi doloribus soluta illo consequuntur eos placeat."
            : "هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن بفضل هؤلاء لأشخاص الذين لا يدكون بأن العادة لا ب أن نستشعره بورة أ عقلانة ومنقية فعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو للم ولكن تجة لروف ما قد تكم اسعده فيا نتحله منكد وي."
        }
      />
      <div className={eng ? "iconsBox" : "iconsBoxA"}>
        <CodeIcon
          icon={MdOutlineTouchApp}
          title={eng ? "Fully functional" : "تعمل بكامل طاقتها"}
          text={
            eng
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."
              : "شأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن بفضل هؤلاء لأش"
          }
        />
        <CodeIcon
          icon={MdOutlineFingerprint}
          title={eng ? "Fully functional" : "تعمل بكامل طاقتها"}
          text={
            eng
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."
              : "شأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن بفضل هؤلاء لأش"
          }
        />
        <CodeIcon
          icon={MdCheckBoxOutlineBlank}
          title={eng ? "Fully functional" : "تعمل بكامل طاقتها"}
          text={
            eng
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."
              : "شأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن بفضل هؤلاء لأش"
          }
        />
        <CodeIcon
          icon={IoLocationOutline}
          title={eng ? "Location Tracking" : "تتبع الموقع"}
          text={
            eng
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."
              : "شأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن بفضل هؤلاء لأش"
          }
        />
        <CodeIcon
          icon={VscSettingsGear}
          title={eng ? "Powerful Settings" : "إعدادات قوية"}
          text={
            eng
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."
              : "شأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن بفضل هؤلاء لأش"
          }
        />
        <CodeIcon
          icon={VscGlobe}
          title={eng ? "Multiple Language" : "متعدد اللغات"}
          text={
            eng
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."
              : "شأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن بفضل هؤلاء لأش"
          }
        />
      </div>
    </div>
  );
};

export default Code;
