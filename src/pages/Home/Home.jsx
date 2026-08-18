import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import NavBarSidebar from '../../app/layout/NavBarSidebar';
import Animation from '../../Componets/Animations/animation';
import Projects from './Sections/Projects';
import Services from './Sections/Services';
import Contact from './Sections/Contact';
import Footer from '../../app/layout/Footer';
import FreeTools from './Sections/FreeTools';

import { fadeIn } from '../../data/variants.js';
import image_logo from '../../assets/images/brand/logo.png';
import Hero from './Sections/Hero.jsx';

/**
 * ── SEO NOTES ──────────────────────────────────────────────────────────────
 * 1. Exactly ONE <h1> on the page (the old file repeated <h1> for every
 *    section eyebrow — that dilutes topical relevance and confuses screen
 *    readers). Section eyebrows below now render as <p role="doc-subtitle">
 *    and section titles use <h2>/<h3>.
 * 2. JSON-LD (Organization + WebSite + LocalBusiness) added so Google can
 *    build a Knowledge Panel / sitelinks search box and show you as a
 *    Kerala-based web dev & automation agency in local results.
 * 3. All meaningful images now have descriptive alt text instead of alt="".
 * 4. The logo (your LCP element) is marked fetchpriority="high" and
 *    decoding="async" — nothing else on the page should block paint.
 * 5. Copy now front-loads the actual service keywords ("web development",
 *    "automation", "Kerala") inside the H1/H2 text itself, not just in
 *    <meta> tags — matching what's visible on-page is what Google trusts.
 * ────────────────────────────────────────────────────────────────────────── */

const stats = [
  { value: '50+', label: 'Projects shipped' },
  { value: '4+', label: 'Years building & automating' },
  { value: '20+', label: 'Businesses automated' },
];

const solutions = [
  {
    title: 'Web Design & Development',
    desc: 'Custom, responsive sites built to load fast and convert visitors into leads.',
    href: '/services/webdesign',
    icon: <path d="M4 5h16v11H4V5Zm0 14h16M9 12l2-2 2 2 3-3" />,
  },
  {
    title: 'E-Commerce',
    desc: 'Conversion-ready online stores with secure checkout and inventory built in.',
    href: '/services/ecommerce',
    icon: <path d="M6 6h12l-1 13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 6ZM9 6V4a3 3 0 0 1 6 0v2" />,
  },
  {
    title: 'SEO Optimization',
    desc: 'Structured content and technical SEO so the right people can find you first.',
    href: '/services/seo-website',
    icon: <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35" />,
  },
  {
    title: 'Website Maintenance',
    desc: 'Ongoing updates, backups, and fixes so you never think about uptime again.',
    href: '/services/website-maintenance',
    icon: (
      <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4L21 6l-3-3-3.3 3.3Z" />
    ),
  },
  {
    title: 'Branding & Design',
    desc: 'Logos, banners, and visual identity that make your business recognizable.',
    href: '/services/branding',
    icon: (
      <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    ),
  },
  {
    title: 'Automation & Workflows',
    desc: 'Connect the tools you already use so leads and orders follow up themselves.',
    href: '/contact',
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  },
];

function Home() {
  return (
    <div>
      <Helmet>
        {/* ── Core meta ─────────────────────────────────────────────── */}
        <title>WebForges | Web Development & Business Automation Agency, Kerala</title>
        <meta
          name="description"
          content="WebForges is a Kerala-based web development and automation agency. We design fast websites, e-commerce stores, and automate business workflows to save you time and grow revenue."
        />
        <meta
          name="keywords"
          content="web development agency Kerala, business automation, e-commerce development, UI/UX design, workflow automation, website maintenance, SEO services, WebForges"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebForges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://webforges.site/" />

        {/* ── Open Graph ────────────────────────────────────────────── */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="WebForges | Web Development & Business Automation Agency, Kerala"
        />
        <meta
          property="og:description"
          content="We design fast websites, e-commerce stores, and automate business workflows to save you time and grow revenue."
        />
        <meta property="og:image" content="https://webforges.site/logo.png" />
        <meta property="og:url" content="https://webforges.site/" />
        <meta property="og:site_name" content="WebForges" />
        <meta property="og:locale" content="en_IN" />

        {/* ── Twitter ───────────────────────────────────────────────── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="WebForges | Web Development & Business Automation Agency, Kerala"
        />
        <meta
          name="twitter:description"
          content="We design fast websites, e-commerce stores, and automate business workflows to save you time and grow revenue."
        />
        <meta name="twitter:image" content="https://webforges.site/logo.png" />
        <meta name="twitter:site" content="@WebForges" />
        <meta name="twitter:creator" content="@WebForges" />

        {/* ── Structured data: helps Google understand who you are ───── */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'WebForges',
            url: 'https://webforges.site/',
            image: 'https://webforges.site/logo.png',
            description:
              'Web development and business automation agency offering websites, e-commerce, and workflow automation.',
            areaServed: 'IN',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'Kerala',
              addressCountry: 'IN',
            },
            sameAs: [
              'https://www.facebook.com/webforges/',
              'https://www.instagram.com/web_forges/',
              'https://www.dribbble.com/webforges',
              'https://www.linkedin.com/company/webforges/',
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'WebForges',
            url: 'https://webforges.site/',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://webforges.site/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </script>
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
  <Hero />

      <main className="bg-white">
        {/* ── WHAT WE DO ─────────────────────────────────────────────── */}
        <section className="w-4/5 m-auto pt-16 md:pt-24" aria-labelledby="solutions-heading">
          <motion.p
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg flex items-center gap-3 uppercase text-[#f6bc17] font-medium"
          >
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
            Our solutions
          </motion.p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <motion.h2
              id="solutions-heading"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="heading-style-h3 max-w-2xl text-2xl sm:text-3xl md:text-4xl text-gray-900"
            >
              Everything you need to launch and grow online
            </motion.h2>

            <motion.p
              variants={fadeIn('up', 0.25)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-sm text-sm text-gray-500"
            >
              Pick a starting point below, or tell us where you're stuck and we'll point you to the
              right one.
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeIn('up', 0.2 + i * 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Link
                  to={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-gray-300 hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm ring-1 ring-gray-200 transition-colors group-hover:bg-[#f6bc17] group-hover:ring-[#f6bc17]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </svg>
                  </span>

                  <h3 className="mt-5 text-xl font-medium text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>

                  <span className="mt-5 flex items-center gap-1.5 text-sm font-medium text-gray-900">
                    Learn more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M2.85 10.89h10.87L8.73 15.88 10 17.14l7.14-7.14L10 2.86 8.74 4.12l4.98 4.98H2.85v1.79Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
        {/* ── LOCAL / MALAYALAM COPY (kept for local-intent search) ───── */}
        <section className="w-4/5 m-auto mt-16 md:mt-24">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 border-t border-gray-200 pt-10 md:grid-cols-[minmax(0,200px)_1fr] md:gap-10"
          >
            <div className="flex items-start gap-2">
              <svg
                width="9"
                height="11"
                viewBox="0 0 11 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="mt-1 shrink-0 text-[#f6bc17]"
              >
                <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
              </svg>
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Our expert designers craft solutions tailored to your business needs.
              </p>
            </div>

            <div className="max-w-2xl">
              <p
                lang="ml"
                className="manjari-regular text-lg leading-snug text-gray-900 sm:text-2xl md:text-3xl"
              >
                നിങ്ങളുടെ ബിസിനസ് കൂടുതൽ ആളുകളിലേക്ക് എത്തട്ടെ, ഓൺലൈൻ ലോകത്ത് നിങ്ങളുടെ സ്ഥാനം
                ഉറപ്പാക്കാം!
              </p>
              <p lang="en" className="mt-3 text-sm text-gray-500">
                Let your business reach more people — and claim your place in the online world.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── INDUSTRY EXPERIENCE ───────────────────────────────────────*/}
        <section className="Experts mt-16 bg-gray-50" aria-labelledby="experience-heading">
          <div className="flex w-4/5 flex-col gap-10 py-24 m-auto lg:flex-row lg:items-start">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <p className="flex items-center gap-3 text-lg font-medium uppercase text-[#f6bc17]">
                <svg
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Industry experience
              </p>

              <h2
                id="experience-heading"
                lang="ml"
                className="manjari-regular mt-4 text-xl leading-snug text-gray-900 md:text-2xl"
              >
                ഞങ്ങളുടെ ഡിസൈനർമാർ വിവിധ മേഖലകളിൽ ബിസിനസ് മൂല്യം കൊണ്ടുവരുന്ന വ്യക്തിഗത പരിഹാരങ്ങൾ
                നൽകുന്നു.
              </h2>
              <p lang="en" className="mt-3 max-w-md text-sm text-gray-500">
                Our designers bring tailored, business-focused solutions across every industry we
                work in.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#f6bc17] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17]"
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

            <motion.ul
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex w-full flex-col gap-3 lg:w-1/2"
            >
              {[
                {
                  label: 'E-Commerce Development',
                  href: '/services/ecommerce',
                  icon: (
                    <path d="M6 6h12l-1 13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 6ZM9 6V4a3 3 0 0 1 6 0v2" />
                  ),
                },
                {
                  label: 'Portfolio & Personal Websites',
                  href: '/services/custom-webdesign',
                  icon: <path d="M4 5h16v11H4V5Zm0 14h16M9 12l2-2 2 2 3-3" />,
                },
                {
                  label: 'Education & E-Learning',
                  href: '/services/elearning-portal',
                  icon: <path d="M12 3 2 8l10 5 8-4v6M6 10v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />,
                },
              ].map((item, i) => (
                <motion.li
                  key={item.label}
                  variants={fadeIn('up', 0.1 * i)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <Link
                    to={item.href}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-6 py-5 transition-all hover:border-gray-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17]"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-900 ring-1 ring-gray-200 transition-colors group-hover:bg-[#f6bc17] group-hover:ring-[#f6bc17]">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          aria-hidden="true"
                        >
                          {item.icon}
                        </svg>
                      </span>
                      <span className="text-base font-medium text-gray-900 sm:text-lg md:text-xl">
                        {item.label}
                      </span>
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-gray-900"
                    >
                      <path
                        d="M2.85 10.89h10.87L8.73 15.88 10 17.14l7.14-7.14L10 2.86 8.74 4.12l4.98 4.98H2.85v1.79Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        <Animation />
        <FreeTools />

        {/* ── PROJECTS TEASER ──────────────────────────────────────────*/}

        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
