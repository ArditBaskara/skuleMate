'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation'; // Import useRouter

const navLinks = [
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#features', label: 'Features' },

  // { href: '/#about', label: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter(); // Initialize useRouter

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.split('#')[1];
    if (pathname === '/') {
      // If already on the landing page, scroll directly
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on the landing page, navigate and then scroll
      router.push(`/${href}`);
    }
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/skulemate.png"
              alt="SkuleMate logo"
              width={36}
              height={36}
              priority
            />
            <span className="font-semibold text-xl text-gray-800">SkuleMate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleScroll(e, href)}
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                {label}
              </a>
            ))}
            <Link href="/pages/setup" className="text-gray-800 hover:text-blue-600 transition-colors">
              Setting
            </Link>
            <Link href="/pages/upload" className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-300 transition-all duration-300 ease-in-out transform">
            <div className="flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleScroll(e, href)}
                  className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  {label}
                </a>
              ))}
              <Link href="/pages/upload" className="mx-4 px-4 py-2 rounded-md bg-blue-600 text-white font-semibold text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
