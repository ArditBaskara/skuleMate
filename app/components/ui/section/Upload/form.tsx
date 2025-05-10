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
      } else {
        alert('Please provide either a CV or a description');
        return;
      }

      // Simpan hasil ke state apiResult
      if (setResult) {
        setResult(data);
      }
    } catch (error) {
      console.error(error);
      setError(
        'Error: ' +
          (error instanceof Error ? error.message : 'Failed to send data.')
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-4">
        Deskripsikan Diri Anda
      </h1>
      <p className="text-center text-lg mb-8">
        Cari beasiswa berdasarkan kualifikasi pribadi kamu.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image
            src="/input.png"
            alt="Ilustrasi"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 mt-2 border rounded-lg"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {isCvUpload ? (
              <div className="mb-4">
                <label
                  htmlFor="cv"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Upload CV
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 mt-2 border rounded-lg"
                  onChange={handleFileChange}
                  required
                />
              </div>
            ) : (
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Deskripsikan Diri Anda
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full px-4 py-3 mt-2 border rounded-lg"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Ceritakan pengalaman, pendidikan, dan minat Anda..."
                  required
                />
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-between mt-6">
              <button
                type="submit"
                className="bg-teal-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-teal-700"
                disabled={loading}
              >
                {loading ? 'Mencari...' : 'Cari Beasiswa'}
              </button>
              <button
                type="button"
                onClick={() => setIsCvUpload((prev) => !prev)}
                className="bg-gray-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-600"
              >
                {isCvUpload ? 'Isi Deskripsi Diri' : 'Upload CV'}
              </button>
            </div>

            {/* Error Display */}
            {error && (
              <div className="mt-6 text-red-600 font-medium text-lg">
                {error}
              </div>
            )}
          </form>
        </div>

        {/* Result Display */}
        {result &&
        result.recommendations &&
        result.recommendations.length > 0 ? (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-teal-700">
              Beasiswa yang Cocok
            </h2>
            <ul className="space-y-4">
              {result.recommendations.map((scholarship: any, index: number) => (
                <li
                  key={index}
                  className="border p-4 rounded-lg shadow-sm bg-gray-50"
                >
                  <h3 className="text-lg font-bold text-gray-800">
                    {scholarship.title}
                  </h3>
                  <p className="text-sm text-gray-700">{scholarship.desc}</p>
                  <a
                    href={scholarship.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {scholarship.title} - Info Beasiswa
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-10 text-lg text-gray-500">
            Tidak ada beasiswa yang ditemukan.
          </p>
        )}
      </div>
    </div>
  );
};

export default DescribeYourself;
