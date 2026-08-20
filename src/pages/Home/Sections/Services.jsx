import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants.js';
import DiscoverTextAnimation from '../../../Componets/Animations/DiscoverTextAnimation.jsx';
import Servicetabcontent from '../../Services/sections/Servicetabcontent.jsx';

function Services() {
  scrollTo(0, 0);

  return (
    <div className="services relative overflow-hidden bg-white py-6 md:py-10">
      {/* fixed: was missing a closing paren, so this never rendered at all.
          also softened to a light glow — a full-opacity conic blob reads
          heavy on a white page in a way it didn't on black. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-40 blur-3xl sm:-right-20 sm:h-[640px] sm:w-[640px]"
        style={{
          background:
            'conic-gradient(from 175deg, rgba(246,188,23,0.9), rgba(255,255,255,0), rgba(255,255,255,0), rgba(246,188,23,0.9))',
        }}
      />
      <div
        className="noise pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-[90%] sm:w-4/5 mx-auto">
        <div className="flex w-full sm:w-1/2">
          <h1 className="flex items-center gap-3 text-sm font-medium tracking-[0.15em] text-[#f6bc17] sm:text-base">
            <svg
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 text-[#f6bc17]"
              aria-hidden="true"
            >
              <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
            </svg>
            OUR SERVICES
          </h1>
        </div>
      </div>

      <div className="relative z-10 mt-6 sm:mt-8">
        <DiscoverTextAnimation />
      </div>

      <div
        variants={fadeIn('up', 0.3)}
        whileInView="show"

        className="relative z-10 w-[90%] sm:w-4/5 mx-auto sm:mt-16"
      >
        <Servicetabcontent />
      </div>
    </div>
  );
}

export default Services;
