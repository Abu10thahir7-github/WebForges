import { Link } from 'react-router-dom';

export default function ProjectCTA() {
  return (
    <section className="w-4/5 m-auto pb-24 pt-4">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-gray-900 px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Have a project in mind?</h2>
        <p className="max-w-md text-gray-400">
          Let's talk about what you're building and how we can help bring it to life.
        </p>
        <Link to="/contact">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#f6bc17] px-6 py-3 text-sm font-medium text-black shadow-md transition-transform hover:scale-105"
          >
            Start a project
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
          </button>
        </Link>
      </div>
    </section>
  );
}
