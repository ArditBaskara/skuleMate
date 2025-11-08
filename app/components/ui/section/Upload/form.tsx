'use client';

import { useState } from 'react';
import { ArrowLeft, Sparkles, Upload, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '../../button';
import { Card, CardContent, CardHeader, CardTitle } from '../../card';
import { Input } from '../../input';
import Link from 'next/link';

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

      if (!apiLink) {
        alert("API link belum disetting. Silakan pergi ke halaman setting untuk menyetting.");
        window.location.href = "/pages/setup";
        return;
      }

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
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-indigo-100 to-blue-50">
      {/* Header */}

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Matching</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Describe Yourself
            </h1>
            <p className="text-lg text-gray-700">
              Get scholarship recommendations based on your story and experience.
            </p>
          </div>

          {/* Form Area */}
          <Card className="bg-white border-gray-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">
                {isCvUpload ? 'Upload Your CV' : 'Tell Us About Yourself'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Yanto Yanti"
                    className="w-full border-gray-300 bg-white text-gray-800 placeholder:text-gray-500"
                  />
                </div>

                {isCvUpload ? (
                  <div>
                    <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Your CV
                    </label>
                    <div className="relative">
                      <Input
                        id="cv"
                        name="cv"
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="w-full pr-10 border-gray-300 bg-white text-gray-800 placeholder:text-gray-500"
                      />
                      <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                    </div>
                    {formData.cv && (
                      <div className="mt-2 text-sm text-gray-500 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>{formData.cv.name}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-2"
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
                      className="w-full text-gray-950 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex-1 min-w-[180px] bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {loading ? (
                      <>
                        <Sparkles className="h-5 w-5 animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      'Find Scholarships'
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsCvUpload((prev) => !prev)}
                    className="flex-1 min-w-[180px] border-blue-600 text-blue-600 hover:bg-blue-100"
                  >
                    {isCvUpload ? 'Use Description Instead' : 'Upload CV'}
                  </Button>
                </div>

                {error && (
                  <p className="text-destructive text-sm mt-2 font-medium">{error}</p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <Card className="text-center bg-white border-gray-300">
              <CardContent className="p-6">
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-semibold mb-1 text-gray-800">Secure</h4>
                <p className="text-sm text-gray-500">Your data is encrypted and protected</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border-gray-300">
              <CardContent className="p-6">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold mb-1 text-gray-800">Fast</h4>
                <p className="text-sm text-gray-500">AI analysis in seconds</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border-gray-300">
              <CardContent className="p-6">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold mb-1 text-gray-800">Accurate</h4>
                <p className="text-sm text-gray-500">Precise scholarship matching</p>
              </CardContent>
            </Card>
          </div>

          {result?.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Scholarship Recommendations
              </h2>
              <div className="grid gap-4">
                {result.map(
                  (
                    scholarship: { title: string; desc: string; link: string },
                    index: number
                  ) => (
                    <Card key={index} className="bg-white border-gray-300 hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl text-gray-800">
                          {scholarship.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-gray-500">
                          {scholarship.desc}
                        </p>
                        <a
                          href={scholarship.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"
                        >
                          View Details <Sparkles className="h-4 w-4" />
                        </a>
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DescribeYourself;
