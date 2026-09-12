import { useState } from 'react';

import ProjectCard from '../../../Componets/Animations/ProjectCard';

const categories = [
  'All',
  'Web Application Development',
  'Web Development',
  'E-Commerce',
  'UI/UX',
  'Automation',
];

// TODO: replace every `img` below with a real screenshot of the live site.
import { projectDetails } from '../../../data/projectDetailsData';
import SectionLabel from '../../../Componets/UI/SectionLabel';
import SectionTitle from '../../../Componets/shared/SectionTitle';
const projects = projectDetails;
// Defined outside the parent so it's a stable component type across renders

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? projects : projects.filter(p => p.service === activeCategory);

  return (
    <section className="md:w-4/5 my-5 px-3 m-auto">


      <SectionTitle
        eyebrow="Our work"
        lineOne="Featured"
        accentWord="projects"
       breakLine = {false}
      />

      <div className="flex mt-5 flex-col gap-10 lg:flex-row lg:items-start">
        {/* Filters — left, sticky */}
        <div
          role="tablist"
          aria-label="Project categories"
          className="flex gap-3 overflow-x-auto pb-2 lg:sticky lg:top-28 lg:w-[220px] lg:shrink-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0"
        >
          {categories.map(cat => {
            const count =
              cat === 'All' ? projects.length : projects.filter(p => p.service === cat).length;

            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex shrink-0 items-center justify-between gap-3 rounded-full px-5 py-2.5 text-sm font-medium uppercase tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  text-start focus-visible:outline-[#f6bc17] lg:w-full lg:justify-start lg:rounded-xl ${
                  activeCategory === cat
                    ? 'bg-[#f6bc17] text-black'
                    : 'border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-900 lg:border-transparent lg:bg-gray-50'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`hidden text-xs lg:inline ${activeCategory === cat ? 'text-black/60' : 'text-gray-400'}`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project grid — right */}
        <div className="min-w-0 flex-1">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-gray-200 py-16 text-center text-sm text-gray-500">
              No projects in this category yet — check back soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
