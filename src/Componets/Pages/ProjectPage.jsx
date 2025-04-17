import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
function ProjectPage() {
  return (
    <div>
      <div class="bg-animation absolute">
        <div class="noise-bg"></div>
        <div class="blob-cont">
          <div class="teal blob"></div>
          <div class="purple blob"></div>
          <div class="mint blob"></div>
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
            className=" z-10 text-desgin font-medium   heading-style-h3 text-base sm:text-lg md:text-xl lg:text-3xl xl:text-7xl text-white"
          >
            <span className=" mr-96">
              Bu<span class="text-style-italic">i</span>ld
              <span class="text-style-italic">i</span>ng
            </span>{' '}
            <br />
            <span className=" ml-56">
              your<span class="text-style-italic">V</span>ision
            </span>{' '}
            <br />
            <span className="ml-44">
              i<span class="text-style-italic">n </span>reality.
            </span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
