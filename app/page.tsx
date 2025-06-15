"use client";

import ReadyToTransform from "@/components/ReadyToTransform";
import { useBlogStore } from "@/components/blogStore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { blogs, fetchBlogs } = useBlogStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (blogs.length === 0) {
      fetchBlogs().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [blogs]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-12 h-12 border-4 border-[#192040] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        blogs found.
      </div>
    );
  }

  const featured = blogs[0];
  const latest = blogs.slice(1, 5);

  return (
    <div className="relative">
      <main className="relative min-h-screen">
        {/* Top Section with Curved Background */}
        <section className="relative bg-[#192040] pb-[150px] pt-16 px-4 sm:px-8 overflow-hidden">
          {/* Curve SVG */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none select-none">
            <svg
              className="relative block w-full h-[300px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#F7F6F8"
                d="M0,320 Q720,0 1440,320 L1440,320 L0,320 Z"
              />
            </svg>
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="mb-12">
              <span className="block text-lg font-semibold text-white/70 mb-2 tracking-widest">BLOGS</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Discover Our Latest <br /> Articles
              </h1>
            </div>

            {/* Featured Blog */}
            <div className="bg-[#20294A] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-lg mb-16">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full md:w-80 h-56 object-cover rounded-xl mb-6 md:mb-0"
              />
              <div className="flex-1 flex flex-col justify-center items-start">
                <span className="text-xs font-semibold text-white/60 mb-2">Featured</span>
                <h2 className="text-2xl font-bold text-white mb-4 leading-snug">{featured.title}</h2>
                <span className="text-sm text-white/50 mb-6">{featured.date}</span>
                <Link
                  href={`/blogs/${featured.id}`}
                  className="inline-flex items-center px-6 py-2 bg-[#5B5FE8] text-white rounded-full font-medium hover:bg-[#4347b8] transition text-base"
                >
                  Read More <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Latest Blogs Section */}
        <section className="bg-[#F7F6F8] pb-56 pt-20 px-4 sm:px-8 -mt-20 z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#192040] mb-10">Latest Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
              {latest.map((blog) => (
                <div key={blog.id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-xl font-semibold text-[#192040] mb-2">{blog.title}</h3>
                  <span className="text-sm text-gray-500 mb-4">{blog.date}</span>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center px-5 py-2 bg-[#192040] text-white rounded-full font-medium hover:bg-[#23263A] transition text-base w-fit"
                  >
                    Read More <span className="ml-2">→</span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link
                href="/blogs"
                className="inline-block px-8 py-3 bg-[#192040] text-white rounded-full font-semibold hover:bg-[#23263A] transition text-lg"
              >
                See all blogs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ReadyToTransform className="absolute left-1/2 -bottom-32 z-50 w-[90vw] max-w-7xl min-h-[300px] transform -translate-x-[57%]" />
    </div>
  );
}
