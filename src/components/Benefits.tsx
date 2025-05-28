
import React from 'react';
import { DollarSign, Clock, Users, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const stats = [
    {
      icon: <DollarSign className="text-green-600" size={32} />,
      value: "30-50%",
      label: "Cost Reduction",
      description: "Average savings on operational costs through automation and optimization"
    },
    {
      icon: <Clock className="text-blue-600" size={32} />,
      value: "25+",
      label: "Hours Saved Weekly",
      description: "Time saved per employee through process automation and streamlined workflows"
    },
    {
      icon: <Users className="text-purple-600" size={32} />,
      value: "98%",
      label: "Employee Satisfaction",
      description: "Improved job satisfaction due to reduced manual tasks and better tools"
    },
    {
      icon: <TrendingUp className="text-orange-600" size={32} />,
      value: "200%",
      label: "ROI Average",
      description: "Return on investment within the first year of implementation"
    }
  ];

  const benefits = [
    {
      title: "Reduce Operational Costs",
      description: "Eliminate inefficiencies and reduce overhead through smart automation and optimized processes.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Scale Your Business",
      description: "Build technology infrastructure that grows with your business without proportional cost increases.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Make Data-Driven Decisions",
      description: "Access real-time insights and analytics to make informed strategic decisions quickly.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven Results for Small Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our clients see measurable improvements in efficiency, cost savings, and business growth 
            within the first few months of implementation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img 
                src={benefit.image} 
                alt={benefit.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
