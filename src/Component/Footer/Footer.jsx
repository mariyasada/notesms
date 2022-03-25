import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import "../Footer/Footer.css";

export const Footer = () => {
  return (
    <div className="footer flex-center">
      <div className="footer-heading">Made by Mariya Sada | © | 2022</div>
      <ul className="nav-items">
        <li className="nav-item">
          <a href="https://github.com/mariyasada">
            <span className="nav-icon">
              <BsGithub title="Github" />
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a href="https://twitter.com/sada_mariya">
            <span className="nav-icon">
              <BsTwitter title="Twitter" />
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a href="https://www.linkedin.com/in/mariya-sada-1b6443139">
            <span className="nav-icon">
              <BsLinkedin title="LinkedIn" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
