
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import BudgetCalculator from '@/components/BudgetCalculator';
import PricingInfo from '@/components/PricingInfo';

const Index = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <About />
      <BudgetCalculator />
      <PricingInfo />
      <Contact />
    </>
  );
};

export default Index;
