"use client"


import { useBlogStore } from "@/components/blogStore"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import Link from "next/link"

interface Post {
  userId: number
  id: number
  title: string
  body: string
  date: string
}

// Random image generator
function getRandomImage(id: number) {
  return `https://picsum.photos/seed/${id}/600/400`
}

export default function BlogsPage() {
  const blogs = useBlogStore((state: any) => state.blogs)
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Blogs", href: "/blogs", active: true },
        ]}
      />
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">All Blogs</h1>
        <Link href="/blogs/create" className="inline-block px-6 py-2 bg-[#192040] text-white rounded-full font-semibold hover:bg-[#23263A] transition text-base">Add Blog</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog: Post, idx: number) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
            <img
              src={getRandomImage(idx)}
              alt={blog.title}
              className="w-full h-56 object-cover rounded-xl mb-6"
            />
            <h3 className="text-xl font-semibold text-[#192040] mb-2">{blog.title}</h3>
            <span className="text-sm text-gray-500 mb-4">{blog.date}</span>
            <Link
              href={`/blogs/${idx}`}
              className="inline-flex items-center px-5 py-2 bg-[#192040] text-white rounded-full font-medium hover:bg-[#23263A] transition text-base w-fit"
            >
              Read More <span className="ml-2">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
