'use client';

import dynamic from 'next/dynamic';
import { Hero } from "@/components/main/hero";
import Cursor from "@/components/util/cursor";

// Lazy load components with loading states
const Skills = dynamic(() => import("@/components/main/skills").then(mod => ({ default: mod.Skills })), {
    loading: () => <div className="h-screen flex items-center justify-center"><div className="text-white text-xl animate-pulse">Loading Skills...</div></div>,
    ssr: true
});

const Encryption = dynamic(() => import("@/components/main/encryption").then(mod => ({ default: mod.Encryption })), {
    loading: () => <div className="h-screen flex items-center justify-center"><div className="text-white text-xl animate-pulse">Loading...</div></div>,
    ssr: true
});

const Projects = dynamic(() => import("@/components/main/projects").then(mod => ({ default: mod.Projects })), {
    loading: () => <div className="h-screen flex items-center justify-center"><div className="text-white text-xl animate-pulse">Loading Projects...</div></div>,
    ssr: true
});

const Contact = dynamic(() => import("@/components/main/contact"), {
    loading: () => <div className="h-screen flex items-center justify-center"><div className="text-white text-xl animate-pulse">Loading Contact...</div></div>,
    ssr: true
});

const Blogs = dynamic(() => import("@/components/main/blogs").then(mod => ({ default: mod.Blogs })), {
    loading: () => <div className="h-screen flex items-center justify-center"><div className="text-white text-xl animate-pulse">Loading Blogs...</div></div>,
    ssr: true
});

export default function Home() {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20">
                <Cursor />
                {/* Hero loads immediately - it's the first thing users see */}
                <Hero />
                
                {/* Other components lazy load as user scrolls */}
                <Skills />
                <Encryption />
                <Projects />
                <Contact />
                <Blogs />
            </div>
        </main>
    );
}

