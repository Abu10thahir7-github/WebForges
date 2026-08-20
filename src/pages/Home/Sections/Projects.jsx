import React from 'react';
import trendzio_mockup from '../../../assets/projects/trendzio mockup.png';
import velonto_mockup from '../../../assets/projects/velonto design.jpg';
import LSLIVEMEDIA from '../../../assets/projects/LS LIVE MEDIA projct.png';
import manasa from '../../../assets/projects/manasa creation project.png';
import sgAcademy from '../../../assets/projects/sg project tumbnail.png';
import flyoean from '../../../assets/projects/Flyoceanmoockkup.svg';
import talktowermockup from '../../../assets/projects/talktowermockup.svg';

import { fadeIn } from '../../../data/variants';
import Footer from '../../../app/layout/Footer';
import Button from '../../../Componets/UI/Button';

const projects = [
  {
    img: trendzio_mockup,
    title: 'Trendzio',
    category: 'E-Commerce',
    url: 'https://www.trendzio.shop/',
  },
  {
    img: flyoean,
    title: 'Flyocean Travel & Tourism',
    category: 'Travel Agency',
    url: 'https://www.flyoceantravel.com/',
  },
  {
    img: talktowermockup,
    title: 'Talk Tower',
    category: 'Education',
    url: 'https://www.talktower.in/',
  },
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 15.25L19.2125 15.25L12.225 22.2375L14 24L24 14L14 4L12.2375 5.7625L19.2125 12.75L4 12.75L4 15.25Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div onClick={() => window.open(project.url, '_blank')} className="group cursor-pointer">
      {/* Thumbnail — fixed aspect ratio, capped size, cropped/cover so
          large source images never blow out the grid */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-[#EFEBE2]">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover overlay affordance */}
        <div className="absolute inset-0 bg-[#0B0F19]/0 group-hover:bg-[#0B0F19]/10 transition-colors duration-500" />
        <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5B937] text-[#0B0F19] opacity-0 translate-y-2 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
          <ArrowIcon />
        </div>

        {/* Index tag, echoes the pill-tag language from the hero */}
        <span className="absolute top-3 left-3 rounded-full bg-white/80 backdrop-blur px-2.5 py-1 text-[11px] tracking-wide text-[#0B0F19]/70">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Text row */}
      <div className="flex items-baseline justify-between pt-4">
        <div>
          <h3 className="text-[17px] font-semibold tracking-tight text-[#0B0F19]">
            {project.title}
          </h3>
          <p className="text-sm font-light text-[#0B0F19]/45">{project.category}</p>
        </div>
        <span className="text-sm italic text-[#0B0F19]/35 group-hover:text-[#0B0F19]/70 transition-colors">
          Visit
        </span>
      </div>
    </div>
  );
}

function Projects() {
  scrollTo(0, 0);

  return (
    <div className="relative bg-[#FAF8F2]  pt-7 ">
      <div
        className="w-4/5 h-full m-auto flex flex-col md:flex-row my-5"
        aria-labelledby="projects-heading"
      >
        <div className="flex sm:w-full md:w-1/2">
          <p className="text-lg flex items-center gap-3 uppercase text-[#e0a500] font-medium">
            <svg
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
            </svg>
            Our projects
          </p>
        </div>
        <div className="sm:w-full md:w-1/2">
          <h2
            id="projects-heading"
            className="heading-style-h3 text-base sm:text-lg md:text-xl lg:text-3xl pb-2 text-gray-900"
          >
            Our unique strategy ensures successful project outcomes
          </h2>

          <Button to="/projects">See all work</Button>
        </div>
      </div>

      <div className="background"></div>

      <div className=" w-4/5 mx-auto mt-7 pb-10">
        {/* Section header, matching the hero's eyebrow + serif/bold pairing */}
        <div className="mb-10">
          <h2 className="mt-4 text-3xl sm:text-4xl leading-tight text-[#0B0F19]">
            <span className="   font-serif   italic text-gray-700  ">Projects,</span>{' '}
            <span className="font-extrabold">DELIVERED.</span>
          </h2>
        </div>

        {/* Responsive grid: 1 col mobile, 2 col tablet+, capped card width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
