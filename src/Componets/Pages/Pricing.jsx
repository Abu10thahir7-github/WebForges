import { CheckIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
const tiers = [
  {
    name: 'Landing Page',
    id: 'tier-landing',
    href: '#',
    priceMonthly: '₹1,999',
    description: 'Perfect for individuals or startups just getting online.',
    features: [
      '1 Page + Responsive',
      'Custom Design',
      'Contact Form Integration',
      'Basic SEO Setup',
      'Social Media Links',
      '2 Week Support',
    ],
    featured: false,
  },
  {
    name: 'Static Website',
    id: 'tier-static',
    href: '#',
    priceMonthly: '₹4,999',
    description: 'For small businesses looking to establish an online presence.',
    features: [
      '5–8 Page Website (Dynamic)',
      'Basic SEO',
      'Contact & Quote Forms',
      'Hosting & Domain Support',
      'Responsive on All Devices',
      'WhatsApp Integration',
      '3 Months Support',
    ],
    featured: false,
  },
  {
    name: 'Startup Website',
    id: 'tier-startup',
    href: '#',
    priceMonthly: '₹7,499+',
    description: 'Tailored for growing brands & eCommerce businesses.',
    features: [
      'Unlimited Pages',
      'Animations',
      'Hosting & Domain Support',
      'Speed & SEO Optimization',
      'WhatsApp Integration',
      '6 Months Support',
    ],
    featured: false,
  },
  {
    name: 'Business Website',
    id: 'tier-business',
    href: '#',
    priceMonthly: '₹9,999+',
    description: 'For businesses needing advanced features and integrations.',
    features: [
      '10+ Pages',
      'Advanced Contact Forms',
      'Service & Product Pages',
      'WhatsApp & Chat Support',
      'Analytics Integration',
      '6 Months Support',
    ],
    featured: false,
  },
  {
    name: 'Professional Website',
    id: 'tier-professional',
    href: '#',
    priceMonthly: '₹14,999+',
    description: 'Best for agencies and professionals needing branding + performance.',
    features: [
      'Custom UI/UX Design',
      'CMS Integration (e.g., WordPress)',
      'Blog, Portfolio, Testimonials',
      'Performance Optimization',
      'Premium SEO Tools',
      '1 Year Support',
    ],
    featured: false,
  },
  {
    name: 'SEO Website',
    id: 'tier-seo',
    href: '#',
    priceMonthly: '₹12,499+',
    description: 'Focuses on visibility, search rankings, and organic growth.',
    features: [
      'SEO-Focused Design',
      'Content Optimization',
      'Keyword Setup',
      'Google Analytics + Search Console',
      'Blog Integration',
      'Ongoing SEO Recommendations',
    ],
    featured: false,
  },
  {
    name: 'Marketing Website',
    id: 'tier-marketing',
    href: '#',
    priceMonthly: '₹11,999+',
    description: 'Built for campaigns, promotions, and conversion-focused strategies.',
    features: [
      'Landing Pages for Campaigns',
      'Lead Capture Forms',
      'Analytics & Conversion Tracking',
      'SEO & Speed Optimized',
      'Email Integration (e.g., Mailchimp)',
      '3–6 Months Support',
    ],
    featured: false,
  },
  {
    name: 'Multiple Location Website',
    id: 'tier-multi-location',
    href: '#',
    priceMonthly: '₹17,499+',
    description: 'Perfect for franchises and multi-branch businesses.',
    features: [
      'Location-wise Pages',
      'Map Integration',
      'Separate SEO for Locations',
      'Branch-wise Contact Forms',
      'Fast Navigation & Filtering',
      '1 Year Support',
    ],
    featured: false,
  },
  {
    name: 'Advanced Website (Unlimited Pages)',
    id: 'tier-advanced',
    href: '#',
    priceMonthly: '₹22,999+',
    description: 'Complete business solution with unlimited scalability.',
    features: [
      'Unlimited Pages',
      'High-End Animations',
      'API & CMS Integrations',
      'SEO + Performance Optimization',
      'Custom Admin Panel',
      'Lifetime Support (Optional)',
    ],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  return (
    <div className="    ">
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
      <div className="mx-auto max-w-4xl mt-36 text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600 spa">Pricing</h2>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-3xl text-center text-sm font-medium text-pretty text-yellow-500 sm:text-2xl manjari-regular">
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
              'rounded-3xl p-8 ring-2 ring-gray-900/10 sm:p-10',
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
                  'text-5xl font-semibold tracking-tight',
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
              href={tier.href}
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
