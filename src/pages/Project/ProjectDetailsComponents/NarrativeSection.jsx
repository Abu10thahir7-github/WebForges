export default function NarrativeSection({ eyebrow, heading, body, reversed = false }) {
  return (
    <section className="md:w-4/5 m-auto border-t border-gray-200 py-6 px-3 ">
      <div
        className={`grid grid-cols-1 gap-2 lg:grid-cols-[1fr_1fr] ${
          reversed
            ? 'lg:[&>*:first-child]:order-2 lg:text-right lg:[&>*:first-child]:text-left'
            : ''
        }`}
      >
        <div initial="hidden" whileInView="show" className="flex items-center gap-3">
          <span className="text-sm font-semibold text-[#f6bc17]">{eyebrow}</span>
          <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-900">{heading}</h2>
        </div>

        <p className="max-w-2xl text-base leading-relaxed text-gray-500 lg:ml-auto">{body}</p>
      </div>
    </section>
  );
}
