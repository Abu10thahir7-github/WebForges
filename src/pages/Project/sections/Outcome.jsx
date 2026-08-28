export default function Outcome({ outcome }) {
  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 sm:p-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[#f6bc17]">Outcome</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">{outcome}</p>
      </div>
    </section>
  );
}
