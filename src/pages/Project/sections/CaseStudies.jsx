import { motion } from 'framer-motion';
import { fadeIn } from '../../data/variants';

// TODO: swap these images for real screenshots of each live product.
const caseStudies = [
  {
    title: 'Trendzio',
    subtitle: 'E-Commerce Platform',
    img: '/images/projects/trendzio-full.png',
    intro:
      'A modern e-commerce experience designed to make product discovery and purchasing simple across desktop and mobile.',
    challenge:
      'The goal was to create a fast, responsive storefront that could present products clearly while providing a smooth shopping experience from browsing to checkout.',
    whatWeDid: [
      'UX & UI Design',
      'Frontend Development',
      'Backend Development',
      'Database Integration',
      'Responsive Design',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    outcome:
      'A responsive e-commerce platform with structured product experiences, modern UI, and a scalable technical foundation.',
    link: 'https://www.trendzio.shop/',
  },
  {
    title: 'Talk Tower',
    subtitle: 'Education / Learning Platform',
    img: '/images/projects/talktower-full.png',
    intro:
      'An education platform built to help learners access courses and track progress through a clean, distraction-free interface.',
    challenge:
      'The platform needed to organize course content, manage user progress, and remain simple to navigate for learners with varying levels of technical comfort.',
    whatWeDid: [
      'UX & UI Design',
      'Frontend Development',
      'Backend Development',
      'Course & User Data Structuring',
      'Responsive Design',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    outcome:
      'A structured learning platform with clear course navigation, a clean interface, and a foundation built to support future course and user growth.',
    link: 'https://www.talktower.in/',
  },
];

function CaseStudyBlock({ study, index }) {
  return (
    <motion.div
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-12 border-t border-gray-200 py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
    >
      {/* Content — left */}
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#f6bc17]">
            {String(index + 1).padStart(2, '0')} — {study.subtitle}
          </p>c
          <h3 className="mt-2 text-3xl font-black uppercase text-gray-900 sm:text-4xl">
            {study.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-gray-500">{study.intro}</p>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-900">
            The challenge
          </h4>
          <p className="text-sm leading-relaxed text-gray-500">{study.challenge}</p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
            What we did
          </h4>
          <div className="flex flex-wrap gap-2">
            {study.whatWeDid.map(item => (
              <span
                key={item}
                className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-[#f6bc17] hover:bg-[#fff8e1]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
            Technology
          </h4>
          <div className="flex flex-wrap gap-2">
            {study.stack.map(tech => (
              <span
                key={tech}
                className="rounded-full bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-900">
            Outcome
          </h4>
          <p className="text-sm leading-relaxed text-gray-500">{study.outcome}</p>
        </div>

<a
          href={study.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f6bc17] px-6 py-3 text-sm font-medium text-black shadow-md transition-transform hover:scale-105"
        >
          Visit live site
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.857 10.893h10.866l-4.991 4.992 1.268 1.259 7.143-7.143-7.143-7.143-1.259 1.259 4.982 4.991H2.857v1.785Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      {/* Image — right, sticky, browser-chrome frame */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/60">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          </div>
          <div className="aspect-[16/11] w-full overflow-hidden bg-gray-100">
            <img
              src={study.img}
              alt={`${study.title} case study screenshot`}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section className="w-4/5 m-auto pb-24">
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-4 flex items-center gap-3"
      >
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f6bc17]">
          <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
        </svg>
        <span className="text-sm uppercase tracking-[0.2em] font-semibold text-gray-500">
          Case Studies
        </span>
      </motion.div>

      <motion.h2
        variants={fadeIn('up', 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="heading-style-h3 max-w-2xl text-2xl text-gray-900 sm:text-3xl md:text-4xl"
      >
        A closer look at <span className="font-serif italic font-normal">how we build</span>
      </motion.h2>

      <div>
        {caseStudies.map((study, index) => (
          <CaseStudyBlock key={study.title} study={study} index={index} />
        ))}
      </div>
    </section>
  );
}