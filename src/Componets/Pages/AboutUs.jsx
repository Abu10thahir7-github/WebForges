import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Lottie from 'lottie-react';
import logoAnimation from '../../assets/ITwords.json'; // adjust the path if needed
// scss imports
import './aboutUs.scss';
import Paragraph from '../Animations/TextFillAnimation/Character';
import Word from '../Animations/TextFillAnimation/Word';
import Character from '../Animations/TextFillAnimation/Character';
const paragraph =
  'We are a talented team,tackling design challenges and delivering beyond expectations.';

import officeImg from '../../assets/office.jpg';
import PerspeTranstions from '../Animations/perspectiveSectionTransition/PerspeTranstions';

import Contact from '../HomePages/Contact';
function AboutUs() {
  scrollTo(0, 0);

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
            className=" w-full z-10 text-desgin font-medium   heading-style-h3 text-base sm:text-lg md:text-xl lg:text-3xl xl:text-7xl text-white"
          >
            <span className="mr-0 md:mr-96 ">
              Creat<span class="text-style-italic">i</span>ve des
              <span class="text-style-italic">i</span>gn
            </span>{' '}
            <br />
            <span className="ml-0 md:ml-56">
              p<span class="text-style-italic">o</span>wered
            </span>{' '}
            <br />
            <span className="ml-0 md:ml-44">
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
          WHO WE ARE
        </motion.h1>
        <motion.div>
          <Word paragraph={paragraph} />
        </motion.div>
        <div className="h-[30vh]"></div>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between border-t-[1px] gap-4 border-gray-700 py-9"
        >
          <p className="uppercase">
            [ &nbsp; Exceeding Design <br />
            Expectations &nbsp; &nbsp; &nbsp; &nbsp; ]
          </p>

          <p className="w-full md:w-[35%] text-xl sm:text-xl md:text-xl    font-thin text-gray-400">
            Our diverse expertise and innovative approach ensure that we not only meet but exceed
            your project's goals, creating impactful solutions that drive success.
          </p>
        </motion.div>
        <div className="mt-52">
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
            2024
          </motion.h1>
          <div className="flex flex-col md:flex-row gap-6 justify-between ">
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="uppercase text-sm md:text-2xl lg:text-4xl"
            >
              F<span class="text-style-italic">o</span>UNDED IN K
              <span class="text-style-italic">E</span>RALA BY <br />
              SULAIMAN AND ABU THAHIR
            </motion.p>
            <motion.img
              style={{ mixBlendMode: 'luminosity' }}
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className=" w-full md:w-[50%] m-auto"
              src={officeImg}
              alt=""
            />
          </div>

          <div className="w-4/5 flex flex-col sm:flex-row m-auto justify-between my-32 pt-36">
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="text-base md:text-xl font-thin w-full md:w-[50%] mt-10 mb-10 text-gray-300"
            >
              Web Forges was established in 2018 with a vision to revolutionize UI/UX design.
              Recognizing that many digital interfaces lacked distinctiveness and user focus, our
              founders—passionate designers and tech enthusiasts—set out to change the landscape.
              With a team of innovative thinkers and design experts, Web Forges aims to infuse
              creativity and functionality into every project, transforming ordinary interfaces into
              exceptional user experiences.
            </motion.p>
            {/* Lottie Background */}
            <div className="relative w-full md:w-[50%] m-auto      ">
              {/* Top gradient */}
              <div className="absolute top-0 left-0 w-[500px] h-[3rem] md:h-[10rem] bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

              {/* Lottie animation */}
              <div className="will-change-transform transform-gpu   ">
                <Lottie
                  animationData={logoAnimation}
                  loop
                  autoplay
                  className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px]"
                  style={{ height: 'auto' }}
                />
              </div>

              {/* Bottom gradient */}
              <div className="absolute -bottom-1 left-0 w-[500px] h-[3rem] md:h-[10rem]  bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="mt-40">
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
            OUR TEAM OF EXPERTS
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="uppercase text-sm md:text-2xl lg:text-4xl"
          >
            Meet <br /> <span class="text-style-italic">o</span>ur team leaders
          </motion.p>
        </div>
      </div>
      <PerspeTranstions />
      <div className="Experts  mt-0">
        <div class=" mt-32 flex flex-col lg:flex-row w-4/5 m-auto">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="  w-full md:w-1/2 lg:w-1/2 "
          >
            <h1 className="text-lg sm:w-full sm:text-sm md:text-lg md:w-full flex items-center gap-3 uppercase">
              <svg
                width="11"
                height="13"
                viewBox="0 0 11 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
              </svg>
              Industry Experience
            </h1>
            <p className="uppercase mt-4 sm:w-full md:w-1/2  text-thin   font-thin text-base sm:text-sm md:text-lg lg:text-lg xl:text-lg text-gray-300">
              Our designers deliver personalized solutions that bring business value across various
              niches
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="   mt-4 sm:w-full md:w-1/2  sm:mt-8 md:mt-0 lg:mt-0 xl:mt-0"
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl  mb-3">
              E-Commerce Development
            </h1>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl mb-3">
              Portfolio & Personal Websites
            </h1>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl mb-3">
              Education & E-Learning
            </h1>
          </motion.div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default AboutUs;
