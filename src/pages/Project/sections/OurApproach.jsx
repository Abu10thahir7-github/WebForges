import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';

const steps = [
  { number: '01', title: 'Research', desc: 'Understanding the business and users.' },
  { number: '02', title: 'Structure', desc: 'Planning the content and user journey.' },
  { number: '03', title: 'Design', desc: 'Creating the interface and responsive layouts.' },
  { number: '04', title: 'Development', desc: 'Building the frontend, backend and integrations.' },
  { number: '05', title: 'Testing', desc: 'Optimizing performance and usability.' },
];

export default function OurApproach() {
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
          Process
        </p>
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our approach</h2>
      </motion.div>

      <div className="relative">
        {/* Connecting line — desktop only */}
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gray-200 lg:block" />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeIn('up', 0.1 + index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative flex flex-col gap-3"
            >
              {/* Numbered node */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-900 bg-white text-sm font-bold text-gray-900">
                {step.number}
              </div>
              <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}