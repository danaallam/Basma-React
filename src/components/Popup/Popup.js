import React, { useState } from "react";
import ReactDom from "react-dom";
import "./Popup.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import Button from "../Button/Button";

const Popup = ({ close }) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [eFName, setEFName] = useState(" ");
  const [eLName, setELName] = useState(" ");
  const [eEmail, setEEmail] = useState(" ");
  const [ePass, setEPass] = useState(" ");
  const [msg, setMsg] = useState("");

  const register = async () => {
    const formdata = new FormData();
    setEFName("");
    setELName("");
    setEEmail("");
    setEPass("");

    formdata.append("first_name", fName);
    formdata.append("last_name", lName);
    formdata.append("email", email);
    formdata.append("password", pass);

    const res = await fetch("http://localhost:8000/api/user/register", {
      method: "POST",
      body: formdata,
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (!data.errors) {
      setFName("");
      setLName("");
      setEmail("");
      setPass("");
      setMsg(data.message);
      setTimeout(() => {
        close();
      }, 2000);
    } else {
      if (data.errors.first_name) {
        setEFName(data.errors.first_name[0]);
      }
      if (data.errors.last_name) {
        setELName(data.errors.last_name[0]);
      }
      if (data.errors.email) {
        setEEmail(data.errors.email[0]);
      }
      if (data.errors.password) {
        setEPass(data.errors.password[0]);
      }
    }
  };

  return ReactDom.createPortal(
    <>
      <div className="popupBackground" />
      <div className="popupDiv">
        <IoCloseCircleSharp onClick={close} className="popupClose" />
        <h2 className="popupTitle">Register</h2>
        <form className="popupForm" onSubmit={(e) => e.preventDefault()}>
          <input
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            type="text"
            placeholder="Fisrt Name"
            className="subInput formInput popupInput"
          />
          <span className="popupError">{eFName}</span>
          <input
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            type="text"
            placeholder="Last Name"
            className="subInput formInput popupInput"
          />
          <span className="popupError">{eLName}</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="subInput formInput popupInput"
          />
          <span className="popupError">{eEmail}</span>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            className="subInput formInput popupInput"
          />
          <span className="popupError">{ePass}</span>
          <Button title="Register" click={register} />
          <span className="popupMsg">{msg}</span>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Popup;
