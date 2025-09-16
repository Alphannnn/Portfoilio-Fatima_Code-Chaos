import { useEffect } from "react";
import {gsap} from 'gsap' ;
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/customCursor";
import AboutSection from "./components/AboutSection";
import Project from "./components/Project";
import ContactSection from "./components/ContactSection";
export default function App() {


   useEffect(()=>{
       gsap.registerPlugin(ScrollTrigger)
       ScrollTrigger.refresh()
       return () =>{
        ScrollTrigger.getAll().forEach((trigger)=> trigger.kill())
       }
    } ,[])

  return (
     <>
     <Header />
     <HeroSection />
     <CustomCursor />
     <AboutSection />
     <Project />
     <ContactSection />
     </>
  )
}