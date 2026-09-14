import { Link } from "react-router-dom";
import SectionLabel from "../../../Componets/UI/SectionLabel";

export default function NextProject({ project }) {
  if (!project) return null;

  return (
    <section className="md:w-4/5 m-auto border-t border-gray-200 px-3 py-8 sm:py-10">
      <Link
        to={`/projects/${project.slug}`}
        className="group block"
        aria-label={`View next project: ${project.title}`}
      >
        <div
          className="
            relative overflow-hidden rounded-3xl
            border border-gray-200
            bg-gray-50
            p-4
            transition-all duration-500
            hover:border-[#f6bc17]
            hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]
            sm:p-6
            lg:p-8
          "
        >
          {/* Top label */}
          <div className="mb-6 flex items-center justify-between">

            <SectionLabel text="Next project" className="!text-xs" />

            <span
              className="
                text-xs font-medium text-gray-400
                transition-colors duration-300
                group-hover:text-gray-900 hidden sm:block
              "
            >
              View project
            </span>
          </div>

          {/* Main content */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">

            {/* Project info */}
            <div className="min-w-0 flex-1">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#f6bc17]">
                {project.category}
              </p>

              <h3
                className="
                  max-w-2xl
                  text-2xl font-bold tracking-tight text-gray-900
                  transition-transform duration-500
                  group-hover:translate-x-1
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                "
              >
                {project.title}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-gray-900">
                <span>Explore project</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M2.857 10.893h10.866l-4.991 4.992 1.268 1.259 7.143-7.143-7.143-7.143-1.259 1.259 4.982 4.991H2.857v1.785Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* Project image */}
            <div
              className="
                relative flex
                h-40 w-full
                shrink-0 items-center justify-center
                overflow-hidden rounded-2xl
                bg-white
                border border-gray-200
                transition-all duration-500
                group-hover:border-gray-300
                sm:h-36 sm:w-52
                md:h-40 md:w-60
                lg:h-44 lg:w-72
              "
            >
              <img
                src={project.heroImage}
                alt={`${project.title} preview`}
                className="
                  h-full w-full
                  object-contain
                  p-4
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* Arrow */}
              <span
                className="
                  absolute bottom-3 right-3
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-gray-900
                  text-white
                  transition-all duration-300
                  group-hover:bg-[#f6bc17]
                  group-hover:text-black
                  group-hover:scale-110
                "
              >
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
          </div>

          {/* Bottom accent */}
          <div
            className="
              absolute bottom-0 left-0
              h-0.5 w-0
              bg-[#f6bc17]
              transition-all duration-500
              group-hover:w-full
            "
          />
        </div>
      </Link>
    </section>
  );
}