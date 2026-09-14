import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';

const fields = [
  { label: 'Client', key: 'client' },
  { label: 'Industry', key: 'industry' },
  { label: 'Service', key: 'service' },
  { label: 'Role', key: 'role' },
  { label: 'Year', key: 'year' },
  { label: 'Status', key: 'status' },
];

export default function ProjectOverview({ project }) {
  return (
    <section className="md:w-4/5 m-auto border-t border-gray-200 py-6 px-3 sm:py-14">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {fields.map((field, index) => (
          <motion.div
            key={field.key}
            variants={fadeIn('up', 0.05 + index * 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="border-b border-gray-100 py-5 pr-4 sm:border-b-0 sm:border-l sm:border-gray-100 sm:py-0 sm:pl-5 first:sm:border-l-0 first:sm:pl-0"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[#f6bc17]">
              {field.label}
            </p>
            <p className="mt-2 text-base font-semibold text-gray-900 sm:text-base">
              {project[field.key] || '—'}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}