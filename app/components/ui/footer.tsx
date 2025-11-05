'use client';

import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id='contact' className="mt-16 bg-neutral-950 text-gray-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand + Logo */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/skulemate.png"
              alt="SkuleMate Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg font-semibold text-white">SkuleMate</span>
          </div>
          <p className="text-sm text-gray-400">
            Discover your perfect scholarship match, powered by intelligent AI.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 text-sm">
          <span className="text-white font-medium mb-1"><strong>Navigation</strong></span>
          <Link href="pages/upload" className="hover:text-white transition-colors">Find My Scholarship</Link>
          <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-2">
          <span className="text-white font-medium text-sm">Connect with Us</span>
          <div className="flex-row gap-4">
            <a href="https://www.linkedin.com/in/ardityabaskaramahbubi/" target="_blank" rel="noopener noreferrer"
              className="flex px-3 py-2 rounded-full bg-neutral-800 hover:bg-blue-600/30 transition-colors mb-2 w-fit">
              <Linkedin className="h-5 w-5 mr-2" />Arditya Baskara M
            </a>
            <a href="www.linkedin.com/in/hauzan-tsaaqif-mushaddaq" target="_blank" rel="noopener noreferrer"
              className="flex px-3 py-2 rounded-full bg-neutral-800 hover:bg-blue-600/30 transition-colors mb-2 w-fit">
              <Linkedin className="h-5 w-5 mr-2" />Hauzan Tsaaqif M
            </a>
            <a href="https://www.linkedin.com/in/keyzar-athallah/" target="_blank" rel="noopener noreferrer"
              className="flex px-3 py-2 rounded-full bg-neutral-800 hover:bg-blue-600/30 transition-colors mb-2 w-fit">
              <Linkedin className="h-5 w-5 mr-2" />Keyzar Rasya A
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-500 pb-6">
        © {new Date().getFullYear()} SkuleMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
