import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import { featuredArticles } from '../../../data/datas';
export default function FeaturedArticle() {
  return (
    <Link to={featuredArticles.link} className="group block">
      <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-6 lg:grid-cols-2 lg:gap-0 lg:p-0">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl lg:rounded-none lg:first:rounded-l-3xl lg:last:rounded-r-3xl"
        >
          <div className="aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <img
              src={featuredArticles.image}
              alt={featuredArticles.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-4 p-6 sm:p-10 lg:p-14"
        >
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#f6bc17] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-black">
              {featuredArticles.eyebrow}
            </span>
            {featuredArticles.category && (
              <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                {featuredArticles.category}
              </span>
            )}
          </div>

          <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
            {featuredArticles.title}
          </h2>

          <p className="text-base leading-relaxed text-gray-500">{featuredArticles.excerpt}</p>

          <span className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-gray-900">
            Read more
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M2.857 10.893h10.866l-4.991 4.992 1.268 1.259 7.143-7.143-7.143-7.143-1.259 1.259 4.982 4.991H2.857v1.785Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </motion.div>
      </div>
    </Link>
  );
}
