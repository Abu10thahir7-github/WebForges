import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../data/variants'; // adjust to your path

/* ----— central data so you write each service only once ----— */
const TABS = [
  {
    id: 1,
    label: 'Website Services',
    items: [
      {
        title: 'Business Website Development',
        desc: 'Professional websites tailored for businesses of all sizes.',
        to: '/services/business-website',
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
        title: 'Professional Corporate Website',
        desc: 'Premium websites for professional and corporate brands.',
        to: '/services/professional-website',
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
        title: 'Meta Ads Management',
        desc: 'Facebook & Instagram ads to generate quality leads.',
        to: '/services/meta-ads',
      },
      {
        title: 'Google Ads Management',
        desc: 'Search and display ads to boost conversions.',
        to: '/services/google-ads',
      },
      {
        title: 'Marketing Poster Design',
        desc: 'High-impact posters for ads, social media & promotions.',
        to: '/services/marketing-poster',
      },
      {
        title: 'Social Media Creatives',
        desc: 'Eye-catching designs for Instagram & Facebook.',
        to: '/services/social-media-design',
      },
      {
        title: 'Branding & Visual Design',
        desc: 'Logos, banners, and brand identity designs.',
        to: '/services/branding',
      },
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

export default function TabsComponent() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);

  /* reusable, animated card */
  const HoverCard = ({ title, desc, to }) => {
    const [hovered, setHovered] = useState(false);

    return (
      <motion.div
        className="relative service-card flex flex-col sm:flex-row items-center
                   justify-between p-4 border-b border-gray-700 bg-transparent
                   transition-colors duration-300 cursor-pointer"
        initial={{ paddingLeft: 20, paddingRight: 20, color: '#FFF' }}
        whileHover={{ paddingRight: 30, color: '#000' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => navigate(to)}
      >
        <div className="flex flex-col gap-1">
          <span className="text-3xl">{title}</span>
          <span>{desc}</span>
        </div>

        {/* details button fades in on hover */}
        <motion.button
          className="opacity-0 flex items-center gap-2 bg-white text-black
                     text-lg p-2 px-5 rounded-full"
          initial={{ opacity: 0, x: 50 }}
          animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          Details
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M2.857 10.893h10.866l-4.991 4.992 1.268 1.259 7.143-7.143-7.143-7.143-1.259 1.259 4.982 4.991H2.857v1.785Z"
              fill="currentColor"
            />
          </svg>
        </motion.button>
      </motion.div>
    );
  };

  return (
    <motion.div
      variants={fadeIn('up', 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-white flex flex-col items-center mb-56"
    >
      {/* tab headings */}
      <div className="w-full overflow-x-scroll md:overflow-hidden flex space-x-8 pb-2">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`uppercase px-4 py-2 text-xl text-gray-400 transition-all
              ${activeTab === tab.id ? 'text-white border-b-2 border-white' : ''}`}
          >
            {tab.id.toString().padStart(2, '0')}. {tab.label}
          </button>
        ))}
      </div>

      {/* current tab panels */}
      <div className="mt-6 w-full  ">
        <div className="services-tabs border-t border-gray-700">
          {TABS.find(t => t.id === activeTab).items.map(item => (
            <HoverCard
              className=""
              key={item.to}
              title={item.title}
              desc={item.desc}
              to={item.to}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
