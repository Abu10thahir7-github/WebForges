// src/Componets/HomePages/WhyWebForges.jsx

import { motion } from 'framer-motion';
 import bg from '../../../assets/images/backgrounds/why-webforges.png';
import Marquee from '../../../Componets/Animations/Marquee.jsx';

const stats = [
  { value: '15+', label: 'Projects' },
  { value: '10+', label: 'Technologies' },
  { value: '2+', label: 'Years' },
];

const STACK = [
  'Next.js',
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'Tailwind CSS',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'REST APIs',
  'Redux Toolkit',
  'Figma',
  'Git',
  'GitHub',
  'Webhooks',
  'API Integrations',
  'Workflow Automation',
];
const highlights = [
  {
    tint: 'bg-amber-50',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 15L15 9M10 6L10.5 5.5C12.1569 3.84315 14.8431 3.84315 16.5 5.5C18.1569 7.15685 18.1569 9.84315 16.5 11.5L16 12M14 18L13.5 18.5C11.8431 20.1569 9.15685 20.1569 7.5 18.5C5.84315 16.8431 5.84315 14.1569 7.5 12.5L8 12"
          stroke="#111827"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Modern stack',
    desc: 'Built on Next.js, React and TypeScript — fast, maintainable, and future-proof.',
  },
  {
    tint: 'bg-violet-50',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2V4M12 20V22M4 12H2M6.31 6.31L4.9 4.9M17.69 6.31L19.1 4.9M6.31 17.69L4.9 19.1M17.69 17.69L19.1 19.1M22 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
          stroke="#111827"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Automated where it counts',
    desc: 'Workflows and integrations that remove manual work from your day-to-day.',
  },
  {
    tint: 'bg-emerald-50',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 17L9 11L13 15L21 7M21 7H15M21 7V13"
          stroke="#111827"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Built to grow',
    desc: 'Every project is scoped around measurable business outcomes, not just visuals.',
  },
];

function TechMarquee() {
  const track = [...techStack, ...techStack];

  return (
    <div className="relative overflow-hidden whitespace-nowrap w-full py-6 border-t border-b border-gray-200">
      <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="inline-flex items-center "
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      >
        {track.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center   text-base sm:text-lg md:text-xl uppercase text-gray-700"
          >
            {tech}
            <span className="text-[#f6bc17] text-sm">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function WhyWebForges() {
  return (
    <section className="relative bg-white pt-6 md:pt-10">
      <div className="w-4/5 m-auto">
        {/* eyebrow label */}
        <p className="text-lg flex items-center gap-3 uppercase text-[#f6bc17] font-medium">
          <svg
            width="11"
            height="13"
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
          </svg>
          Why WebForges
        </p>
        {/* main heading */}
        {/* main heading */}
        <div className='flex flex-col md:flex-row justify-between'>
          <div>
        <div className="flex justify-between flex-col     ">
          <motion.h2 className=" mt-4 text-start text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
            Built with modern technology,
            <br />
            <span className="font-serif italic font-normal">delivered</span> with purpose
          </motion.h2>

          {/* subtext */}
          <p p className="mt-5 text-gray-500 max-w-xl text-sm sm:text-base">
            Modern websites, applications and automation systems <br /> built around real business
            goals.
          </p>
        </div>
        {/* stats row */}
        <div

          className="mt-10 flex flex-wrap gap-10 sm:gap-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
                {stat.value}
              </span>
              <span className="uppercase text-xs sm:text-sm text-gray-500 mt-1 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div></div>
         <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="  sm:block sm:-right-6   md:w-[42%]  "
      /></div>
        {/* highlight cards */}
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <div
              key={item.title}

              className={`${item.tint} rounded-2xl p-5 sm:p-6`}
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm mb-4">
                {item.icon}
              </span>
              <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* tech marquee */}
      <div className='py-5'>

      <Marquee items={STACK} direction="left" speed={30} pauseOnHover={true} />
      </div>
    </section>
  );
}

export default WhyWebForges;
