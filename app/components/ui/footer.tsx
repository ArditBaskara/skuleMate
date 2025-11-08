'use client';

import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id='contact' className="bg-gradient-to-r from-gray-50 via-indigo-100 to-blue-50 text-gray-300 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand + Logo */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/skulemate.png"
              alt="SkuleMate Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg font-semibold text-gray-800">SkuleMate</span>
          </div>
          <p className="text-sm text-gray-500">
            Discover your perfect scholarship match, powered by intelligent AI.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="flex flex-col gap-3 text-sm"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-gray-800 font-medium mb-1"><strong>Navigation</strong></span>
          <Link href="pages/upload" className="hover:text-blue-900 transition-colors text-black">Find My Scholarship</Link>
          <Link href="/#features" className="hover:text-blue-900 transition-colors text-black">Features</Link>
          <Link href="/#contact" className="hover:text-blue-900 transition-colors text-black">Contact</Link>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-gray-800 font-medium text-sm">Connect with Us</span>
          <div className="flex flex-row flex-wrap gap-2">
            <a href="https://www.linkedin.com/in/ardityabaskaramahbubi/" target="_blank" rel="noopener noreferrer"
              className="flex px-3 py-2 rounded-full bg-neutral-800 hover:bg-blue-600/30 transition-colors w-fit">
              <Linkedin className="h-5 w-5 mr-2 text-white" />Arditya Baskara M
            </a>
            <a href="www.linkedin.com/in/hauzan-tsaaqif-mushaddaq" target="_blank" rel="noopener noreferrer"
              className="flex px-3 py-2 rounded-full bg-neutral-800 hover:bg-blue-600/30 transition-colors w-fit">
              <Linkedin className="h-5 w-5 mr-2 text-white" />Hauzan Tsaaqif M
            </a>
            <a href="https://www.linkedin.com/in/anfasa-muluk/" target="_blank" rel="noopener noreferrer"
              className="flex px-3 py-2 rounded-full bg-neutral-800 hover:bg-blue-600/30 transition-colors w-fit">
              <Linkedin className="h-5 w-5 mr-2 text-white" />M Akmal Anfasa
            </a>
            <a href="https://www.linkedin.com/in/keyzar-athallah/" target="_blank" rel="noopener noreferrer"
              className="flex px-3 py-2 rounded-full bg-neutral-800 hover:bg-blue-600/30 transition-colors w-fit">
              <Linkedin className="h-5 w-5 mr-2 text-white" />Keyzar Rasya A
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Note */}
      <motion.div
        className="text-center text-xs text-gray-500 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        © {new Date().getFullYear()} SkuleMate. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
