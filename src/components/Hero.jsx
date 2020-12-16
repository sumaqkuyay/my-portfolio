import React from "react";
import photo from "../images/photo-sabi.jpg";

//portada
//lo primero que se muestra en una landing

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-welcome">
        <p className="hero-welcome-hi">Hi, my name is</p>
        <h1 className="hero-welcome-name">Sabina Canchumani Huaman</h1>
        <p className="hero-welcome-fe">
          {/* <div className="hero-welcome-fe-span"></div> */}
          A passionate Front-End Developer from Perú
        </p>
        {/* <button className="hero-welcome-btn">texto</button> */}
      </div>
      <figure className="hero-image">
        <img src={photo} alt="foto" className="hero-image-photo" />
      </figure>
    </section>
  );
}

export default Hero;
