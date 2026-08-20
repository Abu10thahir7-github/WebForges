import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { fadeIn } from '../../data/variants';
import Contact from '../Home/Sections/Contact';
import Servicetabcontent from './sections/Servicetabcontent';
import AllServiceTabContent from '../../Componets/Animations/AllServiceTabContent';
import ServicesHero from './sections/Hero';
import WhatWeDo from './sections/WhatWeDo';
import ServiceSections from './sections/ServiceSection';
import HowWeWork from './sections/HowWeWork';
import WhatYouGet from './sections/WhatYouGet';
import Technology from './sections/Technology';
import DiscoverTextAnimation from '../../Componets/Animations/DiscoverTextAnimation';
import AllServicesSection from './sections/AllSerivces';

const faqs = [
  {
    q: 'How long does a typical website take to build?',
    a: 'Most business sites take 2–4 weeks from kickoff to launch, depending on the number of pages and whether content and images are ready when we start. E-commerce and portal builds usually run 4–8 weeks.',
  },
  {
    q: 'Do you handle SEO after the site is live, or is that separate?',
    a: 'Basic on-page SEO is included in every build — structured data, meta tags, sitemap, semantic headings. Ongoing SEO re-optimization and AI search setup are separate, ongoing engagements since they require ongoing work, not a one-time fix.',
  },
  {
    q: "Can you fix bugs on a site you didn't build?",
    a: "Yes, under a support agreement. We'll need to review the codebase first to scope the work, since fix time depends heavily on how the existing site was built.",
  },
  {
    q: 'What does a no-login reseller catalog actually mean?',
    a: "A product catalog site where visitors browse and inquire, but there's no account creation and no online payment — common for wholesalers and resellers who close deals over calls or WhatsApp rather than checkout flows.",
  },
  {
    q: 'Do you offer payment plans, or is it full payment upfront?',
    a: "This varies by project scope — get in touch with the details of what you need and we'll walk through what makes sense.",
  },
];

 

function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ---- Core SEO: structured data ----
  // TODO: swap these for your existing builders in structuredData.js
  // (buildBreadcrumbList / buildService / buildFAQPage) once you confirm
  // their exact param shape — the JSON output below matches schema.org's
  // spec either way, so this is safe to ship as-is in the meantime.
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webforges.site/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://webforges.site/services',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web design, e-commerce, SEO, and digital marketing',
    provider: {
      '@type': 'Organization',
      name: 'WebForges',
      url: 'https://webforges.site',
      areaServed: 'Kerala, India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'WebForges Services',
      itemListElement: [
        'Web Design',
        'E-Commerce',
        'Digital Products',
        'Marketing & Visibility',
        'Support & Maintenance',
      ].map(name => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Web Design, SEO & Digital Marketing Services - WebForges Kerala</title>
        <meta
          name="description"
          content="Website design, e-commerce, SEO re-optimization, Google & Meta Ads, AI search setup, and ongoing support — WebForges builds and runs your digital presence, based in Kerala."
        />
        <meta
          name="keywords"
          content="web design Kerala, ecommerce development, SEO re-optimization, google ads management, meta ads management, AI search optimization, landing page design, digital products, website redesign, website maintenance, reseller catalog website, contract bug fixing"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebForges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://webforges.site/services" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Design, SEO & Digital Marketing Services - WebForges"
        />
        <meta
          property="og:description"
          content="Website design, e-commerce, SEO, Google & Meta Ads, AI search setup, and ongoing support from a Kerala-based team."
        />
        <meta property="og:image" content="https://webforges.site/logo.png" />
        <meta property="og:url" content="https://webforges.site/services" />
        <meta property="og:site_name" content="WebForges" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Design, SEO & Digital Marketing Services - WebForges"
        />
        <meta
          name="twitter:description"
          content="Website design, e-commerce, SEO, and ongoing support from a Kerala-based team."
        />
        <meta name="twitter:image" content="https://webforges.site/logo.png" />
        <meta name="twitter:site" content="@WebForges" />
        <meta name="twitter:creator" content="@WebForges" />

        {/* structured data — this is what earns breadcrumb trails and FAQ
            accordions directly in Google's search results, not just a
            plain blue link */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <ServicesHero />
      <WhatWeDo />
      <ServiceSections />
      <HowWeWork />
      <Technology />
      <AllServicesSection />
      <WhatYouGet />
      <Contact />
    </div>
  );
}

export default ServicesPage;
