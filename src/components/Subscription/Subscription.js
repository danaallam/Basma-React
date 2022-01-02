import React from "react";
import Button from "../Button/Button";
import "./Subscription.css";

const Subscription = () => {
  return (
    <div className="subDiv">
      <div className="subTitleDiv">
        <h1 className="codeTitle">Subscribe to get updates</h1>
        <p className="titleText">
          By subscribing you will get newsleter, promotions adipisicing elit.
          Culpa assumenda totam, ex repudiandae debitis a quam numquam beatae
          deleniti.
        </p>
        <input type="text" placeholder="Enter your email" className="subInput" />
        <Button title="Subscribe"/>
      </div>
    </div>
  );
};

export default Subscription;
