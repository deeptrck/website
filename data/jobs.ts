export type Job = {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  summary: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  postedAt?: string;
};

export const jobs: Job[] = [
  {
    id: '1',
    slug: 'senior-software-engineer',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Remote (Nairobi, Kenya )',
    employmentType: 'Full-time',
    summary: 'Build core verification services and scale our platform.',
    description:
      'Work on backend services, APIs, and data processing to improve media verification and inference correctness at scale.',
    responsibilities: [
      'Design and implement backend services',
      'Own API and data models',
      'Mentor junior engineers',
    ],
    requirements: [
      '5+ years engineering experience',
      'Strong Node/TypeScript skills',
      'Experience with distributed systems',
    ],
    postedAt: '2025-12-01',
  },
  {
    id: '2',
    slug: 'product-designer',
    title: 'Product Designer',
    department: 'Design',
    location: 'Nairobi, Kenya (hybrid)',
    employmentType: 'Full-time',
    summary: 'Lead product design across web and embedded experiences.',
    description:
      'Shape product experiences, run research, and produce high-fidelity designs and prototypes.',
    responsibilities: [
      'Lead UX research and design sprints',
      'Produce prototypes and design systems',
    ],
    requirements: [
      '3+ years product design experience',
      'Strong portfolio of product work',
    ],
    postedAt: '2025-11-15',
  },
];
