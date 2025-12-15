'use client';
import React from 'react';
import { Navbar } from '@/components/landing-page/navbar';
import Footer from '@/components/landing-page/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="space-y-6">
      <Navbar />
      
      {/* Hero Section */}
      <section className='grid lg:grid-cols-2 sm:grid-col-1 max-w-7xl m-auto mt-4 z-0 min-h-[60vh]'>
        <div className='flex flex-col m-auto p-4'>
          <div className='p-4 space-y-4'>
            <h1 className="text-6xl font-semibold">Join Our Team</h1>
            <p className="mt-4 text-lg leading-relaxed max-w-2xl">
              Be part of the mission to detect deepfakes, combat misinformation, and ensure content authenticity worldwide.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="/"
                className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition font-semibold"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        <div className='p-6 lg:mt-12 flex items-center justify-center'>
          <Image
            src="/Vector.svg"
            alt="Decorative Lines"
            width={400}
            height={300}
            className="customTeal opacity-50"
          />
        </div>
      </section>

      {/* No Vacancies Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center">
              <svg className="w-16 h-16 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                No Available Vacancies Right Now
              </h2>
              
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                We're not currently hiring, but we're always interested in talented individuals passionate about AI, deepfake detection, and content authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
