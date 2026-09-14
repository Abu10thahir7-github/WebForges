import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import Button from '../../../Componets/UI/Button';

export default function ContactOptions({ options, onSelect }) {
  return (
    <section className="md:w-4/5 px-3 m-auto border-t border-gray-200 py-8">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {options.map((option, index) => (
          <motion.div
            key={option.title}
            variants={fadeIn('up', 0.1 + index * 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`flex flex-col ${option.bg} justify-between rounded-2xl border border-gray-200 bg-gray-50 p-3 md:p-6`}
          >
            <div>
              <h3 className="text-sm font-semibold   tracking-[0.1em] text-gray-800">
                {option.title}
              </h3>
              <p className="mt-1 text-gray-500 text-sm  ">{option.description}</p>
            </div>
            <Button
              size="sm"
              className=" p-0"
              variant="link"
              onClick={() => onSelect(option.title)}

            >
              {option.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
