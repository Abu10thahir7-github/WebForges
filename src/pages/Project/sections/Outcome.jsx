import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';

export default function Outcome({ metrics, qualitative }) {
  const hasMetrics = metrics && metrics.length > 0;

  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-10 max-w-xl"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#f6bc17]">
          Results
        </p>
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Outcome</h2>
      </motion.div>

      {hasMetrics ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={fadeIn('up', 0.1 + index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center"
            >
              <p className="text-4xl font-black text-gray-900 sm:text-5xl">{metric.value}</p>
              <p className="mt-2 text-sm font-medium text-gray-500">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {qualitative.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeIn('up', 0.1 + index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
            >
              <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}