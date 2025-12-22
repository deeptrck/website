"use client";
import React from 'react';
import { Navbar } from '@/components/landing-page/navbar';
import Footer from '@/components/landing-page/footer';
import Image from 'next/image';
import Link from 'next/link';
import JobList from '@/components/careers/JobList';

export default function CareersPage() {
  return (
    <div className="space-y-6">
      <Navbar />

      {/* Hero Section */}
      <section className='grid lg:grid-cols-2 sm:grid-col-1 max-w-7xl m-auto mt-4 z-0 min-h-[48vh]'>
        <div className='flex flex-col m-auto p-4'>
          <div className='p-4 space-y-4'>
            <h1 className="text-5xl md:text-6xl font-semibold">Careers at DeepTrack</h1>
            <p className="mt-4 text-lg leading-relaxed max-w-2xl">
              Our mission continues: we build tools to verify media and protect truth. Browse open roles below and apply online.
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

      <JobList />

      <Footer />
    </div>
  );
}
