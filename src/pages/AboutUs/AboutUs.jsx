

import { Helmet } from 'react-helmet-async';

// scss imports
import './aboutUs.scss';

import Contact from '../../Componets/Animations/Contact.jsx';
import WhoWeAre from '../../Componets/shared/WhoWeAre.jsx';
import Hero from '../../Componets/shared/Hero.jsx';
import WhatWeDo from '../Services/sections/WhatWeDo.jsx';
import HowWeWork from '../Services/sections/HowWeWork.jsx';
import WhatMakesUsDifferent from './section/WhatMakesUsDifferent.jsx';
import OurValues from './section/OurValues.jsx';
import Faq from '../../Componets/UI/FAQ.jsx';
import { AboutFaqs } from '../../data/datas.js';
import MeetTheTeam from './section/MeetTheTeam.jsx';
function AboutUs() {
  scrollTo(0, 0);

  return (
    <div>
      <Helmet>
        {/* Basic Meta */}
        <title>About Us - WebForges | Creative Design Powered by Expert Talent</title>
        <meta
          name="description"
          content="Discover the story behind WebForges, our expert team, and our passion for delivering innovative design solutions and exceptional user experiences."
        />
        <meta
          name="keywords"
          content="WebForges, About WebForges, UI/UX Design Team, Creative Design Agency, Expert Web Developers, Innovative Web Solutions, Kerala Web Agency"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebForges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://webforges.site/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Us - WebForges | Creative Design Powered by Expert Talent"
        />
        <meta
          property="og:description"
          content="Discover the story behind WebForges, our expert team, and our passion for delivering innovative design solutions and exceptional user experiences."
        />
        <meta property="og:image" content="https://webforges.site/logo.png" />
        <meta property="og:url" content="https://webforges.site/about" />
        <meta property="og:site_name" content="WebForges" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - WebForges | Creative Design Powered by Expert Talent"
        />
        <meta
          name="twitter:description"
          content="Discover the story behind WebForges, our expert team, and our passion for delivering innovative design solutions and exceptional user experiences."
        />
        <meta name="twitter:image" content="https://webforges.site/logo.png" />
        <meta name="twitter:site" content="@WebForges" />
        <meta name="twitter:creator" content="@WebForges" />
      </Helmet>

      <Hero
        headlineLead="About"
        headlineMain="Built for Businesses. Designed for Growth."
        description="We create digital experiences that help businesses get noticed, earn trust, and grow online."
        cta={{ label: 'View Projects', to: '/projects' }}
      />
      <WhoWeAre />
      <MeetTheTeam />
      <WhatWeDo />
      <HowWeWork />
      <WhatMakesUsDifferent />
      <OurValues />


      <Faq faqs={AboutFaqs} />
      <Contact />
    </div>
  );
}

export default AboutUs;
