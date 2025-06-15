"use client";

import { getBlogs } from "@/lib/api"; // ✅ adjust path as needed
import { Blog, BlogStore } from "@/lib/types";
import { create } from "zustand";


export const useBlogStore = create<BlogStore>((set, get) => ({
    blogs: [],
    page: 1,
    loading: false,
    error: null,

    fetchBlogs: async (page = 1, limit = 10) => {
        if (get().loading) return;
        set({ loading: true, error: null });

        try {
            const data = await getBlogs(page, limit);

            const formatted = data.map((post: any, idx: number) => ({
                id: post.id,
                title: post.title,
                image: `https://picsum.photos/seed/${page * limit + idx}/400/250`,
                date: new Date().toLocaleDateString(),
                content: post.body,
            }));

            set((state) => ({
                blogs: [...state.blogs, ...formatted],
                loading: false,
                page,
            }));
        } catch (err: any) {
            set({ error: err.message || "Something went wrong", loading: false });
        }
    },

    addBlog: (blog: Blog) => set((state) => ({ blogs: [blog, ...state.blogs] })),
}));

