"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Unified Commerce",
    href: "#",
    hasDropdown: true,
    dropdownContent: {
      title: "Unified Commerce",
      description:
        "ETP Unify is a powerful cloud-native Unified Commerce Retail Solution. Built using MACH Architecture, it brings the best of Retail and e-commerce functionality to the user in one, easy to use, and beautiful interface.",
      exploreLink: "Explore All Features",
      features: {
        left: [
          "Cloud POS & Retail Operations",
          "Smart Order Management",
          "Omni-Channel Fulfillment",
          "Unified Inventory Management",
          "Unified Promotions Management",
          "Customer Relationship Management",
          "Marketplaces & E-commerce Integrations",
        ],
        right: [
          "Product Information Management",
          "API Management",
          "Seamless Integration with Partners",
          "Artificial Intelligence",
          "Logistics Management",
          "Mobile Applications",
        ],
      },
      whatsNew: [
        {
          title:
            "Can Data-Driven Insights Improve Your Promotions, Inventory, and Customer Engagement?",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
          link: "#",
        },
        {
          title:
            "Why Your Current Mobile POS Systems Might Be Failing Your Retail Business",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
          link: "#",
        },
      ],
    },
  },
  { name: "e-Commerce", href: "#" },
  {
    name: "Omni Channel",
    href: "#",
    hasDropdown: true,
  },
  {
    name: "Company",
    href: "#",
    hasDropdown: true,
  },
  {
    name: "Industries",
    href: "#",
    hasDropdown: true,
  },
  {
    name: "Resources",
    href: "#",
    hasDropdown: true,
  },
  { name: "Partners", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null
  );
  const [showModal, setShowModal] = React.useState(false);
  const pathname = usePathname();

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // OR: Open LinkedIn instead
    window.open("https://linkedin.com/in/abhijeetkumar2706", "_blank");

    setShowModal(false);
  };

  return (
    <>
      <header className="w-full border border-border bg-background">
        <div className="max-w-full px-8 mx-auto">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 mr-8">
              <span className="text-3xl font-bold text-foreground">ETP</span>
              <div className="ml-1 w-0 h-0 border-l-[16px] border-l-orange-400 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 items-center justify-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() =>
                      item.hasDropdown ? handleDropdownToggle(item.name) : null
                    }
                    className={cn(
                      "flex items-center text-base font-medium transition-colors hover:text-foreground",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform",
                          activeDropdown === item.name ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </button>
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-6 ml-8">
              <div className="hidden md:flex items-center">
                <button className="flex items-center text-base font-medium text-muted-foreground hover:text-foreground">
                  EN
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>

              <Button
                asChild
                className="hidden md:inline-flex bg-primary hover:bg-primary/80 text-primary-foreground rounded-full px-8 py-2 shadow-md hover:shadow-lg transition text-base font-medium"
              >
                <Link href="/blogs">Blogs →</Link>
              </Button>

              <Button
                variant="outline"
                className="hidden md:inline-flex rounded-full border border-border text-foreground font-medium px-8 py-2 bg-transparent hover:bg-accent/50 transition items-center gap-2 text-base"
                onClick={() => setShowModal(true)}
              >
                Let's Talk <span className="ml-1">→</span>
              </Button>
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute top-0 left-0 w-full bg-[#F7F6F8] border-b border-[#23263A] shadow-md animate-slide-down" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 h-16 border-b border-[#23263A]">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-2xl font-bold text-[#1A1C2B]">ETP</span>
                <div className="ml-1 w-0 h-0 border-l-[12px] border-l-orange-400 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#23263A] text-2xl">
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-[#23263A] py-2 px-2 rounded hover:bg-[#23263A]/5 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Modal Contact Form */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4 text-[#1A1C2B]">Let's Talk</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-[#1A1C2B]">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#1A1C2B] focus:ring-[#1A1C2B]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1C2B]">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#1A1C2B] focus:ring-[#1A1C2B]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1C2B]">Message</label>
                <textarea
                  rows={3}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#1A1C2B] focus:ring-[#1A1C2B]"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1A1C2B] text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-[#1A1C2B]/90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
