import React, { useContext } from "react";
import Code from "../components/Code/Code";
import Contact from "../components/Contact/Contact";
import Intro from "../components/Intro/Intro";
import Language from "../components/Language/Language";
import Navbar from "../components/Navbar/Navbar";
import Pricing from "../components/Pricing/Pricing";
import Service from "../components/Service/Service";
import Share from "../components/Share/Share";
import Steps from "../components/Steps/Steps";
import Subscription from "../components/Subscription/Subscription";
import Tools from "../components/Tools/Tools";
import Up from "../components/Up/Up";
import { LanguageContext } from "../context/LanguageContext";

const Home = () => {
  const {
    state: { arabic, eng },
    actions: { setArabic, setEng },
  } = useContext(LanguageContext);

  return (
    <div>
      <Up />
      <Language
        setArabic={setArabic}
        setEng={setEng}
        arabic={arabic}
        eng={eng}
      />
      <Navbar arabic={arabic} eng={eng} />
      <div className={eng ? "shapeBox" : "shapeBoxA"} />
      <Intro arabic={arabic} eng={eng} />
      <Code eng={eng} />
      <Tools eng={eng} />
      <Share eng={eng} />
      <Steps eng={eng} />
      <Pricing eng={eng} />
      <Service eng={eng} />
      <Subscription eng={eng} />
      <Contact eng={eng} />
    </div>
  );
};

export default Home;
