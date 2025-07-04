import React from 'react'
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { fadeIn } from '../../variants';
import ZoomParallax from '../Animations/ZoomParallax/ZoomParallax';
import Contact from '../HomePages/Contact';


function ServicesPage() {
  scrollTo(0, 0);

  return (
    <div>
      <Helmet>
        {/* Basic Meta */}
        <title>Our Services - WebForges | Creative Web Design & SEO Experts</title>
        <meta name="description" content="Discover premium website design, e-commerce solutions, UI/UX, SEO optimization, and more with WebForges. Your partner in digital success." />
        <meta name="keywords" content="web design, SEO services, e-commerce development, UI/UX design, responsive websites, website maintenance, branding, creative solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebForges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://dev.webforges.site/services" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Services - WebForges | Creative Web Design & SEO Experts" />
        <meta property="og:description" content="Discover premium website design, e-commerce solutions, UI/UX, SEO optimization, and more with WebForges. Your partner in digital success." />
        <meta property="og:image" content="https://dev.webforges.site/logo.png" />
        <meta property="og:url" content="https://dev.webforges.site/services" />
        <meta property="og:site_name" content="WebForges" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - WebForges | Creative Web Design & SEO Experts" />
        <meta name="twitter:description" content="Discover premium website design, e-commerce solutions, UI/UX, SEO optimization, and more with WebForges. Your partner in digital success." />
        <meta name="twitter:image" content="https://dev.webforges.site/logo.png" />
        <meta name="twitter:site" content="@WebForges" />
        <meta name="twitter:creator" content="@WebForges" />
      </Helmet>
      
          <div class="bg-animation absolute">
        <div class="noise-bg"></div>
        <div class="blob-cont">
          <div class="mint blob"></div>
          <div class="mint blob"></div>
          <div class="lime blob"></div>
          <div class="lime blob"></div>


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
              Creat<span class="text-style-italic">i</span>ve des
              <span class="text-style-italic">i</span>gn
            </span>{' '}
            <br />
            <span className=" ml-0 md:ml-56">
              p<span class="text-style-italic">o</span>wered
            </span>{' '}
            <br />
            <span className="ml-0 md:l-44">
              by expert tal<span class="text-style-italic">e</span>nt.
            </span>
          </motion.p>
        </div>
      </div>
      <div className='h-[30vh]'></div>
      <div className='hidden md:block '>

      <ZoomParallax/>
      </div>


      <div className='md:hidden     w-4/5 m-auto flex flex-col justify-center items-center gap-10 bg-[#0f0f0f] p-3'>
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className='text-center text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-7xl text-white    mt-10 underline'  >
          <span class="text-style-italic">O</span>ur S<span class="text-style-italic">e</span>rv<span class="text-style-italic">i</span>ces
        </motion.h2>

        <motion.ul variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }} className='services-sm-list '>
          <motion.li
          >1. Website Design & Development</motion.li>
          <li>2. E-Commerce Solutions</li>
          <li>3. Web Applications</li>
          <li>4. UI/UX Design</li>
          <li>5. Mobile-Friendly Development</li>
          <li>6. Website Maintenance & Support</li>
          <li>7. Branding & Creative</li>
          <li>8. SEO</li>
        </motion.ul>


      </div>
      <Contact/>
    </div>

  )
}

export default ServicesPage
