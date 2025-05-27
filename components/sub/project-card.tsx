import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  technologies:  readonly string[];
};

export const ProjectCard = ({
                              src,
                              title,
                              description,
                              link,
                              technologies,
                            }: ProjectCardProps) => {
  return (
      <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="group relative overflow-hidden rounded-xl border border-[#2A0E61] bg-gradient-to-br from-[#0d0b22] to-[#1a1445] p-3 transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_#a855f7aa]"
      >
        <div className="relative h-56 w-full overflow-hidden rounded-md">
          <Image
              src={src}
              alt={title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="mt-4 space-y-2">
          <h2 className="text-white text-xl font-bold tracking-wide">
            {title}
          </h2>
          <p className="text-gray-400 text-sm">{description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech, index) => (
                <span
                    key={index}
                    className="bg-[#3f2b96] bg-opacity-30 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-600"
                >
              {tech}
            </span>
            ))}
          </div>
        </div>
      </Link>
  );
};
