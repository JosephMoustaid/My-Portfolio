"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromTop,
} from "@/lib/motion";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};

export const HeroContent = () => {
  const name = "Youssef Moustaid";
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-6 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full max-w-5xl flex flex-col gap-5 justify-center items-center text-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2.5 px-4 mx-auto group cursor-default"
        >
          <SparklesIcon className="text-purple-400 mr-2.5 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
          <h1 className="Welcome-text text-[13px] font-medium tracking-wide">
            Data Engineer & Full-Stack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-8 w-full relative"
        >
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            {name.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className="inline-block hover:text-purple-300 transition-colors duration-300 cursor-default"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
          
          {/* Subtle underline decoration */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mx-auto max-w-md"
          />
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.7)}
          className="flex flex-col gap-4 mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/80 w-full"
        >
          <span className="leading-tight">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 animate-gradient">
              scalable systems
            </span>{" "}
            with data & AI
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.9)}
          className="text-base sm:text-lg text-white/60 my-8 max-w-2xl leading-relaxed px-4 font-normal"
        >
          Specializing in data engineering, distributed systems, and full-stack development.
          Building end-to-end solutions with Apache Spark, Kafka, Spring Boot, and modern cloud technologies.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1.1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            className="relative py-3 px-7 button-primary text-center text-white/95 cursor-pointer rounded-xl text-base font-medium mx-auto inline-block overflow-hidden group"
            href="/about"
          >
            <span className="relative z-10">Learn More</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};
