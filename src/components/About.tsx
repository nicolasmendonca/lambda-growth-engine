
import React from "react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Meet Your Automation Partner.</span>
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lambda-blue via-lambda-purple to-lambda-pink"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6">
                LambdaBase isn't just another agency—we're your behind-the-scenes partner helping your business run smarter, not harder.
              </p>
              
              <p className="text-lg">
                We work closely with online-first businesses, especially digital marketing and IT recruitment agencies, helping them eliminate repetitive tasks, reduce human error, and unlock growth with 24/7 automations.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-lambda-blue font-bold text-4xl mb-2">24/7</div>
                <div className="text-gray-700">Automations that work around the clock</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-lambda-purple font-bold text-4xl mb-2">100%</div>
                <div className="text-gray-700">Focused on your business success</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-lambda-pink font-bold text-4xl mb-2">0%</div>
                <div className="text-gray-700">Unnecessary complexity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
