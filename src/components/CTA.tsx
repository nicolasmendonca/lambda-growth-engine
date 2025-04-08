
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-lambda-blue/10 via-lambda-purple/10 to-lambda-pink/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Your <span className="gradient-text">Growth Engine.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Book a free, no-obligation 60-minute call to uncover how automations can transform your operations.
          </p>
          <a href="https://cal.com/lambdabase/60min" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-lambda-blue to-lambda-purple hover:opacity-90 transition-opacity text-lg flex items-center gap-2 px-6 py-6"
            >
              👉 Book your free automation discovery call
              <Calendar size={18} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
