import SectionLabel from "../../../Componets/UI/SectionLabel";

function FeatureCard({ feature, index }) {
    const cardColors = [
    "bg-emerald-50",
    "bg-blue-50",
    "bg-yellow-50",
    "bg-purple-50",
  ];
  return (
    <div c  className={`rounded-2xl border border-gray-200 p-3 ${
        cardColors[index % cardColors.length]
      }`}>
      <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.desc}</p>
    </div>
  );
}

export default function KeyFeatures({ features }) {
  return (
    <section className="md:w-4/5 px-3 m-auto border-t border-gray-200 py-5">

      <SectionLabel text="Key features" className="!text-sm" />

      <div className="grid mt-2 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
