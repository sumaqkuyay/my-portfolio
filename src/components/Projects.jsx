import React from "react";
import dataLovers from "../images/projects/dataLovers.png";
import yachaywasi from "../images/projects/YachayWasiPerú.png";
import mikuyburger from "../images/projects/MikuyBurger.png";
import yanapay from "../images/projects/Yanapay.png";
import mayaclientes from "../images/projects/Maya-Yanbal.png";
import temis from "../images/projects/Temis.png";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <p className="projects-title">Projects</p>
      <div className="projects-line"></div>
      {/* <p className="projects-subtitle">
        Aquí puedes encontrar mis proyectos personales
      </p> */}
      <div className="projects-container">
        <button className="demo">
          <figure className="img-project">
            <img src={dataLovers} alt="" />
          </figure>
          <span className="post-overlay">
            <button className="seemore-btn">
              <a href="https://sumaqkuyay.github.io/LIM012-data-lovers/src/">
                Demo
              </a>
            </button>
            <button className="seemore-btn">
              <a href="https://github.com/sumaqkuyay/LIM012-data-lovers">Repo</a>
            </button>
          </span>
        </button>
        <button className="demo">
          <figure className="img-project">
            <img src={yachaywasi} alt="" />
          </figure>
          <span className="post-overlay">
            <button className="seemore-btn">
              <a href="https://sumaqkuyay.github.io/LIM012-fe-social-network/src/">
                Demo
              </a>
            </button>
            <button className="seemore-btn">
              <a href="https://github.com/sumaqkuyay/LIM012-fe-social-network/tree/develop">
                Repo
              </a>
            </button>
          </span>
        </button>
        <button className="demo">
          <figure className="img-project">
            <img src={mikuyburger} alt="" />
          </figure>
          <span className="post-overlay">
            <button className="seemore-btn">
              <a href="https://sumaqkuyay.github.io/LIM012-fe-burger-queen/#/">Demo</a>
            </button>
            <button className="seemore-btn">
              <a href="https://github.com/sumaqkuyay/LIM012-fe-burger-queen">
                Repo
              </a>
            </button>
          </span>
        </button>
        <button className="demo">
          <figure className="img-project">
            <img src={yanapay} alt="" />
          </figure>
          <span className="post-overlay">
            <button className="seemore-btn">
              <a href="https://melyhc.github.io/hdl-2020/#/">
                Demo
              </a>
            </button>
            <button className="seemore-btn">
              <a href="https://github.com/sumaqkuyay/hdl-2020">
                Repo
              </a>
            </button>
          </span>
        </button>
        <button className="demo">
          <figure className="img-project">
            <img src={mayaclientes} alt="" />
          </figure>
          <span className="post-overlay">
            <button className="seemore-btn">
              <a href="https://sumaqkuyay.github.io/mayaclientes-yanbal/#/home">Demo</a>
            </button>
            <button className="seemore-btn">
              <a href="https://github.com/sumaqkuyay/mayaclientes-yanbal">
                Repo
              </a>
            </button>
          </span>
        </button>
        <button className="demo">
          <figure className="img-project">
            <img src={temis} alt="" />
          </figure>
          <span className="post-overlay">
            <button className="seemore-btn">
              <a href="https://sumaqkuyay.github.io/legalhackaton-pg/#/home">Demo</a>
            </button>
            <button className="seemore-btn">
              <a href="https://github.com/sumaqkuyay/legalhackaton-pg/tree/sabidevelop">
                Repo
              </a>
            </button>
          </span>
        </button>
      </div>
    </section>
  );
}

export default Projects;
