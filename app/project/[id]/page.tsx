'use client';

import { PROJECTSDATA } from '@/constants';
import type { Project } from '@/constants';
import { motion } from 'framer-motion';

export default function ProjectDetail({ params }: { params: { id: string } }) {
    const id = params.id;
    const project: Project | undefined = PROJECTSDATA[id as keyof typeof PROJECTSDATA];

    if (!project) {
        return <div className="p-4 text-red-500">Project not found</div>;
    }

    return (
        <main className="h-[100vh] w-full px-6 pt-24 overflow-hidden bg-transparent text-white">
            <div className=" mx-auto h-full w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 h-full"
                >
                    {/* Left: Images */}
                    <div className="space-y-4 overflow-y-auto pr-2">
                        {project.images.map((src: string, idx: number) => (
                            <motion.img
                                key={idx}
                                src={src}
                                alt={`Project image ${idx}`}
                                className="rounded-2xl shadow-md w-full object-cover"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                            />
                        ))}
                    </div>

                    {/* Right: Textual Content */}
                    {/* Right: Textual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-6 overflow-y-auto pl-2 relative"
                    >
                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-4 sticky top-0 bg-transparent z-10 pt-2">
                            {/* Back Button */}
                            <button
                                onClick={() => window.history.back()}
                                className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white flex items-center justify-center text-lg font-bold shadow"
                                title="Go back"
                            >
                                ←
                            </button>
                        </div>

                        {/* Project Title */}
                        <h1 className="text-4xl font-extrabold">{project.title}</h1>

                        {/* Tech Stack */}
                        <div>
                            <p className="text-lg font-semibold">Tech Stack:</p>
                            <ul className="list-disc list-inside">
                                {project.techStack.map((tech: string, idx: number) => (
                                    <li key={idx}>{tech}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Features */}
                        <div>
                            <p className="text-lg font-semibold">Features:</p>
                            <ul className="list-disc list-inside space-y-1">
                                {project.features.map((feature, index) => (
                                    <li key={index}>
                                        <span className="font-medium">{feature.title}:</span>{' '}
                                        {feature.description}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* GitHub Link */}
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                        >
                            View on GitHub
                        </a>
                    </motion.div>

                </motion.div>
            </div>
        </main>
    );
}
