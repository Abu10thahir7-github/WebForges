import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import SEO from '../SEO'
function FreeTools() {
  return (
    <div className=' free-tools '>
      <SEO
  title="Free Tools | WebForges - Boost Your Productivity Online"
  description="Discover WebForges' collection of free online tools to speed up your workflow — including web utilities, code formatters, SEO checkers, and more."
  keywords="free web tools, online tools, web utilities, productivity tools, SEO tools, code formatter, color picker"
  url="https://web-forges.vercel.app/"
  image="https://yourdomain.com/images/freetools-banner.jpg"
/>

<div className='w-4/5 m-auto h-screen'>
  <div className=' h-full m-auto flex items-center flex-col md:flex-row'>


<motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
         className="flex sm:w-full md:w-1/2 ">
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
        <span class="text-style-italic">A</span>b<span class="text-style-italic">o</span>ut U<span class="text-style-italic">s</span> – F<span class="text-style-italic">r</span>ee <span class="text-style-italic">A</span>I T<span class="text-style-italic">oo</span>ls f<span class="text-style-italic">o</span>r Ev<span class="text-style-italic">e</span>ryon<span class="text-style-italic">e</span>
          </p>

        </div>

</div>
    </div>
  )
}

export default FreeTools
