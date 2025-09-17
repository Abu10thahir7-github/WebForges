// ServicePage.jsx
import { useParams, Link } from 'react-router-dom';
import { serviceList } from '../../serviceListData'; // adjust path
import { useState } from 'react';
import { div } from 'framer-motion/client';
import Word from '../Animations/TextFillAnimation/Word';
import { fadeIn } from '../../variants';
import { motion } from 'framer-motion';
import DiscoverTextAnimation from '../Animations/DiscoverTextAnimation';
export default function ServiceDetails() {
  const { slug } = useParams();
  const service = serviceList.find(item => item.slug === slug);

  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-gray-900 to-black px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Service Not Found</h1>
        <p className="opacity-70 mt-3 mb-6 max-w-lg">
          We couldn't find this service. Please go back and try again.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-white text-black font-medium rounded-full shadow-md hover:bg-gray-200 transition"
        >
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Main Content */}
        <div className="mt-12 grid justify-center  md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative  ">
            <motion.img
              variants={fadeIn('up', 0.1)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              src={service.image}
              alt={service.title}
              className="w-[300px]  object-cover rounded-2xl shadow-xl cursor-pointer transform group-hover:scale-105 transition duration-300"
              onClick={() => setIsFullscreen(true)}
            />
            <p className="absolute bottom-3 left-3 bg-black/60 text-sm px-3 py-1 rounded-full opacity-80 group-hover:opacity-100 transition">
              Click to enlarge
            </p>
          </div>
          <div>

          {/* Title + Description */}
          <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg opacity-90">{service.desc}</p>
          </div>
        </div>
        <div className="space-y-12 mt-10">
          {service && service?.what && (
            <div className="">
              {/* Heading */}
              <motion.h1
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="text-lg flex items-center  gap-3"
              >
                <svg
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z"
                    fill="currentColor"
                  ></path>
                </svg>

                {service && service.what && <h3>{service.what.heading}</h3>}
              </motion.h1>
              <motion.p
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="uppercase text-thin font-thin text-gray-400 text-start"
              >
                {service.what.subheading}
              </motion.p>
              {/* Content */}
              <div className="mt-5 border-t pt-14 border-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service?.what?.content?.map((item, index) => (
                  <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: true }}
                    key={index}
                    className="p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5
                   border border-white/20 shadow-lg hover:shadow-xl
                   hover:scale-[1.02] transition-all duration-300 ease-in-out"
                  >
                    <ul className="">
                      <li className="text-sm   text-gray-400">{item}</li>
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          {/* WHY Section */}
          {service && service?.why && (
            <section>
              <motion.h1
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="text-lg flex items-center  gap-3"
              >
                <svg
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z"
                    fill="currentColor"
                  ></path>
                </svg>

                {service.why.heading && service.why.heading}
              </motion.h1>
              <motion.p
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="uppercase text-thin font-thin text-gray-400 text-start"
              >
                {service.why.subheading}
              </motion.p>

              <div className="mt-5 border-t pt-14 border-gray-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {service?.why?.content?.map((item, index) => (
                  <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: true }}
                    key={index}
                    className="p-5 rounded-2xl bg-gradient-to-br from-[#1f2937]/60 to-[#111827]/40
                     border border-white/10 backdrop-blur-md
                     shadow-lg hover:shadow-xl hover:scale-[1.02]
                     transition-all duration-300 ease-in-out"
                  >
                    <p className="text-sm   text-gray-400">{item}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
          {/* HOW Section */}
          {service && service?.how && (
            <section>
              <motion.h1
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="text-lg flex items-center  gap-3"
              >
                <svg
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                {service.how.heading && service.how.heading}
              </motion.h1>
              <motion.p
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="uppercase text-thin font-thin text-gray-400 text-start"
              >
                {service.how.subheading}
              </motion.p>

              <div className="mt-5 border-t pt-14 border-gray-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {service.how.content &&
                  service.how.content.map((item, index) => (
                    <motion.div
                      variants={fadeIn('up', 0.5)}
                      initial="hidden"
                      whileInView={'show'}
                      viewport={{ once: true }}
                      key={index}
                      className="p-5 rounded-2xl bg-gradient-to-br from-[#374151]/60 to-[#1f2937]/40
                     border border-white/10 backdrop-blur-md
                     shadow-lg hover:shadow-xl hover:scale-[1.02]
                     transition-all duration-300 ease-in-out"
                    >
                      <p className="text-sm   text-gray-400">{item}</p>
                    </motion.div>
                  ))}
              </div>
            </section>
          )}
          {/* WHO Section */}
          {service && service?.who && (
            <section>
              <motion.h1
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="text-lg flex items-center  gap-3"
              >
                <svg
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                {service.who.heading}
              </motion.h1>
              <motion.p
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="uppercase text-thin font-thin text-gray-400 text-start"
              >
                {service.who.subheading}
              </motion.p>
              <div className="mt-5 border-t pt-14 border-gray-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.who.content.map((item, index) => (
                  <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: true }}
                    key={index}
                    className="p-5 rounded-2xl bg-gradient-to-br from-[#111827]/60 to-[#0f172a]/40
                     border border-white/10 backdrop-blur-md
                     shadow-lg hover:shadow-xl hover:scale-[1.02]
                     transition-all duration-300 ease-in-out"
                  >
                    <p className="text-sm  text-gray-400">{item}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            to="/"
            className="px-6 py-3 bg-white text-black font-medium rounded-full shadow-md hover:bg-gray-200 transition"
          >
            ← Back to Services
          </Link>
        </div>
      </div>

      {/* Fullscreen Image Preview */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-6"
          onClick={() => setIsFullscreen(false)}
        >
          <img
            src={service.image}
            alt={service.title}
            className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
          />
        </div>
      )}
    </div>
  );
}
