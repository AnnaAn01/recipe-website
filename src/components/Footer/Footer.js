import React from "react";
import "./Footer.css";
import FooterForm from "./FooterForm";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(handleClick);
      window.scrollTo(0, c - c / 26);
    }
  };

  // const handleClick = () => {
  //   window.scrollTo(0, 0);
  // };
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__sns-wrapper">
          <div className="footer__sns">
            <div className="footer__sns-icons-wrapper">
              <a
                className="footer__sns-icons footer__sns-instagram"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare />
              </a>
              <a
                className="footer__sns-icons footer__sns-twitter"
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitterSquare />
              </a>
            </div>
            <div className="footer__title-copyright-wrapper">
              <div className="footer__title" onClick={handleClick}>
                Anna's Kitchen
              </div>

              <div className="footer__copyright">
                © 2022 Anna's Kitchen.
                <span className="footer__copyright-span">
                  &nbsp; All Rights Reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
        <FooterForm />
      </div>
    </footer>
  );
};

export default Footer;
