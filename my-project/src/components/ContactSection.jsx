import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ContactSection() {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);

  useEffect(() => {
    //Register Plugin
    gsap.registerPlugin(ScrollTrigger);

    const cleanUp = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) {
          st.kill(true);
        }
      });
    };

    cleanUp();

    gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" });
    gsap.set(initialTextRef.current, { opacity: 1 });
    gsap.set(finalTextRef.current, { opacity: 0 });

    //Create the main timeLine!!!
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top ",
        end: "+=200%",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
      },
    });

    //InitialState to mid (0-50%)
    tl.to(
      circleRef.current,
      {
        scale: 5,
        backgroundColor: "#9333EA",
        ease: "power1.inOut",
        duration: 0.5,
      },
      0
    );

    //Fade initial text (during first half)
    tl.to(
      initialTextRef.current,
      {
        opacity: 0,
        ease: "power1.out",
        duration: 0.2,
      },
      0.1
    );

    //Mid to final zoom (50%-100%)
    tl.to(
      circleRef.current,
      {
        scale: 15,
        backgroundColor: "#E9D5FF",
        boxShadow: "0 0 50px 20px rgba(233 , 213 , 255 , 0.3)",
        ease: "power2.inOut",
        duration: 0.5,
      },
      0.5
    );

    //Fade in Final text (during sec half)
    tl.to(
      finalTextRef.current,
      {
        opacity: 1,
      },
      0.7
    );

    return cleanUp;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center bg-black relative"
      style={{ overscrollBehavior: "none" }}
    >
      
      {/* Circle */}
      <div
        ref={circleRef}
        className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center relative transition-shadow duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100"
      >
        
        {/* Initial Text */}
        <p
          ref={initialTextRef}
          className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center justify-center text-center"
        >
          
          COME <br /> HERE!
        </p>
        {/* Final Text */}
        <div
          ref={finalTextRef}
          className="text-center relative flex flex-col items-center justify-center opacity-0"
        >
          
          <h1 className="text-black md:w-[15rem] w-[21rem] lg:scale-[0.2]   sm:scale-[0.14] scale-[0.05] md:font-bold text-sm sm:text-base leading-none mb-7 md:mb-5">
            
            Step Into The Future With Fatima_Code&Chaos!
          </h1>
          <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068] ">
            
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis cumque alias illum minima culpa itaque aliquam quo harum
            exercitationem minus voluptatibus cupiditate consectetur dolor
            maiores, hic quod tempora porro blanditiis. Ratione nihil obcaecati
            aliquam sunt odio a quas quod, ad excepturi tenetur facere, placeat
            recusandae cupiditate numquam, ullam tempora. Ad officia illo animi
            rem aliquam, molestiae quisquam mollitia! Ratione, 
          </p>
          <button className="px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-9 mt-9 text-nowrap">
            
            Let's Contact
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
