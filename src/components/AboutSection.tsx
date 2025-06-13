
import React from 'react';

const AboutSection = () => {
  const bulletPoints = [
    "[Bullet point text to be added]",
    "[Bullet point text to be added]", 
    "[Bullet point text to be added]",
    "[Bullet point text to be added]"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20" style={{backgroundColor: 'rgb(188, 206, 251)'}}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="inline-block bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
            About Me
          </span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16">
          Founder, operator and strategist with background in economics and finance
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1">
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-gray-500 text-lg">Your Photo Here</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
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
                <p>[First paragraph text to be added]</p>
                <p>[Second paragraph text to be added]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
