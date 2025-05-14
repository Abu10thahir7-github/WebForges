import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

function Blog() {
  scrollTo(0, 0);

  return (
    <div>
    <div class="bg-animation absolute">
        <div class="noise-bg"></div>
        <div class="blob-cont">

  <div class="orange"></div>
  <div class="peach"></div>

  <div class="yellow"></div>
  <div class="red "></div>
  <div class="yellow"></div>
  <div class="orange"></div>
</div>

      </div>

      <div className="w-4/5 m-auto h-[90vh] flex flex-col justify-end items-start gap-10">
        <div className="hero_text">
          <motion.p
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className=" z-10 text-desgin font-medium   heading-style-h3 text-base sm:text-lg md:text-xl lg:text-3xl xl:text-7xl text-white"
          >
             Blog
          </motion.p>
        </div>
      </div>

    </div>
  )
}

export default Blog
