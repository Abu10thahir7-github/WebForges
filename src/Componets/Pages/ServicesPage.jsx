import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ZoomParallax from '../Animations/ZoomParallax/ZoomParallax';
import Contact from '../HomePages/Contact';


function ServicesPage() {
  scrollTo(0, 0);

  return (
    <div>
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
