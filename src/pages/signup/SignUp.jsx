import React, { useState } from "react";
import "../login/login.css";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import { useTheme } from "../../Context/theme-context";
import { useAuth } from "../../Context/auth-context";

const initialSignupState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState(initialSignupState);
  const [passVisible, setPassVisible] = useState(true);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { signUpHandler } = useAuth();

  const signupChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };
  const signUp = (e) => {
    e.preventDefault();
    signUpHandler(signUpData);
    setSignUpData(initialSignupState);
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: theme === "light" ? "#202020" : "white" }}
    >
      <form
        className="signup-container flex-center flex-direction-column border-round"
        style={{
          backgroundColor: theme === "light" ? "#99a98f" : "white",
        }}
      >
        <h2
          className="heading text-size-md"
          style={{ color: theme === "light" ? "#175c6d" : "#d69d66" }}
        >
          SignUp
        </h2>
        <div className="label-input-container flex-center flex-direction-column">
          <label
            htmlFor="Name"
            className="label-for-login signup-label "
            style={{ color: theme === "light" ? "#175c6d" : "#3d6d79" }}
          >
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="input-textbox"
            id="FirstName"
            name="firstName"
            onChange={signupChangeHandler}
            required
          />
        </div>
        <div className="label-input-container flex-center flex-direction-column">
          <label
            htmlFor="Name"
            className="label-for-login signup-label "
            style={{ color: theme === "light" ? "#175c6d" : "#3d6d79" }}
          >
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="input-textbox"
            id=" LastName"
            name="lastName"
            required
            onChange={signupChangeHandler}
          />
        </div>
        <div className="label-input-container flex-center flex-direction-column">
          <label
            htmlFor="Email"
            className="label-for-login signup-label "
            style={{ color: theme === "light" ? "#175c6d" : "#3d6d79" }}
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="input-textbox"
            id="Email"
            name="email"
            onChange={signupChangeHandler}
            required
          />
        </div>
        <div className="label-input-container flex-center flex-direction-column">
          <label
            htmlFor="password"
            className="label-for-login signup-label "
            style={{ color: theme === "light" ? "#175c6d" : "#3d6d79" }}
          >
            Password
          </label>
          <input
            type={passVisible ? "password" : "text"}
            placeholder="*********"
            className="input-textbox"
            id="password"
            name="password"
            onChange={signupChangeHandler}
            required
          />
          <span className="show-hide-toggle-icon password-badge flex-center">
            {passVisible ? (
              <FaEyeSlash
                onClick={() => setPassVisible(!passVisible)}
                className="icon"
              />
            ) : (
              <FaEye
                onClick={() => setPassVisible(!passVisible)}
                className="icon"
              />
            )}
          </span>
        </div>
        <span>
          <button
            className="btn login-btn border-round"
            style={{
              backgroundColor: theme === "light" ? "#175c6d" : "#d69d66",
            }}
            onClick={signUp}
          >
            Register
          </button>
        </span>

        <div className="new-user-link-container flex-center">
          <p>Already Registered ?</p>
          <Link to="/login" className="signup-link">
            Log In Here
          </Link>
        </div>
      </form>
    </div>
  );
};
