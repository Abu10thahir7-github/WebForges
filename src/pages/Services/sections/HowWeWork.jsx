// src/Componets/Pages/HowWeWork.jsx
import React from 'react';

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    desc: "We understand your business, audience, goals, and the problem we're solving.",
    bg: 'bg-white',
  },
  {
    number: '02',
    title: 'Plan',
    desc: 'We define the structure, features, technology, and project scope.',
    bg: 'bg-[#FCF2D9]',
  },
  {
    number: '03',
    title: 'Design',
    desc: 'We create a clear and intuitive experience before development begins.',
    bg: 'bg-[#E9E7FB]',
  },
  {
    number: '04',
    title: 'Build',
    desc: 'We develop the solution, integrate the required systems, and test everything carefully.',
    bg: 'bg-emerald-50',
  },
  {
    number: '05',
    title: 'Launch',
    desc: 'We deploy your project and make sure everything works properly in the real world.',
    bg: 'bg-white',
  },
  {
    number: '06',
    title: 'Grow',
    desc: 'We continue improving, maintaining, and automating your digital system as your business evolves.',
    bg: 'bg-yellow-50',
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#F6F5F3] px-4 py-7 sm:py-10">
      <div className="mx-auto max-w-6xl">
        {/* eyebrow */}

        <div className="flex items-center justify-start gap-3">
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
            <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="#f6bc17" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Our Process
          </span>
        </div>

        <h2 className=" mt-6   text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
          From idea to launch, <span className="font-serif italic font-normal">without the</span>{' '} <br/>
          complexity.
        </h2>

        {/* cards */}
        <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.number} className={`rounded-3xl p-4 shadow-sm space-y-1 ${step.bg}`}>
              <div className='flex items-center gap-2'>

              <span className="text-sm font-semibold text-[#c98f00]">{step.number}</span>
              <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
              </div>
              <p className=" text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
