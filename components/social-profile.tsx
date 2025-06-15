"use client"

import {
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaShieldAlt,
    FaTwitter
} from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

export default function SocialProfile() {
    return (
        <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                {/* Logo & Socials */}
                <div className="flex flex-col items-center lg:items-start">
                    <div className="flex items-center mb-3">
                        <span className="text-2xl font-bold text-white">ETP</span>
                        <div className="ml-2 w-0 h-0 border-l-[8px] border-l-orange-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
                    </div>
                    <div className="flex space-x-5">
                        <a
                            href="https://www.linkedin.com/in/abhijeetkumar2706/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn className="w-5 h-5" />
                        </a>
                        <a
                            href="https://github.com/Abhijeet2706"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-black"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.instagram.com/abhijeetkumar_ak/#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-500"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://x.com/ABHIJEE22121366"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-sky-400"
                            aria-label="X"
                        >
                            <FaTwitter className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-red-500"
                            aria-label="YouTube"
                        >
                            {/* You can add YouTube icon here, or use another react-icon */}
                            <svg
                                fill="currentColor"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M10 15l5.19-3L10 9v6zm11.5-3c0-2.5-.5-4.5-1.3-6.2-.4-.8-.9-1.3-1.6-1.6C17.2 4.2 15.2 4 12 4s-5.2.2-6.6.7c-.8.3-1.2.8-1.6 1.6C3.5 7.5 3 9.5 3 12c0 2.5.5 4.5 1.3 6.2.4.8.9 1.3 1.6 1.6 1.4.5 3.4.7 6.6.7s5.2-.2 6.6-.7c.8-.3 1.2-.8 1.6-1.6.8-1.7 1.3-3.7 1.3-6.2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* React-icons stylized badges */}
                <div className="flex space-x-8 mt-4">
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <FaShieldAlt size={48} className="text-green-600" />
                            <MdCheckCircle size={24} className="absolute bottom-0 right-0 text-green-400" />
                        </div>
                        <span className="text-xs font-bold mt-2 text-white">SSF Validated</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <FaShieldAlt size={48} className="text-green-600" />
                            <MdCheckCircle size={24} className="absolute bottom-0 right-0 text-green-400" />
                        </div>
                        <span className="text-xs font-bold mt-2 text-white">DSS Validated</span>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Row */}
            <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-white">
                <p>Copyright © ETP Group Pte Ltd. All rights reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:underline text-white">
                        Privacy Policy
                    </a>
                    <span>|</span>
                    <a href="#" className="hover:underline text-white">
                        Terms of Use
                    </a>
                </div>
            </div>
        </div>
    )
}