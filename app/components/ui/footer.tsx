// components/Footer.tsx

import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/skulemate.png"
            alt="Skulmate Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-xl font-semibold">Skulmate</span>
        </div>

        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600"
          >
            <Facebook className="h-6 w-6" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex gap-8">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/search-scholarships" className="hover:underline">
            Cari Beasiswa
          </a>
          <a href="/faq" className="hover:underline">
            FAQ
          </a>
          <a href="/scholarship-list" className="hover:underline">
            Daftar Beasiswa
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
