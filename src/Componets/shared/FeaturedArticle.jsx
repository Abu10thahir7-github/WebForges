import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../data/variants';

// Wrap Link so Framer Motion can animate it — motion.Link doesn't exist,
// only motion(Component) creates an animatable custom component.
const MotionLink = motion(Link);

/**
 * Reusable featured-content card — large image + eyebrow + heading + intro + link.
 * Takes a single `item` object so it can be reused for any article/project/service.
 *
 * item: {
 *   eyebrow?: string,
 *   category?: string,
 *   title: string,
 *   excerpt: string,
 *   image: string,
 *   slug: string,        // route path — matches the JSON's field name
 *   readTime?: string,
 *   ctaLabel?: string,
 * }
 */
export default function FeaturedArticle({ item }) {
  if (!item) return null;

  const {
    eyebrow = 'Featured',
    category,
    title,
    excerpt,
    image,
    slug,
    readTime,
    ctaLabel = 'Read article',
  } = item;

  return (
    <MotionLink
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      to={slug}
      className="group block"
    >
      <div className="grid grid-cols-1 items-center  border border-gray-200 bg-white p-2 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-6 lg:grid-cols-2 lg:gap-0 lg:p-0">
        <div className="overflow-hidden rounded-2xl lg:rounded-none lg:first:rounded-l-3xl lg:last:rounded-r-3xl">
          <div className="aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[380px]">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 p-3 sm:p-10 lg:p-14">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#f6bc17] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-black">
              {eyebrow}
            </span>
            {category && (
              <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                {category}
              </span>
            )}
            {readTime && (
              <>
                <span className="text-xs text-gray-400">·</span>
                <span className="text-xs text-gray-400">{readTime}</span>
              </>
            )}
          </div>

          <h2 className="text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl  ">
            {title}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-gray-500">{excerpt}</p>

          <span className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-gray-900">
            {ctaLabel}
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
        </div>
      </div>
    </MotionLink>
  );
}