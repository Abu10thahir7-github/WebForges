import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';

export default function Screenshots({ sections = [] }) {
  // sections: [{ label, title, image, type: 'desktop' | 'mobile' }]
  if (!sections.length) return null;

  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-12 max-w-xl"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#f6bc17]">
          Walkthrough
        </p>
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Screenshots</h2>
      </motion.div>

      <div className="flex flex-col gap-20">
        {sections.map((section, index) => (
          <motion.div
            key={section.label}
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-baseline gap-3">
              <span className="text-sm font-semibold text-[#f6bc17]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-gray-900">{section.label}</h3>
            </div>

            {section.type === 'mobile' ? (
              <div className="flex justify-center">
                <div className="w-full max-w-[320px] overflow-hidden rounded-[2.5rem] border-[10px] border-gray-900 bg-gray-900 shadow-2xl">
                  <img
                    src={section.image}
                    alt={section.label}
                    className="w-full rounded-[1.5rem] object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-lg">
                <div className="flex items-center gap-1.5 border-b border-gray-100 bg-white px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                </div>
                <img src={section.image} alt={section.label} className="w-full object-cover" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}