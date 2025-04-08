
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Workflow, Settings, BarChart } from "lucide-react";

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
          <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-lambda-blue/10 to-lambda-purple/10 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {/* Automation Icons with Animations */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg flex flex-col items-center text-center transform transition-all hover:scale-105 duration-300">
                  <div className="h-12 w-12 bg-gradient-to-br from-lambda-blue to-lambda-purple rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Automate</h3>
                  <p className="text-sm text-gray-600 mt-2">Eliminate repetitive tasks</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg flex flex-col items-center text-center transform transition-all hover:scale-105 duration-300">
                  <div className="h-12 w-12 bg-gradient-to-br from-lambda-purple to-lambda-pink rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Grow</h3>
                  <p className="text-sm text-gray-600 mt-2">Scale your business faster</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg flex flex-col items-center text-center transform transition-all hover:scale-105 duration-300 col-span-2 md:col-span-1">
                  <div className="h-12 w-12 bg-gradient-to-br from-lambda-pink to-lambda-blue rounded-full flex items-center justify-center mb-4">
                    <Workflow className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Optimize</h3>
                  <p className="text-sm text-gray-600 mt-2">Streamline operations</p>
                </div>
              </div>
            </div>
            
            {/* Animated Background Elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 md:w-60 md:h-60 bg-lambda-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 md:w-60 md:h-60 bg-lambda-purple/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
            
            {/* Floating Gears/Settings Icons */}
            <div className="absolute top-1/4 right-1/4 animate-float opacity-30">
              <Settings className="h-8 w-8 text-lambda-purple" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-float opacity-20" style={{ animationDelay: "2s" }}>
              <Settings className="h-12 w-12 text-lambda-blue" />
            </div>
            <div className="absolute top-1/3 left-1/4 animate-float opacity-25" style={{ animationDelay: "1s" }}>
              <BarChart className="h-10 w-10 text-lambda-pink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
