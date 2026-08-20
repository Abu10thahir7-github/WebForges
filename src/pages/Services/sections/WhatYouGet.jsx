// src/Componets/Pages/WhatYouGet.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';

const POINTS = [
  {
    title: 'Business-first thinking',
    desc: "We start with your goals and problems, not with technology for technology's sake.",
    bg: 'bg-white',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 17 9 11 13 15 21 7M21 7h-5M21 7v5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Modern development',
    desc: 'We use current tools and development practices to build fast, maintainable solutions.',
    bg: 'bg-[#FCF2D9]',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 6 2 12l6 6M16 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Designed for real users',
    desc: 'Every interface is designed to be clear, responsive, and easy to use.',
    bg: 'bg-[#E9E7FB]',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Built to evolve',
    desc: 'Your website or application should be able to grow as your business grows.',
    bg: 'bg-white',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 20V10M12 10 7 14M12 10l5 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5 20h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhatYouGet() {
  return (
    <section className="bg-[#F6F5F3] px-4 py-7 sm:py-10">
      <div className="mx-auto max-w-6xl">
        {/* eyebrow */}

        <div className="flex items-center justify-start gap-3">
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
            <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="#f6bc17" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Our Approach
          </span>
        </div>

        <h2 className=" mt-3  text-3xl font-medium leading-tight text-gray-900 sm:text-4xl">
          More than a website. <br />
          <span className="font-serif italic font-normal">A digital system</span> <br /> built
          around your business.
        </h2>

        {/* cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point, i) => (
            <div key={point.title} className={`rounded-3xl p-4 shadow-sm ${point.bg}`}>
              <div className="flex items-center">
                <div className="flex items-center h-9 w-9   text-gray-900">{point.icon}</div>
                <h3 className="text-base font-semibold text-gray-900">{point.title}</h3>{' '}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mt-2">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
