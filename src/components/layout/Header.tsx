"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { useUser, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, isLoaded } = useUser();

  // Check if we're on the landing page
  const isLandingPage = pathname === "/";

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blogs", label: "Blogs & FAQs" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isLandingPage 
        ? "bg-transparent text-white" 
        : "bg-white text-black shadow-lg"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isLandingPage 
                ? "bg-white/20 backdrop-blur-sm" 
                : "bg-black"
            }`}>
              <span className="font-bold text-lg text-white">B</span>
            </div>
            <span className={`text-xl font-bold ${
              isLandingPage ? "text-white" : "text-black"
            }`}>Beauty Salon</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? isLandingPage 
                      ? "text-white border-b-2 border-white"
                      : "text-black border-b-2 border-black"
                    : isLandingPage
                      ? "text-white/80 hover:text-white"
                      : "text-black/70 hover:text-black"
                } transition-colors duration-200 font-medium`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/book-appointment"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                isLandingPage
                  ? "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
            <a
              href="tel:+441517920830"
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                isLandingPage
                  ? "text-white/80 hover:text-white"
                  : "text-black/70 hover:text-black"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+44 151 792 0830</span>
            </a>
            
            {/* Auth Section */}
            <div className="flex items-center gap-4">
              {!isLoaded ? (
                <div className={`w-8 h-8 rounded-full animate-pulse ${
                  isLandingPage ? "bg-white/20" : "bg-gray-200"
                }`}></div>
              ) : user ? (
                <SignedIn>
                  <UserButton />
                </SignedIn>
              ) : (
                <SignInButton>
                  <Button className={isLandingPage ? "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30" : "bg-black text-white hover:bg-gray-800"}>
                    Sign In
                  </Button>
                </SignInButton>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-200 ${
              isLandingPage
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-gray-100"
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t ${
              isLandingPage 
                ? "bg-black/20 backdrop-blur-sm border-white/20" 
                : "bg-white border-gray-200"
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    isActive(item.href)
                      ? isLandingPage
                        ? "text-white bg-white/20"
                        : "text-black bg-gray-100"
                      : isLandingPage
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-black/70 hover:text-black hover:bg-gray-50"
                  } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/book-appointment"
                  className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isLandingPage
                      ? "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>
                <a
                  href="tel:+441517920830"
                  className={`flex items-center justify-center space-x-2 transition-colors duration-200 ${
                    isLandingPage
                      ? "text-white/80 hover:text-white"
                      : "text-black/70 hover:text-black"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>+44 151 792 0830</span>
                </a>
                
                {/* Mobile Auth Section */}
                <div className="flex items-center justify-center gap-4 pt-2">
                  {!isLoaded ? (
                    <div className={`w-8 h-8 rounded-full animate-pulse ${
                      isLandingPage ? "bg-white/20" : "bg-gray-200"
                    }`}></div>
                  ) : user ? (
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  ) : (
                    <SignInButton>
                      <Button className={isLandingPage ? "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30" : "bg-black text-white hover:bg-gray-800"}>
                        Sign In
                      </Button>
                    </SignInButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
