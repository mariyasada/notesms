import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../login/login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useTheme } from "../../Context/theme-context";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/auth-context";

const guestData = {
  email: "mariya@gmail.com",
  password: "123456",
};
export const LogInPage = () => {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });
  const [passVisible, setPassVisible] = useState(true);
  const { theme, setTheme } = useTheme();
  const { logInHandler } = useAuth();

  const logInChangeHnadler = (e) => {
    const { name, value } = e.target;
    setLogInData((prevData) => ({ ...prevData, [name]: value }));
  };

  const logIn = (e) => {
    e.preventDefault();
    if (logInData.email === "" || logInData.password === "") {
      toast("please fill the data in both fields", { icon: "✔" });
    } else {
      logInHandler(logInData);
    }
  };
  return (
    <div
      className="container"
      style={{ backgroundColor: theme === "light" ? "#202020" : "white" }}
    >
      <div
        className="login-container flex-center flex-direction-column border-round"
        style={{
          backgroundColor: theme === "light" ? "#99a98f" : "white",
        }}
      >
        <h2
          className="heading-page text-size-md"
          style={{ color: theme === "light" ? "#175c6d" : "#d69d66" }}
        >
          LOGIN
        </h2>
        <form>
          <div className="label-input-container flex-center flex-direction-column">
            <label
              htmlFor="Email"
              className="label-for-login "
              style={{ color: theme === "light" ? "#175c6d" : "#3d6d79" }}
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              className="input-textbox"
              id="Email"
              onChange={logInChangeHnadler}
              required
            />
          </div>
          <div className="label-input-container flex-center flex-direction-column">
            <label htmlFor="password" className="label-for-login ">
              Password
            </label>
            <input
              type={passVisible ? "password" : "text"}
              name="password"
              placeholder="*********"
              className="input-textbox"
              id="password"
              onChange={logInChangeHnadler}
              required
            />
            <span className="show-hide-toggle-icon flex-center">
              {passVisible ? (
                <FaEyeSlash onClick={() => setPassVisible(!passVisible)} />
              ) : (
                <FaEye onClick={() => setPassVisible(!passVisible)} />
              )}
            </span>
          </div>
          <span>
            <button
              className="btn login-btn border-round"
              style={{
                backgroundColor: theme === "light" ? "#175c6d" : "#d69d66",
              }}
              onClick={logIn}
            >
              Login
            </button>
          </span>
          <span>
            <button
              className="btn login-btn-outline border-round"
              style={{
                backgroundColor: theme === "light" ? "#175c6d" : "#d69d66",
              }}
              onClick={(e) => {
                e.preventDefault(), logInHandler(guestData);
              }}
            >
              Login As Guest
            </button>
          </span>

          <div className="new-user-link-container flex-center">
            <p>New User ?</p>
            <Link to="/signup" className="signup-link">
              Register Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
