// Example usage inside SEO.jsx or directly in a page component
import { Helmet } from 'react-helmet-async';

function SEO({ title, description, canonical, jsonLd }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {jsonLd && (
        Array.isArray(jsonLd)
          ? jsonLd.map((schema, i) => (
              <script key={i} type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            ))
          : (
              <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
              </script>
            )
      )}
    </Helmet>
  );
}

export default SEO;