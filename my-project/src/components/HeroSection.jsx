import { motion } from 'framer-motion'
import Spline from "@splinetool/react-spline"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const HeroSection = () => {
  // ✅ Typewriter config
  const [text] = useTypewriter({
    words: [
      "Creative\nPractical Solutions",
      "Smart\nReliable Workflows",
      "Your\nDream Website",
      "Fast\nReliable Results"
    ],
    loop: true,
    typeSpeed: 40,     // fast typing
    deleteSpeed: 25,   // fast erasing
    delaySpeed: 1500,  // pause before erase
  })

  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black
    flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">

      {/* Left Section */}
      <div className='z-40 xl:mb-0 mb-[20%]'> 
        <motion.h1 
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 0.1
          }}
          className="text-5xl md:text-4xl lg:text-6xl font-bold z-10 mb-6 mt-9 leading-tight"
        >
          {/* Building stays fixed above */}
          <span className="block">Building</span>

          {/* Typed text */}
          {text.split("\n").map((line, idx, arr) => {
            const isLast = idx === arr.length - 1
            return (
              <span 
                key={idx} 
                className={isLast ? "inline-block" : "block"}
              >
                {line}
                {isLast && <Cursor cursorStyle="|" cursorBlinkSpeed={900} />}
              </span>
            )
          })}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5
          }}
          className='text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl'
        >
          I deliver robust, production-ready websites and web apps with speed and precision.
          Every project is backed by clean code, clear communication, and a commitment to getting it done, on time everytime.
        </motion.p>
      </div>

      {/* Right Section */}
      <Spline 
        className='absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0'  
        scene="https://prod.spline.design/ZH0N0X5EF3nNQdC1/scene.splinecode" 
      />
    </section>
  )
}

export default HeroSection
