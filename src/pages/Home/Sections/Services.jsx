import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants.js';
import DiscoverTextAnimation from '../../../Componets/Animations/DiscoverTextAnimation.jsx';
import TabsComponent from '../../../Componets/Animations/ServiceTabContent.jsx';
import Servicetabcontent from '../../Services/Servicetabcontent.jsx';

function Services() {
  scrollTo(0, 0);

  return (
    <div className="services relative bg-black py-12 sm:py-16   overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-90 blur-3xl sm:-right-20 sm:h-[640px] sm:w-[640px]"
        style={{
          background: 'conic-gradient(from 210deg at 50% 50%, #f6bc17, #0a0a0a, #ffffff, #f6bc17)',
        }}
      />
       <div className="noise absolute inset-0 opacity-[0.10]" aria-hidden="true" />

      <div className="w-[90%] sm:w-4/5 mx-auto">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="flex w-full sm:w-1/2"
        >
          <h1 className="text-sm sm:text-base flex items-center gap-3 text-white tracking-[0.15em]">
            <svg
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#F5B937] shrink-0"
            >
              <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
            </svg>
            OUR SERVICES
          </h1>
        </motion.div>
      </div>

      {/* Marquee-style headline, scales down cleanly on small screens */}
      <div className="mt-6 sm:mt-8">
        <DiscoverTextAnimation />
      </div>

      {/* Service detail tabs, sits below the headline */}
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true }}
        className="w-[90%] sm:w-4/5 mx-auto mt-12 sm:mt-16"
      >
        <Servicetabcontent />
      </motion.div>
    </div>
  );
}

export default Services;
