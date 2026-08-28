import React from 'react';

import { fadeIn } from '../../data/variants';
import moonImg from '../../assets/images/backgrounds/moon.webp';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import SectionLabel from '../UI/SectionLabel';

function Contact() {
  scrollTo(0, 0);

  return (
    <>
      <div className="contact  h-[30vh] md:h-[50vh] ">
        <div className="contact-container flex flex-col  w-4/5  m-auto  ">
       
          <SectionLabel text="Contact Us" />
          <div className="mt-10  flex flex-col justify-between gap-10 sm:flex-row sm:gap-0 sm:items-center ">
            <p className="    heading-style-h3 text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl text-white">
              Feel<span class="text-style-italic">i</span>ng{' '}
              <span class="text-style-italic">i</span>nsp<span class="text-style-italic">i</span>
              red? <br />W<span class="text-style-italic">e</span>'d l
              <span class="text-style-italic">o</span>ve t<span class="text-style-italic">o</span> w
              <span class="text-style-italic">o</span>rk w<span class="text-style-italic">i</span>th
              y<span class="text-style-italic">o</span>u
            </p>
            <Button to="/contact" size="md">
              {' '}
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
