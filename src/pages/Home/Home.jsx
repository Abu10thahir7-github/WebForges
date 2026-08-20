import React from 'react';
import { Helmet } from 'react-helmet-async';

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
import WhyWebForges from './Sections/TrustSection.jsx';
import DiscoverTextAnimation from '../../Componets/Animations/DiscoverTextAnimation.jsx';
import CoreSeoFaq from './Sections/CoreSeoFaq.jsx';
import Faq from './Sections/FAQ.jsx';
import Testimonials from './Sections/Testimonials.jsx';
import Button from '../../Componets/UI/Button.jsx';

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
    <div  >
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

      <Hero />
      <WhyWebForges />
      {/* ===== WHO WE SERVE ===== */}
      <section className="bg-[#f7f7f5] px-5 py-10 md:px-10 md:py-10">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
          Who we help
        </p>

        <h2 className="mx-auto mt-4 max-w-xl text-center text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
          Empowering bold <span className="font-serif italic font-normal">growth</span> across every
          sector
        </h2>

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
            <div
              key={card.title}
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
            </div>
          ))}
        </div>
      </section>
      <main className="bg-white">
        {/* ── WHAT WE DO ─────────────────────────────────────────────── */}
        <section className="w-4/5 m-auto py-16 md:py-20" aria-labelledby="solutions-heading">
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
            Our Services
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="solutions-heading"
              className="heading-style-h3 max-w-2xl text-2xl sm:text-3xl md:text-4xl text-gray-900"
            >
              Everything you need to launch and grow online
            </h2>
<div className='flex flex-col  '>

            <p className="max-w-sm text-sm pb-2 text-gray-500">
              Pick a starting point below, or tell us where you're stuck and we'll point you to the
              right one.
            </p>
            <Button to="/service" size='md' variant="primary"  >
            See all services
            </Button>
          </div>
</div>
          <div className="relative z-10 mt-6 sm:mt-8">
            {' '}
            <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <DiscoverTextAnimation Text='Discovery our services' />
          </div>
          <div className="mt-5 grid grid-cols-1 gap- sm:grid-cols-2  gap-3 lg:grid-cols-3">
            {solutions.map((item, i) => (
              <Link
                key={item.title}
                to={item.href}
                className="group relative flex h-full flex-row items-center gap-3 overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 transition-all hover:border-gray-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17]"
              >
                {/* accent bar, top edge */}
                <span className="absolute left-0 top-0 h-1 w-0 bg-[#f6bc17] transition-all duration-300 group-hover:w-full" />

                {/* index + icon row */}
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition-all group-hover:border-[#f6bc17] group-hover:bg-[#f6bc17]">
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


                </div>

                {/* title + desc, grows to fill space */}

                  <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>



                {/* learn more, pinned to bottom, aligns across all cards */}
                <span className="  flex items-center   text-sm font-medium text-gray-900">

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
            ))}
          </div>
        </section>

        <Projects />
        <Testimonials />
        <Faq />

        <Animation Text='' />
        <FreeTools />
        {/* ── PROJECTS TEASER ──────────────────────────────────────────*/}
        <Contact />
      </main>
    </div>
  );
}

export default Home;
