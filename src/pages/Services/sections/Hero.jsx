// src/Componets/Pages/ServicesHero.jsx
import React from 'react';

import { Link } from 'react-router-dom';
import Button from '../../../Componets/UI/Button';

const TAGS = ['Web Development', 'Business Automation', 'UI/UX Design', 'E-Commerce', 'SEO'];

const CAPABILITIES = [
  {
    label: 'Web Development',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 6 2 12l6 6M16 6l6 6-6 6"
          stroke="#f6bc17"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Business Automation',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4" stroke="#f6bc17" strokeWidth="2" />
        <path
          d="M12 2v3M12 19v3M22 12h-3M5 12H2M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12M19.07 19.07l-2.12-2.12M7.05 7.05 4.93 4.93"
          stroke="#f6bc17"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: 'UI/UX Design',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#f6bc17" strokeWidth="2" />
        <path d="M3 9h18" stroke="#f6bc17" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: 'E-Commerce',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6"
          stroke="#f6bc17"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="21" r="1" fill="#f6bc17" />
        <circle cx="18" cy="21" r="1" fill="#f6bc17" />
      </svg>
    ),
  },
  {
    label: 'Growth &amp; SEO',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 17 9 11 13 15 21 7M21 7h-5M21 7v5"
          stroke="#f6bc17"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ServicesHero() {
  return (
    <header className="relative overflow-hidden bg-white    ">
      <div
        className="pointer-events-none absolute -right-40 -top-60  h-[560px] w-[560px] rounded-full opacity-90 blur-3xl sm:-right-20 sm:h-[640px] sm:w-[640px]"
        style={{
          background: 'conic-gradient(from 210deg at 50% 50%, #f6bc17, #0a0a0a, #ffffff, #f6bc17)',
        }}
      />{' '}
      <div className="noise absolute z-0 inset-0 opacity-[0.08]" aria-hidden="true" />
      {/* <div className="noise absolute z-0 inset-0 opacity-[0.08]" aria-hidden="true" /> */}
      <div className="relative z-10 !mt-24 px-5  sm:px-10 ">
        {/* eyebrow */}
        <div className="flex  items-center gap-3">
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
            <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="#f6bc17" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Our Services
          </span>
        </div>

        {/* headline + CTA row */}
        <div className=" mt-3 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="">
            <h1 className="leading-[0.95] text-gray-900">
              <span className="block font-serif text-3xl italic text-gray-700 sm:text-4xl lowercase md:text-5xl">
                Digital solutions,
              </span>
              <span className="block text-6xl font-extrabold uppercase tracking-tight sm:text-7xl md:text-8xl">
                BUILT TO <br /> MOVE FORWARD.
              </span>
            </h1>

            <p className="text-base leading-relaxed  text-gray-500">
              From high-performance websites to business automation, <br /> we design and build
              digital solutions that make your business easier to run, easier to find, and easier to
              grow.
            </p>
          </div>

          {/* primary CTA — pinned like the reference */}
          <div className="shrink-0 lg:pb-2">
            <Button to="/projects" variant="">
              View Our Work
            </Button>
          </div>
        </div>

        {/* tag pills */}
        <div className="  text-center mt-5 flex  justify-center flex-wrap gap-2 py-5    ">
          {TAGS.map(tag => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600 backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
