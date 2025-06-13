
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Fractional Tech Integration",
      description: "Need a GTM-ready backend without hiring a full tech team? I specialize in setting up lean, interoperable stacks — from CRMs and analytics to partner integrations and AI workflows."
    },
    {
      title: "Data Management & Automation", 
      description: "Your data should work for you. I architect and implement data pipelines, dashboards, and feedback systems that drive decisions — not chaos."
    },
    {
      title: "Strategic Enablement for Ops + Growth",
      description: "From pilot to scale, I serve as an embedded operator helping teams make sense of tools and bridge technical execution with business impact."
    },
    {
      title: "Professional Services",
      description: "Providing ongoing support to automate reporting, extract key insights from large sets of client documentation and create searchable reference guides"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            Leverage the power of Tech and Data
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Lots of tools and data with very little time can feel overwhelming. I partner with companies 
            to identify technology and data gaps, implement most impactful solutions and drive adoption 
            across the organization
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
