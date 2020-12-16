import React from "react";
import javascript from "../images/skills/javascript.svg";
import html from "../images/skills/html.svg";
import css from "../images/skills/css.svg";
import git from "../images/skills/git.svg";
import react from "../images/skills/react.svg";
import nodejs from "../images/skills/nodejs.svg";
import firebase from "../images/skills/firebase.svg";
import sass from "../images/skills/sass.svg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <p className="about-title-about">About</p>
        <p className="about-title-me">Me</p>
        <div className="about-title-line"></div>
      </div>
      <div className="about-description">
        <p className="about-description-subtitle">
        Front-End Developer graduated from Laboratoria, with experience in the banking sector and BPO (Business Process Outsourcing) services. Passionate about technology, with an innovative mind and willing to continuous learning. I have managed, led teams helping to enhance their capacities of each one, being communicative and providing solutions for the fulfillment of the project. In addition, I have knowledge of graphic design, agile methodologies, database administration and prioritizing information security. I aspire to be full-stack, to be able to innovate or create a product, and thus help / contribute to any need of society, promoting Peruvian female talent in today's industry.
        </p>
        <div className="about-description-skills">
          <div>
            <img src={javascript} alt="" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
          <div>
            <img src={css} alt="" />
            <p>CSS</p>
          </div>
          <div>
            <img src={git} alt="" />
            <p>Git</p>
          </div>
          <div>
            <img src={react} alt="" />
            <p>React</p>
          </div>
          <div>
            <img src={nodejs} alt="" />
            <p>Node.js</p>
          </div>
          <div>
            <img src={firebase} alt="" />
            <p>Firebase</p>
          </div>
          <div>
            <img src={sass} alt="" />
            <p>Sass</p>
          </div>
        </div>
        <button className="about-description-skills-btnCv">
          <a
            href="https://drive.google.com/file/d/1KkNK3LCiD5RMdkKs39fGTLzNapOz5i2D/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download cv
          </a>
        </button>
      </div>
    </section>
  );
}

export default About;
