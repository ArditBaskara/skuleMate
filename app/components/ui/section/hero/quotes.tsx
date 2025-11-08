'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Quotes = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/pages/upload');
  };

  return (
    <section className="relative min-h-[50vh] flex items-center bg-gradient-to-r from-gray-50 via-indigo-100 to-blue-50 overflow-hidden py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-2xl md:text-3xl italic text-gray-800 leading-relaxed">
            “The beautiful thing about learning is that no one can take it away from you.”
          </p>
          <p className="mt-4 text-base text-gray-600">— B.B. King</p>
        </motion.div>
      </div>
    </section>

  );
};

export default Quotes;
