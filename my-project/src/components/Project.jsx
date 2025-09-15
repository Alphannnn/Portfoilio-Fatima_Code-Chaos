import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title reveal animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

     
  }, []);

  return (
    <section
      ref={sectionRef}
      id="horizontal-section"
      className="relative py-20 bg-[#f6f6f6] overflow-hidden"
    >
      {/* Title */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-4 opacity-0"
        >
          My Projects
        </h2>

        <div
          ref={titleLineRef}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        />
      </div>
    </section>
  );
};

export default Project;
