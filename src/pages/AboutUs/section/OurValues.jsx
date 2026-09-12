import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import SectionLabel from '../../../Componets/UI/SectionLabel';
import SectionTitle from '../../../Componets/shared/SectionTitle';

const VALUES = [
  { title: 'Clarity', desc: 'Straightforward communication, at every stage.' },
  { title: 'Quality', desc: 'Work built to last, not just to launch.' },
  { title: 'Honesty', desc: 'Realistic timelines, transparent pricing.' },
  { title: 'Consistency', desc: 'The same care from the first call to launch day.' },
  { title: 'Customer Focus', desc: 'Your goals shape every decision we make.' },
];

export default function OurValues() {
  return (
    <section className="relative overflow-hidden border-t border-gray-200 py-16 sm:py-24">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dcrf52w3g/image/upload/v1789278551/uiCollage_spkanm.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover blur-[2px] grayscale"
        />
        {/* Overlay so content stays readable over the busy collage */}
        <div className="absolute inset-0 bg-[#FAF8F2]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 m-auto grid md:w-4/5 grid-cols-1 px-3 gap-12 lg:grid-cols-2">
        {/* Left — sticky heading + image */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle
            eyebrow="Our Values"
            lineOne="The principles behind"
            accentWord="everything we build"
          />

          {/* Supporting image — desktop only, mobile shows it above the list instead */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 hidden overflow-hidden rounded-3xl lg:block"
          >
            <img
              src="https://res.cloudinary.com/dcrf52w3g/image/upload/v1789278529/Abstract-conceptual_u7bujb.png"
              alt="Abstract conceptual visual representing WebForges' values"
              loading="lazy"
              className="h-[360px] w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right — values list */}
        <div>
          {/* Mobile-only image, shown above the list since sticky doesn't apply here */}
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-8 overflow-hidden rounded-3xl lg:hidden"
          >
            <img
              src="https://res.cloudinary.com/dcrf52w3g/image/upload/v1789278529/Abstract-conceptual_u7bujb.png"
              alt="Abstract conceptual visual representing WebForges' values"
              loading="lazy"
              className="h-56 w-full object-cover sm:h-72"
            />
          </motion.div>

          <div className="grid grid-cols-1">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeIn('up', 0.1 + index * 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group flex flex-col gap-2 border-b border-gray-200 py-2 sm:items-baseline sm:justify-between"
              >
                <h3 className="text-4xl font-bold uppercase tracking-tight text-black transition-colors duration-300 group-hover:text-[#f6bc17] sm:text-5xl">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-right">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}