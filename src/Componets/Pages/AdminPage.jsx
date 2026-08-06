import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { createArticle, deleteArticle, getAllArticles } from '../../lib/articles';

const CATEGORIES = ['Product Updates', 'Technical Guides', 'Case Studies', 'Launches', 'Comparisons'];
const BODY_PLACEHOLDER = `Write the article in Markdown.

## A Section Heading (H2)
Regular paragraph text goes here.

### A Sub-heading (H3)
- Bullet point one
- Bullet point two

| Feature | WebForges | Status |
|---|---|---|
| Delivery | Fast | Live |

Use blank lines between paragraphs.`;

function autoFormatMarkdown(raw) {
  if (!raw.trim()) return raw;

  let text = raw.replace(/([a-z0-9%)])([A-Z][a-z])/g, '$1 $2');
  text = text.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n');

  const lines = text.split('\n').map((line) => line.trim());
  const output = [];

  const isHeadingCandidate = (line, next) => {
    if (!line || line.startsWith('#') || line.startsWith('|') || line.startsWith('-')) return null;
    if (line.length > 80) return null;
    const numbered = /^\d{1,2}[.)]\s+\S/.test(line);
    const titleCaseish = /^[A-Z0-9]/.test(line) && !/[.!?,;:]$/.test(line);
    const followedByProse = next && next.length > 40;

    if (numbered) return 'h2';
    if (titleCaseish && followedByProse && line.split(' ').length <= 12) return 'h3';
    return null;
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const next = lines[index + 1];

    if (line === '') {
      if (output[output.length - 1] !== '') output.push('');
      continue;
    }

    const heading = isHeadingCandidate(line, next);
    if (heading) {
      if (output.length && output[output.length - 1] !== '') output.push('');
      output.push(heading === 'h2' ? `## ${line.replace(/^\d{1,2}[.)]\s+/, '')}` : `### ${line}`);
      output.push('');
      continue;
    }

    output.push(line);
  }

  return output.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

function emptyForm() {
  return {
    title: '',
    metaTitle: '',
    metaDescription: '',
    slug: '',
    excerpt: '',
    body: '',
    category: CATEGORIES[0],
    coverEmoji: '📱',
    author: 'Muhammed Sulaiman T (WebDeveloper)',
  };
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('po_admin_ui') === '1');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [articles, setArticles] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [faqs, setFaqs] = useState([]);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function refreshArticles() {
    setArticles(getAllArticles());
  }

  useEffect(() => {
    refreshArticles();
  }, []);

  function handleLogin(event) {
    event.preventDefault();
    setLoginError('');

    if (password === 'web2005') {
      sessionStorage.setItem('po_admin_ui', '1');
      setAuthed(true);
      return;
    }

    setLoginError('Incorrect password. Try again.');
  }

  function handleLogout() {
    sessionStorage.removeItem('po_admin_ui');
    setAuthed(false);
    setPassword('');
  }

  function addFaq() {
    setFaqs([...faqs, { question: '', answer: '' }]);
  }

  function updateFaq(index, field, value) {
    setFaqs(faqs.map((faq, faqIndex) => (faqIndex === index ? { ...faq, [field]: value } : faq)));
  }

  function removeFaq(index) {
    setFaqs(faqs.filter((_, faqIndex) => faqIndex !== index));
  }

  function handlePublish(event) {
    event.preventDefault();
    setStatus('saving');
    setErrorMsg('');

    try {
      createArticle({ ...form, faqs });
      setStatus('saved');
      setForm(emptyForm());
      setFaqs([]);
      refreshArticles();
      setTimeout(() => setStatus('idle'), 2000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unable to publish article.');
    }
  }

  function handleDelete(slug) {
    if (!window.confirm('Delete this article? This cannot be undone.')) return;
    deleteArticle(slug);
    refreshArticles();
  }

  const titleLen = (form.metaTitle || form.title).length;
  const descLen = form.metaDescription.length;

  if (!authed) {
    return (
      <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.22),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)] px-4 py-8 sm:px-6 lg:px-8">
        <Helmet>
          <title>Admin sign-in | WebForges</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/30 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">WebForges studio</p>
          <h1 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">Admin sign-in</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            This hidden writer workspace is for publishing technical and product-focused articles.
          </p>
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              type="password"
              required
              placeholder="Admin password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
            />
            {loginError && <p className="text-sm text-red-400">{loginError}</p>}
            <button
              type="submit"
              className="w-full rounded-2xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Sign in
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <Helmet>
        <title>Write articles | WebForges</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">WebForges writer hub</p>
            <h1 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">Publish technical articles</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Create SEO-ready posts for the public articles section with a cleaner, faster publishing experience.
            </p>
          </div>
          <button onClick={handleLogout} className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-orange-400 hover:text-orange-300">
            Sign out
          </button>
        </div>

        <form onSubmit={handlePublish} className="mt-8 space-y-5">
          <fieldset className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6">
            <legend className="px-1 text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
              Title &amp; classification
            </legend>
            <div className="grid gap-4 md:grid-cols-[1fr_auto_auto]">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Title (H1)</label>
                <input
                  required
                  value={form.title}
                  onChange={(event) => setForm({ ...form, title: event.target.value })}
                  placeholder="e.g. Why teams choose WebForges"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-3 text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Category</label>
                <select
                  value={form.category}
                  onChange={(event) => setForm({ ...form, category: event.target.value })}
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-3 text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                >
                  {CATEGORIES.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Emoji</label>
                <input
                  value={form.coverEmoji}
                  onChange={(event) => setForm({ ...form, coverEmoji: event.target.value })}
                  maxLength={2}
                  className="mt-2 w-16 rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-3 text-center text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6">
            <legend className="px-1 text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
              SEO metadata
            </legend>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Meta title</label>
                  <span className={`text-xs ${titleLen > 60 ? 'text-red-400' : 'text-slate-400'}`}>
                    {titleLen}/60
                  </span>
                </div>
                <input
                  value={form.metaTitle}
                  onChange={(event) => setForm({ ...form, metaTitle: event.target.value })}
                  placeholder="Falls back to the title"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-3 text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Meta description</label>
                  <span className={`text-xs ${descLen > 160 ? 'text-red-400' : 'text-slate-400'}`}>
                    {descLen}/160
                  </span>
                </div>
                <textarea
                  value={form.metaDescription}
                  onChange={(event) => setForm({ ...form, metaDescription: event.target.value })}
                  rows={2}
                  placeholder="140–160 characters with a strong keyword"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-3 text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">URL slug</label>
                <div className="mt-2 flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-3 text-sm text-slate-300 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-500/20">
                  <span className="text-slate-500">/articles/</span>
                  <input
                    value={form.slug}
                    onChange={(event) => setForm({ ...form, slug: event.target.value })}
                    placeholder="auto-generated-from-title"
                    className="flex-1 bg-transparent outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Excerpt</label>
                <input
                  value={form.excerpt}
                  onChange={(event) => setForm({ ...form, excerpt: event.target.value })}
                  placeholder="One-line summary shown on the cards"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-3 text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <legend className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                Article body (Markdown)
              </legend>
              <button
                type="button"
                onClick={() => setForm({ ...form, body: autoFormatMarkdown(form.body) })}
                disabled={!form.body.trim()}
                className="rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300 disabled:opacity-40"
              >
                ✨ Auto-format
              </button>
            </div>
            <textarea
              required
              value={form.body}
              onChange={(event) => setForm({ ...form, body: event.target.value })}
              rows={16}
              placeholder={BODY_PLACEHOLDER}
              className="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-3 font-mono text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
            />
          </fieldset>

          <fieldset className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6">
            <legend className="px-1 text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
              FAQs (optional)
            </legend>
            <div className="mt-4 space-y-3">
              {faqs.map((faq, index) => (
                <div key={`${faq.question}-${index}`} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <input
                      value={faq.question}
                      onChange={(event) => updateFaq(index, 'question', event.target.value)}
                      placeholder="Question"
                      className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                    />
                    <button type="button" onClick={() => removeFaq(index)} className="shrink-0 text-xs font-semibold text-red-400 hover:underline">
                      Remove
                    </button>
                  </div>
                  <textarea
                    value={faq.answer}
                    onChange={(event) => updateFaq(index, 'answer', event.target.value)}
                    placeholder="Answer"
                    rows={2}
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
              ))}
            </div>
            <button type="button" onClick={addFaq} className="mt-4 rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300">
              + Add FAQ
            </button>
          </fieldset>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="submit" disabled={status === 'saving'} className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 disabled:opacity-60">
              {status === 'saving' ? 'Publishing…' : 'Publish article'}
            </button>
            {status === 'saved' && <span className="text-sm text-emerald-400">Published successfully.</span>}
            {status === 'error' && <span className="text-sm text-red-400">{errorMsg || 'Something went wrong.'}</span>}
          </div>
        </form>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
            Published articles ({articles.length})
          </h2>
          <div className="mt-4 space-y-3">
            {articles.map((article) => (
              <div key={article.slug} className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    {article.coverEmoji} {article.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {article.category} · {new Date(article.publishedAt).toLocaleDateString('en-IN')} · /{article.slug}
                  </p>
                </div>
                <button onClick={() => handleDelete(article.slug)} className="shrink-0 text-xs font-semibold text-red-400 hover:underline">
                  Delete
                </button>
              </div>
            ))}
            {articles.length === 0 && <p className="rounded-2xl border border-dashed border-slate-700 px-5 py-6 text-center text-sm text-slate-400">No articles yet — publish your first one above.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
