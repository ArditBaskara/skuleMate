'use client';
import { useState, useEffect } from 'react';

interface Scholarship {
  name: string;
  description: string;
  link: string;
}

interface ScholarshipsProps {
  formData: { name: string; description: string; cv: File | null };
  isCvUpload: boolean;
}

const Scholarships = ({ formData, isCvUpload }: ScholarshipsProps) => {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredScholarships, setFilteredScholarships] = useState<
    Scholarship[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      setLoading(true);
      setError(null); // Reset error state before new fetch
      try {
        let data: any = null;

        if (isCvUpload && formData.cv) {
          const form = new FormData();
          form.append('file', formData.cv);

          const res = await fetch('/api/detectCV', {
            method: 'POST',
            body: form,
          });

          if (res.ok) {
            data = await res.json();
            console.log('Hasil dari /api/detectCV:', data);
          } else {
            throw new Error('CV detection failed');
          }
        } else if (!isCvUpload && formData.description) {
          const res = await fetch('/api/detectText', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text_desc: formData.description }),
          });

          if (res.ok) {
            data = await res.json();
            console.log('Hasil dari /api/detectText:', data);
          } else {
            throw new Error('Text detection failed');
          }
        }

        if (data?.recommendations?.length) {
          setScholarships(data.recommendations);
        } else {
          console.warn('Tidak ada data rekomendasi ditemukan.');
          setError('Tidak ada beasiswa yang ditemukan.');
        }
      } catch (err) {
        console.error('Gagal mengambil data rekomendasi:', err);
        setError('Gagal mengambil data beasiswa. Silakan coba lagi.');
      } finally {
        setLoading(false);
      }
    };

    if (formData.name && (formData.description || formData.cv)) {
      fetchScholarships();
    }
  }, [formData, isCvUpload]);

  useEffect(() => {
    setFilteredScholarships(
      scholarships.filter((scholarship) =>
        scholarship.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, scholarships]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Mulai Perjalanan Pendidikanmu dengan Rekomendasi Beasiswa Terbaik
      </h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Cari beasiswa..."
          className="p-3 w-1/2 border rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {loading ? (
        <p className="text-center">Memuat beasiswa...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : filteredScholarships.length === 0 ? (
        <p className="text-center text-gray-500">
          Tidak ada beasiswa yang ditemukan.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredScholarships.map((scholarship, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{scholarship.name}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {scholarship.description}
              </p>
              <a
                href={scholarship.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                Daftar
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Scholarships;
