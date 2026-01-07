import Link from 'next/link';
import React from 'react';
import { Job } from '@/data/jobs';

export default function JobCard({ job }: { job: Job }) {
  return (
    <article className="bg-sky-900 text-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-1">
        <Link href={`/careers/${job.slug}`} className="text-sky-200 hover:underline">
          {job.title}
        </Link>
      </h3>
      <div className="text-sm text-sky-200 mb-3">
        <span className="mr-3">{job.department}</span>
        <span className="mr-3">•</span>
        <span className="mr-3">{job.location}</span>
        <span className="mr-3">•</span>
        <span>{job.employmentType}</span>
      </div>
      <p className="text-white mb-4">{job.summary}</p>
      <div className="flex items-center gap-4">
        <Link href={`/careers/${job.slug}`} className="inline-block bg-white text-sky-900 px-3 py-1 rounded font-medium">
          View role →
        </Link>
        {job.docUrl && (
          <a href={job.docUrl} download className="text-sm text-sky-100 hover:underline">
            Download JD
          </a>
        )}
      </div>
    </article>
  );
}
