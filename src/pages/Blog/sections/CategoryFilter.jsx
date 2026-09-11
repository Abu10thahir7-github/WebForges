export default function CategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Article categories"
      className="flex flex-wrap gap-3 py-8"
    >
      {categories.map(cat => (
        <button
          key={cat.id}
          type="button"
          role="tab"
          aria-selected={activeCategory === cat.slug}
          onClick={() => onChange(cat.slug)}
          className={`rounded-full border px-5 py-2.5 text-sm font-medium uppercase tracking-wide transition-all duration-300 ${
            activeCategory === cat.slug
              ? 'border-[#f6bc17] bg-[#f6bc17] text-black'
              : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-900'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}