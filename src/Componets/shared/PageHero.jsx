import SectionLabel from '../UI/SectionLabel';
import Button from '../UI/Button';

/**
 * Reusable page hero: eyebrow + large headline + description + pinned CTA,
 * with a conic-gradient blob and subtle noise texture in the background.
 *
 * @param {string} eyebrow - Text for the SectionLabel (e.g. "Pricing")
 * @param {string|ReactNode} headline - Main heading; use <br/> inside a string
 *   via array of lines, or pass JSX directly for full control
 * @param {string} description - Supporting paragraph under the headline
 * @param {{ label: string, to: string }} [cta] - Optional pinned CTA button
 * @param {string} [height] - Tailwind height class, default 'h-[50vh]'
 * @param {string} [blobPosition] - Tailwind classes for blob placement,
 *   default matches original ('-right-40 -top-80 sm:-right-20')
 */
export default function PageHero({
  eyebrow,
  headline,
  description,
  cta,
  height = 'h-[50vh]',
  blobPosition = '-right-40 -top-80 sm:-right-20',
}) {
  const headlineLines = Array.isArray(headline) ? headline : [headline];

  return (
    <header className={`relative overflow-hidden ${height} bg-white`}>
      {/* Conic gradient blob */}
      <div
        className={`pointer-events-none absolute ${blobPosition} h-[560px] w-[560px] rounded-full opacity-90 blur-2xl sm:h-[640px] sm:w-[640px]`}
        style={{
          background: 'conic-gradient(from 210deg at 50% 50%, #f6bc17, #0a0a0a, #ffffff, #f6bc17)',
        }}
      />

      {/* Noise texture */}
      <div className="noise absolute inset-0 z-0 opacity-[0.08]" aria-hidden="true" />

      <div className="relative z-10 !mt-24 px-5 sm:px-10">
        {/* Eyebrow */}
        <SectionLabel text={eyebrow} />

        {/* Headline + CTA row */}
        <div className="mt-3 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <h1 className="leading-[0.95] text-gray-900">
              <span className="block text-6xl font-extrabold uppercase tracking-tight sm:text-7xl md:text-8xl">
                {headlineLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < headlineLines.length - 1 && <br />}
                  </span>
                ))}
              </span>
            </h1>

            {description && (
              <p className="text-base leading-relaxed text-gray-500">{description}</p>
            )}
          </div>

          {/* Pinned CTA */}
          {cta && (
            <div className="shrink-0 lg:pb-2">
              <Button to={cta.to} variant={cta.variant || ''}>
                {cta.label}
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}