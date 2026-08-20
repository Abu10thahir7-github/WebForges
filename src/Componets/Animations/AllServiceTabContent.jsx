import { useState } from 'react';
import { Link } from 'react-router-dom';

/* central data so you write each service only once */
const TABS = [
  {
    id: 1,
    label: 'Website Services',
    items: [
      {
        title: 'Business Website Development',
        desc: 'Professional websites tailored for businesses of all sizes.',
        to: '/services/professional-website',
      },
      {
        title: 'E-Commerce Website Development',
        desc: 'Conversion-focused online stores with secure payments.',
        to: '/services/ecommerce',
      },
      {
        title: 'Static Website Development',
        desc: 'Fast, lightweight, and cost-effective static websites.',
        to: '/services/static',
      },
      {
        title: 'Custom Website Design',
        desc: 'Tailor-made website designs aligned with your brand.',
        to: '/services/custom-webdesign',
      },
      {
        title: 'Landing Page Design',
        desc: 'High-converting single-page websites for promotions.',
        to: '/services/landingpage',
      },
      {
        title: 'Startup Website Solutions',
        desc: 'Scalable websites built for startups and new ventures.',
        to: '/services/startup-website',
      },
      {
        title: 'Dynamic Website Development',
        desc: 'Feature-rich dynamic websites with admin control.',
        to: '/services/dynamic-website',
      },
      {
        title: 'SEO-Optimized Website',
        desc: 'Websites built with SEO best practices for better ranking.',
        to: '/services/seo-website',
      },
      {
        title: 'Multi-Location Website',
        desc: 'One website optimized for multiple business locations.',
        to: '/services/multiple-location',
      },
    ],
  },
  {
    id: 2,
    label: 'Digital Marketing & Design',
    items: [
      {
        title: 'Google Ads Management',
        desc: 'Search and display ads to boost conversions.',
        to: '/services/google-ads',
      },
      // TODO: the four items below had no matching entry in serviceListData.js
      // (Meta Ads, Marketing Poster, Social Media Creatives, Branding) — they're
      // commented out here rather than left pointing at a 404. Add real entries
      // to serviceListData.js, then restore these with the correct slugs.
    ],
  },
  {
    id: 3,
    label: 'Web Portal Development',
    items: [
      {
        title: 'Real Estate Portal',
        desc: 'Property listing portals for real estate businesses.',
        to: '/services/realestate-portal',
      },
      {
        title: 'Food Delivery Portal',
        desc: 'Online ordering systems for food delivery businesses.',
        to: '/services/fooddelivery-portal',
      },
      {
        title: 'E-Learning Portal',
        desc: 'Online education platforms with courses and dashboards.',
        to: '/services/elearning-portal',
      },
      {
        title: 'Travel Agency Portal',
        desc: 'Travel portals showcasing packages, tours, and bookings.',
        to: '/services/travelagency-portal',
      },
      {
        title: 'Job Consultancy Portal',
        desc: 'Recruitment portals for job seekers and employers.',
        to: '/services/jobconsultancy-portal',
      },
      {
        title: 'Matrimony Portal',
        desc: 'Match-making portals with secure user management.',
        to: '/services/matrimony-portal',
      },
    ],
  },
  {
    id: 4,
    label: 'Support & Maintenance',
    items: [
      {
        title: 'Website Maintenance',
        desc: 'Regular updates, security checks, and optimization.',
        to: '/services/website-maintenance',
      },
      {
        title: 'Website Support',
        desc: 'Reliable technical support whenever you need it.',
        to: '/services/website-support',
      },
      {
        title: 'Website Redesign',
        desc: 'Modern redesigns to refresh your existing website.',
        to: '/services/website-redesign',
      },
      {
        title: 'Domain & Hosting Services',
        desc: 'Domain registration and reliable hosting solutions.',
        to: '/services/domain-registration',
      },
      {
        title: 'Analytics & Tracking Setup',
        desc: 'Google Analytics and conversion tracking setup.',
        to: '/services/google-analytics',
      },
    ],
  },
];

/* defined outside AllServiceTabContent so React treats it as a stable
   component type across renders — fixes the remount-on-every-render bug */
function ServiceRow({ title, desc, to }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      {/* the whole row is a real <Link> — native keyboard focus, Enter to
          activate, and Cmd/Ctrl-click to open in a new tab, none of which
          a div with onClick gives you */}
      <Link
        to={to}
        className="service-card  flex flex-col items-center justify-between gap-2 border-b border-gray-200 py-2 text-gray-900  hover:px-5  sm:flex-row"
      >
        <div className="flex flex-col gap-1">
          <span className="text-lg font-medium text-gray-900">{title}</span>
          <span className="text-gray-500 text-sm leading-relaxed">{desc}</span>
        </div>

        {/* visual-only pill, not a real <button> — a <button> can't legally
            nest inside an <a>, and now the <Link> itself is the control */}
        <span
          aria-hidden="true"
          initial={{ opacity: 0, x: 30 }}
          animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="flex shrink-0 items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-base text-white group-focus-visible:opacity-100"
        >
          Details
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M2.857 10.893h10.866l-4.991 4.992 1.268 1.259 7.143-7.143-7.143-7.143-1.259 1.259 4.982 4.991H2.857v1.785Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
}

export default function AllServiceTabContent() {
  const [activeTab, setActiveTab] = useState(1);
  const activeItems = TABS.find(t => t.id === activeTab).items;

  return (
    <section
      aria-labelledby="all-services-heading"
      className="mb-5 flex flex-col items-center text-gray-900"
    >
      <h2 id="all-services-heading" className="sr-only">
        Browse all services by category
      </h2>

      {/* tab headings — now a real tablist for screen readers */}
      <div
        role="tablist"
        aria-label="Service categories"
        className="flex w-full space-x-8 overflow-x-auto pb-2 md:overflow-hidden"
      >
        {TABS.map(tab => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`shrink-0 whitespace-nowrap px-4 py-2 text-lg uppercase transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17] sm:text-xl ${
              activeTab === tab.id
                ? 'border-b-2 border-gray-900 text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.id.toString().padStart(2, '0')}. {tab.label}
          </button>
        ))}
      </div>

      {/* current tab panel */}
      <div
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="mt-6 w-full"
      >
        {activeItems.length > 0 ? (
          <div className="services-tabs border-t border-gray-200">
            {activeItems.map(item => (
              <ServiceRow key={item.to} title={item.title} desc={item.desc} to={item.to} />
            ))}
          </div>
        ) : (
          <p className="border-t border-gray-200 py-10 text-center text-sm text-gray-500">
            This category is being rebuilt — check back soon, or{' '}
            <Link to="/contact" className="font-medium text-gray-900 underline underline-offset-4">
              ask us directly
            </Link>
            .
          </p>
        )}
      </div>
    </section>
  );
}
