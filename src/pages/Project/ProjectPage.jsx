import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { fadeIn } from '../../data/variants';

import Contact from '../../Componets/Animations/Contact';
import Hero from './sections/Hero';

import FeaturedProjects from './sections/FeaturedProjects';

// const projects = [
//   {
//     title: 'Trendzio',
//     subtitle: 'E-Commerce',
//     category: 'Full Stack',
//     img: trendzio_mockup,
//     link: 'https://www.trendzio.shop/',
//   },
//   {
//     title: 'LS LIVE MEDIA',
//     subtitle: 'Event Management',
//     category: 'Static Website',
//     img: LSLIVEMEDIA,
//     link: 'https://sls-live-media.envisiondesigns.co.in/',
//   },
//   {
//     title: 'Velonto',
//     subtitle: 'Food Delivery',
//     category: 'Full Stack',
//     img: velonto_mockup,
//     link: 'https://velonto.vercel.app/',
//   },
//   {
//     title: 'SG Academy',
//     subtitle: 'Brand Identity',
//     category: 'Static Website',
//     img: sgAcademy,
//     link: 'https://www.sgacdemy.com/',
//   },
//   {
//     title: 'Manasa Creations',
//     subtitle: 'No-Code Development',
//     category: 'Static Website',
//     img: manasa,
//     link: 'https://manasa-creations.envisiondesigns.co.in/',
//   },
// ];

// function getCategoryCounts(projects) {
//   const counts = {};
//   projects.forEach(p => {
//     counts[p.category] = (counts[p.category] || 0) + 1;
//   });
//   return counts;
// }

function ProjectPage() {
  // const [selectedCategory, setSelectedCategory] = useState('All');
  // // const categoryCounts = getCategoryCounts(projects);

  // // const categories = ['All', ...Object.keys(categoryCounts)];

  // const filteredProjects =
  //   selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory);
const [activeCategory, setActiveCategory] = useState('All');

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
        <link rel="canonical" href="https://webforges.site/projects" />

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
        <meta property="og:image" content="https://webforges.site/logo.png" />
        <meta property="og:url" content="https://webforges.site/projects" />
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
        <meta name="twitter:image" content="https://webforges.site/logo.png" />
        <meta name="twitter:site" content="@WebForges" />
        <meta name="twitter:creator" content="@WebForges" />
      </Helmet>
      {/* <div class="bg-animation absolute">
        <div class="noise-bg"></div>
        <div class="blob-cont">
          <div class="teal blob"></div>
          <div class="purple blob"></div>
          <div class="pink blob"></div>
          <div class="black blob"></div>
          <div class="peach blob"></div>
        </div>
      </div> */}

      {/* <div className="w-4/5 m-auto h-screen flex flex-col justify-center items-center gap-10">
        <div className="hero_text">
          <p className=" z-10 text-desgin font-medium   heading-style-h3 text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-7xl text-white">
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
          </p>
        </div>
      </div> */}
      <Hero/>

<FeaturedProjects activeCategory={activeCategory} />
      <Contact />
    </div>
  );
}

export default ProjectPage;
