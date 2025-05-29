
import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-gray-500 text-lg">Your Photo Here</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Founder, operator and strategist with background in economics and finance
            </h3>
            <div className="text-lg text-gray-600">
              <p className="mb-4">[Content will be added here]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
