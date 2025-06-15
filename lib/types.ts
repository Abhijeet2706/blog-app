export interface Blog {
    title: string;
    image: string;
    date: string;
    content: string;
    id: number;
}

export interface BlogStore {
    blogs: Blog[];
    loading: boolean;
    error: string | null;
    fetchBlogs: (page?: number, limit?: number) => Promise<void>;
    addBlog: (blog: Blog) => void;
    page: number
}

export interface BlogFromsValue {
    title: string;
    image: string;
    date: string;
    tags?: string;
    content: string;
}
