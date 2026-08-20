// src/Componets/Pages/ServiceSections.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Componets/UI/Button';


const SECTIONS = [
  {
    number: '01',
    eyebrow: 'Web Development',
    title: 'Web Development',
    desc: 'Fast, responsive, and scalable websites and web applications built around your business goals.',
    listLabel: 'What we deliver',
    items: [
      'Business websites',
      'Corporate websites',
      'Landing pages',
      'Portfolio websites',
      'Custom web applications',
      'Dashboards',
      'Web portals',
      'API integrations',
      'CMS-powered websites',
      'Responsive development',
    ],
    metaLabel: 'Technologies',
    meta: ['Next.js', 'React', 'TypeScript', 'Node.js', 'SQL', 'MongoDB'],
    cta: 'Explore Web Development',
    to: '/services/webdevelopment',
  },
  {
    number: '02',
    eyebrow: 'Business Automation',
    title: 'Business Automation',
    desc: 'Replace repetitive manual work with connected workflows that run automatically.',
    listLabel: 'What we automate',
    items: [
      'Lead capture',
      'Form submissions',
      'Email notifications',
      'Customer follow-ups',
      'CRM updates',
      'Data synchronization',
      'Appointment workflows',
      'Invoice workflows',
      'Internal notifications',
      'API-based workflows',
      'Reporting',
      'Repetitive administrative tasks',
    ],
    flow: [
      'Website Form',
      'Lead Captured',
      'CRM Updated',
      'Team Notified',
      'Email Sent',
      'Follow-up',
    ],
    footnote:
      'We connect the tools your business already uses so information moves automatically between them, reducing repetitive work and giving your team more time to focus on the business.',
    cta: 'Explore Automation',
    to: '/contact',
  },
  {
    number: '03',
    eyebrow: 'UI/UX Design',
    title: 'UI/UX Design',
    desc: 'Clear, modern interfaces designed around your users, brand, and business objectives.',
    listLabel: 'What we deliver',
    items: [
      'Website UI design',
      'Web application UI',
      'Dashboard design',
      'Landing page design',
      'Mobile-responsive layouts',
      'User flows',
      'Wireframes',
      'Design systems',
      'Prototypes',
      'Developer-ready designs',
    ],
    metaLabel: 'Tools',
    meta: ['Figma', 'Design Systems', 'Prototyping'],
    cta: 'Explore UI/UX Design',
    to: '/services/webdesign',
  },
  {
    number: '04',
    eyebrow: 'E-Commerce Development',
    title: 'E-Commerce Development',
    desc: 'Conversion-focused online stores designed to make shopping simple and help your business sell more effectively.',
    listLabel: 'What we deliver',
    items: [
      'E-commerce websites',
      'Product catalogs',
      'Shopping carts',
      'Checkout experiences',
      'Payment integration',
      'Order management',
      'Customer accounts',
      'Product filtering',
      'Inventory integration',
      'Admin dashboards',
      'Mobile optimization',
      'SEO-ready product pages',
    ],
    cta: 'Build an Online Store',
    to: '/services/ecommerce',
  },
  {
    number: '05',
    eyebrow: 'SEO & Search Optimization',
    title: 'SEO & Search Optimization',
    desc: "Build a stronger search presence with a website that's technically sound, structured clearly, and ready to be discovered.",
    listLabel: 'What we work on',
    items: [
      'Technical SEO',
      'Website structure',
      'Metadata',
      'Heading structure',
      'Internal linking',
      'Schema markup',
      'Sitemap',
      'Robots.txt',
      'Page performance',
      'Image optimization',
      'Local SEO foundations',
      'Search-friendly content structure',
    ],
    footnote:
      'SEO starts with a strong technical foundation. We build websites with search engines and real users in mind from the beginning.',
    cta: 'Improve Your Website',
    to: '/services/seo-website',
  },
  {
    number: '06',
    eyebrow: 'Website Support & Maintenance',
    title: 'Website Support & Maintenance',
    desc: 'Keep your website secure, updated, fast, and working properly after launch.',
    listLabel: 'What we provide',
    items: [
      'Website updates',
      'Bug fixes',
      'Performance improvements',
      'Content updates',
      'Security updates',
      'Dependency updates',
      'Backup support',
      'Technical monitoring',
      'Feature improvements',
      'Ongoing development',
    ],
    cta: 'Get Website Support',
    to: '/services/website-maintenance',
  },
];

function AutomationFlow({ steps }) {
  return (
    <div className="flex flex-wrap items-center justify-center md:gap-y-4">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center">
          <div className="flex items-center gap-3 rounded-2xl md:border border-gray-200 bg-white md:px-5 md:py-3 md:shadow-sm">
            <span
              className="h-2 w-2 hidden md:block rounded-full bg-[#f6bc17]"
              aria-hidden="true"
            />
            <span className="text-gray-500 text-sm leading-relaxed whitespace-nowrap">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="mx-2 shrink-0 text-gray-300"
            >
              <path
                d="M4 10h11M11 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function ServiceSection({ section, index }) {
  const isEven = index % 2 === 1;

  return (
    <section
      className={`relative overflow-hidden px-4 py-5 sm:pb-10 ${
        isEven ? 'bg-gray-50' : 'bg-white'
      }`}
    >
      {/* faint decorative number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-4 select-none text-[9rem] font-black leading-none text-gray-900/[0.04] sm:text-[13rem]"
      >
        {section.number}
      </span>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* eyebrow */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-[#c98f00]">{section.number}</span>
          <span aria-hidden="true" className="h-px w-8 bg-gray-300" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            {section.eyebrow}
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          {/* left: title + desc + cta */}
          <div>
            <h2 className="mx-auto       text-3xl font-medium  leading-tight text-gray-900 sm:text-4xl">
              {section.title}
            </h2>

            <p className="mt-2 text-gray-500 text-sm leading-relaxed">{section.desc}</p>

            {section.footnote && (
              <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">{section.footnote}</p>
            )}

            {section.meta && (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  {section.metaLabel}
                </p>
                <div className="flex gap-1 flex-wrap">
                  {section.meta.map((item, i) => (
                    <p className="rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600 backdrop-blur">
                      {' '}
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-9">
              <Button to={section.to} variant="" size="md">
                {section.cta}
              </Button>
            </div>
          </div>

          {/* right: deliverables list, or automation flow */}
          <div>
            {section.flow ? (
              <>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  {section.listLabel}
                </p>
                <ul className="mb-10 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {section.items.map((item, i) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#f6bc17]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  {section.listLabel}
                </p>
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {section.items.map((item, i) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#f6bc17]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {section.flow && (
          <>
            <p className="mb-4 text-xs text-center font-semibold uppercase tracking-[0.2em] text-gray-400">
              Example workflow
            </p>
            <AutomationFlow steps={section.flow} />
          </>
        )}
      </div>
    </section>
  );
}

export default function ServiceSections() {
  return (
    <div>
      {SECTIONS.map((section, i) => (
        <ServiceSection key={section.number} section={section} index={i} />
      ))}
    </div>
  );
}
