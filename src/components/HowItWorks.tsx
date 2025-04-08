
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We understand your workflows, pains, and goals.",
    },
    {
      number: "02",
      title: "24-Hour Proposal",
      description: "You'll receive a tailored plan with two options:\n\n• Strategic Partner – We design, host, maintain & improve your automation. No charge for the first week.\n\n• Service Developer – We build and hand off the automation, along with setup instructions.",
    },
    {
      number: "03",
      title: "Launch & Scale",
      description: "Start seeing real results—less admin, more growth.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Simple, Transparent, Powerful.</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Our streamlined process gets you from bottleneck to breakthrough without unnecessary complexity.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line connecting the steps */}
            <div className="absolute left-[28px] top-0 bottom-0 w-1 bg-gradient-to-b from-lambda-blue via-lambda-purple to-lambda-pink hidden md:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-start">
                    <div className="bg-white flex items-center justify-center w-14 h-14 rounded-full border-2 border-lambda-purple text-lambda-purple font-bold text-xl z-10">
                      {step.number}
                    </div>
                  </div>
                  <Card className="flex-1 card-hover">
                    <CardHeader>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="text-gray-700 whitespace-pre-line">
                        {step.description}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
