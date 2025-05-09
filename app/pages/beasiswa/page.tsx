import React from 'react';
import WellbeingSection from '@/app/components/ui/section/hero/well';
import ScholarshipListSection from '@/app/components/ui/section/hero/scholarship';
import Scholarships from '@/app/components/ui/section/Beasiswa/result';
const page = () => {
  return (
    <div className="container mx-auto">
      <Scholarships />
      <ScholarshipListSection />
      <WellbeingSection />
    </div>
  );
};

export default page;
