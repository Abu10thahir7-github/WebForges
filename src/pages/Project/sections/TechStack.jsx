import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';

export default function TechStack({ stack }) {
  // stack shape: { Frontend: [...], Backend: [...], Database: [...], Integration: [...] }
  const groups = Object.entries(stack);

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
          Development
        </p>
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Built with the right technology
        </h2>
        <p className="mt-4 text-base text-gray-500">Modern tools. Practical solutions.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map(([groupName, items], index) => (
          <motion.div
            key={groupName}
            variants={fadeIn('up', 0.1 + index * 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
              {groupName}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {items.map(item => (
                <li key={item} className="text-sm font-medium text-gray-900">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}