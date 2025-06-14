
import React from 'react';
import { Mail, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const ConversionFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Sujith */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">About Sujith</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Built systems for AI startups, logistics ops, gov contracts, and SMBs. I've helped 20+ companies 
              streamline their operations and scale without the overhead of a full tech team.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/sujith" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com/in/sujith" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:hello@sujith.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Client Stories</a></li>
              <li><a href="#audit" className="hover:text-white transition-colors">Book Call</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Systems Insights</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Monthly systems teardown – how to scale with less stress.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Sujith Tech Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ConversionFooter;
