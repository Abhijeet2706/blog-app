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
    dropdownContent: {
      title: "Omni Channel",
      description:
        "Seamlessly unify your online and offline retail strategies with powerful omni-channel tools and workflows.",
      exploreLink: "Explore Omni Channel",
      features: {
        left: ["Click & Collect", "Endless Aisle", "Channel Integration"],
        right: ["Real-Time Sync", "Unified Promotions", "Analytics Dashboard"],
      },
      whatsNew: [
        {
          title: "Omni-Channel: The Future of Retail",
          image:
            "https://images.unsplash.com/photo-1565120130296-dfbd03c0f7ec?w=400&h=250&fit=crop",
          link: "#",
        },
      ],
    },
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

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null
  );
  const pathname = usePathname();

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">ETP</span>
                <div className="ml-1 w-0 h-0 border-l-[8px] border-l-orange-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() =>
                    item.hasDropdown ? handleDropdownToggle(item.name) : null
                  }
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-gray-900",
                    pathname === item.href ? "text-gray-900" : "text-gray-600"
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

          {/* Right side - Language and CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:flex items-center">
              <button className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                EN
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="hidden md:inline-flex bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 py-2"
            >
              <Link href="/blogs">Blogs→</Link>
            </Button>

            <ThemeToggle />

            {/* Mobile menu button */}
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

        {/* Desktop Dropdown Panel */}
        {activeDropdown &&
          (() => {
            const currentNavItem = navigation.find(
              (item) => item.name === activeDropdown
            );

            if (!currentNavItem?.dropdownContent) return null;

            const dropdownContent = currentNavItem.dropdownContent;

            return (
              <div className="absolute left-0 right-0 top-full bg-white border-b shadow-lg z-40">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  {/* Header Section */}
                  <div className="mb-16">
                    <div className="max-w-4xl">
                      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {dropdownContent.title}
                      </h1>
                      <div className="flex justify-end mb-8">
                        <Link
                          href="#"
                          className="text-gray-600 hover:text-gray-900 font-medium underline"
                        >
                          {dropdownContent.exploreLink}
                        </Link>
                      </div>
                      <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                        {dropdownContent.description}
                      </p>
                    </div>
                  </div>

                  {/* Features + What's New */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-8">
                        Features
                      </h2>
                      <div className="space-y-6">
                        {dropdownContent.features.left.map((feature, index) => (
                          <div
                            key={index}
                            className="text-gray-700 font-medium hover:text-gray-900 cursor-pointer"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:pt-16">
                      <div className="space-y-6">
                        {dropdownContent.features.right.map(
                          (feature, index) => (
                            <div
                              key={index}
                              className="text-gray-700 font-medium hover:text-gray-900 cursor-pointer"
                            >
                              {feature}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-8">
                        What's New
                      </h2>
                      <div className="space-y-8">
                        {dropdownContent.whatsNew.map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-900 text-white rounded-lg overflow-hidden"
                          >
                            <div className="relative h-32">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover opacity-30"
                              />
                            </div>
                            <div className="p-6">
                              <h3 className="font-semibold mb-4 text-white leading-tight">
                                {item.title}
                              </h3>
                              <Link
                                href={item.link}
                                className="text-white underline hover:no-underline font-medium"
                              >
                                Read More
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="fixed inset-0 bg-black bg-opacity-20 -z-10"
                  onClick={closeDropdown}
                ></div>
              </div>
            );
          })()}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {/* Mobile Header with Close and Language */}
              <div className="flex items-center justify-between py-4 border-b">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-sm font-medium text-gray-600">
                    EN
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <Button
                  asChild
                  className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 py-2"
                >
                  <Link href="/blogs">Blogs →</Link>
                </Button>
              </div>

              {/* Mobile Navigation Items */}
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between px-3 py-4 text-base font-medium transition-colors",
                      pathname === item.href
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="h-5 w-5 rotate-90" />
                    )}
                  </Link>
                </div>
              ))}

              {/* Mobile CTA Button at Bottom */}
              <div className="pt-6 pb-4">
                <Button
                  asChild
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full py-3"
                >
                  <Link href="/blogs">Let's Talk →</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
