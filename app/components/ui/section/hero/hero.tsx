'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/pages/upload');
  };

  return (
    <section className="text-center px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Mulai Perjalanan Pendidikanmu dengan Rekomendasi Beasiswa Terbaik
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Cari beasiswa berdasarkan jurusan, lokasi, dan kualifikasi pribadi kamu.
      </p>
      <button
        onClick={handleClick}
        className="bg-teal-500 text-white py-2 px-6 rounded-full text-lg hover:bg-teal-400 transition-all duration-300"
      >
        Cari Beasiswa
      </button>

      <div className="flex justify-center gap-8 mt-12">
        <div className="flex-1">
          <img
            src="/lading1.png"
            alt="Gambar 1"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1">
          <Image
            src="/lading2.png"
            alt="Gambar 2"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
