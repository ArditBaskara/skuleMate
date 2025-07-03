'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/pages/upload',           label: 'Find My Scholarship' },
  { href: '/#features',              label: 'Features' },
  { href: '/#contact',                label: 'Contact' },
  { href: '/pages/setup',                label: 'Setting' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 shadow-md shadow-black/20 border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/skulemate.png"
            alt="SkuleMate logo"
            width={36}
            height={36}
            priority
          />
          <span className="font-semibold text-xl text-white">SkuleMate</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-10">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href} className="relative group">
                <Link
                  href={href}
                  className={`transition-colors font-medium ${
                    active
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
                {/* underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-transform duration-300 origin-left ${
                    active
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md hover:bg-neutral-800/60 focus-visible:outline-none"
          aria-label="Toggle menu"
        >
          {open ? (
            <XMarkIcon className="w-6 h-6 text-gray-200" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-200" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="lg:hidden bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 animate-fade-in flex flex-col gap-2 py-6 px-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-lg font-medium ${
                  pathname === href ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}