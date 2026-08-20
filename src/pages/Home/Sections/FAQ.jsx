// src/Componets/HomePages/Faq.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import { buildFAQPageSchema } from '../../../Componets/seo/structuredData.js';
import Button from '../../../Componets/UI/Button.jsx';

const faqs = [
  {
    q: 'What services does WebForges offer?',
    a: 'We build business websites, e-commerce stores, landing pages, web portals, and custom web applications — along with SEO, branding, and business automation to help you work smarter, not just look good online.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A static or business website typically takes 1–2 weeks. E-commerce stores and custom portals usually take 3–6 weeks depending on features. We\'ll give you a clear timeline before the project starts.',
  },
  {
    q: 'How much does a website cost?',
    a: 'Pricing depends on scope — from affordable starter sites for small businesses to advanced e-commerce and portal builds. Check our Pricing page for tiered plans, or reach out for a custom quote.',
  },
  {
    q: 'Do you provide hosting and domain support?',
    a: 'Yes. Most of our plans include free domain registration for the first year and guidance on hosting setup, so you don\'t have to manage the technical side alone.',
  },
  {
    q: 'Will my website be mobile-friendly and SEO-optimized?',
    a: 'Every site we build is fully responsive across devices and includes on-page SEO essentials — proper heading structure, meta tags, fast load times, and structured data — from day one.',
  },
  {
    q: 'Do you offer support after the website is launched?',
    a: 'Yes — we offer ongoing website maintenance and support plans covering updates, backups, bug fixes, and performance monitoring, so your site stays secure and up to date.',
  },
  {
    q: 'Can you redesign my existing website instead of building from scratch?',
    a: 'Absolutely. We offer website redesign services to modernize outdated sites — improving UI/UX, performance, and SEO while preserving what already works for your brand.',
  },
  {
    q: 'How do I get started with WebForges?',
    a: 'Just reach out through our Contact page or WhatsApp. We\'ll discuss your goals, recommend the right solution, and share a timeline and quote — no pressure, no obligation.',
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
        className="flex w-full items-center justify-between gap-4 py-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17]"
      >
        <span className="text-base font-semibold text-gray-900">{item.q}</span>
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
            <p className="pb-3 pr-10 text-sm sm:text-base   text-gray-500">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = buildFAQPageSchema(
    faqs.map((f) => ({ question: f.q, answer: f.a }))
  );

  return (
    <section className="w-4/5 m-auto py-16 md:py-20" aria-labelledby="faq-heading">
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
            FAQ
          </motion.p>

          <motion.h2
            id="faq-heading"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="heading-style-h3 mt-4 max-w-md text-2xl sm:text-3xl md:text-4xl text-gray-900"
          >
            Got <span className="font-serif italic font-normal">questions?</span> We've got answers
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-4 max-w-sm text-sm text-gray-500"
          >
            Everything you need to know about working with WebForges — from pricing to timelines to support.
          </motion.p>
<Button href="https://wa.me/918921966289" variant="primary">Still have a question? Ask us</Button>
 
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

export default Faq;