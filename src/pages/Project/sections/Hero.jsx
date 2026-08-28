import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn } from '../../../data/variants';
import Button from '../../../Componets/UI/Button';

const TAGS = ['Websites', 'E-Commerce', 'Web Applications', 'Digital Systems', 'UI/UX Design'];

export default function Hero() {
  return (
   <header className="relative overflow-hidden bg-white    ">
      <div
        className="pointer-events-none absolute -right-40 -top-60  h-[560px] w-[560px] rounded-full opacity-90 blur-2xl sm:-right-20 sm:h-[640px] sm:w-[640px]"
        style={{
          background: 'conic-gradient(from 210deg at 50% 50%, #f6bc17, #0a0a0a, #ffffff, #f6bc17)',
        }}
      />{' '}
      <div className="noise absolute z-0 inset-0 opacity-[0.08]" aria-hidden="true" />
      {/* <div className="noise absolute z-0 inset-0 opacity-[0.08]" aria-hidden="true" /> */}
      <div className="relative z-10 !mt-24 px-5  sm:px-10 ">
        {/* eyebrow */}
        <div className="flex  items-center gap-3">
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
            <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="#f6bc17" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Our Work
          </span>
        </div>

        {/* headline + CTA row */}
        <div className=" mt-3 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="">
            <h1 className="leading-[0.95] text-gray-900">
              <span className="block font-serif text-3xl italic text-gray-700 sm:text-4xl lowercase md:text-5xl">
                digital products,
              </span>
              <span className="block text-6xl font-extrabold uppercase tracking-tight sm:text-7xl md:text-8xl">
                Built to <br />
            perform.

              </span>
            </h1>

            <p className="text-base leading-relaxed  text-gray-500">
               Explore websites, applications, e-commerce platforms, and digital
          systems we've designed and developed for real-world needs.
            </p>
          </div>

          {/* primary CTA — pinned like the reference */}
          <div className="shrink-0 lg:pb-2">
            <Button to="/projects" variant="">
             Start a project

            </Button>
          </div>
        </div>

       
      </div>
    </header>
  );
}