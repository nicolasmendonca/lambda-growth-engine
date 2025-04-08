
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="text-lambda-dark font-bold text-xl md:text-2xl">
              Lambda<span className="gradient-text">Base</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-lambda-dark hover:text-lambda-blue font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="text-lambda-dark hover:text-lambda-blue font-medium transition-colors">
              About Us
            </a>
            <a href="#how-it-works" className="text-lambda-dark hover:text-lambda-blue font-medium transition-colors">
              How It Works
            </a>
            <a href="https://cal.com/lambdabase/60min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-lambda-blue to-lambda-purple hover:opacity-90 transition-opacity">
                Book a Call
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-lambda-dark p-2"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <a
              href="#services"
              className="block text-lambda-dark hover:text-lambda-blue font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-lambda-dark hover:text-lambda-blue font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#how-it-works"
              className="block text-lambda-dark hover:text-lambda-blue font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="https://cal.com/lambdabase/60min"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full bg-gradient-to-r from-lambda-blue to-lambda-purple hover:opacity-90 transition-opacity">
                Book a Call
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
