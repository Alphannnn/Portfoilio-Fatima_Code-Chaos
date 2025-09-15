import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -10, // stop at natural position
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


    //Stars Animation
   starsRef.current.forEach((star , index)=>{
     const direction = index % 2 === 0? 1 : -1
     const speed = 0.5 + Math.random() * 0.5


     gsap.to(star, {
        x : `${direction * (100 + index * 20)}`,
        y : `${direction -500 + index *  10}`,
        rotation : direction * 360 ,
        ease : 'none',
        scrollTrigger: {
            trigger : sectionRef.current ,
            start : 'top bottom' ,
            end : 'bottom top',
            scrub : speed
        }
     })
   })

   return () =>{
    ScrollTrigger.getAll().forEach((trigger)=>{
  if(trigger.vars.trigger === sectionRef.current){
    trigger.kill()
  }
    })
   }

  }, []);


  const addToStars  = (el) => {
    if(el && !starsRef.current.includes(el)){
        starsRef.current.push(el)
    }
  }



  return (
    <section
      ref={sectionRef}
      className="min-h-[130vh] relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]"
    >


  <div className="absolute  inset-0 overflow-hidden ">
  {/* {Stars} */}
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




      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-center text-white opacity-0 mt-24"
        >
          About Me
        </h1>
      </div>

      <div
        ref={introRef}
        className="mt-16 w-full flex md:flex-row flex-col justify-between lg:px-24 px-9 items-center opacity-0"
      >
        <h3 className="text-sm md:text-2xl  text-purple-200 z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider">
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
    </section>
  );
};

export default AboutSection;
