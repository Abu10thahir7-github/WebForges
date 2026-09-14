export default function Outcome({ outcome }) {
  return (
    <section className="md:w-4/5 m-auto px-3 border-t border-gray-200 py-5">
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[#f6bc17]">Outcome</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">{outcome}</p>
      </div>
    </section>
  );
}
