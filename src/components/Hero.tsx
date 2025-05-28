
import React from 'react';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Streamline Your Business with 
              <span className="text-blue-600"> Expert Tech Integration</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Fractional tech integration and data management services designed specifically for small businesses. 
              Get enterprise-level technology solutions without the enterprise-level costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group hover-scale"
              >
                Start Your Tech Transformation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#services" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Zap className="text-yellow-500 mr-2" size={20} />
                <span>Fast Implementation</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-green-500 mr-2" size={20} />
                <span>Secure Solutions</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="text-blue-500 mr-2" size={20} />
                <span>Proven Results</span>
              </div>
            </div>
          </div>

          <div className="lg:order-first animate-fade-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Technology and data management visualization"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-blue-600">99%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
