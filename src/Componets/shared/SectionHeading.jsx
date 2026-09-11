import { motion } from 'framer-motion';
import { fadeIn } from '../../data/variants';
import SectionLabel from '../UI/SectionLabel';

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <motion.div variants={fadeIn('up', 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <SectionLabel text={eyebrow} />
      </motion.div>
      <motion.h2
        variants={fadeIn('up', 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 text-base leading-relaxed text-gray-500"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}