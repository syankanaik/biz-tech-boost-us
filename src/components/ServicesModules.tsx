
import React from 'react';
import { Zap, Bot, Users, Headphones, ArrowRight } from 'lucide-react';

const ServicesModules = () => {
  const modules = [
    {
      icon: Zap,
      title: "Fractional Tech Integration",
      subtitle: "Your tech co-founder on demand. We set up Airtable, Zapier, Notion, Stripe and more — without the overhead.",
      cta: "See Example"
    },
    {
      icon: Bot,
      title: "AI-Powered Ops Automation",
      subtitle: "Automate your reporting, hiring, and marketing — reclaim 10+ hours/week.",
      cta: "View Demo"
    },
    {
      icon: Users,
      title: "Team Enablement & Training",
      subtitle: "We train your team to run and scale systems without breaking anything.",
      cta: "Learn More"
    },
    {
      icon: Headphones,
      title: "Ongoing Lean Support",
      subtitle: "Async Loom updates, Slack access, and monthly reviews — like having a full-time team at a fraction of the cost.",
      cta: "See Pricing"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Scale Smart
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From setup to support, we handle your entire tech transformation so you can focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <module.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{module.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{module.subtitle}</p>
              
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center group">
                {module.cta}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesModules;
