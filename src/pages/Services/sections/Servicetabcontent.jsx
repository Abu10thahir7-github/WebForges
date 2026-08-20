import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    items: ['Contract bug fixing, on-call for sites already under agreement'],
  },
];

function Servicetabcontent() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState(0);

  return (
    <div className="grid grid-cols-1  gap-6   sm:gap-14">
      {/* ---------- Desktop: tab list ---------- */}
      <div className="hidden flex-col border-t border-gray-200 sm:flex">
        {services.map((service, i) => (
          <button
            key={service.title}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={`group flex items-center justify-between border-b border-gray-200 py-5 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17] ${
              active === i ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <span className="flex items-center gap-4">
              <span className="text-xs tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-base font-medium">{service.title}</span>
            </span>
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                active === i ? 'scale-100 bg-[#f6bc17]' : 'scale-0'
              }`}
            />
          </button>
        ))}
      </div>

      {/* ---------- Desktop: active tab detail ---------- */}
      <div className="hidden min-h-[260px] sm:block">
        <AnimatePresence mode="wait">
          <div
            key={services[active].title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <p className="mb-6 text-2xl font-light italic text-gray-900">
              {services[active].tagline}
            </p>
            <ul className="space-y-4">
              {services[active].items.map(item => (
                <li key={item} className="flex gap-3 leading-relaxed text-gray-600">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#f6bc17]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatePresence>
      </div>

      {/* ---------- Mobile: accordion ---------- */}
      {/* fixed: was text-white on a white page — the accordion was opening,
          you just couldn't see any of the content once it did */}
      <div className="flex flex-col border-t border-gray-200 sm:hidden">
        {services.map((service, i) => {
          const isOpen = openMobile === i;
          return (
            <div key={service.title} className="border-b border-gray-200">
              <button
                type="button"
                onClick={() => setOpenMobile(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17]"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xs tabular-nums text-gray-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`text-base font-medium ${isOpen ? 'text-gray-900' : 'text-gray-600'}`}
                  >
                    {service.title}
                  </span>
                </span>
                <span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-xl leading-none text-[#f6bc17]"
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-lg font-light italic text-gray-900">
                      {service.tagline}
                    </p>
                    <ul className="space-y-3 pb-5">
                      {service.items.map(item => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#f6bc17]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Servicetabcontent;
