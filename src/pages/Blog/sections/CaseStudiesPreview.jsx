import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import SectionHeading from '../../../Componets/shared/SectionHeading';

export default function CaseStudiesPreview({ data }) {
  return (
    <section className="md:w-4/5 p-3 m-auto border-t border-gray-200 py-7">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading eyebrow={data.eyebrow} title={data.title} description={data.description} />
        <Link
          to={data.cta.href}
          className="shrink-0 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:border-gray-900"
        >
          {data.cta.label}
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
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
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1 p-5">
                <p className="text-xs  font-medium uppercase tracking-wide text-gray-400">
                  {item.category}
                </p>
                <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                <p className="  text-sm leading-relaxed text-gray-500">{item.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}