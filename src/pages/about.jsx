import React from "react";
import Hero from "../components/about/hero-section";
import WhyUs from "../components/about/why-us";
import Values from "../components/about/values-section";
import TeamMembers from "../components/about/team-members";
import Newsletter from "../components/about/news-letter";

const About = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <Values />
      <TeamMembers />
      <Newsletter />
    </>
  );
};

export default About;
