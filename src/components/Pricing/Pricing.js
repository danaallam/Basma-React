import React from "react";
import CodeTitle from "../Code/CodeTitle/CodeTitle";
import Card from "./Card/Card";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricingDiv">
      <CodeTitle
        title="BASMA code Challenge"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, est! Magni id doloremque alias perferendis excepturi enim odio, placeat possimus facere praesentium dolorem animi maxime officiis."
      />
      <div className="cardsDiv">
        <Card
          img="./assets/bike.png"
          type="BASIC"
          price="49"
          space="5GB Linux Web Space"
          db="5 MySQL Databases"
          info="24/7 Tech Support"
          backup="Daily Backups"
        />
        <Card
          img="./assets/motorbike.png"
          type="PRO"
          price="129"
          space="10GB Linux Web Space"
          db="50 MySQL Databases"
          info="Unlimited Email"
          backup="Daily Backups"
        />
      </div>
      <p className="pricingHelp">
        Not sure what to choose?{" "}
        <a href="#" className="pricingLink">
          Contact Us
        </a>
      </p>
    </div>
  );
};

export default Pricing;
