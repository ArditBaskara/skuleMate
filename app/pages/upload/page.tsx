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

  const fetchData = async () => {
    if (!formData.name && !formData.description) return;

    try {
      let data;
      if (isCvUpload && formData.cv) {
        const form = new FormData();
        form.append('file', formData.cv);
        const res = await fetch('/api/detectCV', {
          method: 'POST',
          body: form,
        });
        if (!res.ok) throw new Error('CV detection failed');
        data = await res.json();
      } else if (!isCvUpload && formData.description) {
        const res = await fetch('/api/detectText', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text_desc: formData.description }),
        });
        if (!res.ok) throw new Error('Text detection failed');
        data = await res.json();
      }

      // Wrap the data array inside an object with recommendations key
      setResult({ recommendations: data });
      console.log('Fetched result data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [formData, isCvUpload]);

  useEffect(() => {
    if (result) {
      console.log('Result updated in Parent:', result);
    }
  }, [result]);

  return (
    <div>
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
