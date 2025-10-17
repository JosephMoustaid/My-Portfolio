'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[60px] fixed top-0 bg-black/40 backdrop-blur-xl border-b border-white/5 z-50 px-6">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto max-w-7xl">
        {/* Logo + Name */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Logo"
              width={36}
              height={36}
              draggable={false}
              className="cursor-pointer transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"
            />
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-full bg-purple-400/0 group-hover:bg-purple-400/20 blur-xl transition-all duration-500" />
          </div>
          <div className="hidden md:flex font-semibold text-white/90 group-hover:text-white transition-colors">
            Youssef Moustaid
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1 bg-[var(--bg-secondary)] border border-[var(--border-primary)] backdrop-blur-[24px] rounded-2xl px-3 py-2 transition-colors duration-300 hover:bg-[var(--bg-tertiary)]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer px-3 py-1.5 rounded-lg hover:bg-white/5 group"
              >
                {link.title}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}

            {/* Source Code */}
            <Link
              href={LINKS.github}
              target="_blank"
              rel="noreferrer noopener"
              className="relative text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer px-3 py-1.5 rounded-lg hover:bg-white/5 group"
            >
              Github
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-3/4 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex items-center gap-3">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              className="text-white/60 hover:text-white transition-all p-2 rounded-lg hover:bg-white/5"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white/80 hover:text-white focus:outline-none text-2xl transition-all p-2 hover:bg-white/5 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col items-center md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-5 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="text-base font-medium text-white/80 hover:text-white transition-colors w-full text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-base font-medium text-white/80 hover:text-white transition-colors w-full text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Github
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-white/10 w-full">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="text-white/60 hover:text-white transition-colors"
              >
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};