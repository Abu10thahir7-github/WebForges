function FeatureCard({ feature, index }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
      <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.desc}</p>
    </div>
  );
}

export default function KeyFeatures({ features }) {
  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">
      <h2 className="mb-10 text-2xl font-bold text-gray-900 sm:text-3xl">Key features</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
