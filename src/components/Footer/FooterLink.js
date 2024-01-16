import React from "react";
import "./FooterLinks.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logoImg from "../../assets/shopito_logo.png";
const FooterLink = () => {
  return (
    <>
      <section className="contact-section" style={{ width: "100%" }}>
        <div className="container contact" style={{ width: "100%" }}>
          <div className="contact-icon">
            <FaFacebook className="i" />
            <FaTwitter className="i" />
            <FaInstagram className="i" />
            <FaYoutube className="i" />
          </div>
          <h2>Let's Talk?</h2>
          <a href="#home" className="btn btn-dark">
            Make an enquiry
          </a>
        </div>
      </section>
    </>
  );
};

export default FooterLink;
