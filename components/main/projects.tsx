





import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { useEffect, useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import 'aos/dist/aos.css'; // Import AOS styles

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? PROJECTS.slice().reverse() : PROJECTS.slice().reverse().slice(0, 6);

  useEffect(() => {
    // Initialize AOS when component mounts
    const AOS = require('aos');
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true // animations only happen once
    });
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <div 
        data-aos="fade-down" 
        data-aos-delay="100"
        className="flex flex-col items-center justify-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-white/95 mb-3 tracking-tight">
          My Projects
        </h1>
        <p className="text-base text-white/60 font-normal">
          Some of recent work.
        </p>
      </div>






      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              technologies={project.technologies}
            />
          ))}      </div>

      {!showAll && PROJECTS.length > 6 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-12 py-3 px-7 button-primary text-center text-white/95 cursor-pointer rounded-xl text-base font-medium"
        >
          Show More Projects
        </button>
      )}

      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="mt-12 py-3 px-7 button-primary text-center text-white/95 cursor-pointer rounded-xl text-base font-medium"
        >
          Show Less
        </button>
      )}
    </section>
  );
};






