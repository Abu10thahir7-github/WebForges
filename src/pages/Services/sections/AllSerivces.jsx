// src/Componets/HomePages/AllServicesSection.jsx  (or wherever this section lives)
import React from 'react';

import DiscoverTextAnimation from '../../../Componets/Animations/DiscoverTextAnimation';
import AllServiceTabContent from '../../../Componets/Animations/AllServiceTabContent';

export default function AllServicesSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-gray-200 bg-white px-4  pt-7 md:pt-10"
      aria-labelledby="all-services-heading"
    >
      {/* soft accent glow, matches the rest of the light-theme sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/4 top-0 -z-10 h-[420px] w-[700px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(246,188,23,0.4) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-6xl">
        {/* eyebrow */}
        <div

          className="flex items-center gap-3"
        >
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
            <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="#f6bc17" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Browse All Services
          </span>
        </div>

        {/* animated headline — reuses the italic scroll-slide component */}
        <div className="-ml-4 mt-2 relative sm:-ml-6">
           <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent sm:w-40" />
          <DiscoverTextAnimation Text="Our all services" />
        </div>

        {/* supporting line */}
        <p

          className="mt-4   text-base text-gray-600 sm:text-lg"
        >
          Every service we offer, organized by category — pick one to see how we can help.
        </p>
      </div>

      {/* tab content */}
      <div className="mx-auto mt-5 max-w-6xl">
        <AllServiceTabContent />
      </div>
    </section>
  );
}