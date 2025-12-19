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
            <h1 className="text-6xl font-semibold">Careers at DeepTrack</h1>
            <p className="mt-4 text-lg leading-relaxed max-w-2xl">
             Our mission continues: we build tools to verify media and protect truth. We sometimes open roles as we scale — when we do, they appear here.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="/"
                className="bg-gray-200 text-slate-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        <div className='p-6 lg:mt-12 flex items-center justify-center'>
          <Image
            src="/culture.jpg"
            alt="Team Culture"
            width={420}
            height={320}
            className="rounded-xl shadow-md"
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
                We're Not Hiring Right Now
              </h2>
              
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                 We currently have no open vacancies, but we're always happy to hear from passionate candidates. If you'd like to be considered for future roles, email us your CV and a short note about what you'd like to work on.
              </p>

              <div className="mt-6">
                <a href="mailto:careers@deeptrack.io" className="inline-block bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition font-semibold">Send your CV</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
