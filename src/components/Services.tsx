
import React from 'react';
import { Database, Workflow, Cloud, BarChart3, Lock, Cog } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Database className="text-blue-600" size={40} />,
      title: "Data Management & Analytics",
      description: "Transform your raw data into actionable insights with custom dashboards, automated reporting, and data integration solutions.",
      features: ["Custom Analytics Dashboards", "Data Integration", "Automated Reporting", "Performance Metrics"]
    },
    {
      icon: <Workflow className="text-green-600" size={40} />,
      title: "Process Automation",
      description: "Streamline your operations with intelligent automation that reduces manual work and eliminates human error.",
      features: ["Workflow Automation", "Task Management", "Integration APIs", "Custom Solutions"]
    },
    {
      icon: <Cloud className="text-purple-600" size={40} />,
      title: "Cloud Integration",
      description: "Seamlessly connect your existing systems with modern cloud platforms for improved efficiency and scalability.",
      features: ["Cloud Migration", "System Integration", "API Development", "Scalable Architecture"]
    },
    {
      icon: <BarChart3 className="text-orange-600" size={40} />,
      title: "Business Intelligence",
      description: "Make data-driven decisions with comprehensive BI solutions tailored to your business needs.",
      features: ["Real-time Dashboards", "Predictive Analytics", "KPI Tracking", "Custom Reports"]
    },
    {
      icon: <Lock className="text-red-600" size={40} />,
      title: "Security & Compliance",
      description: "Protect your business with enterprise-grade security measures and compliance frameworks.",
      features: ["Data Security", "Compliance Audits", "Risk Assessment", "Security Training"]
    },
    {
      icon: <Cog className="text-indigo-600" size={40} />,
      title: "Technical Consulting",
      description: "Get expert guidance on technology strategy, implementation planning, and digital transformation.",
      features: ["Technology Strategy", "Implementation Planning", "Training & Support", "Ongoing Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Tech Solutions for Small Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From data management to process automation, we provide the technology expertise 
            your business needs to compete in today's digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover-scale group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
