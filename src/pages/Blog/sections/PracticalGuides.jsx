import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import SectionHeading from '../../../Componets/shared/SectionHeading';


export default function PracticalGuides({ data }) {
  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">
      <SectionHeading eyebrow={data.eyebrow} title={data.title} description={data.description} />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
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
              className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-colors duration-300 hover:border-[#f6bc17]"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  {item.category} · {item.readTime}
                </p>
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}