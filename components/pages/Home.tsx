'use client';


import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Blogs } from "@/components/main/blogs";
import Cursor from "@/components/util/cursor";
export default function Home() {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20">
                <Cursor />
                <Hero />
                <Skills />
                <Encryption />
                <Projects />
                <Blogs />
            </div>
        </main>
    );
}

