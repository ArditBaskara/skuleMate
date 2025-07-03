'use client';

import { useState } from 'react';
import Image from 'next/image';

interface DescribeYourselfProps {
  formData: {
    name: string;
    description: string;
    cv: File | null;
  };
  isCvUpload: boolean;
  onFormSubmit: (data: {
    name: string;
    description: string;
    cv: File | null;
  }) => void;
  setIsCvUpload: React.Dispatch<React.SetStateAction<boolean>>;
  result?: any;
  setResult?: React.Dispatch<React.SetStateAction<any>>;
}

const DescribeYourself = ({
  formData,
  isCvUpload,
  onFormSubmit,
  setIsCvUpload,
  result,
  setResult,
}: DescribeYourselfProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  let trigger = 0;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onFormSubmit({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormSubmit({ ...formData, cv: e.target.files?.[0] || null });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      trigger = 1;
      let data;
      const apiLink = sessionStorage.getItem("apiLink");

      if (isCvUpload && formData.cv) {
        const form = new FormData();
        form.append('file', formData.cv);

        const res = await fetch('/api/detectCV', {
          method: 'POST',
          headers: {
            'x-api-link': apiLink || '',
          },
          body: form,
        });
        
        if (!res.ok) throw new Error('CV detection failed');
        data = await res.json();
      } 
      else if (!isCvUpload && formData.description && trigger == 1) {
        const res = await fetch('/api/detectText', {
          method: 'POST',
          headers: {
            'x-api-link': apiLink || '',
          },
          body: JSON.stringify({ text_desc: formData.description }),
        });
        
        if (!res.ok) throw new Error('Text detection failed');
        data = await res.json();
      } else {
        alert('Please fill in your description or upload your CV');
        return;
      }

      setResult?.(data);
    } catch (error) {
      console.error(error);
      setError(
        'An error occurred: ' +
          (error instanceof Error ? error.message : 'Failed to send data.')
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="w-full max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6 sm:p-10 space-y-8 mt-10 mb-10 z-10">
      <header className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[color:var(--foreground)]">
          Describe Yourself
        </h1>
        <p className="text-[color:var(--foreground)/70] text-sm sm:text-base">
          Get scholarship recommendations based on your story and experience.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <Image
          src="/input.png"
          alt="Illustration"
          width={320}
          height={320}
          className="rounded-lg object-contain"
          priority
        />

        <form onSubmit={handleSubmit} className="flex-1 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Yanto Yanti"
              className="w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-sm text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {isCvUpload ? (
            <div>
              <label htmlFor="cv" className="block text-sm font-medium mb-1">
                Upload Your CV
              </label>
              <input
                id="cv"
                name="cv"
                type="file"
                required
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-sm"
              />
            </div>
          ) : (
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-1"
              >
                Describe Yourself
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                required
                value={formData.description}
                onChange={handleChange}
                placeholder="Example: I graduated with a bachelor's in Computer Science, passionate about AI and social research..."
                className="w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-sm resize-none text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 px-6 rounded-lg transition shadow-md disabled:opacity-60"
            >
              {loading ? 'Processing...' : 'Find Scholarships'}
            </button>
            <button
              type="button"
              onClick={() => setIsCvUpload((prev) => !prev)}
              className="bg-gray-500 hover:bg-gray-600 text-white text-sm py-3 px-6 rounded-lg transition shadow-md"
            >
              {isCvUpload ? 'Use Description Instead' : 'Upload CV'}
            </button>
          </div>

          {error && (
            <p className="text-red-600 text-sm mt-2 font-medium">{error}</p>
          )}
        </form>
      </div>

      {result?.length > 0 && (
        <div className="border-t border-gray-300 dark:border-neutral-700 pt-6 mt-6">
          <h2 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">
            Scholarship Recommendations:
          </h2>
          <ul className="space-y-4">
            {result.map(
              (
                scholarship: { title: string; desc: string; link: string },
                index: number
              ) => (
                <li
                  key={index}
                  className="bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 p-4 rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {scholarship.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {scholarship.desc}
                  </p>
                  <a
                    href={scholarship.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    View Details
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </section>
  );
};

export default DescribeYourself;