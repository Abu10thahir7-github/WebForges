// src/Componets/HomePages/CoreSeoFaq.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import { buildFAQPageSchema } from '../../../Componets/seo/structuredData.js';


const faqs = [
  {
    q: 'What is Core Web Vitals and why does it matter for SEO?',
    a: 'Core Web Vitals measure real-world loading speed (LCP), interactivity (INP), and visual stability (CLS). Google uses these as ranking signals, so a technically fast, stable site tends to outrank a slower one with similar content quality.',
  },
  {
    q: 'Do you handle technical SEO or just on-page content?',
    a: 'Both. We cover crawlability (robots.txt, sitemap.xml), structured data (JSON-LD schema for Organization, LocalBusiness, Service, and FAQ), canonical tags, semantic heading hierarchy, and Core Web Vitals — alongside on-page copy and metadata.',
  },
  {
    q: 'Will my site rank locally in Kerala search results?',
    a: 'We set up LocalBusiness schema, location-specific landing content, and consistent NAP (Name, Address, Phone) data across the site to strengthen local relevance for Kerala-based searches.',
  },
  {
    q: 'How long does SEO take to show results?',
    a: 'Technical fixes (indexing, structured data, page speed) can show impact within a few weeks. Competitive keyword rankings typically take 3–6 months of consistent content and authority building.',
  },
  {
    q: 'Do you provide ongoing SEO after launch?',
    a: 'Yes — through our Website Maintenance and Support plans, which include periodic technical audits, content updates, and monitoring of indexing and Core Web Vitals over time.',
  },
];

function FaqItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      variants={fadeIn('up', 0.1 + index * 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="border-b border-gray-200"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        id={`faq-header-${index}`}
        className="flex w-full items-center justify-between gap-4 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17]"
      >
        <span className="text-base sm:text-lg font-medium text-gray-900">{item.q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
            isOpen ? 'border-[#f6bc17] bg-[#f6bc17]' : 'border-gray-200 bg-white'
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isOpen ? '#000' : '#111827'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-header-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-sm sm:text-base leading-relaxed text-gray-500">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CoreSeoFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = buildFAQPageSchema(
    faqs.map((f) => ({ question: f.q, answer: f.a }))
  );

  return (
    <section className="w-4/5 m-auto py-16 md:py-20" aria-labelledby="seo-faq-heading">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        {/* left: heading column, sticky on desktop */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.p
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-3 text-lg font-medium uppercase text-[#f6bc17]"
          >
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
            </svg>
            Core SEO
          </motion.p>

          <motion.h2
            id="seo-faq-heading"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="heading-style-h3 mt-4 max-w-md text-2xl sm:text-3xl md:text-4xl text-gray-900"
          >
            Advanced technical <span className="font-serif italic font-normal">SEO</span>, explained
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-4 max-w-sm text-sm text-gray-500"
          >
            Structured data, Core Web Vitals, and local search — the technical foundation behind every WebForges build.
          </motion.p>
        </div>

        {/* right: accordion */}
        <div className="border-t border-gray-200">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreSeoFaq;