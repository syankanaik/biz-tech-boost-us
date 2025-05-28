
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TechFlow Solutions</h3>
            <p className="text-gray-400 mb-6">
              Empowering small businesses with enterprise-level technology solutions 
              through fractional consulting services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Data Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Process Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cloud Integration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Business Intelligence</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Technical Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <span>hello@techflowsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} />
                <span>Nationwide Service (US)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechFlow Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
