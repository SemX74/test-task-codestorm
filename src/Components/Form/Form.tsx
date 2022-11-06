import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useAppSelector } from "../../Redux/Hooks";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Message from "../Message/Message";
import "./Form.scss";
interface FormProps {
  isHaveAccount: boolean;
  setIsHaveAccount: React.Dispatch<React.SetStateAction<boolean>>;
}
export type Inputs = {
  email: string;
  password: string;
};
export interface User {
  email: string;
  id: number;
}
export interface ResponseData {
  accessToken: string;
  user: User;
}
const Form: React.FC<FormProps> = ({ isHaveAccount, setIsHaveAccount }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors: { email, password },
      isValid,
    },
  } = useForm<Inputs>({ mode: "all" });

  const { isDataLoading, onLogin, onRegister, responseError } = useAuth();

  const token = useAppSelector((state) => state.data.token);

  useEffect(() => {
    token && <Navigate to="/" />;
  }, [token]);

  return (
    <form
      className="form noselect"
      autoComplete="off"
      onSubmit={handleSubmit(isHaveAccount ? onLogin : onRegister)}
    >
      {responseError && <Message color="bad" message={responseError} />}
      <div className="form__inputs">
        <div className="form-input-wrapper">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Enter a valid email",
              },
            })}
            type="email"
            placeholder="Email"
            className="form__input"
          />
          {email?.message && (
            <span className="form-inputs-messages__message">
              {email?.message}
            </span>
          )}
        </div>

        <div className="form-input-wrapper">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 5, message: "At least 5 letters!" },
              maxLength: { value: 30, message: "Think of shorter password!" },
            })}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="form__input"
          />

          {password?.message && (
            <span className="form-inputs-messages__message">
              {password?.message}
            </span>
          )}
        </div>
      </div>

      <span className="form__exist">
        {isHaveAccount ? "No account? " : "Have account? "}
        <span
          onClick={() => {
            reset();
            setIsHaveAccount((prev) => !prev);
          }}
        >
          Click here
        </span>
      </span>

      <div className="form__checkbox-wrapper">
        <Checkbox
          isChecked={showPassword}
          onClickFunction={() => setShowPassword((prev) => !prev)}
          name="Show password"
          style={{ marginBottom: "6px" }}
        />
        <Checkbox
          isChecked={rememberMe}
          onClickFunction={() => setRememberMe((prev) => !prev)}
          name="Remember me"
          style={{ margin: "0 0" }}
        />
      </div>

      <Button
        disabled={!isValid}
        type={"submit"}
        isLoading={isDataLoading}
        name={isHaveAccount ? "Login" : "Register"}
      />
    </form>
  );
};

export default Form;
