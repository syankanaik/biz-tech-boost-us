
import React from 'react';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';

const ConversionCTA = () => {
  return (
    <section id="audit" className="py-20" style={{backgroundColor: 'rgb(220, 230, 253)'}}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          Book Your Free Audit — See Exactly What to Fix First
        </h2>
        
        <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
          Get a 30-minute custom Loom walkthrough with 3 system upgrades you can implement today.
        </p>

        {/* What's Included */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get (100% Free)</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tech Stack Analysis</h4>
                <p className="text-gray-600 text-sm">We'll review your current tools and identify gaps</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">3 Quick Wins</h4>
                <p className="text-gray-600 text-sm">Actionable improvements you can start today</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Custom Roadmap</h4>
                <p className="text-gray-600 text-sm">Step-by-step plan for your automation journey</p>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Elements */}
        <div className="flex justify-center items-center mb-8 gap-6">
          <div className="flex items-center text-red-600">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-semibold">Limited to 5 audits/week</span>
          </div>
          <div className="text-gray-400">•</div>
          <div className="text-gray-600">
            <span className="font-semibold">Usually $500</span> — Free this week
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="https://calendly.com/sujith-audit" 
          className="inline-block bg-blue-600 text-white px-12 py-6 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-6"
        >
          Claim Your Free Audit – No Strings
          <ArrowRight className="inline ml-2" size={24} />
        </a>

        <p className="text-sm text-gray-500">
          No sales pitch. No obligation. Just actionable insights you can use immediately.
        </p>

        {/* Alternative Form Option */}
        <div className="mt-12 bg-white rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Can't book right now? Get the audit via email:</h4>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Send My Audit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConversionCTA;
