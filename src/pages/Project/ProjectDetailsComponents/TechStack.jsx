export default function TechStack({ stack }) {
  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">Technology</h2>

      <div className="flex flex-wrap gap-3">
        {stack.map(tech => (
          <span
            key={tech}
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
