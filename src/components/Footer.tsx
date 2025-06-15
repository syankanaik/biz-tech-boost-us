
import React from 'react';
import { Mail, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-1 gap-8">
          {/* About Sujith */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About Sujith</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Built systems for AI startups, logistics ops, gov contracts, and SMBs. I've helped 20+ companies 
              streamline their operations and scale without the overhead of a full tech team.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/sujithyankanaik" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sujithyankanaik/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:syankanaik01@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
