'use client';

import { motion } from 'framer-motion';

const tagVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 },
    }),
};

export default function About() {
    const keywords = [
        'Data Science',
        'Machine Learning',
        'Spring Boot',
        'React',
        'Python',
        'Cloud Engineering',
        'Microservices',
        'Clean Architecture',
        'Creative Problem Solving',
    ];

    return (
        <main className="h-full w-full px-6 py-24 text-white">
            <div className="max-w-6xl mx-auto flex flex-col gap-16">
                {/* Header */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-extrabold tracking-tight"
                >
                    About Me
                </motion.h1>

                {/* Main content layout */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.2 }}
                    className="grid md:grid-cols-2 gap-12 items-start"
                >
                    {/* Left side */}
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <motion.p>
                            I’m <span className="text-white font-semibold">Youssef Moustaid</span> — a forward-thinking software engineer and future data scientist based in Casablanca. Currently in my final year at EMSI, I’m passionate about engineering systems that are as beautiful in design as they are powerful in function.
                        </motion.p>
                        <motion.p>
                            I blend my interests in <span className="text-white font-medium">data, AI, and backend architecture</span> to build impactful solutions — from real-time VR environments to intelligent job platforms and predictive pharmaceutical dashboards.
                        </motion.p>
                        <motion.p>
                            Known for being analytical, fast-learning, and highly creative, I’m constantly experimenting with emerging technologies — and thrive when bridging performance and user-centric design.
                        </motion.p>
                        <motion.p>
                            My toolkit includes <span className="text-white font-semibold">Python, Java, Spring Boot, React, Postgres, MongoDB</span>, and more — and I'm comfortable across the full stack, from the terminal to the front-facing UI.
                        </motion.p>

                        {/* Tech tags */}
                        <motion.div className="flex flex-wrap gap-2 mt-6">
                            {keywords.map((word, i) => (
                                <motion.span
                                    key={word}
                                    custom={i}
                                    variants={tagVariants}
                                    className="px-3 py-1 bg-blue-600 bg-opacity-20 text-sm rounded-full border border-blue-400 text-white"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right side: Timeline & Cards */}
                    <div className="flex flex-col gap-6">
                        {/* Timeline style journey card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="rounded-xl p-6 border border-gray-700 bg-gradient-to-br from-[#111827] to-[#1f2937] shadow-lg backdrop-blur-lg"
                        >
                            <h3 className="text-xl font-bold mb-4 text-white">Journey</h3>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li>🎓 <span className="text-white font-medium">2021–2025</span>: Engineering Degree at EMSI – MIAGE specialization - Currently going</li>
                                <li>🧠 Led backend & AI on multiple team projects and apps</li>
                                <li>🏆 Participated in tech competitions and hackathons</li>
                                <li>🚀 Built full-stack platforms, recommender systems, and VR labs</li>
                            </ul>
                        </motion.div>

                        {/* Vision card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="rounded-xl p-6 border border-gray-700 bg-gradient-to-br from-[#111827] to-[#1f2937] shadow-lg backdrop-blur-lg"
                        >
                            <h3 className="text-xl font-bold mb-4 text-white">Vision</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                I aim to craft technology that empowers people — intelligent platforms, clean backend systems,
                                and human-centered interfaces. I'm not just solving technical problems, I'm building momentum
                                toward a smarter, more intuitive future.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
