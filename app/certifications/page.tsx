'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CERTIFICATIONS, BADGES } from '@/constants';

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-[#030014] pt-20">
      {/* Hero Section */}
      <div className="w-full h-auto flex flex-col items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            Certifications & Badges
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my professional development journey through various certifications,
            courses, and skill validations from leading technology companies and institutions.
          </p>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-7xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Professional Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0F0F23] to-[#1A1A2E] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-32 relative mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-purple-400 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-400 text-sm mb-3">
                    {cert.date}
                  </p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Badges Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Digital Badges
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BADGES.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0F0F23] to-[#1A1A2E] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/40 group hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 relative mb-4 group-hover:scale-110 transition-transform duration-300 rounded-full overflow-hidden">
                    <Image
                      src={badge.image}
                      alt={badge.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {badge.title}
                  </h3>
                  
                  <p className="text-cyan-400 font-semibold text-sm mb-3">
                    {badge.issuer}
                  </p>
                  
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-6">
            Interested in working together or learning more about my skills?
          </p>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificationsPage;
