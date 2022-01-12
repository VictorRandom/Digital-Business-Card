import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <FaTwitterSquare className="logo" ></FaTwitterSquare>
      <FaFacebookSquare className="logo" ></FaFacebookSquare>
      <FaInstagramSquare className="logo" ></FaInstagramSquare>
      <FaLinkedin className="logo" ></FaLinkedin>
      <FaGithubSquare className="logo" ></FaGithubSquare>
    </div>
  );
};

export default Footer;
