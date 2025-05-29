
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      title: "Diagnose",
      description: "I partner with your team to audit your company's current data systems, technology infrastructure and stack as well as processes. Together, defining success and building an engagement roadmap"
    },
    {
      title: "Implement",
      description: "Post roadmap, I design and implement initiatives design to scale your data management processes and tech solutions via rapid prototyping and refinement"
    },
    {
      title: "Maintenance",
      description: "I provide ongoing support to provide hands-on training to make sure that your team is completely committed to the new workflows and tools"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Delivering Enterprise-level tech solutions without the enterprise-level costs
          </h2>
        </div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
