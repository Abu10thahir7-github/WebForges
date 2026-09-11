import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import SectionHeading from '../../../Componets/shared/SectionHeading';

function ArticleCard({ article, index }) {
  return (
    <motion.div
      variants={fadeIn('up', 0.05 + index * 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Link
        to={article.slug}
        className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg"
      >
        <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-gray-400">
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <h3 className="text-lg font-bold leading-snug text-gray-900">{article.title}</h3>
          <p className="text-sm leading-relaxed text-gray-500">{article.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function LatestArticles({ articles, emptyState, onResetFilter }) {
  return (
    <section id="latest" className="w-4/5 m-auto border-t border-gray-200 py-16">
      <SectionHeading eyebrow="Latest" title="Recent articles" />

      {articles.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-gray-200 py-16 text-center">
          <h3 className="text-lg font-semibold text-gray-900">{emptyState.title}</h3>
          <p className="text-sm text-gray-500">{emptyState.description}</p>
          <button
            type="button"
            onClick={onResetFilter}
            className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            {emptyState.button}
          </button>
        </div>
      )}
    </section>
  );
}