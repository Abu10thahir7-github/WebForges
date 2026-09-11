import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import PageHero from '../../Componets/shared/PageHero';


import CategoryFilter from './sections/CategoryFilter';

import LatestArticles from './sections/LatestArticles';
import CaseStudiesPreview from './sections/CaseStudiesPreview';
import PracticalGuides from './sections/PracticalGuides';

import Contact from '../../Componets/Animations/Contact';
import { BlogPageData } from '../../data/BlogPageData';
import Newsletter from '../../Componets/shared/Newsletter';
import FinalCTA from '../../Componets/shared/FinalCTA';
import FeaturedArticle from '../../Componets/shared/FeaturedArticle';

function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles =
    activeCategory === 'all'
      ? BlogPageData.latestArticles
      : BlogPageData.latestArticles.filter(
          article => article.category.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-') === activeCategory
        );

  return (
    <div>
      <Helmet>
        <title>{BlogPageData.page.seo.title}</title>
        <meta name="description" content={BlogPageData.page.seo.description} />
        <meta name="keywords" content={BlogPageData.page.seo.keywords.join(', ')} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebForges" />
        <link rel="canonical" href={`https://webforges.site${BlogPageData.page.slug}`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={BlogPageData.page.seo.title} />
        <meta property="og:description" content={BlogPageData.page.seo.description} />
        <meta property="og:image" content="https://webforges.site/logo.png" />
        <meta property="og:url" content={`https://webforges.site${BlogPageData.page.slug}`} />
        <meta property="og:site_name" content="WebForges" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={BlogPageData.page.seo.title} />
        <meta name="twitter:description" content={BlogPageData.page.seo.description} />
        <meta name="twitter:image" content="https://webforges.site/logo.png" />
      </Helmet>

      {/* Hero */}
      <PageHero
        eyebrow={BlogPageData.hero.eyebrow}
        headline={BlogPageData.hero.title}
        description={BlogPageData.hero.description}
        height="h-[60vh]"
        cta={{ label: BlogPageData.hero.primaryCta.label, to: BlogPageData.hero.primaryCta.href }}
      />
  <section className="w-4/5 m-auto pb-16">
       <FeaturedArticle item={BlogPageData.featuredArticle} />
      </section>
      <div className="w-4/5 m-auto">
        {/* Categories */}
        <CategoryFilter
          categories={BlogPageData.categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      {/* Featured article */}


      {/* Latest articles (6) */}
      <LatestArticles
        articles={filteredArticles}
        emptyState={BlogPageData.emptyState}
        onResetFilter={() => setActiveCategory('all')}
      />

      {/* Case studies */}
      <CaseStudiesPreview data={BlogPageData.caseStudies} />

      {/* Practical guides */}
      <PracticalGuides data={BlogPageData.guides} />

      {/* Newsletter */}
      <Newsletter data={BlogPageData.newsletter} />

      {/* Final CTA */}
      <FinalCTA data={BlogPageData.cta} />

      <Contact />
    </div>
  );
}

export default Blog;