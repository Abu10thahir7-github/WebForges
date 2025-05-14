import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ZoomParallax from '../Animations/ZoomParallax/ZoomParallax';
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
            className=" z-10 text-desgin font-medium   heading-style-h3 text-base sm:text-lg md:text-xl lg:text-3xl xl:text-7xl text-white"
          >
            <span className=" mr-96">
              Creat<span class="text-style-italic">i</span>ve des
              <span class="text-style-italic">i</span>gn
            </span>{' '}
            <br />
            <span className=" ml-56">
              p<span class="text-style-italic">o</span>wered
            </span>{' '}
            <br />
            <span className="ml-44">
              by expert tal<span class="text-style-italic">e</span>nt.
            </span>
          </motion.p>
        </div>
      </div>
      <div className='h-[30vh]'></div>
      <ZoomParallax/>
    </div>

  )
}

export default ServicesPage
