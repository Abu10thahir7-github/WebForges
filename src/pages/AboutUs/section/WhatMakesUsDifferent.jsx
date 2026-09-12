import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import SectionLabel from '../../../Componets/UI/SectionLabel';
import SectionTitle from '../../../Componets/shared/SectionTitle';

const DIFFERENTIATORS = [
  'Business-first thinking',
  'Clear communication',
  'Custom solutions',
  'Responsive experiences',
  'Conversion-focused design',
  'Transparent pricing',
  'Long-term support',
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="mx-auto max-w-6xl border-t border-gray-200 px-3 py-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left — heading */}
        <div>
          <SectionTitle eyebrow="Why WebForges" lineOne="What makes us  "  accentWord="different" />


          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 max-w-md text-base leading-relaxed text-gray-500"
          >
            We don't just build websites — we build them with your business goals, your customers,
            and your growth in mind at every step.
          </motion.p>
        </div>

        {/* Right — numbered differentiator list */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2  ">
          {DIFFERENTIATORS.map((item, index) => (
            <motion.div
              key={item}
              variants={fadeIn('up', 0.1 + index * 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-5 border-b border-gray-100  first:pt-0 last:border-b-0"
            >
              <span className="text-sm font-semibold text-[#f6bc17]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-base font-medium text-gray-900">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
