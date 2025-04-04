import { useState } from "react";
import { motion } from "framer-motion";

import { fadeIn } from '../../variants'
export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(1);

  const HoverCard = ({ title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.a
        className="relative  service-card flex flex-col sm:flex-row items-center justify-between p-4 border-b border-gray-700 transition-colors duration-300 bg-transparent"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ paddingLeft: "20px", paddingRight: "20px", color: "white" }}
        whileHover={{
          paddingLeft: "20px",
          paddingRight: "30px",
          color: "black",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <span className="text-3xl">{title}</span>
        <span>{description}</span>

        <motion.button
          className="opacity-0 flex items-center gap-2 bg-white text-black text-lg p-2 px-5 rounded-full"
          initial={{ opacity: 0, x: 50 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          Details
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    { id: 1, label: "STRATEGY", content: (
      <div className="serivces-tabs">
        <div className="border-t border-gray-700"></div>
        <HoverCard title="UX audit" description="Evaluate your user experience." />
        <HoverCard title="UI concept" description="Define the unique style & visual." />
      </div>
    ), },
    { id: 2, label: "DESIGN", content: (
      <div className="serivces-tabs">
        <div className="border-t border-gray-700"></div>
        <HoverCard title="Landing Page Design" description="Create beautiful and engaging landing pages." />
        <HoverCard title="Web app Design" description="Design intuitive web apps optimized UX." />
        <HoverCard title="Mobile App Design" description="Craft user-friendly mobile apps." />
        <HoverCard title="Brand identity" description="Create a unique brand identity for your business." />
      </div>
    ), },
    {
      id: 3,
      label: "No-code Development",
      content: (
        <div className="serivces-tabs">
          <div className="border-t border-gray-700"></div>
          <HoverCard title="Webflow Development" description="Rapidly create beautiful responsive websites." />
          <HoverCard title="Framer Development" description="Design interactive apps effortlessly." />
        </div>
      ),
    },
  ];

  return (
    <motion.div
    variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }} className="    text-white flex flex-col items-center mb-56 ">
      <div className="w-full  overflow-scroll md:overflow-hidden sm:w-auto  flex space-x-8 pb-2  ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-gray-400 px-4 py-2 text-xl transition-all ${
              activeTab === tab.id ? "text-white border-b-2 border-white" : ""
            }`}
          >
            {tab.id.toString().padStart(2, "0")}. {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6 w-full text-center">{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </motion.div>

  );
}
