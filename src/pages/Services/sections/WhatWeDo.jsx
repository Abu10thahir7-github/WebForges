// src/Componets/Pages/WhatWeDo.jsx
import React from 'react';

 import bg from '../../../assets/images/backgrounds/what-we-do-image.webp';
const SERVICES = [
  {
    title: 'Web Development',
    desc: 'Fast, scalable websites and web apps built on modern frameworks — from business sites to custom platforms.',
    to: '/services/webdevelopment',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 6 2 12l6 6M16 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    desc: 'Pixel-perfect, user-first interfaces that make your product intuitive, accessible, and easy to love.',
    to: '/services/webdesign',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="6.5" cy="6.5" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce',
    desc: 'Conversion-focused online stores with secure payments, smooth checkout, and inventory built to scale.',
    to: '/services/ecommerce',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="21" r="1" fill="currentColor" />
        <circle cx="18" cy="21" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Business Automation',
    desc: 'Workflow, CRM, and no-code automations that cut manual work and let your team focus on what matters.',
    to: '/services/dynamic-website',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 2v3M12 19v3M22 12h-3M5 12H2M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12M19.07 19.07l-2.12-2.12M7.05 7.05 4.93 4.93"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'SEO & Growth',
    desc: 'Technical and local SEO that gets you found — structured data, page speed, and content that ranks.',
    to: '/services/seo-website',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 17 9 11 13 15 21 7M21 7h-5M21 7v5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Support & Maintenance',
    desc: 'Ongoing updates, monitoring, and technical support so your site stays fast, secure, and current.',
    to: '/services/website-maintenance',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-2.6 2.6-2-.7-.7-2 2.6-2.6Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative bg-white px-4 py-7 sm:py-10">
      <div className="mx-auto max-w-6xl">
        {/* eyebrow */}
        <div className="flex items-center gap-3">
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
            <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="#f6bc17" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            What We Do
          </span>
        </div>

        {/* H2 + supporting text */}

        <div className='flex flex-col md:flex-row'>
        <div className="mt-6 flex flex-col   gap-8    ">
          <h2 className="    text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
            Everything you need to build and{' '}
            <span className="font-serif italic font-normal">grow</span> online.
          </h2>

          <p className="max-w-md text-base leading-relaxed text-gray-500">
            We combine strategy, design, development, and automation to create digital experiences
            that are useful for your customers and valuable for your business.
          </p>
        </div>
         <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="  sm:w-[25%] md:right-0 md:w-[38%] lg:w-[35%]  "
      /></div>
      </div>
    </section>
  );
}
