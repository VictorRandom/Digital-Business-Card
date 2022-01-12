import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <button id="contact">
      <a
        style={{ textDecoration: "none", color: "black" }}
        href="mailto:victormbalduino@hotmail.com"
      >
        <FaEnvelope id="logo" /> Email
      </a>
    </button>
  );
};

export default Contact;
