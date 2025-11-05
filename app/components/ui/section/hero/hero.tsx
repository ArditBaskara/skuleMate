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
    <section className="bg-neutral-950 text-white px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-neutral-950 opacity-90 z-0"></div>
      <div className="absolute top-[-80px] left-[60%] w-[300px] h-[300px] bg-blue-800 opacity-10 blur-[100px] rounded-full z-0" />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        {/* TEXT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Discover Scholarships Smarter with SkuleMate
          </h1>
          <p className="text-lg text-gray-400 mb-8">
             Just upload your CV or write a short bio. Let the AI find your best-fit scholarships with fast, personalized, and stress-free.
          </p>
          <button
            onClick={handleClick}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg"
          >
            Find My Scholarship
          </button>
        </div>

        {/* SINGLE IMAGE WITH FLOATING EFFECT */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[400px] h-[300px] md:w-[500px] md:h-[400px] animate-float">
            <Image
              src="/lading1.png"
              alt="Hero Illustration"
              fill
              className="rounded-3xl shadow-xl object-cover rotate-[3deg] hover:rotate-0 transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Floating animation style */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
