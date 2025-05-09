import React from 'react';
import Hero from '../components/ui/section/hero/hero';
import What from '../components/ui/section/hero/what';
import ScholarshipListSection from '../components/ui/section/hero/scholarship';
import WellbeingSection from '../components/ui/section/hero/well';

const LandingPage = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <What />
      <ScholarshipListSection />
      <WellbeingSection />
    </div>
  );
};

export default LandingPage;
