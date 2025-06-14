
import React from 'react';
import { Star, MessageSquare, Play } from 'lucide-react';

const TrustProofSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Stats Bar */}
        <div className="text-center mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600">Companies Helped Last Year</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Hours Saved Per Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                <div className="text-gray-600">Reduction in Manual Work</div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-2xl relative">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 mb-4 leading-relaxed">
              "Helped us save $2K/month and made my ops make sense again. Finally feel like I have control over my business instead of drowning in spreadsheets."
            </blockquote>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                A
              </div>
              <div>
                <div className="font-semibold text-gray-900">Alex Chen</div>
                <div className="text-sm text-gray-600">E-commerce Founder</div>
              </div>
            </div>
            <MessageSquare className="absolute top-6 right-6 w-6 h-6 text-gray-300" />
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl relative">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 mb-4 leading-relaxed">
              "Feels like having a calm CTO in your back pocket. They explained everything in plain English and delivered exactly what they promised."
            </blockquote>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                R
              </div>
              <div>
                <div className="font-semibold text-gray-900">Rachel Martinez</div>
                <div className="text-sm text-gray-600">Consulting Agency Owner</div>
              </div>
            </div>
            <MessageSquare className="absolute top-6 right-6 w-6 h-6 text-gray-300" />
          </div>
        </div>

        {/* Visual Proof */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-xl text-center">
            <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <p className="text-sm text-gray-600">Slack Integration</p>
            <p className="font-semibold text-gray-900">Real-time Updates</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <div className="w-8 h-8 bg-blue-600 rounded mx-auto mb-3 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <p className="text-sm text-gray-600">Dashboard Screenshot</p>
            <p className="font-semibold text-gray-900">Live Analytics</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl text-center">
            <Play className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <p className="text-sm text-gray-600">Loom Walkthrough</p>
            <p className="font-semibold text-gray-900">Setup Process</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustProofSection;
