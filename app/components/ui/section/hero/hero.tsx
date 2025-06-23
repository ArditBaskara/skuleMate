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
    <section className="text-center px-4 md:px-8 lg:px-16 py-12 bg-white dark:bg-neutral-900">
      <div className="max-w-3xl mx-auto mb-30 mt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
          Mulai Perjalanan Pendidikanmu dengan Rekomendasi Beasiswa Terbaik
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Cari beasiswa berdasarkan jurusan, lokasi, dan kualifikasi pribadi kamu.
        </p>
        <button
          onClick={handleClick}
          className="bg-teal-500 hover:bg-teal-400 text-white py-3 px-8 rounded-full text-lg transition duration-300"
        >
          Cari Beasiswa
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/lading1.png"
            alt="Ilustrasi pencarian beasiswa"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/lading2.png"
            alt="Ilustrasi pendidikan global"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
