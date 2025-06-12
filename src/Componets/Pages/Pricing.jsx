import { CheckIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    priceMonthly: '₹9,999',
    description: 'Perfect for individuals or startups just getting online.',
    features: [
      '1–3 Page Static Website',
      'Mobile Responsive Design',
      'Custom Design (Figma-based)',
      'Contact Form Integration',
      'Basic SEO Setup',
      '3 Days Delivery',
      '1 Month Support',
    ],
    featured: false,
  },
  {
    name: 'Business',
    id: 'tier-business',
    href: '#',
    priceMonthly: '₹24,999',
    description: 'For small businesses looking to establish an online presence.',
    features: [
      '5–8 Page Website (Dynamic)',
      'Admin Dashboard (CMS)',
      'SEO Optimized',
      'Contact & Quote Forms',
      'Blog/News Integration',
      'Responsive on All Devices',
      'WhatsApp Integration',
      '5 Days Delivery',
      '3 Months Support',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '#',
    priceMonthly: '₹49,999+',
    description: 'Tailored for growing brands & eCommerce businesses.',
    features: [
      'Unlimited Pages',
      'Full eCommerce Setup (Cart, Checkout, Payments)',
      'Admin Dashboard',
      'Advanced Animations / Interactions',
      'Hosting & Domain Support',
      'Speed & SEO Optimization',
      'WhatsApp / Chatbot Integration',
      'Payment Gateway Integration',
      '7–10 Days Delivery',
      '6 Months Support',
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
            <span className='mr-0 md:mr-96'>
              A<span class="text-style-italic">ff</span>ordab
              <span class="text-style-italic">l</span>e Pl<span class="text-style-italic">a</span>ns
              f<span class="text-style-italic">o</span>r
            </span>
            <span className='ml-0 md:ml-56'>

            Ev<span class="text-style-italic">e</span>ry St<span class="text-style-italic">a</span>ge of
            </span>
            <span className='ml-0 md:ml-44'>Y<span class="text-style-italic">o</span>ur Bus<span class="text-style-italic">i</span>ness</span>
          </motion.p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl mt-36 text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600 spa">Pricing</h2>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-medium text-pretty text-gray-600 sm:text-xl/8">
        Choose an affordable plan that’s packed with the best features for engaging your audience,
        creating customer loyalty, and driving sales.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-[75rem] lg:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white sm:mx-8 lg:mx-0',

              // Apply unique rounded corners for 3-card layout
              tierIdx === 0
                ? 'rounded-t-3xl rounded-tr-none sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl' // First card
                : tierIdx === 1
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl' // Second card
                : 'rounded-b-3xl    ', // Last card

              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-yellow-500 ' : 'text-indigo-600',
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
              <span
                className={classNames(
                  tier.featured ? 'text-gray-400' : 'text-gray-500',
                  'text-base',
                )}
              >
                {' '}
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
                'mt-8 space-y-3 text-sm/6 sm:mt-10    ',
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
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
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
