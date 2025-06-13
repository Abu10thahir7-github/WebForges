import { useState } from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';
export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(1);

  const HoverCard = ({ title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.a
        className="relative  service-card flex flex-col sm:flex-row items-center justify-between p-4 border-b border-gray-700 transition-colors duration-300 bg-transparent"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ paddingLeft: '20px', paddingRight: '20px', color: 'white' }}
        whileHover={{
          paddingLeft: '20px',
          paddingRight: '30px',
          color: 'black',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <span className="text-3xl">{title}</span>
        <span>{description}</span>

        <motion.button
          className="opacity-0 flex items-center gap-2 bg-white text-black text-lg p-2 px-5 rounded-full"
          initial={{ opacity: 0, x: 50 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          Details
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.85711 10.8928L13.7232 10.8928L8.73211 15.8839L9.99997 17.1428L17.1428 9.99997L9.99997 2.85711L8.74104 4.11604L13.7232 9.10711L2.85711 9.10711L2.85711 10.8928Z"
              fill="currentColor"
            />
          </svg>
        </motion.button>
      </motion.a>
    );
  };

  const tabs = [
    {
      id: 1,
      label: 'All Web Services',
      content: (
        <div className="serivces-tabs">
          <div className="border-t border-gray-700"></div>
          <HoverCard title="Web Development" description=" Create a website for your business." />
          <HoverCard title="E Commerce" description=" Create a website for your business." />
          <HoverCard title="Web Designing" description="Will design as you wish.." />
          <HoverCard
            title="Landing Page Design"
            description="Create beautiful and engaging landing pages."
          />
          <HoverCard
            title="Startup Business Website"
            description=" website for your startup business."
          />
          <HoverCard
            title="Dynamic Website"
            description="Create a dynamic website for your business."
          />
          <HoverCard
            title="Professional Business Website"
            description="website for your professional business."
          />
          <HoverCard title="SEO Website" description="website for your SEO business." />
          <HoverCard
            title=" Marketing Web Designing"
            description="website for your marketing business."
          />
          <HoverCard
            title=" Unlimited  Page With 4 Admin Panel"
            description=" website for your business."
          />
          <HoverCard
            title="Multiple Location Website"
            description="website for your multiple location."
          />
          <HoverCard title="Custom Web Designing" description="website for your custom design." />
        </div>
      ),
    },
    {
      id: 2,
      label: 'Web Portal Development ',
      content: (
        <div className="serivces-tabs">
          <div className="border-t border-gray-700"></div>
          <HoverCard
            title="Real Estate Portal"
            description="for your real estate business."
          />
          <HoverCard title="Food Delivery Portal" description="Design intuitive web apps optimized UX." />
          <HoverCard title="E Learning Portal" description="Craft user-friendly mobile apps." />
          <HoverCard
            title="Travel Agency Portal"
            description="Create a unique brand identity for your business."
          />
          <HoverCard
            title="Job Consultancy Portal"
            description="Create a unique brand identity for your business."
          />
          <HoverCard
            title="Matrimony Portal"
            description="Create a unique brand identity for your business."
          />
        </div>
      ),
    },
    {
      id: 3,
      label: 'Related Services',
      content: (
        <div className="serivces-tabs">
          <div className="border-t border-gray-700"></div>
          <HoverCard
            title="Website Maintenance"
            description="Keep your website up-to-date and secure."
          />
          <HoverCard
            title="Website Support"
            description="Get professional support for your website."

          />
          <HoverCard
            title="Website Redesign"
            description="Revamp your website with a fresh design."

          />
          <HoverCard
            title="Google Ads Management"
            description="Manage your Google Ads campaigns effectively."

          />
          <HoverCard
            title=" Google Analytics "
            description="Track and analyze your website traffic with Google Analytics."

          />
          <HoverCard
            title=" Domain Registration "
            description="Register your domain name with a reputable registrar."


          />
        </div>
      ),
    },
  ];

  return (
    <motion.div
      variants={fadeIn('up', 0.5)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: true }}
      className="    text-white flex flex-col items-center mb-56 "
    >
      <div className="w-full  overflow-scroll md:overflow-hidden sm:w-auto  flex space-x-8 pb-2  ">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-gray-400 uppercase px-4 py-2 text-xl transition-all ${
              activeTab === tab.id ? 'text-white border-b-2 border-white' : ''
            }`}
          >
            {tab.id.toString().padStart(2, '0')}. {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6 w-full text-center">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </motion.div>
  );
}
