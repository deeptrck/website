import Link from 'next/link';
import React from 'react';
import { Job } from '@/data/jobs';

export default function JobCard({ job }: { job: Job }) {
  return (
    <article className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-1">
        <Link href={`/careers/${job.slug}`} className="text-sky-700 hover:underline">
          {job.title}
        </Link>
      </h3>
      <div className="text-sm text-gray-600 mb-3">
        <span className="mr-3">{job.department}</span>
        <span className="mr-3">•</span>
        <span className="mr-3">{job.location}</span>
        <span className="mr-3">•</span>
        <span>{job.employmentType}</span>
      </div>
      <p className="text-gray-700 mb-4">{job.summary}</p>
      <Link href={`/careers/${job.slug}`} className="inline-block text-sky-600 font-medium">
        View role →
      </Link>
    </article>
  );
}
