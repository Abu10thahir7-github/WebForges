export default function ProjectHero({ project }) {
  return (
    <header className="relative overflow-hidden bg-white pb-16 pt-32 sm:pt-40">
      <div className="w-4/5 m-auto  flex">
        <div className="flex flex-col items-start gap-6">
          {/* Eyebrow */}
          <span className="rounded-full bg-gray-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            {project.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-black uppercase text-gray-900 sm:text-5xl md:text-6xl">
            {project.title}
          </h1>

          {/* Tagline — one line only */}
          <p className="max-w-xl text-lg text-gray-500">{project.tagline}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#f6bc17] px-6 py-3 text-sm font-medium text-black shadow-md transition-transform hover:scale-105"
              >
                View Live Site
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.857 10.893h10.866l-4.991 4.992 1.268 1.259 7.143-7.143-7.143-7.143-1.259 1.259 4.982 4.991H2.857v1.785Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-900"
              >
                View GitHub
              </a>
            )}
          </div>
        </div>
        {/* Large screenshot */}
        <div
          initial="hidden"
          whileInView="show"
          className=" w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/60"
        >
          <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          </div>
          <img
            src={project.heroImage}
            alt={`${project.title} website screenshot`}
            className="w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
