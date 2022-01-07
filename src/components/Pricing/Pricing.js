import React from "react";
import CodeTitle from "../Code/CodeTitle/CodeTitle";
import Card from "./Card/Card";
import "./Pricing.css";

const Pricing = ({ eng }) => {
  return (
    <div className="pricingDiv">
      <CodeTitle
        title={eng ? "BASMA code Challenge" : "Basma تحدي الكود"}
        text={
          eng
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, est! Magni id doloremque alias perferendis excepturi enim odio, placeat possimus facere praesentium dolorem animi maxime officiis."
            : "هذه الأفكار المغلوطة حول استنكار أن نستشعره بورة أ عقلانة ومنقية فعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو للم ولكن تجة لروف ما قد تكم اسعده فيا نتحله منكد وي."
        }
      />
      <div className={eng ? "cardsDiv" : "cardsDivA"}>
        <Card
          eng={eng}
          img="./assets/bike.png"
          type={eng ? "BASIC" : "أساسي"}
          price="49"
          space="5GB Linux Web Space"
          db="5 MySQL Databases"
          info="24/7 Tech Support"
          backup="Daily Backups"
        />
        <Card
          eng={eng}
          img="./assets/motorbike.png"
          type={eng ? "PRO" : "طليعة"}
          price="129"
          space="10GB Linux Web Space"
          db="50 MySQL Databases"
          info="Unlimited Email"
          backup="Daily Backups"
        />
      </div>
      <p className="pricingHelp">
        {eng ? "Not sure what to choose? " : "لست متأكدا ماذا تختار؟"}
        <a href="#" className="pricingLink">
          {eng ? "Contact Us": "اتصل بنا"}
        </a>
      </p>
    </div>
  );
};

export default Pricing;
