import React from 'react';
import { Job } from '@/data/jobs';
import ApplicationForm from './ApplicationForm';

export default function JobDetail({ job }: { job: Job }) {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 grid gap-8 lg:grid-cols-2">
      <div>
        <h1 className="text-3xl font-semibold mb-2 text-sky-700">{job.title}</h1>
        <div className="text-sm text-sky-500 mb-4">
          <span className="mr-3">{job.department}</span>
          <span className="mr-3">•</span>
          <span className="mr-3">{job.location}</span>
          <span className="mr-3">•</span>
          <span>{job.employmentType}</span>
        </div>

        {job.description && <p className="text-white mb-4">{job.description}</p>}

        {job.docUrl && (
          <p className="mb-4">
            <a href={job.docUrl} download className="inline-block bg-gray-100 px-3 py-2 rounded text-sm text-gray-800 hover:bg-gray-200">Download full job description</a>
          </p>
        )}

        {job.responsibilities && (
          <div className="mb-4">
            <h3 className="font-medium mb-2 text-sky-700">Responsibilities</h3>
            <ul className="list-disc pl-5 text-white">
              {job.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}

        {job.requirements && (
          <div>
            <h3 className="font-medium mb-2 text-sky-700">Qualifications</h3>
            <ul className="list-disc pl-5 text-white">
              {job.requirements.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <aside>
        <div className="sticky top-24">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h4 className="font-medium mb-2">Apply for this role</h4>
            <ApplicationForm jobSlug={job.slug} jobTitle={job.title} />
          </div>
        </div>
      </aside>
    </section>
  );
}
