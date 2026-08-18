import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../data/articles';

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(getAllArticles());
  }, []);

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <Helmet>
        <title>Articles | WebForges</title>
        <meta name="description" content="Read the latest articles published by WebForges." />
      </Helmet>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
            Technical insights
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Practical articles for modern teams and digital products.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            New technical stories and product updates appear here as soon as they are published from
            the hidden admin workspace.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {articles.map(article => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              className="rounded-[28px] border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-orange-400/60 hover:shadow-orange-500/10"
            >
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>{article.category}</span>
                <span>{new Date(article.publishedAt).toLocaleDateString('en-IN')}</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-2xl">
                <span>{article.coverEmoji}</span>
                <h2 className="font-display text-xl font-semibold text-white">{article.title}</h2>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {article.excerpt || 'Read the full article to explore the details.'}
              </p>
              <div className="mt-5 text-sm font-semibold text-orange-400">Read article →</div>
            </Link>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="mt-10 rounded-[28px] border border-dashed border-slate-700 bg-slate-900/70 p-8 text-center text-sm text-slate-400">
            No articles are published yet. Visit the hidden admin workspace to create the first one.
          </div>
        )}
      </div>
    </section>
  );
}
