import React, { useEffect, useRef, useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [userid, setUserid] = useState("");
  const [userpw, setUserpw] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  return (
    <div className="login-container">
      <h2>🦁멋쟁이 사자처럼 로그인🦁</h2>
      <input />
      <input />
      <button>로그인</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};
export default LoginForm;
