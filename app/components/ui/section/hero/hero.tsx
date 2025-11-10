'use client';

import React from 'react';
import { Button } from '../../button';
import { Upload, FileText } from "lucide-react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-gray-50 via-indigo-100 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              Find Your Perfect{" "}
              <span className="bg-gradient-to-r from-blue-500 via-black to-blue-400 bg-clip-text text-transparent">
                Scholarship
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 max-w-xl">
              Stop endless searching. Let our AI analyze your profile and match you with
              scholarships tailored to your unique background and achievements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pages/upload">
                <Button variant="hero" size="lg" className="group bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  <Upload className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Upload Your CV
                </Button>
              </Link>

              <Link href="/pages/upload">
                <Button variant="outline" size="lg" className="group border-blue-600 text-blue-600 hover:bg-blue-100 transition-colors">
                  <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Describe Yourself
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-gray-500">Scholarships</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-500">Match Rate</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-blue-600">AI</div>
                <div className="text-sm text-gray-500">Powered</div>
              </div>
            </div>
          </motion.div>

          {/* Right image */}
          <div className="relative hidden lg:block">
            <motion.div
              className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/lading1.png" // Using existing image from public folder
                alt="Students celebrating scholarship success"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </motion.div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-300 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-teal-50/50 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Smart Matching</div>
                  <div className="text-sm text-gray-500">AI-powered results</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
