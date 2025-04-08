
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Settings, RefreshCw } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8 text-lambda-blue" />,
      title: "Strategic Automation Consulting",
      description: "Identify high-impact opportunities to automate processes and reduce cognitive load.",
    },
    {
      icon: <Settings className="h-8 w-8 text-lambda-purple" />,
      title: "Custom Automation Development",
      description: "We design, build, and implement end-to-end workflows across your tools—CRM, ATS, project management, outreach platforms, and more.",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-lambda-pink" />,
      title: "Ongoing Support & Optimization",
      description: "We host, maintain, and continually improve your automations as your business evolves.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Automate the Mundane. <span className="gradient-text">Focus on What Matters.</span>
          </h2>
          <p className="text-gray-700 text-lg">
            At LambdaBase, we specialize in crafting powerful automations using low-code/no-code tools like Zapier, Make.com, and n8n. Here's what we offer:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border border-gray-100">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <a 
                  href="https://cal.com/lambdabase/60min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lambda-blue hover:text-lambda-purple font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
