import React from "react";
import HeroSection from "../components/home/hero-section";
import Services from "../components/home/services";
import Projects from "../components/home/projects";
import About from "../components/home/about";
import Testimonials from "../components/home/testimonials";
import Contact from "../components/home/contact";

export default function Home({ handleNavClick }) {
  return (
    <>
      <HeroSection handleNavClick={handleNavClick} />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
