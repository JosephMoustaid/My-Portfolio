'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  technologies: readonly string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  technologies,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/project/${title}` || link}
        target="_blank"
        rel="noreferrer noopener"
        className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl hover:shadow-[0_0_40px_#9333ea55] transition-all duration-300 hover:scale-[1.025]"
      >
        {/* Image */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-t-3xl">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 px-6 py-5 text-white">
          <h2 className="text-2xl font-extrabold tracking-tight group-hover:text-purple-400 transition">
            {title}
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">{description}</p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-white/10 text-purple-200 text-xs font-medium px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Glow Border */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:ring-2 group-hover:ring-purple-600/60 transition" />
      </Link>
    </motion.div>
  );
};
