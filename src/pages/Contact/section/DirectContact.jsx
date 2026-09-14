import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import SectionLabel from '../../../Componets/UI/SectionLabel';

export default function DirectContact({ data }) {
  const details = [data.email, data.phone, data.location];

  return (
    <section className="md:w-4/5 px-3 m-auto border-t border-gray-200 py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <SectionLabel text={data.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl"
          >
            {data.title}
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-4 max-w-md text-sm leading-relaxed text-gray-500"
          >
            {data.description}
          </motion.p>
          <motion.a
            href="https://wa.me/919037435846"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-md transition-transform hover:scale-105"
          >
            {data.cta}
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {details.map((item, index) => (
            <motion.div
              key={item.label}
              variants={fadeIn('up', 0.1 + index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border p-3    "
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {item.label}
              </p>
              <p className="mt-1.5 text-base font-medium text-gray-900">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
