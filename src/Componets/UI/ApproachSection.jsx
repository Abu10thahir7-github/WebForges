import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel'; // adjust path to wherever this actually lives

/**
 * Reusable "eyebrow + heading + icon/number card grid" section.
 *
 * points: Array<{
 *   title: string,
 *   desc: string,
 *   icon?: ReactNode,      // pass an icon element, OR
 *   number?: string,       // pass a number string like '01' — one or the other
 *   bg?: string,           // tailwind bg class per card, e.g. 'bg-white'
 * }>
 */
export default function ApproachSection({
  eyebrow = 'Our Approach',
  headingLines = [],       // array of strings/JSX fragments, rendered with <br /> between
  points = [],
  background = 'bg-[#F6F5F3]',
  columns = 4,             // 2, 3, or 4 — controls lg:grid-cols-*
}) {
  const colClass =
    columns === 2 ? 'lg:grid-cols-2' : columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4';

  return (
    <section className={`${background} px-4 py-4 sm:py-10`}>
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <SectionLabel text={eyebrow} />

        {/* Heading */}
        <h2 className="mt-2  text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
          {headingLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < headingLines.length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Cards */}
        <div className={`mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 ${colClass}`}>
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`rounded-3xl p-4 shadow-sm ${point.bg || 'bg-white'}`}
            >
              <div className="flex items-center gap-2">
                {point.icon && (
                  <div className="flex h-9 w-9 items-center justify-center text-gray-900">
                    {point.icon}
                  </div>
                )}
                {point.number && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-gray-900 text-sm font-bold text-gray-900">
                    {point.number}
                  </div>
                )}
                <h3 className="text-base font-semibold text-gray-900">{point.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}