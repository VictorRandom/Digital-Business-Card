import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://twitter.com/Victor_Random">
        <FaTwitterSquare className="logo" />
      </a>
      <a href="https://www.facebook.com/victor.mirandabalduino">
        <FaFacebookSquare className="logo" />
      </a>
      <a href="https://www.instagram.com/victormbalduino/">
        <FaInstagramSquare className="logo" />
      </a>
      <a href="https://www.linkedin.com/in/victor-balduino-625b77b1/">
        <FaLinkedin className="logo" />
      </a>
      <a href="https://github.com/VictorRandom">
        <FaGithubSquare className="logo" />
      </a>
    </div>
  );
};

export default Footer;
