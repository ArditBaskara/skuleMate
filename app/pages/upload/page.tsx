'use client';
import { useState, useEffect } from 'react';
import DescribeYourself from '../../../app/components/ui/section/Upload/form';

export default function Page() {
  const [formData, setFormData] = useState<{
    name: string;
    description: string;
    cv: File | null;
  }>({
    name: '',
    description: '',
    cv: null,
  });

  const handleFormSubmit = (data: typeof formData) => {
    setFormData(data);
  };

  const [isCvUpload, setIsCvUpload] = useState(false);
  const [result, setResult] = useState<any>(null);

  return (
    <div className='min-h-screen pt-16 pb-6 bg-neutral-950 px-6 sm:px-10 text-gray-200 relative'>
      <div className="absolute top-10 right-310 w-81 h-81 bg-blue-800/20 blur-[120px] rounded-full z-0" />
      <DescribeYourself
        formData={formData}
        isCvUpload={isCvUpload}
        onFormSubmit={handleFormSubmit}
        setIsCvUpload={setIsCvUpload}
        result={result}
        setResult={setResult}
      />
    </div>
  );
}
