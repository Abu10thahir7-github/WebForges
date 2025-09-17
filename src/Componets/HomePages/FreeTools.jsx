import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { fadeIn } from '../../variants';


import serviceImg from '../../assets/service-1.png';
import grid from '../../assets/grid.png';
import gradient from '../../assets/gradient.png';
import check from '../../assets/check.svg';

function FreeTools() {
  return (
    <div className=" free-tools ">
      <Helmet>
      {/* Basic Meta */}
      <title>30+ Free Digital Tools - Translation, QR Code, Image Editing & More | WebForges</title>
      <meta
        name="description"
        content="Explore 30+ free digital tools including Translation, QR Code Generator, Password Generator, Image Background Remover, Loan Calculator, Image Compressor, File Converter, and many more at WebForges."
      />
      <meta
        name="keywords"
        content="free digital tools, translation tool, qr code generator, password generator, image background remover, loan calculator, image compressor, file converter, watermark remover, image enhancer, currency converter, text to speech, speech to text, json formatter, image resizer, ai image generator, youtube video downloader, instagram downloader"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="WebForges" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://dev.webforges.site/freetools" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="30+ Free Digital Tools - Translation, QR Code, Image Editing & More | WebForges"
      />
      <meta
        property="og:description"
        content="Discover and use 30+ free digital tools such as translation, QR code generators, image editing, file converters, and video downloaders at WebForges."
      />
      <meta
        property="og:image"
        content="https://dev.webforges.site/logo.png" // Replace with an image representing free tools
      />
      <meta property="og:url" content="https://dev.webforges.site/freetools" />
        <link rel="canonical" href="https://dev.webforges.site/freetools" />
      <meta property="og:site_name" content="WebForges" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="30+ Free Digital Tools - Translation, QR Code, Image Editing & More | WebForges"
      />
      <meta
        name="twitter:description"
        content="Explore a wide range of free digital tools including translation, QR code generators, image editing, file converters, and video downloaders at WebForges."
      />
      <meta
        name="twitter:image"
        content="https://dev.webforges.site/logo.png" // Same as OG image or another relevant image
      />
      <meta name="twitter:site" content="@WebForges" />
      <meta name="twitter:creator" content="@WebForges" />
    </Helmet>

      <div className="md:h-[30vh]"></div>
      <div className="w-4/5 relative m-auto h-auto">
        <div className=" mb-32  flex items-center flex-col md:flex-row">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="flex sm:w-full md:w-1/2 "
          >
            <h1 className="text-lg flex items-center uppercase gap-3">
              <svg
                width="11"
                height="13"
                viewBox="0 0 11 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
              </svg>
              Our Free Tools
            </h1>
          </motion.div>
          <p className="   heading-style-h3   text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl  text-white">
            <span class="text-style-italic">A</span>b<span class="text-style-italic">o</span>ut U
            <span class="text-style-italic">s</span> – F<span class="text-style-italic">r</span>ee{' '}
            <span class="text-style-italic">A</span>I T<span class="text-style-italic">oo</span>ls f
            <span class="text-style-italic">o</span>r Ev<span class="text-style-italic">e</span>ryon
            <span class="text-style-italic">e</span>
          </p>
        </div>
        <motion.img
         variants={fadeIn('up', 1)}
         initial="hidden"
         whileInView={'show'}

         viewport={{ once: false }} className="absolute grediant-img -z-10    flex  infinite-rotate  " src={gradient} alt="" />
        <div className="relative flex flex-col lg:flex-row items-center robot-container h-auto lg:h-screen my-10 w-full rounded-xl overflow-hidden px-4">
          <div className="w-2/3">
            <img src={serviceImg} alt="" />
            <motion.img
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }} className="absolute inset-0 z-[-1] flex   " src={grid} alt="" />
          </div>

          <div className='w-full lg:w-1/3'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }} className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl  mb-3">
              Why Use Our AI Tools?
            </motion.h1>
            <ul>
      {[
        "User-friendly & beginner-friendly interface",
        "Saves hours of manual work",
        "Built for speed and accuracy",
        "Regular updates with the latest AI models",
        "User-friendly & beginner-friendly interface", // Repeat?
      ].map((text, idx) => (
        <motion.li
          key={idx}
          variants={fadeIn('up', 0.2 + idx * 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex border-t py-3 border-gray-600 text-gray-500 items-start gap-2"
        >
          <img src={check} alt="" className="min-w-[20px]" />
          <span className="text-sm sm:text-base">{text}</span>
        </motion.li>
      ))}
 <motion.button
  onClick={() => window.open('https://webforges.site/', '_blank')}
           variants={fadeIn('up', 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
          className='uppercase mt-6 flex items-center gap-2 bg-[#f6bc16] px-5 py-3 text-black text-base sm:text-lg rounded-full shadow-md hover:scale-105 transition-transform'> go  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.85711 10.8931L13.7232 10.8931L8.73211 15.8841L9.99997 17.1431L17.1428 10.0002L9.99997 2.85735L8.74104 4.11628L13.7232 9.10735L2.85711 9.10735L2.85711 10.8931Z" fill="currentColor"></path>
</svg></motion.button>
    </ul>
          </div>

        </div>
      </div>
      <div className="h-[5vh] md:h-[30vh]"></div>
    </div>
  );
}

export default FreeTools;
