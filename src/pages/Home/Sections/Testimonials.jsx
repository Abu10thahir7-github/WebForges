// src/Componets/HomePages/Testimonials.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../../data/variants.js';

const testimonials = [
  {
    name: 'Arjun Menon',
    role: 'Founder',
    company: 'Trendzio',
    initials: 'AM',
    rating: 5,
    quote:
      'WebForges took our e-commerce idea and turned it into a fully functional store in weeks, not months. The checkout flow alone increased our conversions noticeably in the first month.',
  },
  {
    name: 'Fathima Rasheed',
    role: 'Marketing Head',
    company: 'Flyocean Travel & Tourism',
    initials: 'FR',
    rating: 5,
    quote:
      'They understood exactly what a travel agency website needs — fast package browsing, clean booking inquiries, and a design that actually reflects the destinations we sell.',
  },
  {
    name: 'Rahul Krishnan',
    role: 'Director',
    company: 'Talk Tower',
    initials: 'RK',
    rating: 5,
    quote:
      'From the first call to launch, communication was clear and the site was delivered on schedule. Our enrollment inquiries went up right after the new site went live.',
  },
  {
    name: 'Sneha Pillai',
    role: 'Owner',
    company: 'Manasa Creations',
    initials: 'SP',
    rating: 5,
    quote:
      "As a small business, I didn't know where to start. WebForges guided me through every step and built something that actually represents my work well online.",
  },
  {
    name: 'Vishnu Nair',
    role: 'Academic Coordinator',
    company: 'SG Academy',
    initials: 'VN',
    rating: 5,
    quote:
      'The distance education portal they built handles our student registrations smoothly. Support after launch has been quick whenever we needed a change.',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < rating ? '#f6bc17' : 'none'}
          stroke={i < rating ? '#f6bc17' : '#d1d5db'}
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.77l-5.21 2.75 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-3 sm:p-5">
      {/* quote mark */}
      <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true" className="text-[#f6bc17]">
        <path
          d="M13.6 0L8 12h5.6v12H0V12.8L5.6 0h8zm18.4 0l-5.6 12H32v12H18.4V12.8L24 0h8z"
          fill="currentColor"
        />
      </svg>

      <p className="mt-5    text-base  text-gray-700">
        {item.quote}
      </p>

      <div className="mt-2 flex items-center justify-between border-t border-gray-200 pt-2">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f6bc17] text-sm font-semibold text-black">
            {item.initials}
          </span>
          <div>
            <p className="text-sm font-medium text-gray-900">{item.name}</p>
            <p className="text-xs text-gray-500">
              {item.role}, {item.company}
            </p>
          </div>
        </div>
        <StarRating rating={item.rating} />
      </div>
    </div>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="w-4/5 m-auto py-16 md:py-20" aria-labelledby="testimonials-heading">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <motion.p
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-3 text-lg font-medium uppercase text-[#f6bc17]"
          >
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
            </svg>
            Testimonials
          </motion.p>

          <motion.h2
            id="testimonials-heading"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="heading-style-h3 mt-4 max-w-lg text-2xl sm:text-3xl md:text-4xl text-gray-900"
          >
            Trusted by <span className="font-serif italic font-normal">businesses</span> across Kerala
          </motion.h2>
        </div>

        {/* nav arrows, desktop */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden gap-3 sm:flex"
        >
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-900 transition-colors hover:border-[#f6bc17] hover:bg-[#f6bc17] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17]"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M17.14 9.11H6.28l4.99-4.99L9.99 2.86 2.86 9.99l7.13 7.13 1.26-1.26-4.99-4.99h10.87v-1.79Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-900 transition-colors hover:border-[#f6bc17] hover:bg-[#f6bc17] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17]"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M2.85 10.89h10.87L8.73 15.88 10 17.14l7.14-7.14L10 2.86 8.74 4.12l4.98 4.98H2.85v1.79Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* card viewport */}
      <div className="relative mt-12 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -5000) paginate(1);
              else if (swipe > 5000) paginate(-1);
            }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[0, 1, 2].map((offset) => {
              const item = testimonials[(index + offset) % testimonials.length];
              return <TestimonialCard key={`${index}-${offset}`} item={item} />;
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* dots + mobile nav */}
      <div className="mt-8 flex items-center justify-center gap-4 sm:hidden">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Previous testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-900"
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M17.14 9.11H6.28l4.99-4.99L9.99 2.86 2.86 9.99l7.13 7.13 1.26-1.26-4.99-4.99h10.87v-1.79Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-[#f6bc17]' : 'w-1.5 bg-gray-300'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Next testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-900"
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M2.85 10.89h10.87L8.73 15.88 10 17.14l7.14-7.14L10 2.86 8.74 4.12l4.98 4.98H2.85v1.79Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Testimonials;