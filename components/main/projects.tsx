





import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { useEffect } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import 'aos/dist/aos.css'; // Import AOS styles

export const Projects = () => {
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
      </div>






      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full">
          {PROJECTS.map((project, index) => (

            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              technologies={project.technologies}
            />
          ))}
        </div>
    </section>
  );
};






