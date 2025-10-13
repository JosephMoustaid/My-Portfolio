'use client';

import { motion } from 'framer-motion';
import me from '../../public/me/download.png';
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
        'Data Engineering',
        'Microservices',
        'Spring Boot',
        'Apache Spark',
        'AWS Cloud',
        'Kafka & Airflow',
        'Python & Java',
        'Machine Learning',
        'Docker & CI/CD',
        'Distributed Systems',
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
                        <motion.img
                            src={me.src}
                            alt="Youssef Moustaid"
                            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500 align-center mx-auto md:mx-0 justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        />
                        <motion.p>
                            I'm <span className="text-white font-semibold">Youssef Moustaid</span> — a Software & Data Engineer based in Casablanca, specializing in building scalable distributed systems and data-driven solutions. Currently completing my Engineering degree at EMSI with a focus on Software Engineering and Distributed Systems.
                        </motion.p>
                        <motion.p>
                            With hands-on experience from internships at <span className="text-white font-medium">Marketing Confort</span> (Microservices Architecture), the <span className="text-white font-medium">Multidisciplinary Research Lab</span> (WebXR & Real-time Systems), and <span className="text-white font-medium">World Wide Loyalty System</span> (Data Analytics), I've developed expertise in architecting end-to-end solutions that bridge engineering excellence with business impact.
                        </motion.p>
                        <motion.p>
                            I excel at designing <span className="text-white font-medium">cloud-native data pipelines, microservices architectures, and real-time analytics platforms</span> — leveraging technologies like Spring Boot, AWS, Apache Spark, Kafka, and Airflow. My approach combines software engineering rigor with data science innovation to deliver production-ready systems.
                        </motion.p>
                        <motion.p>
                            Certified as an <span className="text-white font-semibold">IBM Professional Data Engineer</span>, <span className="text-white font-semibold">AWS Cloud Practitioner</span>, and <span className="text-white font-semibold">IBM Professional Data Scientist</span>, I bring a comprehensive skill set spanning distributed computing, machine learning, and modern DevOps practices.
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
                        {/* Professional Experience */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="rounded-xl p-6 border border-gray-700 bg-gradient-to-br from-[#111827] to-[#1f2937] shadow-lg backdrop-blur-lg"
                        >
                            <h3 className="text-xl font-bold mb-4 text-white">Professional Experience</h3>
                            <ul className="space-y-4 text-gray-300 text-sm">
                                <li>
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-white font-semibold">Full-Stack Engineer</span>
                                        <span className="text-gray-400 text-xs">Jul–Sept 2025</span>
                                    </div>
                                    <div className="text-blue-400 text-xs mb-2">Marketing Confort</div>
                                    <p className="text-xs leading-relaxed">Architected 9 Spring Boot microservices with API Gateway, reducing latency by 30%. Implemented CI/CD pipelines and connected services to mobile & CMS platforms.</p>
                                </li>
                                <li>
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-white font-semibold">Full-Stack Engineer</span>
                                        <span className="text-gray-400 text-xs">Jul–Sept 2024</span>
                                    </div>
                                    <div className="text-blue-400 text-xs mb-2">Multidisciplinary Research Lab</div>
                                    <p className="text-xs leading-relaxed">Built immersive WebXR learning platform with real-time WebSockets collaboration. Managed full project lifecycle applying software architecture principles.</p>
                                </li>
                                <li>
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-white font-semibold">Data Analyst</span>
                                        <span className="text-gray-400 text-xs">Aug 2022</span>
                                    </div>
                                    <div className="text-blue-400 text-xs mb-2">World Wide Loyalty System</div>
                                    <p className="text-xs leading-relaxed">Analyzed user data and built interactive dashboards with Google Analytics & SQL, boosting engagement by 15% through predictive analytics.</p>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Education & Certifications */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="rounded-xl p-6 border border-gray-700 bg-gradient-to-br from-[#111827] to-[#1f2937] shadow-lg backdrop-blur-lg"
                        >
                            <h3 className="text-xl font-bold mb-4 text-white">Education & Certifications</h3>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li>🎓 <span className="text-white font-medium">EMSI (2021–2025)</span> — Software Engineering & Distributed Systems</li>
                                <li>� <span className="text-white">IBM Professional Data Engineer</span> (2024)</li>
                                <li>☁️ <span className="text-white">AWS Cloud Practitioner</span> (2025)</li>
                                <li>🧠 <span className="text-white">IBM Professional Data Scientist</span> (2024)</li>
                                <li>🗄️ <span className="text-white">IBM Relational Database Administration</span> (2025)</li>
                                <li>🏆 <span className="text-white">MIT x OpenAI Hackathon</span> — AI Finance Dashboard (2025)</li>
                            </ul>
                        </motion.div>



                        {/* Key Projects */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="rounded-xl p-6 border border-gray-700 bg-gradient-to-br from-[#111827] to-[#1f2937] shadow-lg backdrop-blur-lg"
                        >
                            <h3 className="text-xl font-bold mb-4 text-white">Notable Projects</h3>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li>📊 <span className="text-white font-medium">RetailDataOps</span> — Cloud-native analytics platform with Spark, ETL pipelines, and real-time BI dashboards</li>
                                <li>🚚 <span className="text-white font-medium">GlobalSupplyChain</span> — Real-time streaming pipeline using Kafka, Airflow & AWS Data Lake</li>
                                <li>💊 <span className="text-white font-medium">PharmaIQ</span> — Drug shortage prediction with Random Forest, ETL pipeline & Django deployment</li>
                                <li>🔧 <span className="text-white font-medium">Bricole</span> — Job marketplace with NLP matching, Spring Boot REST API & Docker containerization</li>
                            </ul>
                        </motion.div>

                        {/* Vision card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="rounded-xl p-6 border border-gray-700 bg-gradient-to-br from-[#111827] to-[#1f2937] shadow-lg backdrop-blur-lg"
                        >
                            <h3 className="text-xl font-bold mb-4 text-white">Vision & Approach</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                I build systems that scale — combining data engineering excellence with software architecture best practices. 
                                From designing distributed pipelines to deploying production microservices, I focus on delivering solutions 
                                that are maintainable, performant, and drive measurable business value. My goal is to bridge the gap between 
                                raw data and actionable intelligence through robust, cloud-native platforms.
                            </p>
                        </motion.div>

                 
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
