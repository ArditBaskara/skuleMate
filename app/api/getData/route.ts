// app/api/getData/route.ts

import { NextResponse } from 'next/server';

const scholarships = [
  {
    name: 'LPDP',
    description: 'Beasiswa untuk studi di Indonesia',
    link: 'https://www.lpdp.kemenkeu.go.id/',
  },
  {
    name: 'Chevening',
    description: 'Beasiswa untuk studi di Inggris',
    link: 'https://www.chevening.org/',
  },
  {
    name: 'MEXT-Scholarship',
    description: 'Beasiswa untuk studi di Jepang',
    link: 'https://www.studyinjapan.go.jp/en/',
  },
  {
    name: 'Fullbright Program',
    description: 'Beasiswa untuk studi di AS',
    link: 'https://foreign.fulbrightonline.org/',
  },
  {
    name: 'DAAD Scholarship',
    description: 'Beasiswa untuk studi di Jerman',
    link: 'https://www.daad.de/',
  },
  {
    name: 'Australia Awards',
    description: 'Beasiswa untuk studi di Australia',
    link: 'https://www.australiaawards.gov.au/',
  },
];

// Named export for GET method
export async function GET() {
  return NextResponse.json(scholarships);
}
