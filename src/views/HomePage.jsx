import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <Layout>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </Layout>
  );
}

export default HomePage;
