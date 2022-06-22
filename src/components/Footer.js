import React from "react";
import "./Footer.css";
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

          <div className="navbar__title footer__title">TITLE HERE</div>
          <div className="footer__copyright">
            © 2022 TITLE HERE. All Rights Reserved
          </div>
        </div>
        <div className="footer__newsletter-wrapper">
          <div className="footer__newsletter-title">
            Signup for email recipe updates
          </div>
          <div className="footer__newsletter-container">
            <form className="footer__form" action="">
              <div className="newsletter__form-group">
                {/*<label htmlFor="firstName">First Name</label> */}
                <input
                  className="form__items"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="newsletter__form-group">
                {/*<label htmlFor="email">Email</label> */}

                <input
                  className="form__items"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <button className="form__items form__button" type="submit">
                Submit
              </button>
            </form>
            <div
              className="newsletter__status-success"
              id="newsletter__submit-status"
            >
              Your email has been submitted!
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
