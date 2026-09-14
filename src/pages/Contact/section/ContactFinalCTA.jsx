import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';

export default function ContactFinalCTA({ data, onClick }) {
  return (
    <section className="w-4/5 m-auto pb-24">
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6 rounded-3xl bg-gray-900 px-8 py-16 text-center"
      >
        <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#f6bc17]">
          {data.eyebrow}
        </span>
        <h2 className="max-w-lg text-2xl font-extrabold uppercase text-white sm:text-3xl">
          {data.title}
        </h2>
        <p className="max-w-md text-gray-400">{data.description}</p>
        <button
          type="button"
          onClick={onClick}
          className="inline-flex items-center gap-2 rounded-full bg-[#f6bc17] px-6 py-3 text-sm font-medium text-black shadow-md transition-transform hover:scale-105"
        >
          {data.cta}
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.857 10.893h10.866l-4.991 4.992 1.268 1.259 7.143-7.143-7.143-7.143-1.259 1.259 4.982 4.991H2.857v1.785Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </motion.div>
    </section>
  );
}