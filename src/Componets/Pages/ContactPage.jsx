import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
function ContactPage() {
  const [selected, setSelected] = useState(null);
  scrollTo(0, 0);

  const services = [
    'Logo / branding',
    'Landing Page Development',
    'No-code Development',
    'Web Design',
    'Mobile App Design',
    'Other',
  ];

  const handleSelect = service => {
    setSelected(service);
    console.log('Selected service:', service);
    // You can do more actions here (API calls, filtering, etc.)
  };
  return (
    <div>
      <div class="bg-animation absolute">
        <div class=" z-[-1] noise-bg"></div>
        <div class="blob-cont">
          <div class="red blob"></div>
          <div class="darkBlue blob"></div>
          <div class="navy blob"></div>
          <div class="peach blob"></div>
          <div class="purple blob"></div>
        </div>
      </div>
      <div className="w-4/5 m-auto h-screen flex  justify-center items-center gap-20 text-white  ">
        <motion.h1
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg lg:text-7xl z-10 text-white"
        >
          Let's <br /> Collab
        </motion.h1>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="w-[75%]"
        >
          <div className=" py-10 border-t flex justify-between ">
            <motion.p
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className=" z-10 text-sm"
            >
              Reach out to collaborate or just <br /> to chat. We're here for you.
            </motion.p>{' '}
            <motion.a
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="z-10  text-sm sm:text-base md:text-lg lg:text-3xl"
              href=""
            >
              contact@webforges.com
            </motion.a>
          </div>
          <div className=" flex justify-between border-t py-10">
            <motion.p
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className=" z-10 text-sm"
            >
              +84 965 657 893
              <br /> (WhatsApp/Telegram)
            </motion.p>{' '}
            <motion.a
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-lg lg:text-3xl z-10"
              href=""
            >
              Book a call
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="w-4/5 m-auto flex flex-col mt-16 justify-center p-12 bg-[#191919]">
        <motion.p
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg lg:text-3xl text-white"
        >
          {' '}
          Projects type
        </motion.p>
        <div className="flex contact-form-projectType gap-5 mt-10 flex-wrap">
          {services.map((service, index) => (
            <motion.button
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              key={index}
              onClick={() => handleSelect(service)}
              className={`px-4 py-2 rounded-lg border ${
                selected === service ? 'bg-blue-600 text-white' : 'bg-white text-black'
              } transition`}
            >
              {service}
            </motion.button>
          ))}
        </div>

        <motion.p
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }} className="text-sm sm:text-base md:text-lg lg:text-3xl  text-white mt-16">
          {' '}
          Your informatio
        </motion.p>
        <motion.form   variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }} action="">
          <div className="flex justify-between flex-wrap  mt-10">
            <motion.div  variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }} className="w-full md:w-[49%]">
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input type="text" id="firstName" className="w-full p-2 " />
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }} className="w-full md:w-[49%]">
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input type="text" id="lastName" className="w-full p-2 " />
            </motion.div>
          </div>

          <div className="  contact-form-input    mt-10  ">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }} className="w-full md:full">
              <label htmlFor="email" className="block mb-1">
                Email Address
              </label>
              <input type="text" id="email" className="w-full p-2 " />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }} className="w-full md:full">
              <label htmlFor=" Phone" className="block mb-1">
                {' '}
                Phone{' '}
              </label>
              <input type="text" id=" Phone" className="w-full p-2 " />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }} className="w-full md:full">
              <label htmlFor="Company" className="block mb-1">
                Company{' '}
              </label>
              <input type="text" id="Company" className="w-full p-2 " />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }} className="w-full md:full">
              <label htmlFor="ProjectDetail" className="block mb-1">
                ProjectDetail{' '}
              </label>
              <textarea rows="5" type="text" id="ProjectDetail" className="w-full p-2 " />
            </motion.div>
          </div>
        </motion.form>

        <div>
          <p className="text-sm sm:text-base md:text-lg lg:text-3xl  text-white mt-16"> Budget</p>
          <div className="flex contact-form-Budget gap-5 mt-10 flex-wrap">
            <label>
              {' '}
              <input
                type="checkbox"
                class="appearance-none w-3 h-3 bg-gray-300 rounded-[50px] checked:bg-yellow-400  transition"
              />
              Less than $5K
            </label>
            <label>
              {' '}
              <input
                type="checkbox"
                class="appearance-none w-3 h-3 bg-gray-300 rounded-[50px] checked:bg-yellow-400  transition"
              />
              $5K - $15K
            </label>
            <label>
              <input
                type="checkbox"
                class="appearance-none w-3 h-3 bg-gray-300 rounded-[50px] checked:bg-yellow-400  transition"
              />
              $15K - $25K
            </label>
            <label>
              <input
                type="checkbox"
                class="appearance-none w-3 h-3 bg-gray-300 rounded-[50px] checked:bg-yellow-400  transition"
              />
              $25K - $35K{' '}
            </label>
            <label>
              <input
                type="checkbox"
                class="appearance-none w-3 h-3 bg-gray-300 rounded-[50px] checked:bg-yellow-400  transition"
              />
              $35K +
            </label>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <input type="checkbox" id="notRobot" className="w-4 h-4" />
            <label htmlFor="notRobot" className="text-sm select-none">
              I am not a robot
            </label>
          </div>

          <motion.button
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="uppercase flex items-center gap-2 mt-10 bg-[#f6bc16] p-3 text-black  px-20 text-lg rounded-full"
          >
            submit
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
