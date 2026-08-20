// src/components/seo/structuredData.js
import { siteConfig } from '../../lib/seo.config';

/**
 * Organization schema — use once, typically in a root layout or Home page.
 */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: siteConfig.logo,
    sameAs: siteConfig.socials,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'ml'],
      },
    ],
  };
}

/**
 * LocalBusiness schema — pairs with Organization on Home/Contact pages
 * to strengthen local (Kerala) search relevance.
 */
export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    image: siteConfig.logo,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    sameAs: siteConfig.socials,
  };
}

/**
 * WebSite schema — include once on Home page. Enables sitelinks searchbox
 * eligibility if a search action is added later.
 */
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
  };
}

/**
 * Service schema — for individual service pages (e.g. ServiceDetails.jsx).
 * @param {Object} params
 * @param {string} params.name
 * @param {string} params.description
 * @param {string} params.url - absolute URL of the service page
 * @param {string} [params.serviceType] - e.g. "Web Development"
 */
export function buildServiceSchema({ name, description, url, serviceType }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    serviceType: serviceType || name,
    provider: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
    areaServed: {
      '@type': 'State',
      name: 'Kerala',
    },
  };
}

/**
 * BreadcrumbList schema — for any nested page (services/:slug, articles/:slug, etc).
 * @param {Array<{name: string, url: string}>} items - ordered from Home to current page
 */
export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * BlogPosting schema — for ArticleDetailPage.jsx / blog posts.
 * @param {Object} params
 * @param {string} params.title
 * @param {string} params.description
 * @param {string} params.url - absolute URL of the article
 * @param {string} params.datePublished - ISO 8601 string
 * @param {string} [params.dateModified] - ISO 8601 string, defaults to datePublished
 * @param {string} [params.authorName] - defaults to site name
 * @param {string} [params.image]
 */
export function buildBlogPostingSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  image,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    image: image || siteConfig.logo,
    author: {
      '@type': 'Person',
      name: authorName || siteConfig.siteName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * FAQPage schema — for any FAQ accordion section.
 * @param {Array<{question: string, answer: string}>} faqs
 */
export function buildFAQPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}