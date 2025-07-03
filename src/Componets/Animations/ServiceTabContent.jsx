import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';          // adjust to your path

/* ----— central data so you write each service only once ----— */
const TABS = [
  {
    id: 1,
    label: 'All Web Services',
    items: [
      { title: 'Web Development', desc: 'Create a website for your business.', to: '/services/webdevelopment' },
      { title: 'E‑Commerce', desc: 'Launch a conversion‑ready online store.', to: '/services/ecommerce' },
      { title: 'Static', desc: ' Create a professional website with ease.', to: '/services/static' },
      { title: 'Web Designing', desc: 'Pixel‑perfect UI/UX as you wish.', to: '/services/webdesign' },
      { title: 'Landing Page Design', desc: 'High‑impact one‑page sites.', to: '/services/landingpage' },
      { title: 'Startup Business Website', desc: 'Website for your startup business.', to: '/services/startup-website' },
      { title: 'Dynamic Website', desc: 'Create a dynamic website for your business.', to: '/services/dynamic-website' },
      { title: 'Professional Business Website', desc: 'Website for your professional business.', to: '/services/professional-website' },
      { title: 'SEO Website', desc: 'Website for your SEO business.', to: '/services/seo-website' },
      { title: 'Marketing Web Designing', desc: 'Website for your marketing business.', to: '/services/marketing-webdesign' },
      { title: 'Unlimited Page With 4 Admin Panel', desc: 'Website with unlimited pages & multiple admin roles.', to: '/services/unlimited-pages' },
      { title: 'Multiple Location Website', desc: 'One website for multiple locations.', to: '/services/multiple-location' },
      { title: 'Custom Web Designing', desc: 'Tailor-made web designs as per your needs.', to: '/services/custom-webdesign' },
    ],
  },
  {
    id: 2,
    label: 'Web Portal Development',
    items: [
      { title: 'Real Estate Portal', desc: 'For your property business.', to: '/services/realestate-portal' },
      { title: 'Food Delivery Portal', desc: 'Optimized UX for delivery businesses.', to: '/services/fooddelivery-portal' },
      { title: 'E Learning Portal', desc: 'Build your own online learning platform.', to: '/services/elearning-portal' },
      { title: 'Travel Agency Portal', desc: 'Showcase trips, packages, and offers.', to: '/services/travelagency-portal' },
      { title: 'Job Consultancy Portal', desc: 'For job seekers and HR firms.', to: '/services/jobconsultancy-portal' },
      { title: 'Matrimony Portal', desc: 'Connect people through your match-making portal.', to: '/services/matrimony-portal' },
    ],
  },
  {
    id: 3,
    label: 'Related Services',
    items: [
      { title: 'Website Maintenance', desc: 'Keep your website up-to-date and secure.', to: '/services/website-maintenance' },
      { title: 'Website Support', desc: 'Get professional support for your website.', to: '/services/website-support' },
      { title: 'Website Redesign', desc: 'Revamp your site with a fresh new design.', to: '/services/website-redesign' },
      { title: 'Google Ads Management', desc: 'Manage your Google Ads campaigns effectively.', to: '/services/google-ads' },
      { title: 'Google Analytics', desc: 'Track and analyze your site’s traffic.', to: '/services/google-analytics' },
      { title: 'Domain Registration', desc: 'Secure your domain name with trusted registrars.', to: '/services/domain-registration' },
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
      <div className="mt-6 w-full text-center">
        <div className="services-tabs border-t border-gray-700">
          {TABS.find(t => t.id === activeTab).items.map(item => (
            <HoverCard
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
