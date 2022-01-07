import React, { useState, useRef } from "react";
import ReactDom from "react-dom";
import "./Popup.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import Button from "../Button/Button";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_SECRET_KEY } from "../ReCaptchaKey";

const Popup = ({ close, eng }) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [eFName, setEFName] = useState(" ");
  const [eLName, setELName] = useState(" ");
  const [eEmail, setEEmail] = useState(" ");
  const [ePass, setEPass] = useState(" ");
  const [msg, setMsg] = useState("");
  let recaptchaRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();
    const recaptchaToken = await recaptchaRef.current.getValue();
    recaptchaRef.current.reset();
    const body = new FormData();
    setEFName("");
    setELName("");
    setEEmail("");
    setEPass("");
    console.log("recaptchaToken", recaptchaToken);
    body.append("first_name", fName);
    body.append("last_name", lName);
    body.append("email", email);
    body.append("password", pass);
    const res = await fetch("http://localhost:8000/api/user/register", {
      method: "POST",
      body,
      headers: {
        Accept: "application/json",
        recaptchaToken,
      },
    });
    const data = await res.json();
    console.log("data", data);
    if (!data.errors) {
      console.log("NO ERRORS");
      setFName("");
      setLName("");
      setEmail("");
      setPass("");
      setMsg(data.message);
      setTimeout(() => {
        close();
      }, 2000);
    } else {
      console.log("ERRORS");
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
    recaptchaRef.current.reset();
  };

  return ReactDom.createPortal(
    <>
      <div className="popupBackground" />
      <div className="popupDiv">
        <IoCloseCircleSharp onClick={close} className="popupClose" />
        <h2 className={eng ? "popupTitle" : "popupTitleA"}>
          {eng ? "Register" : "تسجيل"}
        </h2>
        <form className="popupForm">
          <input
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            type="text"
            placeholder={eng ? "Fisrt Name" : "الاسم الاول"}
            className={
              eng ? "subInput formInput popupInput" : "subInput formInputA"
            }
          />
          <span className="popupError">{eFName}</span>
          <input
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            type="text"
            placeholder={eng ? "Last Name" : "الكنية"}
            className={
              eng ? "subInput formInput popupInput" : "subInput formInputA"
            }
          />
          <span className="popupError">{eLName}</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder={eng ? "Email" : "البريد الإلكتروني"}
            className={
              eng ? "subInput formInput popupInput" : "subInput formInputA"
            }
          />
          <span className="popupError">{eEmail}</span>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder={eng ? "Password" : "كلمه السر"}
            className={
              eng ? "subInput formInput popupInput" : "subInput formInputA"
            }
          />
          <span className="popupError">{ePass}</span>
          <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SECRET_KEY} />
          <Button title={eng ? "Register" : "تسجيل"} click={register} />
          <span className="popupMsg">{msg}</span>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Popup;
