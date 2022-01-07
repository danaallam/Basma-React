import React from "react";
import Lang from "./Lang/Lang";
import "./Language.css";

const Language = ({ setArabic, setEng, arabic, eng }) => {
  return (
    <div className="lang">
      <Lang
        lang="En"
        onClick={async () => {
          await setArabic(false);
          await setEng(true);
          console.log("arabic", arabic);
          console.log("eng", eng);
        }}
      />
      <Lang
        lang="Ar"
        onClick={async () => {
          await setEng(false);
          await setArabic(true);
          console.log("arabic", arabic);
          console.log("eng", eng);
        }}
      />
    </div>
  );
};

export default Language;
