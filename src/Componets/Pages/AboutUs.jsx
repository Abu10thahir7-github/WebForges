import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// scss imports
import './aboutUs.scss';
import Paragraph from '../Animations/TextFillAnimation/Character';
import Word from '../Animations/TextFillAnimation/Word';
import Character from '../Animations/TextFillAnimation/Character';
const paragraph =
  'We are a talented team,tackling design challenges and delivering beyond expectations.';

function AboutUs() {

  return (
    <div>
      <div class="bg-animation absolute">
        <div class="noise-bg"></div>
        <div class="blob-cont">
          <div class="blue blob"></div>
          <div class="violet blob"></div>
          <div class="cyan blob"></div>
          <div class="indigo blob"></div>
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
      <div className="w-4/5 m-auto ">
        <div className="h-[20vh]"></div>
        <motion.h1
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="text-lg flex items-center mb-11 gap-3"
        >
          <svg
            width="11"
            height="13"
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
          </svg>
          CONTACT US
        </motion.h1>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
        >
          <Word paragraph={paragraph} />
        </motion.div>
        <div className="h-[30vh]"></div>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="flex justify-between border-t-[1px]  border-gray-700 py-9"
        >
          <p className="uppercase">
            [ &nbsp; Exceeding Design <br />
            Expectations &nbsp; &nbsp; &nbsp; &nbsp; ]
          </p>

          <p className="w-[35%] font-thin text-gray-400">
            Our diverse expertise and innovative approach ensure that we not only meet but exceed
            your project's goals, creating impactful solutions that drive success.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
