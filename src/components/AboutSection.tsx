
import React from 'react';

const AboutSection = () => {
  const bulletPoints = [
    "I co-founded 3 mission-oriented businesses (mattress recycling, cafe and furniture design) and raised millions of dollars from prominent funders",
    "I've led digital transformations of large governments and enterprises, upgrading data pipelines and backend systems for easy to implement integrations for the future", 
    "As a strategy consultant, I've worked with dozens of companies to improve their tech and sales strategies to win more clients and cut costs leveraging new and emerging technologies",
    "I've built several AI agents to improve personal and business productivity for friends and family"
  ];
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:[grid-template-columns:1fr_1.5fr] gap-8 items-stretch min-h-[600px]">
          <div className="order-2 lg:order-1 h-full flex items-center justify-center">
            <div className="bg-gray-200 rounded-lg aspect-[5/6] w-full max-w-md h-full border-4 border-gray-300 shadow-lg overflow-hidden flex items-center justify-center">
              <img 
                src="/lovable-uploads/872a64ff-2fcc-4a75-b4de-b2fbba664654.png" 
                alt="Sujith's Professional Headshot" 
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <span className="inline-block bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                About Me
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-16">
              Founder, operator,<br />strategist and consultant
            </h2>
            
            <div className="text-lg text-gray-700 space-y-6">
              <p className="font-semibold">
                Hello! My name is Sujith
              </p>
              <p>
                I've been a part of and leading digital and tech transformations for small and enterprise businesses for the past 10 years
              </p>
              
              <ul className="space-y-3">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-4">
                <p>Outside of tech transformation, I love to travel and participate in endurance events. Since 2015, I've traveled to 35+ countries, speak 3 languages and participated in marathons and short-distance triathlons and an IRONMAN (world's longest-distance triathlon)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
