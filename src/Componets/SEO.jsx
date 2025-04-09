// components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  url,
  image,
  author = 'Abu Thahir , Sulaiman',
  siteName = 'WebForges',
  language = 'en',
  themeColor = '#ffffff',
  publishedTime, // for bl
  // og/articles (optional)
}) => {
  console.log(title);
  console.log(description);
  console.log(keywords);
  console.log(url);
  console.log(image);
  console.log(author);
  console.log(siteName);
  console.log(language);
  console.log(themeColor);
  console.log(publishedTime);
  return (
    <Helmet>
      {/* HTML language */}
      <html lang={language} />

      {/* Title & Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />

      {/* Favicon and theme color */}
      <meta name="theme-color" content={themeColor} />
      <link rel="icon" href="/favicon.ico" />

      {/* Apple Web App */}
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Helmet>
  );
};

export default SEO;
