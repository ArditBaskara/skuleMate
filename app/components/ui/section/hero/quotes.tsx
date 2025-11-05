'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Quotes = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/pages/upload');
  };

  return (
    <section className="bg-gradient-to-b from-neutral-950 to-neutral-900 py-35 px-6 md:px-20 text-center relative">
      <div className="max-w-3xl mx-auto">
        
        <p className="text-xl md:text-2xl italic text-gray-300 leading-relaxed">
          “The beautiful thing about learning is that no one can take it away from you.”
        </p>
        <p className="mt-4 text-sm text-gray-500">— B.B. King</p>
      </div>
    </section>

  );
};

export default Quotes;
