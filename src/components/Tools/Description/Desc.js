import React from "react";
import "./Desc.css";
import IconBox from "./IconBox/IconBox";
import Tool from "./Tool/Tool";

const Desc = ({ eng }) => {
  return (
    <div className="descDiv">
      <h1 className={eng ? "codeTitle" : "codeTitleA"}>
        {eng
          ? "Work faster with powerful tools."
          : "اعمل بشكل أسرع باستخدام الأدوات القوية"}
      </h1>
      <Tool
        eng={eng}
        text={
          eng
            ? "Combined with a handful of model sentence structures looks reasonable"
            : "بدمجها مع حفنة من تراكيب الجملة النموذجية تبدو معقولة"
        }
      />
      <br />
      <Tool
        eng={eng}
        text={
          eng
            ? "Combined with a handful of model sentence structures looks reasonable"
            : "بدمجها مع حفنة من تراكيب الجملة النموذجية تبدو معقولة"
        }
      />
      <br />
      <Tool
        eng={eng}
        text={
          eng
            ? "Combined with a handful of model sentence structures looks reasonable"
            : "بدمجها مع حفنة من تراكيب الجملة النموذجية تبدو معقولة"
        }
      />
      <br />
      <Tool
        eng={eng}
        text={
          eng
            ? "Combined with a handful of model sentence structures looks reasonable"
            : "بدمجها مع حفنة من تراكيب الجملة النموذجية تبدو معقولة"
        }
      />
      <br />
      <Tool
        eng={eng}
        text={
          eng
            ? "Combined with a handful of model sentence structures looks reasonable"
            : "بدمجها مع حفنة من تراكيب الجملة النموذجية تبدو معقولة"
        }
      />
      <br />
      <IconBox eng={eng} />
    </div>
  );
};

export default Desc;
