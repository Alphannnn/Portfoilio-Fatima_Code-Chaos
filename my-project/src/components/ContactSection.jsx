import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);

  // ✅ Contact form state
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const form = useRef();

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cx7ifsc",
        "template_2lw7xcz",
        form.current,
        "zWJ-O_krKiPi_KCow"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Message Sent Successfully!");
          closeContactForm();
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cleanUp = () => {
      ScrollTrigger.getAll().forEach((st) => {
        // Make sure st.kill exists before calling
        if (st && st.kill && st.vars.trigger === sectionRef.current) {
          st.kill();
        }
      });
    };

    cleanUp();

    gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" });
    gsap.set(initialTextRef.current, { opacity: 1 });
    gsap.set(finalTextRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
      },
    });

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

    tl.to(
      initialTextRef.current,
      {
        opacity: 0,
        ease: "power1.out",
        duration: 0.2,
      },
      0.1
    );

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

    tl.to(finalTextRef.current, { opacity: 1 }, 0.7);

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
          
          <h1 className="text-black md:w-[15rem] w-[21rem] lg:scale-[0.2] sm:scale-[0.14] scale-[0.05] md:font-bold text-sm sm:text-base leading-none mb-7 md:mb-5">
            Step Into The Future With Fatima_Code&Chaos!
          </h1>
          <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068]">
            I’m still learning and growing in web development, and that’s what
            makes my work fresh and creative. Looking for a web developer who
            brings creative solutions and delivers work people love? I
            craft websites that stand out, combining clean design, smooth
            functionality, and attention to detail. Whether it’s a personal
            brand site or a complex project, I make your vision shine online and
            leave a lasting impression. Let’s create something exceptional
            together!
          </p>

          {/* ✅ Let's Contact Button */}
          <button
            onClick={openContactForm}
            className="px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-9 mt-9 text-nowrap"
          >
            Let's Contact
          </button>
        </div>
      </div>

      {/* ✅ Contact Form Modal */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8,
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300">
                  Get In Touch
                </h1>
                <button onClick={closeContactForm} className="cursor-default">
                  ✕
                </button>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 bg-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="reply_to"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 bg-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="How can I help you?"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 bg-gray-700"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 rounded-lg shadow-md hover:shadow-lg cursor-default"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ContactSection;
