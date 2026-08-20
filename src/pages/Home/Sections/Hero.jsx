import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn } from '../../../data/variants.js';
import Button from '../../../Componets/UI/Button.jsx';
const pillars = [
  {
    label: 'Web Development',
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3L2 12L8 21M16 3L22 12L16 21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    live: true,
  },
  {
    label: 'Automation',
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2V4M12 20V22M4 12H2M6.31 6.31L4.9 4.9M17.69 6.31L19.1 4.9M6.31 17.69L4.9 19.1M17.69 17.69L19.1 19.1M22 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Growth',
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 17L9 11L13 15L21 7M21 7H15M21 7V13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
function Hero() {
  return (
    <div c>
      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden pt-20 bg-white">
        {/* signature gradient blob — same role as Nexo's, re-colored to WebForges */}
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-90 blur-3xl sm:-right-20 sm:h-[640px] sm:w-[640px]"
          style={{
            background:
              'conic-gradient(from 210deg at 50% 50%, #f6bc17, #0a0a0a, #ffffff, #f6bc17)',
          }}
        />
        <div className="noise absolute z-0 inset-0 opacity-[0.08]" aria-hidden="true" />



        {/* tag row */}
        <div className="relative mt-5 flex flex-wrap gap-2 px-5  sm:px-10">
          {['Web Design', 'SEO', 'Web Development', 'Business Automation', , 'E-Commerce'].map(
            tag => (
              <span
                key={tag}
                className="rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600 backdrop-blur"
              >
                {tag}
              </span>
            ),
          )}
        </div>

        {/* headline + CTA */}
        <div className="relative mt-6 flex flex-col justify-between gap-8 px-5 pb-16 sm:px-10 sm:pb-24 lg:flex-row lg:items-end">
          <div>
            <h1 className="leading-[0.95] text-gray-900">
              <span className="block font-serif text-3xl italic text-gray-700 sm:text-4xl lowercase md:text-5xl">
                Digital Experiences,
              </span>
              <span className="block text-6xl font-extrabold uppercase tracking-tight sm:text-7xl md:text-8xl">
                Built to Grow.
              </span>
            </h1>
            <p className="text-base leading-relaxed text-gray-500">
              We build high-performance websites, web applications, and business automation <br />{' '}
              systems that help businesses grow online and work smarter.
            </p>
          </div>
          <div className="shrink-0">
           <Button to="/contact" variant="dark" size="lg">Start a Project</Button>
          </div>
        </div>

        {/* trust strip */}
        <div className="relative flex flex-col items-start justify-center gap-6 border-t border-gray-100 px-5 py-8 sm:flex-row sm:items-center sm:px-10">
          <motion.div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-gray-500">
            {pillars.map((item, i) => (
              <React.Fragment key={item.label}>
                <span className="flex items-center gap-2 hover:text-gray-900 transition-colors duration-300">
                  <span className="text-[#f6bc17]">{item.icon}</span>
                  {item.label}
                </span>
                {i < pillars.length - 1 && <span className="text-gray-300 select-none">/</span>}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
