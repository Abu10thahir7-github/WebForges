import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import SectionLabel from '../../../Componets/UI/SectionLabel';
import SectionTitle from '../../../Componets/shared/SectionTitle';

export default function Outcome({ metrics, qualitative }) {
  const hasMetrics = metrics && metrics.length > 0;
  const hasQualitative = qualitative && qualitative.length > 0;

  if (!hasMetrics && !hasQualitative) return null;

  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-7">
      <div className="mb-5 max-w-xl">
        <SectionTitle
          eyebrow="Results"
          lineOne="Outcome"
          />
       
      </div>

      {hasMetrics ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={fadeIn('up', 0.05 + index * 0.08)}
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
              variants={fadeIn('up', 0.05 + index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`rounded-2xl  p-6 ${item.bg}`}
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
