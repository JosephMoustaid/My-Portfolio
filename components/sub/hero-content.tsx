"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-6 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full max-w-4xl flex flex-col gap-5 justify-center items-center text-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="text-[#000000] text-[13px]">
            Data Engineer & Full-Stack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 w-full"
        >
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            Youssef Moustaid
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.7)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white w-full"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              scalable systems
            </span>{" "}
            with data & AI
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.9)}
          className="text-base sm:text-lg md:text-xl text-gray-400 my-8 max-w-3xl leading-relaxed px-4"
        >
          Specializing in data engineering, distributed systems, and full-stack development.
          Building end-to-end solutions with Apache Spark, Kafka, Spring Boot, and modern cloud technologies.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1.1)}
          className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-300 mx-auto"
          href="/about"
        >
          Learn More
        </motion.a>
      </div>
    </motion.div>
  );
};
