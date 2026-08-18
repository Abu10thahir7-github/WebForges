import { CheckIcon } from '@heroicons/react/20/solid';
import { Helmet } from 'react-helmet-async';

import { motion } from 'framer-motion';
import { fadeIn } from '../data/variants';
const tiers = [
  {
    name: 'Starter (Static Website)',
    id: 'basic-static-website',
    href: '#',
    priceMonthly: '₹4,999 – ₹6,999',
    description: 'Best for personal websites & small businesses',
    features: [
      '1–5 Pages + Fully Responsive',
      'Custom Modern UI Design',
      'Contact Form Integration',
      'Basic SEO Setup',
      'Social Media Links',
      'WhatsApp Chat Button',
      'Free Domain – 1 Year (Limited)',
      '1 Weeks Free Support',
    ],
    featured: false,
  },

  {
    name: 'Business (E-Commerce Website)',
    id: 'basic-ecommerce-website',
    href: '#',
    priceMonthly: '₹14,999',
    description: 'Best for startups & small online stores',
    features: [
      'Product Listing & Categories',
      'Add to Cart & Checkout',
      'User Login & Signup',
      'Payment Gateway Integration',
      'Order Management Dashboard',
      'Mobile & Tablet Responsive',
      'Basic SEO Setup',
      'WhatsApp Order Support',
      'Free Domain – 1 Year (Limited)',
      '1 Month Free Support',
    ],
    featured: true,
  },

  {
    name: 'Premium Pro (Advanced / SEO + Ads)',
    id: 'premium-website',
    href: '#',
    priceMonthly: '₹34,999',
    description: 'Best for growing brands & professional businesses',
    features: [
      'Unlimited Pages / Products',
      'Premium UI/UX Design',
      'Advanced Admin Dashboard',
      'Secure Website (SSL + Protection)',
      'Payment Gateway & Order Tracking',
      'Speed & Performance Optimization',
      '1 Month SEO Optimization',
      '1 Month Meta Ads Setup (FB & Instagram)',
      'Backup & Security Setup',
      'Mobile, Tablet & Desktop Responsive',
      'Free Domain – 1 Year (Limited)',
      'Free Hosting – 1 Year',
      '3 Months Priority Support',
    ],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const getWhatsAppLink = tier => {
    const phoneNumber = '918921966289';
    const message = encodeURIComponent(
      `Hello! I'm interested in the ${tier.name} plan (${tier.priceMonthly}). Can you provide more details?`,
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="    ">
      <Helmet>
        {/* Basic Meta */}
        <title>Affordable Website Pricing Plans - WebForges | Custom & SEO Optimized</title>
        <meta
          name="description"
          content="Choose affordable website pricing plans designed for startups, businesses, and professionals. Responsive, SEO-friendly, and fully supported by WebForges."
        />
        <meta
          name="keywords"
          content="website pricing plans, affordable website design, SEO optimized websites, responsive websites, business websites, web development pricing"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebForges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://webforges.site/pricing" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Affordable Website Pricing Plans - WebForges | Custom & SEO Optimized"
        />
        <meta
          property="og:description"
          content="Choose affordable website pricing plans designed for startups, businesses, and professionals. Responsive, SEO-friendly, and fully supported by WebForges."
        />
        <meta property="og:image" content="https://webforges.site/logo.png" />
        <meta property="og:url" content="https://webforges.site/pricing" />
        <meta property="og:site_name" content="WebForges" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Affordable Website Pricing Plans - WebForges | Custom & SEO Optimized"
        />
        <meta
          name="twitter:description"
          content="Choose affordable website pricing plans designed for startups, businesses, and professionals. Responsive, SEO-friendly, and fully supported by WebForges."
        />
        <meta name="twitter:image" content="https://webforges.site/logo.png" />
        <meta name="twitter:site" content="@WebForges" />
        <meta name="twitter:creator" content="@WebForges" />
      </Helmet>
      <div class="bg-animation absolute top-0">
        <div class="noise-bg"></div>
        <div class="blob-cont">
          <div class="darkBlue blob"></div>

          <div class="red blob"></div>
          <div class="blue blob"></div>
        </div>
      </div>
      <div className="w-4/5 m-auto h-screen flex flex-col justify-center items-center gap-10">
        <div className="hero_text">
          <motion.p
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className=" z-10 text-desgin font-medium gap-12 heading-style-h3 text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-7xl text-white text-center"
          >
            <span className="mr-0 md:mr-96">
              A<span class="text-style-italic">ff</span>ordab
              <span class="text-style-italic">l</span>e Pl<span class="text-style-italic">a</span>ns
              f<span class="text-style-italic">o</span>r
            </span>
            <span className="ml-0 md:ml-56">
              Ev<span class="text-style-italic">e</span>ry St
              <span class="text-style-italic">a</span>ge of
            </span>
            <span className="ml-0 md:ml-44">
              Y<span class="text-style-italic">o</span>ur Bus
              <span class="text-style-italic">i</span>ness
            </span>
          </motion.p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl mt-10 md:mt-36 text-center">
        <h2 className="text-2xl md:text-5xl font-semibold text-indigo-600 spa">Pricing</h2>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-balance text-white md:text-4xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-3xl text-center text-lg  font-medium text-pretty text-yellow-500 md:text-2xl manjari-regular">
        നിങ്ങളുടെ പ്രേക്ഷകരെ ആകർഷിക്കുന്നതിനും ഉപഭോക്തൃ വിശ്വസ്തത സൃഷ്ടിക്കുന്നതിനും വിൽപ്പന
        വർദ്ധിപ്പിക്കുന്നതിനും ഏറ്റവും മികച്ച സവിശേഷതകൾ നിറഞ്ഞ ഒരു താങ്ങാനാവുന്ന പ്ലാൻ
        തിരഞ്ഞെടുക്കുക.{' '}
      </p>
      <div className="mx-auto mt-16 grid max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {tiers.map(tier => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'bg-gray-900 shadow-2xl' : 'bg-white',
              'rounded-3xl p-8 ring-2 mx-4 md:mx-0 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-yellow-500' : 'text-indigo-600',
                'text-base/7 font-semibold',
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-3xl md:text-4xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-6 text-base/7',
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6',
              )}
            >
              {tier.features.map(feature => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? 'text-indigo-400' : 'text-indigo-600',
                      'h-6 w-5 flex-none',
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={getWhatsAppLink(tier)}
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-yellow-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2',
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
