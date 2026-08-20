// src/Componets/Pages/Technology.jsx
import React from 'react';
import bg from '../../../assets/images/backgrounds/tools-section image.webp';
import Marquee from '../../../Componets/Animations/Marquee';
const STACK = [
  'Next.js',
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'Tailwind CSS',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'REST APIs',
  'Redux Toolkit',
  'Figma',
  'Git',
  'GitHub',
  'Webhooks',
  'API Integrations',
  'Workflow Automation',
];

export default function Technology() {
  return (
    <section className="relative overflow-hidden bg-white py-7 sm:py-10">
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-0   hidden h-full w-auto max-w-none object-cover opacity-70 sm:block sm:-right-6 sm:w-[55%] md:right-0 md:w-[48%] lg:w-[42%] lg:opacity-80"
      />
      <div className="mx-auto max-w-6xl">
        {/* eyebrow */}
        <div className="flex items-center justify-start gap-3">
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
            <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="#f6bc17" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Technology
          </span>
        </div>

        <h2 className="mt-3 text-3xl font-medium leading-tight text-gray-900 sm:text-4xl">
          Modern tools.<span className="font-serif italic font-normal">Practical</span> <br />
          solutions.
        </h2>

        <p className="mx-auto mt-5 text-base text-gray-600 sm:text-lg">
          We choose technology based on what your project actually needs — not simply what's
          trending.
        </p>
      </div>

      {/* marquee strip */}
      <div className="relative mt-14">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent sm:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent sm:w-40" />

        <div className="overflow-hidden py-2">
           <Marquee items={STACK} direction="right" speed={20} pauseOnHover={false} />
        </div>
      </div>
    </section>
  );
}
