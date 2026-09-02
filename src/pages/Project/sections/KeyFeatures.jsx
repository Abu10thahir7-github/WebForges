import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import SectionLabel from '../../../Componets/UI/SectionLabel';

export default function KeyFeatures({ features }) {
  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">
      <SectionLabel text=" Capabilities" />

      <h2 className="text-2xl mt-2 font-bold text-gray-900 sm:text-3xl">Key features</h2>

      <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={feature}

            className="flex items-center gap-3 border-b border-gray-100 pb-4"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f6bc17]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 10.5l3.5 3.5L16 5"
                  stroke="black"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-base font-medium text-gray-900">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
