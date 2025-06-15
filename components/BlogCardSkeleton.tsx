// components/BlogCardSkeleton.tsx
export default function BlogCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 animate-pulse flex flex-col justify-between">
            <div className="w-full h-56 bg-gray-200 rounded-xl mb-6"></div>
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="h-10 w-32 bg-gray-300 rounded-full mt-auto"></div>
        </div>
    );
}
