export default function Screenshots({ screenshots, title }) {
  if (!screenshots?.length) return null;

  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">Screenshots</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {screenshots.map((src, index) => (
          <div key={src} className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <img
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
