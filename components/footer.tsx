import {
  FaInstagram,
  FaLinkedinIn,
  FaShieldAlt,
  FaTwitter,
  FaGithub
} from "react-icons/fa"
import { MdCheckCircle } from "react-icons/md"

const footerNavigation = {
  platforms: [
    { name: "Unified Commerce", href: "#" },
    { name: "Ordazzle", href: "#" },
    { name: "Omni Channel", href: "#" },
  ],
  industries: [
    { name: "Retail & Consumer Goods", href: "#" },
    { name: "Fashion & Lifestyle", href: "#" },
    { name: "Home & Living", href: "#" },
    { name: "Technology & Electronics", href: "#" },
    { name: "Speciality & Leisure", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Join Our Team", href: "#" },
    { name: "Events", href: "#" },
    { name: "Newsroom", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Become a Partner", href: "#" },
  ],
  resources: [
    { name: "White papers", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Knowledge Base", href: "#" },
    { name: "Podcasts", href: "#" },
    { name: "Blog", href: "/blogs" },
    { name: "Testimonials", href: "#" },
    { name: "Product Videos", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-[#101628] text-foreground py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {Object.entries(footerNavigation).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-semibold text-white mb-6 text-lg uppercase tracking-wider">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-all duration-200 block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 border-t border-gray-800 pt-12">
          <h4 className="text-xl font-semibold mb-4 text-white">Subscribe to Our Newsletter</h4>
          <form className="flex flex-col sm:flex-row items-center sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded text-white font-medium transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Section */}
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

      </div>
    </footer>
  )
}
