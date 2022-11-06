import React, { useState } from "react";
import Form from "../../Components/Form/Form";
import "./Auth.scss";

interface AuthProps {}

const Auth: React.FC<AuthProps> = () => {
  const [isHaveAccount, setIsHaveAccount] = useState(false);

  return (
    <div className="auth">
      <h1 className="auth__title">Welcome</h1>
      <Form isHaveAccount={isHaveAccount} setIsHaveAccount={setIsHaveAccount} />
    </div>
  );
};

export default Auth;
