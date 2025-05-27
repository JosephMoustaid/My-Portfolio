import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
    image: string;
    title: string;
    summary: string;
    link: string;
    date: string;
};

export const BlogCard = ({
                             image,
                             title,
                             summary,
                             link,
                             date,
                         }: BlogCardProps) => {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="group bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] border border-[#2A0E61] rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
        >
            <div className="relative w-full h-52">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:brightness-110 transition-all duration-300"
                />
            </div>

            <div className="p-5 flex flex-col justify-between h-64">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:from-purple-500 group-hover:to-cyan-400 transition-all">
                    {title}
                </h2>

                <p className="text-xs text-gray-400 mt-1 mb-3">{date}</p>

                <p className="text-sm text-gray-300 line-clamp-4 leading-relaxed">
                    {summary}
                </p>

                <div className="mt-4 text-sm text-cyan-400 group-hover:underline">
                    Read more →
                </div>
            </div>
        </Link>
    );
};
