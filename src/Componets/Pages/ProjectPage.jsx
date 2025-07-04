import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import trendzio_mockup from './../../assets/projects/trendzio mockup.png';
import velonto_mockup from './../../assets/projects/velonto design.jpg';
import LSLIVEMEDIA from './../../assets/projects/LS LIVE MEDIA projct.png';
import manasa from './../../assets/projects/manasa creation project.png';
import sgAcademy from './../../assets/projects/sg project tumbnail.png';
import Contact from '../HomePages/Contact';

const projects = [
  {
    title: 'Trendzio',
    subtitle: 'E-Commerce',
    category: 'Full Stack',
    img: trendzio_mockup,
    link: 'https://www.trendzio.shop/',
  },
  {
    title: 'LS LIVE MEDIA',
    subtitle: 'Event Management',
    category: 'Static Website',
    img: LSLIVEMEDIA,
    link: 'https://sls-live-media.envisiondesigns.co.in/',
  },
  {
    title: 'Velonto',
    subtitle: 'Food Delivery',
    category: 'Full Stack',
    img: velonto_mockup,
    link: 'https://velonto.vercel.app/',
  },
  {
    title: 'SG Academy',
    subtitle: 'Brand Identity',
    category: 'Static Website',
    img: sgAcademy,
    link: 'https://www.sgacdemy.com/',
  },
  {
    title: 'Manasa Creations',
    subtitle: 'No-Code Development',
    category: 'Static Website',
    img: manasa,
    link: 'https://manasa-creations.envisiondesigns.co.in/',
  },
];

function getCategoryCounts(projects) {
  const counts = {};
  projects.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
}

function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categoryCounts = getCategoryCounts(projects);

  const categories = ['All', ...Object.keys(categoryCounts)];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <Helmet>
        {/* Basic Meta */}
        <title>Projects Portfolio - WebForges | Full Stack, Static & No-Code Websites</title>
        <meta
          name="description"
          content="Explore our portfolio of projects including e-commerce, event management, food delivery, brand identity, and no-code websites built by WebForges."
        />
        <meta
          name="keywords"
          content="web development portfolio, full stack projects, static websites, no-code websites, e-commerce projects, event management websites, food delivery app"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebForges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://dev.webforges.site/projects" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Projects Portfolio - WebForges | Full Stack, Static & No-Code Websites"
        />
        <meta
          property="og:description"
          content="Explore our portfolio of projects including e-commerce, event management, food delivery, brand identity, and no-code websites built by WebForges."
        />
        <meta property="og:image" content="https://dev.webforges.site/logo.png" />
        <meta property="og:url" content="https://dev.webforges.site/projects" />
        <meta property="og:site_name" content="WebForges" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Projects Portfolio - WebForges | Full Stack, Static & No-Code Websites"
        />
        <meta
          name="twitter:description"
          content="Explore our portfolio of projects including e-commerce, event management, food delivery, brand identity, and no-code websites built by WebForges."
        />
        <meta name="twitter:image" content="https://dev.webforges.site/logo.png" />
        <meta name="twitter:site" content="@WebForges" />
        <meta name="twitter:creator" content="@WebForges" />
      </Helmet>
      <div class="bg-animation absolute">
        <div class="noise-bg"></div>
        <div class="blob-cont">
          <div class="teal blob"></div>
          <div class="purple blob"></div>
          <div class="pink blob"></div>
          <div class="black blob"></div>
          <div class="peach blob"></div>
        </div>
      </div>

      <div className="w-4/5 m-auto h-screen flex flex-col justify-center items-center gap-10">
        <div className="hero_text">
          <motion.p
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className=" z-10 text-desgin font-medium   heading-style-h3 text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-7xl text-white"
          >
            <span className=" mr-0 md:mr-96">
              Bu<span class="text-style-italic">i</span>ld
              <span class="text-style-italic">i</span>ng
            </span>{' '}
            <br />
            <span className="ml-0 md:ml-56">
              your<span class="text-style-italic">V</span>ision
            </span>{' '}
            <br />
            <span className="ml-0 md:ml-44">

              i<span class="text-style-italic">n </span>reality.
            </span>
          </motion.p>
        </div>
      </div>
      <div className="project-container sm:w-full md:w-full lg:w-4/5 m-auto px-4 py-8">
      {/* Filter Buttons with Counts */}
      <div className="flex flex-wrap gap-4 justify-center mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? 'bg-yellow-400 text-black'
                : 'bg-black text-white border-gray-300'
            }`}
          >
            {cat.toUpperCase()} {cat !== 'All' && `[${categoryCounts[cat]}]`}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="w-full mt-16 sm:w-4/5 md:w-4/6 lg:w-4/6 mx-auto flex flex-col gap-10">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => window.open(project.link, '_blank')}
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="project-card cursor-pointer"
          >
            <img src={project.img} alt={`${project.title}_mockup`} />
            <div className="project-card-text flex justify-between border-t-[1px] border-t-[#363636] my-5 py-5">
              <div>
                <h2 className="uppercase">{project.title}</h2>
                <p className="text-lg text-gray-500 font-light">{project.subtitle}</p>
              </div>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 15.25L19.2125 15.25L12.225 22.2375L14 24L24 14L14 4L12.2375 5.7625L19.2125 12.75L4 12.75L4 15.25Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <Contact/>
    </div>

  );
}

export default ProjectPage;
