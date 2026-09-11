// src/Componets/HomePages/Faq.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../data/variants.js';
import { buildFAQPageSchema } from '../seo/structuredData.js';
import Button from './Button.jsx';

/* ---------------------------------------------------------
   Default content — used when no props are passed, so
   existing call sites (`<Faq />`) keep working unchanged.
--------------------------------------------------------- */



/* ---------------------------------------------------------
   Single accordion row
--------------------------------------------------------- */

function FaqItem({ item, isOpen, onToggle, index, accentColor }) {
  return (
    <motion.div

      className="border-b border-gray-200"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        id={`faq-header-${index}`}
        className="flex w-full items-center justify-between gap-4 py-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{ outlineColor: accentColor }}
      >
        <span className="text-base font-semibold text-gray-900">{item.q}</span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all"
          style={
            isOpen
              ? { borderColor: accentColor, backgroundColor: accentColor }
              : { borderColor: '#e5e7eb', backgroundColor: '#fff' }
          }
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
            <p className="pb-3 pr-10 text-sm sm:text-base text-gray-500">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ---------------------------------------------------------
   Reusable FAQ section
   Every prop below is optional — the component falls back
   to the WebForges defaults it originally shipped with.
--------------------------------------------------------- */

function Faq({
  faqs ,
  kicker = 'FAQ',
  heading = (
    <>
      Got <span className="font-serif italic font-normal">questions? <br/>
      </span> We've got answers
    </>
  ),
  description = 'Everything you need to know about working with WebForges — from pricing to timelines to support.',
  whatsappLink = 'https://wa.me/918921966289',
  ctaLabel = 'Still have a question? Ask us',
  accentColor = '#f6bc17',
  defaultOpenIndex = 0,
  includeSchema = true,
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const faqSchema = includeSchema
    ? buildFAQPageSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
    : null;

  return (
    <section className="md:w-4/5 p-3 m-auto py-16 md:py-20" aria-labelledby="faq-heading">
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        {/* left: heading column, sticky on desktop */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p

            className="flex items-center gap-3 text-lg font-medium uppercase"
            style={{ color: accentColor }}
          >
            <svg
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
            </svg>
            {kicker}
          </p>

          <h2
            id="faq-heading"

            className="heading-style-h3 mt-4 max-w-md text-2xl sm:text-3xl md:text-4xl text-gray-900"
          >
            {heading}
          </h2>

          <p

            className="mt-4 max-w-sm text-sm text-gray-500"
          >
            {description}
          </p>

          {whatsappLink && (
            <Button href={whatsappLink} variant="primary">
              {ctaLabel}
            </Button>
          )}
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
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;

