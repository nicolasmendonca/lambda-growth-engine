
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Scale Smarter. <span className="gradient-text">Automate Faster.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            We help online-first businesses streamline operations and eliminate bottlenecks using AI-powered automations—built and maintained for growth.
          </p>
          <a href="https://cal.com/lambdabase/60min" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-lambda-blue to-lambda-purple hover:opacity-90 transition-opacity text-lg flex items-center gap-2 px-6 py-6"
            >
              👉 Book your free automation discovery call
              <ArrowRight size={18} />
            </Button>
          </a>
        </div>
        
        <div className="mt-16 md:mt-20 max-w-5xl mx-auto">
          <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-lambda-blue/10 to-lambda-purple/10 rounded-xl overflow-hidden flex items-center justify-center animate-pulse-slow">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-lg bg-white/60 backdrop-blur-sm p-8 shadow-lg">
                <div className="flex flex-col gap-3">
                  <div className="h-3 w-40 bg-lambda-blue/30 rounded animate-pulse"></div>
                  <div className="h-3 w-52 bg-lambda-purple/30 rounded animate-pulse"></div>
                  <div className="h-3 w-48 bg-lambda-pink/30 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 md:w-60 md:h-60 bg-lambda-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 md:w-60 md:h-60 bg-lambda-purple/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
