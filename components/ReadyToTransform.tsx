"use client"

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ReadyToTransform({ className = "" }) {
    // By default, left-[58%] for small screens, md:left-1/2 for medium and up
    const positionClass = "left-[58%] md:left-1/2 -translate-x-1/2";
    const redirectToCall = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = "tel:+918340290109";
    };
    return (
        <div className={`absolute ${positionClass} -bottom-32 z-50 w-[90vw] max-w-7xl min-h-[300px] bg-[#172143] rounded-2xl px-8 py-20 flex flex-col md:flex-row items-center justify-between shadow-lg ${className}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-0">Ready to Transform<br />Your Retail?</h2>
            <Link
                onClick={redirectToCall}
                href=""
                className="flex items-center bg-[#6C77E6] text-white px-7 py-2 rounded-full font-medium text-base hover:bg-[#7d89f7] transition shadow"
            >
                Lets Talk <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
        </div>
    );
} 