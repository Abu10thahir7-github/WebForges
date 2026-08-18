import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../data/variants';

const services = [
  {
    title: 'Web Design',
    tagline: 'Sites built to fix a problem, not just look good.',
    items: [
      'Full website redesigns for brands that have outgrown their current site',
      'Problem-first builds, made to solve one specific bottleneck in your business',
      'High-conversion landing pages, built and SEO-optimized from day one',
    ],
  },
  {
    title: 'E-Commerce',
    tagline: 'Store, marketing, and catalog handled end to end.',
    items: [
      'Full online stores, from product catalog through to checkout',
      'Marketing set up alongside the build, not bolted on after launch',
      'No-login reseller catalogs for browse-and-inquire sites that skip accounts and online payment',
    ],
  },
  {
    title: 'Digital Products',
    tagline: 'Turn what you offer into a page people act on.',
    items: [
      'Service and product pages built to convert visitors into inquiries',
      'Packaging an offer into a clear, sellable digital product page',
    ],
  },
  {
    title: 'Marketing & Visibility',
    tagline: 'Get found on search, ads, and AI results.',
    items: [
      'Google Ads and Meta Ads campaigns, managed end to end',
      'SEO re-optimization for sites that used to rank and have slipped',
      'AI search setup, so you surface in ChatGPT, Perplexity, and AI Overviews too',
    ],
  },
  {
    title: 'Support & Maintenance',
    tagline: 'Ongoing fixes for sites under a support agreement.',
    items: [
      'Contract bug fixing, on-call for sites already under agreement',
    ],
  },
];

function Servicetabcontent() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState(0);

  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-6 sm:gap-14"
    >
      {/* ---------- Desktop: tab list ---------- */}
      <div className="hidden sm:flex flex-col border-t border-white/10">
        {services.map((service, i) => (
          <button
            key={service.title}
            onClick={() => setActive(i)}
            className={`group flex items-center justify-between border-b border-white/10 py-5 text-left transition-colors ${
              active === i ? 'text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            <span className="flex items-center gap-4">
              <span className="text-xs tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-base font-medium">{service.title}</span>
            </span>
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                active === i ? 'bg-[#F5B937] scale-100' : 'scale-0'
              }`}
            />
          </button>
        ))}
      </div>

      {/* ---------- Desktop: active tab detail ---------- */}
      <div className="hidden sm:block min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={services[active].title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <p className="text-2xl italic font-light text-white mb-6">
              {services[active].tagline}
            </p>
            <ul className="space-y-4">
              {services[active].items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-white/60 leading-relaxed"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#F5B937]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ---------- Mobile: accordion ---------- */}
      <div className="sm:hidden flex flex-col border-t border-white/10">
        {services.map((service, i) => {
          const isOpen = openMobile === i;
          return (
            <div key={service.title} className="border-b border-white/10">
              <button
                onClick={() => setOpenMobile(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xs text-white/40 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`text-base font-medium ${
                      isOpen ? 'text-white' : 'text-white/60'
                    }`}
                  >
                    {service.title}
                  </span>
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-[#F5B937] text-xl leading-none"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-lg italic font-light text-white pb-4">
                      {service.tagline}
                    </p>
                    <ul className="space-y-3 pb-5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm text-white/60 leading-relaxed"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#F5B937]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Servicetabcontent;