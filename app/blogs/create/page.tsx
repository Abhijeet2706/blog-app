"use client"

import { useState } from "react";
import Link from "next/link";
import { useBlogStore } from "@/components/blogStore";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function CreateBlogPage() {
    const addBlog = useBlogStore((state: any) => state.addBlog);
    const [form, setForm] = useState({
        title: "",
        image: "",
        date: "",
        content: "",
        tags: "",
    });
    const [showToast, setShowToast] = useState(false);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const [focusedField, setFocusedField] = useState<string | null>(null);

    // For floating label effect
    const isFilled = (field: string) => form[field as keyof typeof form].length > 0;

    // For tag chips
    const tagList = form.tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

    // Helper to check if a field is focused
    function isFieldFocused(field: string) {
        const el = document.activeElement;
        return (
            (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) &&
            el.name === field
        );
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        addBlog({ ...form, tags: tagList });
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
            router.push("/blogs");
        }, 1200);
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
                            onFocus={() => setFocusedField('title')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5B5FE8] text-gray-900 bg-gray-50 placeholder-transparent"
                            placeholder="Title"
                        />
                        <label className={classNames(
                            "absolute left-4 top-3 text-gray-400 transition-all duration-200 pointer-events-none bg-white px-1",
                            isFilled("title") || focusedField === "title"
                                ? "-top-4 text-xs text-orange-400 bg-white"
                                : ""
                        )}>
                            Title
                        </label>
                    </div>
                    {/* Image URL */}
                    <div className="relative">
                        <input
                            type="text"
                            name="image"
                            value={form.image}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('image')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5B5FE8] text-gray-900 bg-gray-50 placeholder-transparent"
                            placeholder="Image URL"
                        />
                        <label className={classNames(
                            "absolute left-4 top-3 text-gray-400 transition-all duration-200 pointer-events-none bg-white px-1",
                            isFilled("image") || focusedField === "image"
                                ? "-top-4 text-xs text-orange-400 bg-white"
                                : ""
                        )}>
                            Image URL
                        </label>
                        {form.image && form.image.startsWith('http') && (
                            <img
                                src={form.image}
                                alt="Preview"
                                className="mt-3 rounded-lg w-full h-48 object-cover border border-gray-200 shadow-sm"
                                onError={e => (e.currentTarget.style.display = 'none')}
                            />
                        )}
                    </div>
                    {/* Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('date')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5B5FE8] text-gray-900 bg-gray-50 placeholder-transparent"
                                placeholder="yyyy-mm-dd"
                            />
                            <label className={classNames(
                                "absolute left-4 top-3 text-gray-400 transition-all duration-200 pointer-events-none bg-white px-1",
                                isFilled("date") || focusedField === "date"
                                    ? "-top-4 text-xs text-orange-400 bg-white"
                                    : ""
                            )}>
                                Date
                            </label>
                        </div>
                        {/* Tags */}
                        <div className="relative">
                            <input
                                type="text"
                                name="tags"
                                value={form.tags}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('tags')}
                                onBlur={() => setFocusedField(null)}
                                className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5B5FE8] text-gray-900 bg-gray-50 placeholder-transparent"
                                placeholder="Tags (comma separated)"
                            />
                            <label className={classNames(
                                "absolute left-4 top-3 text-gray-400 transition-all duration-200 pointer-events-none bg-white px-1",
                                isFilled("tags") || focusedField === "tags"
                                    ? "-top-4 text-xs text-orange-400 bg-white"
                                    : ""
                            )}>
                                Tags (comma separated)
                            </label>
                            {tagList.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {tagList.map((tag, i) => (
                                        <span key={i} className="bg-[#5B5FE8]/10 text-[#5B5FE8] px-3 py-1 rounded-full text-xs font-semibold border border-[#5B5FE8]/30">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Content */}
                    <div className="relative">
                        <textarea
                            name="content"
                            value={form.content}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('content')}
                            onBlur={() => setFocusedField(null)}
                            required
                            rows={6}
                            maxLength={2000}
                            className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5B5FE8] text-gray-900 bg-gray-50 placeholder-transparent resize-none"
                            placeholder="Write your blog content here..."
                        />
                        <label className={classNames(
                            "absolute left-4 top-3 text-gray-400 transition-all duration-200 pointer-events-none bg-white px-1",
                            isFilled("content") || focusedField === "content"
                                ? "-top-4 text-xs text-orange-400 bg-white"
                                : ""
                        )}>
                            Content
                        </label>
                        <div className="absolute right-4 bottom-2 text-xs text-gray-400">
                            {form.content.length}/2000
                        </div>
                    </div>
                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-md hover:from-pink-500 hover:to-orange-500 transition-all duration-200">Create Blog</button>
                </form>
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