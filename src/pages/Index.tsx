
import React from 'react';
import Header from '../components/Header';
import ConversionHero from '../components/ConversionHero';
import ServicesModules from '../components/ServicesModules';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TrustProofSection from '../components/TrustProofSection';
import ConversionCTA from '../components/ConversionCTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ConversionHero />
      <ServicesModules />
      <ServicesSection />
      <AboutSection />
      <TrustProofSection />
      <ConversionCTA />
      <Footer />
    </div>
  );
};

export default Index;
