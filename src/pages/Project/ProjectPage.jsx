import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { fadeIn } from '../../data/variants';

import Contact from '../../Componets/Animations/Contact';
import Hero from './sections/Hero';

import FeaturedProjects from './sections/FeaturedProjects';
import HowWeWork from '../Services/sections/HowWeWork';
import Testimonials from '../Home/Sections/Testimonials';
import OurApproach from './sections/OurApproach';
import KeyFeatures from './sections/KeyFeatures';
import DesignShowcase from './sections/DesignShowcase';
import TechStack from './sections/TechStack';
import Screenshots from './sections/Screenshots';
import Outcome from './sections/Outcome';
import {
  keyFeatures,
  designIntro,
  designImages,
  techStack,
  screenshotSections,
  metrics,
  qualitative,
} from '../../data/datas';

function ProjectPage() {
 

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

      <Hero/>

<FeaturedProjects activeCategory={activeCategory} />
<HowWeWork />
<OurApproach />
<KeyFeatures features={keyFeatures} />
<DesignShowcase intro={designIntro} images={designImages} />
<TechStack stack={techStack} />
<Screenshots sections={screenshotSections} />
<Outcome metrics={metrics} qualitative={qualitative} />
<Testimonials />
      <Contact />
    </div>
  );
}

export default ProjectPage;
