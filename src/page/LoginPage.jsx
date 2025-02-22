import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  const user = { id: "likelion", pw: "1954" };

  return (
    <div>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
