import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import SectionLabel from '../../../Componets/UI/SectionLabel';
import SectionTitle from '../../../Componets/shared/SectionTitle';

export default function KeyFeatures({ features = [] }) {
  if (!features.length) return null;

  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">
      <SectionTitle
  eyebrow="Capabilities"
  lineOne="Key features"
/>

       

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            variants={fadeIn('up', 0.05 + index * 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-3 rounded-2xl  "
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f6bc17]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 10.5l3.5 3.5L16 5"
                  stroke="black"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-sm font-medium leading-snug text-gray-900 sm:text-base">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
