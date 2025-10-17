import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type BlogCardProps = {
    id : string ;
    image: string;
    title: string;
    summary: string;
    link: string;
    date: string;
};

export const BlogCard = ({   id,
                             image,
                             title,
                             summary,
                             link,
                             date,
                         }: BlogCardProps) => {
    return (
        <Link
            href={link}
            rel="noreferrer noopener"
            className="group macos-card overflow-hidden hover-lift"
        >
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <p className="text-xs text-white font-medium">{date}</p>
                </div>
            </div>

            <div className="p-5 flex flex-col justify-between min-h-[220px]">
                <div>
                    <h2 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-2 mb-3">
                        {title}
                    </h2>

                    <p className="text-sm text-white/65 line-clamp-3 leading-relaxed group-hover:text-white/75 transition-colors">
                        {summary}
                    </p>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-white/80 group-hover:text-white transition-all font-medium group-hover:gap-3">
                    <span>Read article</span>
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/0 to-transparent group-hover:via-purple-400/50 transition-all duration-500" />
        </Link>
    );
};
