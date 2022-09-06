import React, { useState } from "react";
import "./FooterForm.css";
import { useForm, ValidationError } from "@formspree/react";

const FooterForm = () => {
  const [state, handleSubmit] = useForm("mgedbypa");
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  return (
    <div className="footer__newsletter-container">
      <div className="footer__newsletter-title">
        Signup for email recipe updates
      </div>
      <div className="footer__newsletter-wrapper">
        <form
          onSubmit={handleSubmit}
          className="footer__form"
          action="https://formspree.io/f/mgedbypa"
          method="POST"
        >
          <div className="newsletter__form-group">
            {/*<label htmlFor="firstName">First Name</label> */}
            <input
              className="form__items first-name"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
            />

            {/*<label htmlFor="email">Email</label> */}

            <input
              className="form__items email"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />

            <button
              className="form__items form__button"
              type="submit"
              onClick={() => {
                handleClick();
              }}
            >
              Submit
            </button>
          </div>
        </form>

        {!click ? (
          <div className="hidden">Before</div>
        ) : click && state.succeeded ? (
          <div
            className="newsletter__status-success"
            id="newsletter__submit-status"
          >
            Your email has been submitted!
          </div>
        ) : click && state.submitting ? (
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div
            className="newsletter__status-fail"
            id="newsletter__submit-status"
          >
            Please, enter a valid email.
          </div>
        )}

        {/*
        {state.succeeded ? (
          <div
            className="newsletter__status-success"
            id="newsletter__submit-status"
          >
            Your email has been submitted!
          </div>
        ) : (
          <div
            className="newsletter__status-fail"
            id="newsletter__submit-status"
          >
            An error occurred!
          </div>
        )}
*/}
        {/*{handleSubmit ? (
          <div className="hidden">Before</div>
        ) : state.succeeded ? (
          <div
            className="newsletter__status-success"
            id="newsletter__submit-status"
          >
            Your email has been submitted!
          </div>
        ) : !state.succeeded ? (
          <div
            className="newsletter__status-fail"
            id="newsletter__submit-status"
          >
            An error occurred!
          </div>
        ) : null}*/}
      </div>
    </div>
  );
};

export default FooterForm;
