import { Link } from 'react-router-dom';

export default function NextProject({ project }) {
  if (!project) return null;

  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">
      <Link to={`/projects/${project.slug}`} className="group block">
        <div
          initial="hidden"
          whileInView="show"
          className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-gray-200 p-8 transition-colors duration-300 group-hover:border-[#f6bc17] sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Next project
            </p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">{project.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{project.category}</p>
          </div>

          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white transition-colors duration-300 group-hover:bg-[#f6bc17] group-hover:text-black">
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.857 10.893h10.866l-4.991 4.992 1.268 1.259 7.143-7.143-7.143-7.143-1.259 1.259 4.982 4.991H2.857v1.785Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </Link>
    </section>
  );
}
