import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -10,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Intro Animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: -60,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stars Animation
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -500 + index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    // -------------------------
    // NEW: Robust, seamless marquee
    // -------------------------
    const track = marqueeRef.current;
    let marqueeTween = null;
    let listeners = [];

    const startMarquee = () => {
      if (!track) return;
      const totalWidth = track.scrollWidth; // width of full duplicated track
      const singleWidth = totalWidth / 2; // width of one set of logos

      // kill any previous tween
      if (marqueeTween) marqueeTween.kill();

      marqueeTween = gsap.to(track, {
        x: -singleWidth,
        ease: "none",
        duration: 20, // adjust speed here
        repeat: -1,
        modifiers: {
          // unitize makes GSAP re-append "px" for us
          x: gsap.utils.unitize((x) => {
            const n = parseFloat(x);
            // wrap between -singleWidth and 0 so the transform never shows a jump
            return gsap.utils.wrap(-singleWidth, 0, n);
          }),
        },
      });
    };

    // Wait for images inside the track to load (so scrollWidth is accurate)
    if (track) {
      const imgs = Array.from(track.querySelectorAll("img"));
      if (imgs.length === 0) {
        // nothing to wait for
        startMarquee();
      } else {
        let loaded = 0;
        const checkAndStart = () => {
          if (loaded >= imgs.length) startMarquee();
        };

        imgs.forEach((img) => {
          if (img.complete && img.naturalWidth !== 0) {
            loaded++;
          } else {
            const onLoad = () => {
              loaded++;
              checkAndStart();
            };
            img.addEventListener("load", onLoad);
            img.addEventListener("error", onLoad); // treat error as "loaded" to avoid hang
            listeners.push({ img, onLoad });
          }
        });

        // If some images were already complete, trigger start check
        checkAndStart();
      }
    }

    // cleanup
    return () => {
      if (marqueeTween) marqueeTween.kill();
      listeners.forEach(({ img, onLoad }) => {
        img.removeEventListener("load", onLoad);
        img.removeEventListener("error", onLoad);
      });

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  const logos = [
    "https://cdn.worldvectorlogo.com/logos/html-1.svg", // HTML
    "https://cdn.worldvectorlogo.com/logos/css-3.svg", // CSS
    "https://cdn.worldvectorlogo.com/logos/javascript-1.svg", // JavaScript
    "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg", // Tailwind
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React
    "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg", // Bootstrap
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", // Figma
    "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", // GitHub
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-[130vh] relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]"
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(13)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-center text-white opacity-0 mt-24"
        >
          About Me
        </h1>
      </div>

      {/* Intro */}
      <div
        ref={introRef}
        className="mt-16 w-full flex md:flex-row flex-col justify-between lg:px-24 px-9 items-center opacity-0"
      >
        <h3 className="text-sm md:text-2xl text-purple-200 z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider">
          Hi this is Fatima. I can help your business shine online with websites
          that are fast, reliable, and easy to use. Every detail, from layout to
          animation, is designed to keep visitors engaged and coming back. The
          result? A digital presence that feels smooth, looks polished, and
          drives real impact on your clients!.
        </h3>

        <img
          className="lg:h-[30rem] md:h-[15rem] h-[20rem] mix-blend-lighten mt-8 md:mt-0"
          src="/public/images/m.png"
          alt="me"
        />
      </div>

      {/* Logos marquee - SINGLE TRACK with duplicated logos for perfect seam */}
      <div className="bg-transparent overflow-hidden h-[100px] w-[90%] mx-auto flex items-center">
        <div className="relative w-full overflow-hidden">
          {/* single track - duplicate logos inline so gap is consistent across the seam */}
          <div
            ref={marqueeRef}
            className="flex gap-16 items-center whitespace-nowrap"
          >
            {[...logos, ...logos].map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="tech-logo"
                className="h-16 w-auto object-contain"
                loading="lazy"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
