'use client';
import { useState, useEffect } from 'react';

interface Scholarship {
  name: string;
  description: string;
  link: string;
}

const Scholarships = () => {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredScholarships, setFilteredScholarships] = useState<
    Scholarship[]
  >([]);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await fetch('/api/getData');
        const data = await response.json();
        setScholarships(data);
        setFilteredScholarships(data);
      } catch (error) {
        console.error('Error fetching scholarships', error);
      }
    };

    fetchScholarships();
  }, []);

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

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="p-3 w-1/2 border rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Display Scholarships */}
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

      {/* Button to load more (optional) */}
      <div className="text-center mt-8">
        <button className="bg-teal-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-teal-700">
          Lebih banyak
        </button>
      </div>

      {/* Footer count */}
      <div className="text-center mt-4">
        <p className="text-gray-600">{filteredScholarships.length} Beasiswa</p>
      </div>
    </div>
  );
};

export default Scholarships;
