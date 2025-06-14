
import React from 'react';
import Header from '../components/Header';
import ConversionHero from '../components/ConversionHero';
import ServicesModules from '../components/ServicesModules';
import UseCaseCarousel from '../components/UseCaseCarousel';
import TrustProofSection from '../components/TrustProofSection';
import ConversionCTA from '../components/ConversionCTA';
import ConversionFooter from '../components/ConversionFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ConversionHero />
      <ServicesModules />
      <UseCaseCarousel />
      <TrustProofSection />
      <ConversionCTA />
      <ConversionFooter />
    </div>
  );
};

export default Index;
