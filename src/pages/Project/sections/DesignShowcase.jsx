import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import SectionLabel from '../../../Componets/UI/SectionLabel';

const tabs = ['Desktop UI', 'Mobile UI', 'Components', 'Typography', 'Color System', 'Interaction'];

export default function DesignShowcase({ intro, images = {} }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const activeImages = images[activeTab] || [];

  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">
      {/* Intro */}
        <SectionLabel text=" Design" />

        <h2 className="text-2xl mt-2 font-bold text-gray-900 sm:text-3xl">Designed for clarity</h2>
        <p className="mt-4 text-base leading-relaxed text-gray-500">{intro}</p>


      {/* Tabs */}
      <div

        role="tablist"
        aria-label="Design showcase categories"
        className="mb-10 flex gap-3 overflow-x-auto pb-2"
      >
        {tabs.map(tab => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? 'border-gray-900 bg-gray-900 text-white'
                : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Large screenshots for the active tab */}
      {activeImages.length > 0 ? (
        <div className="flex flex-col gap-8">
          {activeImages.map((src, index) => (
            <div
              key={src}

              className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50"
            >
              <img
                src={src}
                alt={`${activeTab} screenshot ${index + 1}`}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-gray-200 py-16 text-center text-sm text-gray-500">
          {activeTab} visuals coming soon.
        </p>
      )}
    </section>
  );
}