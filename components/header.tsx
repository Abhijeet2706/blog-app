"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/navigationData";
import { cn } from "@/lib/utils";
import ModalConact from "./model-contact";



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

  React.useEffect(() => {
    if (activeDropdown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeDropdown]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border border-border bg-background">
        <div className="container max-w-full px-8 mx-auto ">
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

        {activeDropdown &&
          (() => {
            const currentNavItem = navigation.find(
              (item) => item.name === activeDropdown
            );

            if (!currentNavItem?.dropdownContent) return null;

            const dropdownContent = currentNavItem.dropdownContent;

            return (
              <div className="absolute left-0 right-0 top-full bg-white border-b shadow-lg z-400 max-h-[80vh] overflow-y-auto">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
                  {/* Header Section */}
                  <button
                    onClick={() => setActiveDropdown(null)}
                    className=" lg:hidden flex items-center gap-2 text-gray-600 hover:text-gray-900 text-base font-medium"
                  >
                    ← Go Back
                  </button>
                  <div className="mb-4 mt-10 sm:mt-0 sm:flex sm:justify-between">
                    <div className="max-w-4xl flex flex-col items-start justify-between">
                      <div className="flex flex-col items-start justify-between  mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {dropdownContent.title}
                        </h3>
                        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mt-3">
                          {dropdownContent.description}
                        </p>
                      </div>
                    </div>
                    <Link
                      onClick={() => closeDropdown()}
                      href="/blogs"
                      className="text-gray-600 hover:text-gray-900 font-medium underline whitespace-nowrap"
                    >
                      {dropdownContent.exploreLink}
                    </Link>
                  </div>
                  <hr className="border-t border-gray-200 my-2" />

                  {/* Features + What's New */}
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.5rem_1fr]  mt-8 items-stretch h-full">
                    {/* Features columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                      <div className="flex flex-col h-full">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Features</h2>
                        <div className="space-y-6 flex-1">
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
                      <div className="flex flex-col h-full lg:pt-16">
                        <div className="space-y-6 flex-1">
                          {dropdownContent.features.right.map((feature, index) => (
                            <div
                              key={index}
                              className="text-gray-700 font-medium hover:text-gray-900 cursor-pointer"
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Vertical Divider */}
                    <div className="hidden lg:block border-l border-gray-200 h-full mx-auto" />
                    <div className="block lg:hidden border-t border-gray-200 w-full my-8" />
                    {/* What's New */}
                    <div className="lg:pl-12 flex flex-col h-full">
                      <h2 className="text-2xl font-bold text-gray-900 mb-8">What's New</h2>
                      <div className="space-y-8 flex-1 flex flex-col justify-between">
                        {dropdownContent.whatsNew.map((item, index) => (
                          <div
                            key={index}
                            className="flex bg-[#192040] rounded-2xl overflow-hidden pr-4 h-full"
                            style={{ minHeight: 200 }}
                          >
                            <div className="flex-1 flex flex-col justify-center p-8">
                              <div className="text-white text-100 font-normal mb-4 leading-snug">
                                {item.title}
                              </div>
                              <Link
                                href={item.link}
                                className="text-white underline text-lg font-medium"
                              >
                                Read More
                              </Link>
                            </div>
                            <div className="w-2/5 min-w-[200px] flex items-center">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full h-full rounded-r-2xl"
                                style={{ maxHeight: 180 }}
                              />
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

      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => {
            setMobileMenuOpen(false);
            setActiveDropdown(null);
          }}
        >
          <div
            className="absolute top-0 left-0 w-full bg-[#F7F6F8] border-b border-[#23263A] shadow-md animate-slide-down"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-[#23263A]">
              <Link
                href="/"
                className="flex items-center space-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-2xl font-bold text-[#1A1C2B]">ETP</span>
                <div className="ml-1 w-0 h-0 border-l-[12px] border-l-orange-400 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveDropdown(null);
                }}
                className="text-[#23263A] text-2xl"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() =>
                      item.hasDropdown
                        ? handleDropdownToggle(item.name)
                        : setMobileMenuOpen(false)
                    }
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-4 text-base font-medium transition-colors",
                      pathname === item.href
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          activeDropdown === item.name && "rotate-180"
                        )}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown Content */}
                  {item.hasDropdown && activeDropdown === item.name && item.dropdownContent && (
                    <div className="bg-white px-4 pb-4 text-sm text-gray-700 space-y-2">
                      <p className="font-semibold">{item.dropdownContent.title}</p>
                      <p className="text-gray-500 text-sm">
                        {item.dropdownContent.description}
                      </p>
                      <div className="grid grid-cols-1 gap-2 pt-2">
                        {item.dropdownContent.features.left.map((feature, index) => (
                          <div key={index} className="text-gray-700">{feature}</div>
                        ))}
                        {item.dropdownContent.features.right.map((feature, index) => (
                          <div key={index} className="text-gray-700">{feature}</div>
                        ))}
                      </div>
                      <Link
                        href="/blogs"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                        className="text-blue-600 underline font-medium"
                      >
                        {item.dropdownContent.exploreLink}
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Modal Contact Form */}
      {showModal && (
        <ModalConact setShowModal={setShowModal} handleSubmit={handleSubmit} />
      )}
    </>
  );
}