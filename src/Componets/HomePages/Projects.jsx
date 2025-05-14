import React from 'react';
import trendzio_mockup from './../../assets/projects/trendzio mockup.png';
import velonto_mockup from './../../assets/projects/velonto design.jpg';
import LSLIVEMEDIA from './../../assets/projects/LS LIVE MEDIA projct.png';
import manasa from './../../assets/projects/manasa creation project.png';
import sgAcademy from './../../assets/projects/sg project tumbnail.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Footer from './Footer';

function Projects() {
  return (
    <div className="project-container sm:w-full md:w-full lg:w-4/5 m-auto flex   justify-end  ">
      <div className="w-[300px]  mx-auto block sm:mx-0 sm:w-4/5 md:w-4/6 lg:w-4/6 mt-16   flex-col gap-10">
        <motion.div
          onClick={() => window.open('https://www.trendzio.shop/', '_blank')}
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="project-card cursor-pointer"
        >
          <img className="" src={trendzio_mockup} alt="trendzio_mockup" />
          <div className="project-card-text flex justify-between border-t-[1px] border-t-[#363636] my-5 py-5">
            <div>
              <h2 className="uppercase">Trendzio</h2>
              <p className="text-lg text-gray-500 font-light">E-Commerce</p>
            </div>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 15.25L19.2125 15.25L12.225 22.2375L14 24L24 14L14 4L12.2375 5.7625L19.2125 12.75L4 12.75L4 15.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </motion.div>
        <motion.div
          onClick={() => window.open('https://sls-live-media.envisiondesigns.co.in/', '_blank')}
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="project-card cursor-pointer"
        >
          <img className="" src={LSLIVEMEDIA} alt="trendzio_mockup" />
          <div className="project-card-text flex justify-between border-t-[1px] border-t-[#363636] my-5 py-5">
            <div>
              <h2 className="uppercase">LS LIVE MEDIA</h2>
              <p className="text-lg text-gray-500 font-light">Event Management</p>
            </div>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 15.25L19.2125 15.25L12.225 22.2375L14 24L24 14L14 4L12.2375 5.7625L19.2125 12.75L4 12.75L4 15.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </motion.div>
        <motion.div
          onClick={() => window.open('https://velonto.vercel.app/', '_blank')}
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="project-card cursor-pointer"
        >
          <img className="" src={velonto_mockup} alt="trendzio_mockup" />
          <div className="project-card-text flex justify-between border-t-[1px] border-t-[#363636] my-5 py-5">
            <div>
              <h2 className="uppercase">velonto</h2>
              <p className="text-lg text-gray-500 font-light">Food Delivery</p>
            </div>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 15.25L19.2125 15.25L12.225 22.2375L14 24L24 14L14 4L12.2375 5.7625L19.2125 12.75L4 12.75L4 15.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </motion.div>
        <motion.div
          onClick={() => window.open('https://www.sgacdemy.com/', '_blank')}
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="project-card cursor-pointer"
        >
          <img className="" src={sgAcademy} alt="trendzio_mockup" />
          <div className="project-card-text flex justify-between border-t-[1px] border-t-[#363636] my-5 py-5">
            <div>
              <h2 className="uppercase">sg academy</h2>
              <p className="text-lg text-gray-500 font-light">Distance Education</p>
            </div>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 15.25L19.2125 15.25L12.225 22.2375L14 24L24 14L14 4L12.2375 5.7625L19.2125 12.75L4 12.75L4 15.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </motion.div>
        <motion.div
          onClick={() => window.open('https://manasa-creations.envisiondesigns.co.in/', '_blank')}
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="project-card cursor-pointer"
        >
          <img className="" src={manasa} alt="trendzio_mockup" />
          <div className="project-card-text flex justify-between border-t-[1px] border-t-[#363636] my-5 py-5">
            <div>
              <h2 className="uppercase">Manasa Creations</h2>
              <p className="text-lg text-gray-500 font-light">Interior Designing</p>
            </div>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 15.25L19.2125 15.25L12.225 22.2375L14 24L24 14L14 4L12.2375 5.7625L19.2125 12.75L4 12.75L4 15.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
