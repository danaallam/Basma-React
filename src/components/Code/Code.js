import React from "react";
import CodeIcon from "./CodeIcon/CodeIcon";
import CodeTitle from "./CodeTitle/CodeTitle";
import {
  MdOutlineTouchApp,
  MdOutlineFingerprint,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { VscSettingsGear, VscGlobe } from "react-icons/vsc";
import "./Code.css";

const Code = () => {
  return (
    <div className="codeDiv">
      <CodeTitle
        title="Code Challenge"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi aut
        reiciendis quae temporibus doloremque, molestias excepturi doloribus
        soluta illo consequuntur eos placeat."
      />
      <div className="iconsBox">
        <CodeIcon
          icon={MdOutlineTouchApp}
          title="Fully functional"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."
        />
        <CodeIcon
          icon={MdOutlineFingerprint}
          title="Fully functional"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."
        />
        <CodeIcon
          icon={MdCheckBoxOutlineBlank}
          title="Fully functional"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."
        />
        <CodeIcon
          icon={IoLocationOutline}
          title="Location Tracking"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."
        />
        <CodeIcon
          icon={VscSettingsGear}
          title="Powerful Settings"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."
        />
        <CodeIcon
          icon={VscGlobe}
          title="Multiple Language"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."
        />
      </div>
    </div>
  );
};

export default Code;
