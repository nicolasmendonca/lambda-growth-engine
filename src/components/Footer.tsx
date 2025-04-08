
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lambda-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-white font-bold text-xl">
              Lambda<span className="text-lambda-purple">Base</span>
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              Automation solutions for growing businesses.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <nav className="flex gap-6">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How It Works
              </a>
            </nav>

            <a
              href="https://cal.com/lambdabase/60min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lambda-purple hover:text-lambda-blue font-medium transition-colors"
            >
              Book a Call →
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} LambdaBase. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
