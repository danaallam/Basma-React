import React from "react";
import Arrow from "./Arrow/Arrow";
import Step from "./Step/Step";
import "./StepsBox.css";

const StepsBox = () => {
  return (
    <div className="stepsBoxDiv">
      <Step
        img="./assets/download.png"
        title="Install the App"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit deserunt ea nemo nulla, ex cupiditate inventore."
      />
      <Arrow />
      <Step
        img="./assets/settings.png"
        title="Setup your profile"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit deserunt ea nemo nulla, ex cupiditate inventore."
      />
      <Arrow />
      <Step
        img="./assets/app.png"
        title="Enjoy the features!"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit deserunt ea nemo nulla, ex cupiditate inventore."
      />
    </div>
  );
};

export default StepsBox;
