
import React from 'react';

const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
          Ready to harness the power of technology and data at a fraction of the cost?
        </h2>
        <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12">
          Schedule a free consultation and learn about how I can help you take your business to the next level
        </p>
        
        <a 
          href="#contact" 
          className="inline-block bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Schedule Free Consultation
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
