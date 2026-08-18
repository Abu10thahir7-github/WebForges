import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn } from '../../../data/variants.js';

function Hero() {
  return (
    <div>
          {/* ===== HERO ===== */}
      <header className="relative overflow-hidden bg-white">
        {/* signature gradient blob — same role as Nexo's, re-colored to WebForges */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-90 blur-3xl sm:-right-20 sm:h-[640px] sm:w-[640px]"
          style={{
            background:
              'conic-gradient(from 210deg at 50% 50%, #f6bc17, #0a0a0a, #ffffff, #f6bc17)',
          }}
        />
        <div className="noise absolute inset-0 opacity-[0.06]" aria-hidden="true" />

        {/* top strip */}
        <div className="relative flex items-center justify-between px-5 pt-6 sm:px-10 sm:pt-8">
          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 py-1.5 pl-1.5 pr-4 text-xs font-medium text-gray-800 shadow-sm backdrop-blur"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[10px] text-white">
              WF
            </span>
            Book a free call
            <span className="flex items-center gap-1 text-[11px] text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Available now
            </span>
          </Link>

          <p className="hidden font-semibold text-gray-900 sm:block">
            Web<span className="font-normal italic">Forges</span>
          </p>
<div></div>
          {/* <button className="flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-xs font-medium text-white">
            Menu
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button> */}
        </div>

        {/* tag row */}
        <motion.div
          variants={fadeIn('up', 0.15)}
          initial="hidden"
          animate="show"
          className="relative mt-16 flex flex-wrap gap-2 px-5 sm:mt-24 sm:px-10"
        >
          {['Web Design', 'SEO', 'Automation', 'E-Commerce'].map(tag => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600 backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* headline + CTA */}
        <div className="relative mt-6 flex flex-col justify-between gap-8 px-5 pb-16 sm:px-10 sm:pb-24 lg:flex-row lg:items-end">
          <motion.h1
            variants={fadeIn('up', 0.25)}
            initial="hidden"
            animate="show"
            className="leading-[0.95] text-gray-900"
          >
            <span className="block font-serif text-3xl italic text-gray-700 sm:text-4xl md:text-5xl">
              Web design,
            </span>
            <span className="block text-6xl font-extrabold uppercase tracking-tight sm:text-7xl md:text-8xl">
              Automated.
            </span>
          </motion.h1>

          <motion.div
            variants={fadeIn('up', 0.35)}
            initial="hidden"
            animate="show"
            className="shrink-0"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#f6bc17] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17]"
            >
              Let's talk
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 16 16 4M16 4H7M16 4v9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* trust strip */}
        <motion.div
          variants={fadeIn('up', 0.45)}
          initial="hidden"
          animate="show"
          className="relative flex flex-col items-start justify-between gap-6 border-t border-gray-100 px-5 py-8 sm:flex-row sm:items-center sm:px-10"
        >
          <p className="text-xs leading-relaxed text-gray-500">
            Join 40+ happy clients
            <br />
            Trusted by teams across Kerala &amp; beyond
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-gray-400">
            {['Trendzio', 'Flyocean', 'Talk Tower', 'Velonto', 'SG Academy'].map(name => (
              <li key={name} className="italic">
                {name}
              </li>
            ))}
          </ul>
        </motion.div>
      </header>

      {/* ===== WHO WE SERVE ===== */}
      <section className="bg-[#f7f7f5] px-5 py-20 sm:px-10 sm:py-28">
        <motion.p
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-500"
        >
          Who we help
        </motion.p>

        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-xl text-center text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl"
        >
          Empowering bold <span className="font-serif italic font-normal">growth</span> across every
          sector
        </motion.h2>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: (
                <path d="M4 15V9a8 8 0 0 1 16 0v6M4 15a2 2 0 0 0 2 2h1v-5H5a1 1 0 0 0-1 1v2Zm16 0a2 2 0 0 1-2 2h-1v-5h2a1 1 0 0 1 1 1v2Z" />
              ),
              title: 'Startups & MVPs',
              desc: 'We help early-stage teams ship clean, fast interfaces without slowing down the product roadmap.',
              tint: 'bg-white',
            },
            {
              icon: (
                <path d="M6 6h12l-1 13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 6ZM9 6V4a3 3 0 0 1 6 0v2" />
              ),
              title: 'E-Commerce Brands',
              desc: 'Conversion-focused storefronts with secure checkout, fast loads, and SEO baked in from day one.',
              tint: 'bg-[#fff8e7]',
            },
            {
              icon: <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5A8.5 8.5 0 1 1 21 11.5Z" />,
              title: 'Service Businesses',
              desc: 'Sites and automations that turn inquiries into booked calls — no manual follow-up required.',
              tint: 'bg-[#f0f0ff]',
            },
            {
              icon: (
                <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              ),
              title: 'Local & Multi-location',
              desc: 'One clean site, structured for every branch you serve — built for local search from the ground up.',
              tint: 'bg-white',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeIn('up', 0.1 * i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`${card.tint} rounded-2xl border border-gray-100 p-6 shadow-sm`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                {card.icon}
              </svg>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Hero
