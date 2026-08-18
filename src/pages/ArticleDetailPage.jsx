import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug } from '../data/articles';

function renderMarkdown(markdown) {
  const lines = (markdown || '').split('\n');
  const html = [];
  let listItems = [];

  const flushList = () => {
    if (listItems.length) {
      html.push(
        `<ul class="mt-4 list-disc space-y-2 pl-6 text-slate-300">${listItems.map(item => `<li>${item}</li>`).join('')}</ul>`,
      );
      listItems = [];
    }
  };

  lines.forEach(line => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    if (/^##\s+/.test(trimmed)) {
      flushList();
      html.push(
        `<h2 class="mt-8 text-2xl font-semibold text-white">${trimmed.replace(/^##\s+/, '')}</h2>`,
      );
      return;
    }

    if (/^###\s+/.test(trimmed)) {
      flushList();
      html.push(
        `<h3 class="mt-6 text-xl font-semibold text-slate-100">${trimmed.replace(/^###\s+/, '')}</h3>`,
      );
      return;
    }

    if (/^-\s+/.test(trimmed)) {
      listItems.push(trimmed.replace(/^-\s+/, ''));
      return;
    }

    flushList();
    html.push(`<p class="mt-4 leading-8 text-slate-300">${trimmed}</p>`);
  });

  flushList();
  return html.join('');
}

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    setArticle(getArticleBySlug(slug));
  }, [slug]);

  if (!article) {
    return (
      <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)] px-4 py-16 sm:px-6 lg:px-8">
        <Helmet>
          <title>Article not found | WebForges</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur">
          <h1 className="font-display text-3xl font-bold text-white">Article not found</h1>
          <p className="mt-3 text-slate-300">The article you are looking for does not exist yet.</p>
          <Link to="/articles" className="mt-6 inline-flex text-sm font-semibold text-orange-400">
            Back to articles →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <Helmet>
        <title>{article.metaTitle || article.title} | WebForges</title>
        <meta name="description" content={article.metaDescription || article.excerpt} />
      </Helmet>
      <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8 lg:p-10">
        <Link to="/articles" className="text-sm font-semibold text-orange-400">
          ← Back to articles
        </Link>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
          {article.category}
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          {article.coverEmoji} {article.title}
        </h1>
        <p className="mt-4 text-sm text-slate-400">
          By {article.author} · {new Date(article.publishedAt).toLocaleDateString('en-IN')}
        </p>
        <div
          className="mt-8 max-w-none text-base leading-8 text-slate-300"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(article.body) }}
        />
      </div>
    </article>
  );
}
