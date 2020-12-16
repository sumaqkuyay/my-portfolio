import React from "react";

import twitter from "../images/icons/twitter.svg";
import linkedin from "../images/icons/linkedin.svg";
import github from "../images/icons/github.svg";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-title">
        <p>Contact Me</p>
      </div>
      <div className="sideBar">
        <ul className="ul">
          <li className="ul-list">
            <a
              href="https://twitter.com/sumaqkuyay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="" />
            </a>
          </li>
          <li className="ul-list">
            <a
              href="https://www.linkedin.com/in/sabina-canchumani-huaman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" />
            </a>
          </li>
          <li className="ul-list">
            <a
              href="https://github.com/sumaqkuyay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
