import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { useTheme } from "../../Context/theme-context";
import "../Footer/Footer.css";

export const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="footer flex-center"
      style={{
        backgroundColor: theme === "light" ? "#202020" : "white",
      }}
    >
      <div
        className={
          theme === "light" ? "footer-heading nav-icon-dark" : "footer-heading"
        }
      >
        Made by Mariya Sada | © | 2022
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <a href="https://github.com/mariyasada">
            <span
              className={
                theme === "light" ? "nav-icon nav-icon-dark" : "nav-icon"
              }
            >
              <BsGithub title="Github" />
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a href="https://twitter.com/sada_mariya">
            <span
              className={
                theme === "light" ? "nav-icon nav-icon-dark" : "nav-icon"
              }
            >
              <BsTwitter title="Twitter" />
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a href="https://www.linkedin.com/in/mariya-sada-1b6443139">
            <span
              className={
                theme === "light" ? "nav-icon nav-icon-dark" : "nav-icon"
              }
            >
              <BsLinkedin title="LinkedIn" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
