import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/customCursor";
import AboutSection from "./components/AboutSection";
import Project from "./components/Project";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <CustomCursor />
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <ProgressBar />
    </>
  );
}
