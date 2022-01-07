import React from "react";
import PlayStore from "./PlayStore/PlayStore";
import "./Service.css";
import ServiceTitle from "./ServiceTitle/ServiceTitle";

const Service = ({ eng }) => {
  return (
    <div className="serviceDiv">
      <ServiceTitle eng={eng} />
      <div className="servicePlayDiv">
        <PlayStore
          img="./assets/google-play.png"
          link="https://play.google.com/store"
        />
        <PlayStore
          img="./assets/app-store.png"
          link="https://www.apple.com/store"
        />
      </div>
      <p className="serviceText">
        {eng
          ? "* Available on iPhone, iPad and all Android devices"
          : "iPhone و iPad وجميع أجهزة Android متوفر على أجهزة*"}
      </p>
    </div>
  );
};

export default Service;
