import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../data/variants';

export default function FinalCTA({ data, bgImage }) {
  return (
    <section className="   ">
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative flex flex-col items-center gap-6 overflow-hidden bg-gray-900 p-2 md:p-8 text-center  "
      >
        {/* Background image */}
        {bgImage && (
          <div className="absolute inset-0 z-0">
            <img
              src={bgImage}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {/* Dark overlay so text stays readable over the image */}
            <div className="absolute inset-0 bg-black/75" />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 py-8 sm:py-12">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#f6bc17]">
            {data.eyebrow}
          </span>
          <h2 className="max-w-lg text-2xl font-bold text-white sm:text-3xl">{data.title}</h2>
          <p className="max-w-md text-gray-300">{data.description}</p>
          <Link to={data.button.href}>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-[#f6bc17] px-6 py-3 text-sm font-medium text-black shadow-md transition-transform hover:scale-105"
            >
              {data.button.label}
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.857 10.893h10.866l-4.991 4.992 1.268 1.259 7.143-7.143-7.143-7.143-1.259 1.259 4.982 4.991H2.857v1.785Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}