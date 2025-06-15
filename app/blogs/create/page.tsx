"use client"

import { useBlogStore } from "@/components/blogStore";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { stockImages } from "@/data/stockedImg";
import { createBlog } from "@/lib/api";
import { BlogFromsValue } from "@/lib/types";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";
import { useState } from "react";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function CreateBlogPage() {
    const addBlog = useBlogStore((state: any) => state.addBlog);
    const [form, setForm] = useState<BlogFromsValue>({
        title: "",
        image: "",
        date: "",
        content: "",
        tags: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const [focusedField, setFocusedField] = useState<string | null>(null);

    // For floating label effect
    const isFilled = (field: string) => form[field as keyof typeof form].length > 0;

    // For tag chips
    const tagList: any = form.tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);



    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            const newBlog = await createBlog({ ...form, tags: tagList });
            addBlog(newBlog); // store in zustand
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                router.push("/blogs");
            }, 1200);
        } catch (error) {
            console.error("Blog creation failed:", error);
            alert("Something went wrong while creating the blog. Please try again.");
        }
    }

    // Animate card on mount
    useState(() => {
        setTimeout(() => setMounted(true), 50);
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f7f8fa] to-[#e3e6f3] flex items-center justify-center py-12 px-2">
            <div className={classNames(
                "w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 relative transition-all duration-500",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
                <Breadcrumb
                    items={[
                        { label: "Blogs", href: "/blogs" },
                        { label: "Create Blog", href: "#", active: true },
                    ]}
                />
                <h1 className="text-4xl font-extrabold mb-2 text-[#192040]">Create a New Blog</h1>
                <p className="text-gray-500 mb-8">Share your insights, stories, or updates with the world. Fill out the form below to publish a new blog post.</p>
                <form onSubmit={handleSubmit} className="space-y-7">
                    {/* Title */}
                    <div className="relative">
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            required
                            className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#5B5FE8] text-gray-900 bg-gray-50 placeholder-transparent"
                            placeholder="Title"
                        />
                        <label
                            htmlFor="title"
                            className="absolute left-4 top-0 text-gray-500 text-sm transition-all transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-500 peer-focus:scale-90 bg-white px-1"
                        >
                            Title
                        </label>
                    </div>
                    {/* Image URL */}
                    <div className="relative">
                        <input
                            id="image"
                            type="text"
                            name="image"
                            value={form.image}
                            onChange={handleChange}
                            required
                            placeholder="Please select the image from below"
                            className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#5B5FE8] text-gray-900 bg-gray-50 placeholder-transparent"
                        />
                        <label
                            htmlFor="image"
                            className="absolute left-4 top-2 text-gray-500 text-sm transition-all transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-500 peer-focus:scale-90 bg-white px-1"
                        >
                            Please select the image from below
                        </label>
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto mt-2">
                        {stockImages.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                className={`w-20 h-20 object-cover rounded cursor-pointer border ${form.image === url ? 'border-[#5B5FE8]' : 'border-transparent'
                                    }`}
                                onClick={() => setForm(prev => ({ ...prev, image: url }))}
                                alt={`Stock ${index}`}
                            />
                        ))}
                    </div>
                    <div className="relative">
                        <input
                            id="tags"
                            type="text"
                            name="tags"
                            value={form.tags}
                            onChange={handleChange}
                            placeholder="Tags (comma separated)"
                            className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#5B5FE8] text-gray-900 bg-gray-50 placeholder-transparent"
                        />
                        <label
                            htmlFor="tags"
                            className="absolute left-4 top-2 text-gray-500 text-sm transition-all transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-500 peer-focus:scale-90 bg-white px-1"
                        >
                            Tags (comma separated)
                        </label>

                        {tagList.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {tagList.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-[#5B5FE8]/10 text-[#5B5FE8] px-3 py-1 rounded-full text-xs font-semibold border border-[#5B5FE8]/30"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Date */}
                    <div className="relative">
                        <input
                            id="date"
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            required
                            placeholder="yyyy-mm-dd"
                            className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#5B5FE8] text-gray-900 bg-gray-50 placeholder-transparent"
                        />
                        <label
                            htmlFor="date"
                            className="absolute left-4 top-2 text-gray-500 text-sm transition-all transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-500 peer-focus:scale-90 bg-white px-1"
                        >
                            Date
                        </label>
                    </div>

                    {/* Content */}
                    <div className="relative">
                        <textarea
                            id="content"
                            name="content"
                            value={form.content}
                            onChange={handleChange}
                            required
                            rows={6}
                            maxLength={2000}
                            placeholder="Write your blog content here..."
                            className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#5B5FE8] text-gray-900 bg-gray-50 placeholder-transparent resize-none"
                        />
                        <label
                            htmlFor="content"
                            className="absolute left-4 top-2 text-gray-500 text-sm transition-all transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-500 peer-focus:scale-90 bg-white px-1"
                        >
                            Content
                        </label>

                        <div className="absolute right-4 bottom-2 text-xs text-gray-400">
                            {form.content.length}/2000
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-md hover:from-pink-500 hover:to-orange-500 transition-all duration-200 disabled:opacity-50"
                    >
                        {isSubmitting ? "Creating..." : "Create Blog"}
                    </button>                </form>
                {/* Success Toast */}
                {showToast && (
                    <div className="fixed left-1/2 top-8 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-fade-in">
                        Blog created successfully!
                    </div>
                )}
            </div>
        </div>
    );
} 