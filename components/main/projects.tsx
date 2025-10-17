





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
        className="flex items-center justify-center"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 font-extrabold">
          My Projects
        </h1>
              <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Some of recernt work.
        </div>
      </div>
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
          className="mt-10 py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-300"
        >
          Show More Projects
        </button>
      )}

      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="mt-10 py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-300"
        >
          Show Less
        </button>
      )}
    </section>
  );
};






