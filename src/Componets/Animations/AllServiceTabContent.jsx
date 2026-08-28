import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn } from '../../data/variants';

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
      // TODO: Meta Ads, Marketing Poster, Social Media Creatives, and Branding
      // have no matching entries in serviceListData.js yet. Add slugs there,
      // then restore these items with the correct `to` values.
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

/* defined outside the parent so React treats it as a stable component type
   across renders — avoids the remount-on-every-render bug */
function ServiceCard({ title, desc, to, index }) {
  return (
    <div>
      <Link
        to={to}
        className="group relative flex h-full flex-col justify-between gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-3 transition-colors duration-300 hover:border-[#f6bc17] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17]"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-medium text-gray-900">{title}</h3>
          <div className=" flex items-center rounded-full border border-gray-200 bg-white text-gray-900 transition-colors duration-300 group-hover:border-[#f6bc17] group-hover:bg-[#f6bc17] px-3 py-1 text-[12px] font-medium gap-1">
            <p className="    text-gray-500">View </p>

            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500"
            >
              <path
                d="M2.857 10.893h10.866l-4.991 4.992 1.268 1.259 7.143-7.143-7.143-7.143-1.259 1.259 4.982 4.991H2.857v1.785Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div>
          <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
        </div>
      </Link>
    </div>
  );
}

export default function AllServiceTabContent() {
  const [activeTab, setActiveTab] = useState(1);
  const activeItems = TABS.find(t => t.id === activeTab).items;

  return (
    <section aria-labelledby="all-services-heading" className="mb-24 text-gray-900">
      {/* Eyebrow */}

      {/* Tabs */}
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        role="tablist"
        aria-label="Service categories"
        className="mb-2 flex w-full gap-3 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible"
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
            className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium uppercase tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17] ${
              activeTab === tab.id
                ? 'border-[#f6bc17] bg-[#f6bc17] text-black'
                : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Panel */}
      <div id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
        {activeItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activeItems.map((item, index) => (
              <ServiceCard
                key={item.to}
                index={index}
                title={item.title}
                desc={item.desc}
                to={item.to}
              />
            ))}
          </div>
        ) : (
          <motion.p
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 py-14 text-center text-sm text-gray-500"
          >
            This category is being rebuilt — check back soon, or{' '}
            <Link to="/contact" className="font-medium text-gray-900 underline underline-offset-4">
              ask us directly
            </Link>
            .
          </motion.p>
        )}
      </div>
    </section>
  );
}
