const STORAGE_KEY = 'webforges_articles';

function readArticles() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeArticles(articles) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

export function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function getAllArticles() {
  return readArticles().sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug) {
  return readArticles().find((article) => article.slug === slug);
}

export function createArticle(input) {
  const all = readArticles();
  const baseSlug = slugify(input.slug?.trim() || input.title);
  let slug = baseSlug;
  let index = 2;

  while (all.some((article) => article.slug === slug)) {
    slug = `${baseSlug}-${index++}`;
  }

  const article = {
    slug,
    title: input.title,
    metaTitle: input.metaTitle?.trim() || input.title,
    metaDescription: input.metaDescription?.trim() || input.excerpt,
    excerpt: input.excerpt,
    body: input.body,
    faqs: input.faqs || [],
    category: input.category,
    coverEmoji: input.coverEmoji,
    author: input.author,
    publishedAt: new Date().toISOString(),
  };

  all.unshift(article);
  writeArticles(all);
  return article;
}

export function deleteArticle(slug) {
  const all = readArticles();
  const next = all.filter((article) => article.slug !== slug);
  const changed = next.length !== all.length;

  if (changed) {
    writeArticles(next);
  }

  return changed;
}
