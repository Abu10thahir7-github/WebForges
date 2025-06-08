import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

function Blog() {
  scrollTo(0, 0);

  return (
    <div>
      <div className="bg-animation absolute" >
        <div className="noise-bg"></div>
        <div className="blob-cont">
          <div className="orange"></div>
          <div className="peach"></div>
          <div className="yellow"></div>
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="orange"></div>
        </div>
      </div>

      <div className="w-4/5 m-auto h-[90vh] flex flex-col justify-end items-start gap-10">
        <div className="hero_text">
          <motion.p
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="z-10 text-desgin font-medium heading-style-h3 text-base sm:text-lg md:text-xl lg:text-3xl xl:text-7xl text-white"
          >
            Blog
          </motion.p>
        </div>
      </div>

      <div className="w-11/12 max-w-5xl mx-auto text-white py-16 space-y-8 text-sm sm:text-base md:text-lg leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">🚀 Introducing Webforges Dev – Crafting Powerful, Secure & Custom Websites</h1>
        
        <p>Welcome to <strong>Webforges Dev</strong> — a creative and technical partnership dedicated to building fast, secure, and fully customized websites and web apps.</p>

        <p>In a time where digital presence is everything, we focus on delivering <strong>responsive</strong>, <strong>SEO-friendly</strong>, and <strong>client-editable</strong> websites that not only look amazing but also work seamlessly on every screen.</p>

        <h2 className="text-2xl font-semibold mt-6">👥 Meet the Makers</h2>

        <p><strong>🔧 Muhammed Sulaiman T</strong><br />
        <em>Full Stack Developer | Backend Engineer | API Specialist</em><br />
        Specializes in secure authentication, backend architecture, API integrations, and complete full-stack builds using the MERN stack.</p>

        <p><strong>🎨 Abuthahir</strong><br />
        <em>Frontend Developer | UI/UX Designer | Responsive Web Specialist</em><br />
        Designs and builds modern, fast, and mobile-friendly interfaces that are both beautiful and practical.</p>

        <h2 className="text-2xl font-semibold mt-6">💼 What We Offer</h2>

        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Mobile-responsive websites</li>
          <li>SEO-optimized for better Google ranking</li>
          <li>Secure & encrypted backend systems</li>
          <li>Editable websites with CMS or admin panels</li>
          <li>Fast, lightweight performance</li>
          <li>Personal portfolios, business sites, eCommerce stores, dashboards & more</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">🌟 Why Clients Trust Webforges</h2>

        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Direct communication — no middlemen</li>
          <li>Clean, documented, scalable code</li>
          <li>Modern tools & technologies</li>
          <li>Post-launch support & long-term reliability</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">🚧 What’s Coming Next?</h2>

        <p>This is just the beginning. We plan to share project walkthroughs, redesign case studies, web dev tutorials, performance tips, and more in upcoming blog posts.</p>

        <h2 className="text-2xl font-semibold mt-6">📬 Let’s Build Something Amazing</h2>

        <p>Have an idea? Need a website that grows with your brand?</p>
        <p>📩 <a href="/#contact" className="underline text-yellow-300">Contact us here</a> or visit <a href="https://dev.webforges.site" target="_blank" rel="noopener noreferrer" className="underline text-yellow-300">https://dev.webforges.site</a>.</p>

        <p className="mt-8 font-semibold">Sulaiman & Abuthahir,<br/>   Webforges Dev</p>
      </div>
    </div>
  )
}

export default Blog;

