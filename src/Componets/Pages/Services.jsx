import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import DiscoverTextAnimation from '../Animations/DiscoverTextAnimation.jsx'
import TabsComponent from '../Animations/Tabs'

function Services() {
  return (
    <div className='services relative my-16'>
      <svg className='absolute hidden md:block'
  width="665"
  height="618"
  viewBox="0 0 665 618"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g style={{ mixBlendMode: "difference" }} filter="url(#filter0_f_363_133)">
    <ellipse
      cx="332.239"
      cy="309.002"
      rx="196.393"
      ry="156.877"
      transform="rotate(27.0346 332.239 309.002)"
      fill="url(#paint0_linear_363_133)"
    />
  </g>
  <g style={{ mixBlendMode: "difference" }} filter="url(#filter1_f_363_133)">
    <ellipse
      cx="342.051"
      cy="337.238"
      rx="196.393"
      ry="110.212"
      transform="rotate(27.0346 342.051 337.238)"
      fill="url(#paint1_linear_363_133)"
    />
  </g>
  <defs>
    <filter
      id="filter0_f_363_133"
      x="0.155212"
      y="0.0409546"
      width="664.167"
      height="617.922"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="71.5628" result="effect1_foregroundBlur_363_133" />
    </filter>
    <filter
      id="filter1_f_363_133"
      x="145.727"
      y="190.237"
      width="392.65"
      height="294.001"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="7.15628" result="effect1_foregroundBlur_363_133" />
    </filter>
    <linearGradient
      id="paint0_linear_363_133"
      x1="135.845"
      y1="309.002"
      x2="528.632"
      y2="309.002"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#FFD28F" />
      <stop offset="1" stopColor="#77540F" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_363_133"
      x1="145.658"
      y1="337.238"
      x2="538.445"
      y2="337.238"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#FFD28F" />
      <stop offset="1" stopColor="#77540F" />
    </linearGradient>
  </defs>
</svg>
  <div className='w-4/5 m-auto'>
  <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
         className="flex sm:w-full md:w-1/2 ">
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
            OUR SERVICES
          </h1>
        </motion.div>
        </div>
        <DiscoverTextAnimation/>

        <svg className='absolute hidden md:block right-0' width="324" height="578" viewBox="0 0 324 578" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9" filter="url(#filter0_df_372_321)">
<ellipse cx="297.292" cy="306.047" rx="181.052" ry="79.8299" transform="rotate(0.345807 297.292 306.047)" fill="url(#paint0_linear_372_321)"></ellipse>
</g>
<g opacity="0.7" filter="url(#filter1_f_372_321)">
<ellipse cx="151.758" cy="136.071" rx="151.758" ry="136.071" transform="matrix(0.984077 0.177744 0.231287 0.972886 186.63 75.2319)" fill="url(#paint1_linear_372_321)"></ellipse>
</g>
<defs>
<filter id="filter0_df_372_321" x="46.0524" y="156.021" width="502.48" height="300.053" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
<feMorphology radius="17.5476" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_372_321"></feMorphology>
<feOffset dx="7.01902" dy="7.01902"></feOffset>
<feGaussianBlur stdDeviation="14.038"></feGaussianBlur>
<feComposite in2="hardAlpha" operator="out"></feComposite>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_372_321"></feBlend>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_372_321" result="shape"></feBlend>
<feGaussianBlur stdDeviation="35.0951" result="effect2_foregroundBlur_372_321"></feGaussianBlur>
</filter>
<filter id="filter1_f_372_321" x="144.6" y="29.2692" width="445.686" height="410.637" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
<feGaussianBlur stdDeviation="35.0951" result="effect1_foregroundBlur_372_321"></feGaussianBlur>
</filter>
<linearGradient id="paint0_linear_372_321" x1="116.24" y1="306.047" x2="478.344" y2="306.047" gradientUnits="userSpaceOnUse">
<stop stop-color="#77540F"></stop>
<stop offset="1" stop-color="#FFECE1"></stop>
</linearGradient>
<linearGradient id="paint1_linear_372_321" x1="0" y1="136.071" x2="303.517" y2="136.071" gradientUnits="userSpaceOnUse">
<stop stop-color="#1D6937"></stop>
<stop offset="1" stop-color="#111111" stop-opacity="0.0666667"></stop>
</linearGradient>
</defs>
</svg>
        <div className='w-4/5 m-auto'>
        <TabsComponent/>
        </div>
    </div>
  )
}

export default Services
