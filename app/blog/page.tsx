import { BlogCard } from "@/components/sub/blog-card";
import { BLOGS } from "@/constants";
import Cursor from "@/components/util/cursor";

export default function TechAndHumanity() {
    return (
      <main className=" mx-auto px-1 text-white">
        <Cursor />
        <section
              id="blog"
              className="flex flex-col items-center justify-center py-12"
          >
              <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                BLogs
              </h1>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-2 w-full px-24">
                  {BLOGS.map((blog) => (
                      <BlogCard
                          key={blog.title}
                          image={blog.image}
                          title={blog.title}
                          summary={blog.summary}
                          link={blog.link}
                          date={blog.date}
                      />
                  ))}
              </div>
          </section>
      </main>
    );
  }
