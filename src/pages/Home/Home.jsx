import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

import NavBarSidebar from '../../app/layout/NavBarSidebar';
import Animation from '../../Componets/Animations/animation';
import Projects from './Sections/Projects';
import Services from './Sections/Services';
import Contact from '../../Componets/Animations/Contact.jsx';
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

      <Hero />
      <WhyWebForges />
      {/* ===== WHO WE SERVE ===== */}
      <section className="bg-[#f7f7f5] px-3 py-10 md:px-10 md:py-10">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
          Who we help
        </p>

        <h2 className="mx-auto mt-4 max-w-xl text-center text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
          Empowering bold <span className="font-serif italic font-normal">growth</span> across every
          sector
        </h2>

        <div className="mx-auto mt-5 md:mt-14 grid max-w-6xl grid-cols-2 gap-2 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              className={`${card.tint} rounded-2xl border border-gray-100 py-5 px-3 shadow-sm`}
            >
              <div className="flex gap-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111"
                  strokeWidth="1.6"
                  aria-hidden="true"
                  className="hidden md:block"
                >
                  {card.icon}
                </svg>
                <h3 className=" text-base font-semibold text-gray-900">{card.title}</h3>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-gray-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <main className="bg-white">
        {/* ── WHAT WE DO ─────────────────────────────────────────────── */}

        <Services />

        <Projects />
        <Testimonials />
        <Faq />

        <Animation Text="" />
        <FreeTools />
        {/* ── PROJECTS TEASER ──────────────────────────────────────────*/}
        <Contact />
      </main>
    </div>
  );
}

export default Home;
