import React from 'react';
import Hero from '../components/ui/section/hero/hero';
import What from '../components/ui/section/hero/what';
import Quotes from '../components/ui/section/hero/quotes';
import ScholarshipListSection from '../components/ui/section/hero/scholarship';
import Features from '../components/ui/section/hero/features';
import WellbeingSection from '../components/ui/section/hero/well';
import Head from 'next/head';

const LandingPage = () => {
  return (
    <div className="container">
      <Head>
        <title>SkuleMate - AI Powered Scholarship Finder</title>
        <meta name="description" content="SkuleMate is an intelligent scholarship search platform designed to simplify and personalize the way users find scholarships. Powered by Natural Language Processing and custom-trained AI models, SkuleMate analyzes your profile or CV and matches it with thousands of curated scholarships using semantic similarity — no more manual searching." />
        <meta property="og:title" content="My Next.js App" />
        <meta property="og:description" content="This is an awesome Next.js app" />
        <meta property="og:image" content="https://example.com/image.png" />
      </Head>
      <Hero />
      <Quotes />
      <Features />
    </div>
  );
};

export default LandingPage;
