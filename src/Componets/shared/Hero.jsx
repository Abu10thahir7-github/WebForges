import Button from '../../Componets/UI/Button.jsx';
import SectionLabel from '../UI/SectionLabel.jsx';

/**
 * Reusable "gradient blob" page hero — eyebrow tags, two-line headline
 * (serif-italic lead + bold caps), description, and a pinned CTA.
 *
 * @param {string[]} [tags] - Pill row above the headline (optional)
 * @param {string} headlineLead - First line, rendered serif-italic
 * @param {string} headlineMain - Second line, rendered bold uppercase
 * @param {string} description - Supporting paragraph
 * @param {{ label: string, to: string, variant?: string, size?: string }} [cta]
 * @param {string} [blobPosition] - Tailwind position classes for the gradient blob
 */
export default function Hero({
  tags = [],
  headlineLead,
  headlineMain,
  description,
  cta,
  blobPosition = '-right-40 -top-40 sm:-right-20',
}) {
  return (
    <header className="relative overflow-hidden bg-white pt-20">
      {/* Signature gradient blob */}
      <div
        className={`pointer-events-none absolute ${blobPosition} h-[560px] w-[560px] rounded-full opacity-90 blur-2xl sm:h-[640px] sm:w-[640px]`}
        style={{
          background: 'conic-gradient(from 210deg at 50% 50%, #f6bc17, #0a0a0a, #ffffff, #f6bc17)',
        }}
      />
      <div className="noise absolute inset-0 z-0 opacity-[0.08]" aria-hidden="true" />

      {/* Tag row */}
      {tags.length > 0 && (
        <div className="relative mt-5 flex flex-wrap gap-2 px-5 sm:px-10">
          {tags.map(tag => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Headline + CTA */}
      <div className="relative mt-6 flex flex-col justify-between gap-8 px-5 pb-16 sm:px-10 sm:pb-24 lg:flex-row lg:items-end">
        <div>
          <h1 className="leading-[0.95] text-gray-900">
            <SectionLabel text={headlineLead} />
            <span className="block text-6xl font-extrabold uppercase tracking-tight sm:text-7xl md:text-8xl">
              {headlineMain}
            </span>
          </h1>
          {description && <p className="text-base leading-relaxed text-gray-500">{description}</p>}
        </div>

        {cta && (
          <div className="shrink-0">
            <Button to={cta.to} variant={cta.variant || 'dark'} size={cta.size || 'lg'}>
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
