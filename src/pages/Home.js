import React from "react";
import Code from "../components/Code/Code";
import Contact from "../components/Contact/Contact";
import Intro from "../components/Intro/Intro";
import Navbar from "../components/Navbar/Navbar";
import Pricing from "../components/Pricing/Pricing";
import Service from "../components/Service/Service";
import Share from "../components/Share/Share";
import Steps from "../components/Steps/Steps";
import Subscription from "../components/Subscription/Subscription";
import Tools from "../components/Tools/Tools";
import Up from "../components/Up/Up";

const Home = () => {
  return (
    <div>
      <Up />
      <Navbar />
      <div className="shapeBox"/>
      <Intro />
      <Code />
      <Tools />
      <Share />
      <Steps />
      <Pricing />
      <Service />
      <Subscription />
      <Contact />
    </div>
  );
};

export default Home;
