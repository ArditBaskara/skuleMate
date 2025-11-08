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
    <DescribeYourself
      formData={formData}
      isCvUpload={isCvUpload}
      onFormSubmit={handleFormSubmit}
      setIsCvUpload={setIsCvUpload}
      result={result}
      setResult={setResult}
    />
  );
}
