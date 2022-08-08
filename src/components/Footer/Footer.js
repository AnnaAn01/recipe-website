import React from "react";
import "./Footer.css";
import FooterForm from "./FooterForm";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__sns-wrapper">
          <div className="footer__sns">
            <a
              className="footer__sns-icons footer__sns-instagram"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare />
            </a>

            <a
              className="footer__sns-icons footer__sns-instagram"
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare />
            </a>
          </div>

          <div className="navbar__title footer__title">Anna's Kitchen</div>
          <div className="footer__copyright">
            © 2022
            <span className="footer__copyright-title"> Anna's Kitchen</span>.
            All Rights Reserved
          </div>
        </div>
        <FooterForm />
      </div>
    </footer>
  );
};

export default Footer;
