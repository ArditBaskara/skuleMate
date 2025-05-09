'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface FormData {
  name: string;
  description: string;
  cv: File | null;
}

const DescribeYourself = () => {
  const [isCvUpload, setIsCvUpload] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    cv: null,
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      cv: e.target.files?.[0] || null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let data;

      if (isCvUpload && formData.cv) {
        const form = new FormData();
        form.append('file', formData.cv);

        const res = await fetch('/api/detectText', {
          method: 'POST',
          body: form,
        });

        if (!res.ok) throw new Error('CV detection failed');
        data = await res.json();
      } else {
        const res = await fetch('/api/detectCV', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text_desc: formData.description }),
        });

        if (!res.ok) throw new Error('Text detection failed');
        data = await res.json();
      }

      if (data.similarity) {
        localStorage.setItem('similarityScore', data.similarity.toString());
      }

      router.push('/beasiswa');
    } catch (error) {
      console.error(error);
      alert('Gagal mengirim data ke server.');
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
                className="w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                  className="w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                  className="w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default DescribeYourself;
