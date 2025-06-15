"use client"

import BlogCardSkeleton from "@/components/BlogCardSkeleton";
import { useBlogStore } from "@/components/blogStore";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function BlogsPage() {
  const { blogs, fetchBlogs, loading, page } = useBlogStore();
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchBlogs(1, 10);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading) {
          fetchBlogs(page + 1, 10);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loaderRef.current, page, loading]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ label: "Blogs", href: "/blogs", active: true }]} />
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">All Blogs</h1>
        <Link href="/blogs/create" className="px-6 py-2 bg-[#192040] text-white rounded-full font-semibold hover:bg-[#23263A] transition text-base">
          Add Blog
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
            <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover rounded-xl mb-6" />
            <h3 className="text-xl font-semibold text-[#192040] mb-2">{blog.title}</h3>
            <span className="text-sm text-gray-500 mb-4">{blog.date}</span>
            <Link href={`/blogs/${blog.id}`} className="inline-flex items-center px-5 py-2 bg-[#192040] text-white rounded-full font-medium hover:bg-[#23263A] transition text-base w-fit mt-auto">
              Read More <span className="ml-2">→</span>
            </Link>
          </div>
        ))}
      </div>
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-8">
          {[...Array(10)].map((_, idx) => (
            <BlogCardSkeleton key={`skeleton-${idx}`} />
          ))}
        </div>
      )}
      <div ref={loaderRef} className="h-10 flex justify-center items-center my-6">
        {loading && <span className="text-gray-500">Loading more blogs...</span>}
      </div>
    </div>
  );
}
