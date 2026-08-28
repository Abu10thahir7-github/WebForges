import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import ProjectCard from '../../../Componets/Animations/ProjectCard';

const categories = ['All', 'Websites', 'Web Applications', 'E-Commerce', 'UI/UX', 'Automation'];

// TODO: replace every `img` below with a real screenshot of the live site.
export const projects = [
  {
    title: 'Trendzio',
    category: 'E-Commerce',
    filterTag: 'E-Commerce',
    desc: 'Modern e-commerce platform designed for a smoother shopping experience.',
    stack: ['Next.js', 'React', 'MongoDB'],
    img: 'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787915672/ChatGPT_Image_Aug_21_2026_10_03_26_AM_lfne9l.png',
    link: 'https://www.trendzio.shop/',
  },
  {
    title: 'Flyocean Travel & Tourism',
    category: 'Travel / Business Website',
    filterTag: 'Websites',
    desc: 'A polished business website showcasing travel packages and destinations for a growing tourism brand.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    img: 'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787916002/ChatGPT_Image_Aug_13_2026_04_16_27_PM_gfd6nu.png',
    link: 'https://www.flyoceantravel.com/',
  },
  {
    title: 'Talk Tower',
    category: 'Education / Learning Platform',
    filterTag: 'Web Applications',
    desc: 'An education platform built to support course delivery and learner engagement.',
    stack: ['React', 'Node.js', 'MongoDB'],
    img: 'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787916008/ChatGPT_Image_Aug_13_2026_04_55_08_PM_p9givb.png',
    link: 'https://www.talktower.in/',
  },


  {
    title: 'Velonto',
    category: 'Food Delivery',
    filterTag: 'E-Commerce',
    desc: 'A food ordering platform connecting local restaurants with customers through a clean, fast interface.',
    stack: ['React', 'Firebase', 'Tailwind CSS'],
    img: 'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787915679/ChatGPT_Image_Aug_21_2026_10_05_14_AM_tzgclc.png',
    link: 'https://velonto.vercel.app/',
  },
];

// Defined outside the parent so it's a stable component type across renders


export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? projects : projects.filter(p => p.filterTag === activeCategory);

  return (
    <section className="w-4/5 m-auto pb-24">
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-4 flex items-center gap-3"
      >
        <svg
          width="11"
          height="13"
          viewBox="0 0 11 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#f6bc17]"
        >
          <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
        </svg>
        <span className="text-sm uppercase tracking-[0.2em] font-semibold text-gray-500">
          Our Work
        </span>
      </motion.div>

      <motion.h2
        variants={fadeIn('up', 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="heading-style-h3 mb-10 max-w-2xl text-2xl text-gray-900 sm:text-3xl md:text-4xl"
      >
        Featured <span className="font-serif italic font-normal">projects</span>
      </motion.h2>

    <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
  {/* Filters — left, sticky */}
  <div
    role="tablist"
    aria-label="Project categories"
    className="flex gap-3 overflow-x-auto pb-2 lg:sticky lg:top-28 lg:w-[220px] lg:shrink-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0"
  >
    {categories.map(cat => {
      const count =
        cat === 'All' ? projects.length : projects.filter(p => p.filterTag === cat).length;

      return (
        <button
          key={cat}
          type="button"
          role="tab"
          aria-selected={activeCategory === cat}
          onClick={() => setActiveCategory(cat)}
          className={`flex shrink-0 items-center justify-between gap-3 rounded-full px-5 py-2.5 text-sm font-medium uppercase tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17] lg:w-full lg:justify-start lg:rounded-xl ${
            activeCategory === cat
              ? 'bg-[#f6bc17] text-black'
              : 'border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-900 lg:border-transparent lg:bg-gray-50'
          }`}
        >
          <span>{cat}</span>
          <span className={`hidden text-xs lg:inline ${activeCategory === cat ? 'text-black/60' : 'text-gray-400'}`}>
            {count}
          </span>
        </button>
      );
    })}
  </div>

  {/* Project grid — right */}
  <div className="min-w-0 flex-1">
    {filtered.length > 0 ? (
     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {filtered.map((project, index) => (
    <ProjectCard key={project.title} project={project} index={index} />
  ))}
</div>
    ) : (
      <p className="rounded-2xl border border-dashed border-gray-200 py-16 text-center text-sm text-gray-500">
        No projects in this category yet — check back soon.
      </p>
    )}
  </div>
</div>
    </section>
  );
}
