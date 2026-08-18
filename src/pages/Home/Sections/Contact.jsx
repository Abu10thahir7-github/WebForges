import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import moonImg from '../../../assets/images/backgrounds/moon.webp';
import { Link } from 'react-router-dom';

function Contact() {
  scrollTo(0, 0);

  return (
    <>

      <div className="contact   ">
        <div className="contact-container flex flex-col w-4/5  m-auto  ">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="   "
          >
            <h1 className="text-lg flex items-center gap-3">
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
            </h1>
          </motion.div>
          <div className="mt-10  flex flex-col justify-between gap-10 sm:flex-row sm:gap-0 sm:items-center ">
            <p className="    heading-style-h3 text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl text-white">
              Feel<span class="text-style-italic">i</span>ng{' '}
              <span class="text-style-italic">i</span>nsp<span class="text-style-italic">i</span>
              red? <br />W<span class="text-style-italic">e</span>'d l
              <span class="text-style-italic">o</span>ve t<span class="text-style-italic">o</span> w
              <span class="text-style-italic">o</span>rk w<span class="text-style-italic">i</span>th
              y<span class="text-style-italic">o</span>u
            </p>
            <Link to={'/contact'}>
              <motion.button
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="uppercase flex items-center gap-2 bg-[#f6bc16] p-3 text-black text-lg rounded-full"
              >
                get in touch{' '}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.85711 10.8931L13.7232 10.8931L8.73211 15.8841L9.99997 17.1431L17.1428 10.0002L9.99997 2.85735L8.74104 4.11628L13.7232 9.10735L2.85711 9.10735L2.85711 10.8931Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
