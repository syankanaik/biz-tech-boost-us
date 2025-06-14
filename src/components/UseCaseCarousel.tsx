
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Card, CardContent } from './ui/card';

const UseCaseCarousel = () => {
  const useCases = [
    {
      name: "Sarah, Retail Founder",
      company: "Fashion Boutique Chain",
      result: "Cut inventory errors by 80%, saving 12 hrs/week",
      story: "Replaced manual spreadsheets with automated Airtable inventory system. Now tracks stock levels, reorders, and sales in real-time.",
      avatar: "S",
      bgColor: "bg-purple-500"
    },
    {
      name: "Mike, Solo Consultant",
      company: "Marketing Agency",
      result: "Built full CRM + client dashboard using Notion and Zapier in 5 days",
      story: "Went from scattered client info to a unified system that automatically tracks projects, invoices, and client communication.",
      avatar: "M",
      bgColor: "bg-green-500"
    },
    {
      name: "Jessica, VC-Backed Startup",
      company: "SaaS Platform",
      result: "Went from 0 to scalable ops in 10 days with Stripe + Airtable",
      story: "Launched with proper payment processing, customer management, and automated onboarding before their first customer arrived.",
      avatar: "J",
      bgColor: "bg-blue-500"
    }
  ];

  return (
    <section className="py-20" style={{backgroundColor: 'rgb(249, 250, 251)'}}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Founders
          </h2>
          <p className="text-xl text-gray-600">
            See how we've helped businesses just like yours save time and scale faster
          </p>
        </div>

        <Carousel className="relative">
          <CarouselContent>
            {useCases.map((useCase, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 ${useCase.bgColor} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                        {useCase.avatar}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{useCase.name}</h3>
                        <p className="text-sm text-gray-600">{useCase.company}</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                      <p className="font-semibold text-green-800">{useCase.result}</p>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{useCase.story}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default UseCaseCarousel;
