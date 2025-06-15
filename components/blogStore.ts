"use client"

import { create } from 'zustand';

interface Blog {
    title: string;
    image: string;
    date: string;
    content: string;
}

interface BlogStore {
    blogs: Blog[];
    getBlogs: () => Blog[];
    addBlog: (blog: Blog) => void;
}

const initialBlogs: Blog[] = [
    {
        title: "Why Your Current Mobile POS Systems Might Be Failing Your Retail Business",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        date: "22 Feb 2024",
        content: "This is the detailed content for the first blog post. You can expand this as needed.",
    },
    {
        title: "Retail's New Power Tool: Why Generative AI Matters More Than Ever",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
        date: "25 Feb 2024",
        content: "This is the detailed content for the second blog post. You can expand this as needed.",
    },
    {
        title: "Can Data-Driven Insights Improve Your Promotions, Inventory, and Customer Engagement?",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop",
        date: "22 Mar 2024",
        content: "This is the detailed content for the third blog post. You can expand this as needed.",
    },
    {
        title: "The Future of Retail: Omnichannel Strategies for Success",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=250&fit=crop",
        date: "10 Apr 2024",
        content: "This is the detailed content for the fourth blog post. You can expand this as needed.",
    },
    {
        title: "How AI is Transforming Customer Experience in E-Commerce",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=250&fit=crop",
        date: "18 Apr 2024",
        content: "This is the detailed content for the fifth blog post. You can expand this as needed.",
    },
];

export const useBlogStore = create<BlogStore>((set) => ({
    blogs: initialBlogs,
    getBlogs: () => initialBlogs,
    addBlog: (blog) => set((state) => ({ blogs: [blog, ...state.blogs] })),
})); 