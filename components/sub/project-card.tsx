'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <Link
        href={`/project/${title}` || link}
        className="relative flex flex-col overflow-hidden rounded-2xl macos-card h-full"
      >
        {/* Image with overlay gradient */}
        <div className="relative h-[220px] w-full overflow-hidden">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover object-top transition-all duration-700 ease-out group-hover:scale-110"
          />
          {/* Refined gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-50 transition-opacity duration-500" />
          
          {/* Floating view icon */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90">
            <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 px-5 py-5 flex-grow">
          <h2 className="text-lg font-semibold tracking-tight text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
            {title}
          </h2>
          <p className="text-sm text-white/60 leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors">
            {description}
          </p>

          {/* Tech badges with stagger animation */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {technologies.slice(0, 3).map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm transition-all group-hover:bg-white/10 group-hover:text-white group-hover:border-white/15"
              >
                {tech}
              </motion.span>
            ))}
            {technologies.length > 3 && (
              <span className="bg-white/5 text-white/50 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Subtle bottom glow on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/0 to-transparent group-hover:via-purple-400/50 transition-all duration-500" />
      </Link>
    </motion.div>
  );
};
