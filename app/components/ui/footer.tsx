'use client';

import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-neutral-800 bg-[color:var(--background)] text-[color:var(--foreground)] mt-5">
      <div className="container mx-auto px-6 pt-5 flex flex-col md:flex-row justify-between gap-8 items-start md:items-center">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/skulemate.png"
            alt="Skulemate Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-lg font-semibold">SkuleMate</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
          <Link href="/about" className="hover:underline">
            Tentang
          </Link>
          <Link href="/search-scholarships" className="hover:underline">
            Cari Beasiswa
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link href="/scholarship-list" className="hover:underline">
            Daftar Beasiswa
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 pb-4 mt-4">
        © {new Date().getFullYear()} SkuleMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
