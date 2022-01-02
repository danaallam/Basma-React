import React from "react";
import Button from "../../Button/Button";
import "./Title.css";

const Title = () => {
  return (
    <div className="titleIntro">
      <h1 className="title">Creative way to Showcase your App</h1>
      <p className="titleText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        similique, enim neque esse, velit quibusdam sed dignissimos officiis
        odio aperiam libero incidunt magni eos sequi non consequatur molestiae
        eveniet aliquid.
      </p>
      <Button title="Get Started" />
    </div>
  );
};

export default Title;
