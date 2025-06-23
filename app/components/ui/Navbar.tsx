/* app/components/Navbar.tsx */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "Tentang" },
  { href: "/beasiswa", label: "Cari Beasiswa" },
  { href: "/faq", label: "FAQ" },
  { href: "/register-scholarship", label: "Daftar Beasiswa" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--background)/80] border-b border-gray-200 dark:border-neutral-800">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo + brand name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/skulemate.png"
            alt="SkuleMate logo"
            width={32}
            height={32}
            priority
          />
          <span className="font-semibold text-lg tracking-tight text-[color:var(--foreground)]">
            SkuleMate
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="group relative">
              <Link
                href={href}
                className={`font-medium text-sm transition-colors ${
                  pathname === href
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-[color:var(--foreground)]/80 hover:text-[color:var(--foreground)]"
                }`}
              >
                {label}
              </Link>
              {/* underline hover anim */}
              <span className="absolute -bottom-1 inset-x-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-800 focus-visible:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="lg:hidden flex flex-col gap-3 px-8 pb-6 animate-fade-in">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block py-2 font-medium ${
                  pathname === href
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-[color:var(--foreground)]/90"
                }`}
                onClick={() => setOpen(false)}
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
