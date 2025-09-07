"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FOOTER_DATA } from "@/constants";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-300 shadow-2xl p-10 rounded-t-3xl select-none">
      {/* Subtle animated background pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-700 via-transparent to-transparent opacity-10 animate-pulse"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 relative z-10"
      >
        {FOOTER_DATA.map((column) => (
          <div key={column.title} className="min-w-[300px] flex flex-col items-center md:items-start">
            <h3 className="font-extrabold text-white mb-6 text-xl text-start tracking-widest">
              {column.title.toUpperCase()}
            </h3>
            <nav className="flex flex-col gap-4 w-full">
              {column.data.map(({ icon: Icon, name, link }) => (
                <motion.a
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8, scale: 1.1 }}
                  className="flex items-center gap-3 sm:justify-start justify-center text-gray-400 hover:text-indigo-400 transition-colors duration-300 font-medium relative group"
                >
                  {Icon && <Icon className="w-5 h-5 text-indigo-400" />}
                  <span className="text-base">{name}</span>

                  {/* Animated underline */}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-indigo-400 transition-all duration-300 group-hover:w-full rounded"
                    aria-hidden="true"
                  />
                </motion.a>
              ))}
            </nav>
          </div>
        ))}
      </motion.div>

      {/* Social & contact section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
      >
        <div className="flex items-start gap-6">
          <a
            href="mailto:moustaidbusiness@gmail.com"
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-600 transition text-lg"
            aria-label="Send Email"
          >
            <FaEnvelope className="w-6 h-6" />
            <span>moustaidbusiness@gmail.com</span>
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/joshMoustaid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-transform transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-transform transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-transform transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <p className="text-gray-500 text-sm font-light tracking-wide">
          &copy; Youssef Moustaid {new Date().getFullYear()} — All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};
