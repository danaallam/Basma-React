import React from "react";
import "./Desc.css";
import IconBox from "./IconBox/IconBox";
import Tool from "./Tool/Tool";

const Desc = () => {
  return (
    <div className="descDiv">
      <h1 className="codeTitle">Work faster with powerful tools.</h1>
      <Tool text="Combined with a handful of model sentence structures looks reasonable" />
      <br />
      <Tool text="Combined with a handful of model sentence structures looks reasonable" />
      <br />
      <Tool text="Combined with a handful of model sentence structures looks reasonable" />
      <br />
      <Tool text="Combined with a handful of model sentence structures looks reasonable" />
      <br />
      <Tool text="Combined with a handful of model sentence structures looks reasonable" />
      <br />
      <IconBox />
    </div>
  );
};

export default Desc;
