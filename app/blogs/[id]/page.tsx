"use client";

import { useBlogStore } from "@/components/blogStore";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function BlogDetails({ params }) {
    const { id } = params;
    const blogId = parseInt(id, 10);
    const { blogs, fetchBlogs } = useBlogStore();
    const [loading, setLoading] = useState(true);

    const blog = blogs.find((b) => b.id === blogId);

    useEffect(() => {
        if (blogs.length === 0) {
            fetchBlogs().finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);


    if (!blog) {
        return <div className="p-8 text-center text-xl">Blog not found.</div>;
    }
    if (loading) return <Loader />;
    return (
        <div className="max-w-3xl mx-auto py-16 px-4">
            <Breadcrumb
                items={[
                    { label: "Blogs", href: "/blogs" },
                    { label: blog.title, href: "#", active: true },
                ]}
            />
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-72 object-cover rounded-xl mb-8"
            />
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <span className="text-gray-500 text-sm mb-6 block">{blog.date}</span>
            <div className="text-lg text-gray-700 leading-relaxed">{blog.content}</div>

        </div>
    );
}
