
import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const credentials = [
    {
      icon: <Award className="text-blue-600" size={24} />,
      title: "15+ Years Experience",
      description: "Extensive background in enterprise technology and small business operations"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "50+ Successful Projects",
      description: "Proven track record of delivering results for businesses across various industries"
    },
    {
      icon: <Clock className="text-purple-600" size={24} />,
      title: "24/7 Support",
      description: "Ongoing support and maintenance to ensure your systems run smoothly"
    },
    {
      icon: <CheckCircle className="text-orange-600" size={24} />,
      title: "Industry Certified",
      description: "Certified in major platforms including AWS, Microsoft, and Google Cloud"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose TechFlow Solutions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              As a fractional technology consultant, I bring enterprise-level expertise to small businesses 
              without the overhead of a full-time CTO. My approach focuses on practical, cost-effective 
              solutions that deliver immediate value while positioning your business for future growth.
            </p>
            
            <div className="space-y-6">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {credential.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{credential.title}</h3>
                    <p className="text-gray-600">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80" 
                alt="Professional workspace with technology"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Project Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
