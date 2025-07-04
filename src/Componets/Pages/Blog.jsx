import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { fadeIn } from '../../variants';
import BlogTextAnimation from '../Animations/BlogText';
import Word from '../Animations/TextFillAnimation/Word';
import Card from '../Animations/CardAnimation';
import abu from '../../assets/abu.jpg';
import sulaiman from '../../assets/sulai.jpg';


import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import Contact from '../HomePages/Contact';
export const projects = [
  {
    title: "Muhammed Sulaiman T",
    description: "Full Stack Developer | Backend Engineer | API Specialist\n\nFrom secure authentication systems to custom APIs and database design, I handle the logic and power behind your web application. My mission? Build clean, scalable, and secure systems using modern stacks like MERN (MongoDB, Express, React, Node.js).",
    src: sulaiman,
    link: "https://mhdsulu786.vercel.app/",
    color: "#212121"
  },
  {
    title: "Abuthahir",
    description: "Frontend Developer | UI/UX Designer | Responsive Web Specialist\n\nI create websites that are not just beautiful but also fully responsive, fast-loading, and user-friendly. Whether it’s a sleek portfolio or a feature-rich dashboard, I make sure your visitors get a seamless experience — on any device.",
    src:  abu,
    link: "https://abu-thahir.vercel.app/",
    color: "black"
  }
];

const paragraph =
  '👥 Meet the Makers Behind Webforges Dev We’re a two-person team blending design and development to bring ideas to life:';
const articles = [
  {
    id: 1,
    category: 'UX 101',
    date: '23.5.2025',
    title: 'What Makes a Great Landing Page in 2025? UX Experts Weigh In',
    image:
      'https://cdn.prod.website-files.com/62c5589fc4bbccac9fe40ae7/682ff2bfe87a49bd3118ff41_68a8bdb0c338555b27349ceb44b40fe5.gif',
    link: '#',
  },
  {
    id: 2,
    category: 'UX 101',
    date: '23.5.2025',
    title: 'Designing Mobile Apps for Accessibility: A UX Must-Have in 2025',
    image:
      'https://cdn.prod.website-files.com/62c5589fc4bbccac9fe40ae7/68258debf5ab4eab7ca255f8_876ff64c89ed84b20058c669b1a0a186.gif',
    link: '#',
  },
  {
    id: 3,
    category: 'UX 101',
    date: '23.5.2025',
    title: "Web Design vs. Web UX: What's the Difference and Why It Matters in 2025",
    image:
      'https://cdn.prod.website-files.com/62c5589fc4bbccac9fe40ae7/681c6d4f7ab4f513f4ee817e_5336509c84cd8d1fc7ab7c619928c60b.gif',
    link: '#',
  },
  {
    id: 4,
    category: 'CASE STUDY',
    date: '23.5.2025',
    title: 'Creating Emotional Connections Through UI Design: The Power of Visual Storytelling',
    image:
      'https://cdn.prod.website-files.com/62c5589fc4bbccac9fe40ae7/674d69a9841c56f04db2d4c6_78548ceb7b2ec76ac1961856110e28ce.gif',
    link: '#',
  },
  {
    id: 5,
    category: 'CASE STUDY',
    date: '23.5.2025',
    title: '5 Ways No-Code Tools Impact UI/UX Design Services',
    image:
      'https://cdn.prod.website-files.com/62c5589fc4bbccac9fe40ae7/6746f4365970e63597e2a856_b5434468a9f8a1fac71b1cf8d5502320.gif',
    link: '#',
  },
  {
    id: 6,
    category: 'CASE STUDY',
    date: '23.5.2025',
    title: '5 Ways Micro-Animations Enhance User Experience',
    image:
      'https://cdn.prod.website-files.com/62c5589fc4bbccac9fe40ae7/674006049a83abfcacc8f548_77a2719a5f9ade27941c879ae3c7bca9.gif',
    link: '#',
  },
  // Add more articles and categories like CASE STUDY, UX 101, etc.
];

const tabs = ['ALL', 'CASE STUDY', 'UX 101', 'PROCESS'];
function Blog() {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredArticles =
    activeTab === 'ALL' ? articles : articles.filter(article => article.category === activeTab);



      const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <div>
      <Helmet>
        {/* Basic Meta */}
        <title>WebForges Blog - Insights on UX, Design & Web Development</title>
        <meta
          name="description"
          content="Stay updated with the latest trends in UX design, web development, no-code tools, and case studies from WebForges team."
        />
        <meta
          name="keywords"
          content="web development blog, UX design articles, case studies, no-code tools, frontend development, web design tips"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebForges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://dev.webforges.site/blog" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="WebForges Blog - Insights on UX, Design & Web Development"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest trends in UX design, web development, no-code tools, and case studies from WebForges team."
        />
        <meta property="og:image" content="https://dev.webforges.site/logo.png" />
        <meta property="og:url" content="https://dev.webforges.site/blog" />
        <meta property="og:site_name" content="WebForges" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="WebForges Blog - Insights on UX, Design & Web Development"
        />
        <meta
          name="twitter:description"
          content="Stay updated with the latest trends in UX design, web development, no-code tools, and case studies from WebForges team."
        />
        <meta name="twitter:image" content="https://dev.webforges.site/logo.png" />
        <meta name="twitter:site" content="@WebForges" />
        <meta name="twitter:creator" content="@WebForges" />
      </Helmet>
      <div class="bg-animation absolute">
        <div class="noise-bg"></div>
        <div class="blob-cont">
          <div class="orange"></div>
          <div class="peach"></div>

          <div class="yellow"></div>
          <div class="red "></div>
          <div class="yellow"></div>
          <div class="orange"></div>
        </div>
      </div>

      <div className="w-4/5 m-auto h-[90vh] flex flex-col justify-center sm:justify-end sm:items-start items-center gap-10">
        <div className="hero_text">
          <motion.p
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className=" z-10 text-desgin font-medium   heading-style-h3 text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-7xl text-white"
          >
            Blog
          </motion.p>
        </div>
      </div>
      <div className="h-[30vh]"></div>
      <div className="w-4/5  m-auto blog  ">
        <div className="bg-black text-white p-4">
          {/* Tabs */}
          <div className="bg-black text-white  ">
            <div className="grid grid-cols-2    text-right">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`uppercase tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl    p-7 transition-colors duration-200 ${
                    activeTab === tab
                      ? 'text-yellow-500 border-b-[1.5px] border-yellow-500'
                      : 'text-gray-400 border-b border-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Articles */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="mt-40 "
          >
            {filteredArticles.length > 0 ? (
              filteredArticles.map(article => (
                <div key={article.id} className="mb-10 border-t pt-10    border-gray-600 p-0 md:p-20   flex-col  md:flex-row gap-4">
                  <p className="text-sm text-gray-400 mb-2">{article.date}</p>
                  <img src={article.image} alt={article.title} className=" object-cover  " loading="lazy" />
                  <div>
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl py-5  ">{article.title}</h2>
                    <a
                      href={article.link}
                      className="inline-block mt-3 px-4 py-1 border border-white rounded-full text-sm hover:bg-white hover:text-black transition"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500 italic">No articles under "{activeTab}" yet.</div>
            )}
          </motion.div>
        </div>
      </div>
      <div>

      </div>
      <div className='h-[20vh]'></div>
      <BlogTextAnimation/>
<div className='h-[30vh]'></div>
      <div className="w-4/5 m-auto     ">
        <p className=' text-lg sm:text-2xl md:text-3xl lg:text-4xl'>  <Word paragraph={paragraph} />
</p>

<main ref={container} className='relative mt-36'>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
      </div>
          <Contact />
    </div>
  );
}

export default Blog;
