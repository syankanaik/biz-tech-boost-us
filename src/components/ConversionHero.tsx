
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ConversionHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20" style={{backgroundColor: 'rgb(220, 230, 253)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Run Like a <span className="text-blue-600">$10M Company</span> — Without a Full Tech Team
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              We turn your messy ops into streamlined, automated systems so you can save time, cut costs, and scale with confidence.
            </p>
            
            <div className="mb-8">
              <a 
                href="#audit" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-3"
              >
                Claim Your Free Tech Stack Audit
                <ArrowRight className="inline ml-2" size={20} />
              </a>
              <p className="text-sm text-red-600 font-medium">⚡ Limited to 5 free audits/week</p>
            </div>

            {/* Trust Bar */}
            <div className="border-t border-gray-300 pt-6">
              <p className="text-sm text-gray-500 mb-4">Trusted by AI labs, gov teams, logistics founders, and bootstrapped operators</p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-60">
                <div className="text-xs font-semibold text-gray-600 bg-white px-3 py-1 rounded">AI LABS</div>
                <div className="text-xs font-semibold text-gray-600 bg-white px-3 py-1 rounded">GOV TEAMS</div>
                <div className="text-xs font-semibold text-gray-600 bg-white px-3 py-1 rounded">LOGISTICS</div>
                <div className="text-xs font-semibold text-gray-600 bg-white px-3 py-1 rounded">BOOTSTRAPPED</div>
              </div>
            </div>
          </div>

          {/* Right Visual - Before/After */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Before & After</h3>
              </div>
              
              {/* Before */}
              <div className="mb-6 p-4 bg-red-50 rounded-lg border-2 border-red-200">
                <h4 className="font-semibold text-red-800 mb-3 text-center">BEFORE: Messy & Manual</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-red-700">
                    <div className="w-3 h-3 bg-red-400 rounded mr-2"></div>
                    Excel spreadsheets everywhere
                  </div>
                  <div className="flex items-center text-sm text-red-700">
                    <div className="w-3 h-3 bg-red-400 rounded mr-2"></div>
                    Email chaos & missed follow-ups
                  </div>
                  <div className="flex items-center text-sm text-red-700">
                    <div className="w-3 h-3 bg-red-400 rounded mr-2"></div>
                    Manual reporting takes hours
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <h4 className="font-semibold text-green-800 mb-3 text-center">AFTER: Streamlined & Automated</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-green-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Unified dashboard in Airtable
                  </div>
                  <div className="flex items-center text-sm text-green-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Zapier automations running 24/7
                  </div>
                  <div className="flex items-center text-sm text-green-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Reports auto-generated & sent
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-xs">Hours Saved/Week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionHero;
