import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import SectionHeading from '../../../Componets/shared/SectionHeading';

export default function PracticalGuides({ data }) {
  return (
    <section className="md:w-4/5 p-3 m-auto border-t border-gray-200 py-7">
      <SectionHeading eyebrow={data.eyebrow} title={data.title} description={data.description} />

      <div className="mt-10 grid grid-cols-1 gap-2 md:gap-5 sm:grid-cols-2">
        {data.items.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeIn('up', 0.05 + index * 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link
              to={item.href}
              className={`group flex items-center gap-4 rounded-2xl border border-gray-200 ${item.bg} p-4 transition-colors duration-300 hover:border-[#f6bc17]`}
            >
              <div className="flex md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full md:border border-gray-200 bg-white text-gray-900 transition-all group-hover:border-[#f6bc17] group-hover:bg-[#f6bc17]">
                <svg
                className='text-black'
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  {item.category} · {item.readTime}
                </p>
                <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
