import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import SectionLabel from '../../../Componets/UI/SectionLabel';

export default function ContactHero({ data, onPrimaryClick, onSecondaryClick }) {
  return (
    <header className="relative overflow-hidden pb-10 pt-32 sm:pt-40">
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dcrf52w3g/image/upload/v1789365233/ChatGPT_Image_Sep_14_2026_11_20_16_AM_fvvlz0.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover grayscale"
        />
        {/* Left-to-right dark fade — keeps left-aligned text readable, image visible on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 px-3 md:w-4/5 m-auto">
        <motion.div variants={fadeIn('up', 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionLabel text={data.eyebrow}  className='text-white' />
        </motion.div>

        <motion.h1
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 max-w-3xl text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {data.title}
        </motion.h1>

        <motion.p
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 max-w-lg text-base leading-relaxed text-gray-200"
        >
          {data.description}
        </motion.p>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <button
            type="button"
            onClick={onPrimaryClick}
            className="inline-flex items-center gap-2 rounded-full bg-[#f6bc17] px-6 py-3 text-sm font-medium text-black shadow-md transition-transform hover:scale-105"
          >
            {data.primaryCta}
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.857 10.893h10.866l-4.991 4.992 1.268 1.259 7.143-7.143-7.143-7.143-1.259 1.259 4.982 4.991H2.857v1.785Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={onSecondaryClick}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
          >
            {data.secondaryCta}
          </button>
        </motion.div>
      </div>
    </header>
  );
}