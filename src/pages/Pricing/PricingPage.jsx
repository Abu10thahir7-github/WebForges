import { CheckIcon } from '@heroicons/react/20/solid';
import { Helmet } from 'react-helmet-async';

import { fadeIn } from '../../data/variants';
import Hero from './Sections/Hero';
import Pricing from './Sections/price';
import Faq from '../../Componets/UI/FAQ';
import { Pricingfaqs, whyWebForgesData } from '../../data/datas';
import CustomQuote from './Sections/CustomQuote';
import ApproachSection from '../../Componets/UI/ApproachSection';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PricingPage() {
  const points = [
    {
      title: 'Discovery',
      desc: 'We learn your business, goals, and audience.',

      bg: 'bg-white',
    },
    {
      title: 'Strategy',
      desc: 'We map out the structure and user journey.',

      bg: 'bg-white',
    },
    {
      title: 'Design & Build',
      desc: 'We design and develop the full experience.',

      bg: 'bg-white',
    },
    {
      title: 'Launch & Support',
      desc: 'We ship it and stay on for ongoing support.',

      bg: 'bg-white',
    },
  ];

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
      <Hero />

      <Pricing />
      <CustomQuote />
      <ApproachSection  {...whyWebForgesData} />
    
      <Faq faqs={Pricingfaqs} />
    </div>
  );
}
