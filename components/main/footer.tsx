"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FOOTER_DATA } from "@/constants";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden macos-card border-t border-white/10 text-white/80 p-10 rounded-t-2xl select-none mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 relative z-10"
      >
        {FOOTER_DATA.map((column) => (
          <div key={column.title} className="min-w-[250px] flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-white/90 mb-5 text-base tracking-wide">
              {column.title}
            </h3>
            <nav className="flex flex-col gap-3 w-full">
              {column.data.map(({ icon: Icon, name, link }) => (
                <motion.a
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 sm:justify-start justify-center text-white/60 hover:text-white transition-colors duration-300 font-normal text-sm relative group"
                >
                  {Icon && <Icon className="w-4 h-4 text-white/70" />}
                  <span>{name}</span>
                </motion.a>
              ))}
            </nav>
          </div>
        ))}
      </motion.div>

      {/* Social & contact section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <a
            href="mailto:moustaidbusiness@gmail.com"
            className="flex items-center gap-2 text-white/70 hover:text-white transition text-sm"
            aria-label="Send Email"
          >
            <FaEnvelope className="w-4 h-4" />
            <span>moustaidbusiness@gmail.com</span>
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/joshMoustaid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-all transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="text-white/50 text-xs font-normal tracking-wide">
          &copy; Youssef Moustaid {new Date().getFullYear()} — All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};
