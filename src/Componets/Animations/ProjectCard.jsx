import { motion } from 'framer-motion';
import { fadeIn } from '../../data/variants';

// Defined outside the parent so it's a stable component type across renders
function ProjectCard({ project, index }) {
  return (
    <a
      href={`/projects/${project.slug}`}
    
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-gray-100 transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Image block */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={project.heroImage}
          alt={`${project.title} project screenshot`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient fade into the panel below */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />

        {/* Badge — top left */}
        {project.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-gray-900 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            {project.badge}
          </span>
        )}

        {/* View-project icon — top right */}
        <span className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition-colors duration-300 group-hover:bg-[#f6bc17] group-hover:text-black">
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
        </span>
      </div>

      {/* Content panel */}
      <div className="flex flex-col gap-1 px-5 pb-5 pt-1">
        <p className="      bg-white/70   text-xs   text-gray-400">{project.category}</p>
        <h3 className="text-base font-medium text-gray-900">{project.title}</h3>
        <p className="text-sm text-gray-500   leading-relaxed   overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {project.tagline}
        </p>{' '}
        {/* Stats row */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 15h16M3 15V8a1 1 0 011-1h12a1 1 0 011 1v7M5 7V5a1 1 0 011-1h8a1 1 0 011 1v2"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {project.techStack[0] }
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10h14M3 5h14M3 15h14"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            {project.techStack.length} stack
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="14"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
            {project.service}
          </span>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
