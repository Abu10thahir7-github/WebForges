// src/Componets/Pages/HowWeWork.jsx
import React from 'react';
import SectionLabel from '../../../Componets/UI/SectionLabel';
import SectionTitle from '../../../Componets/shared/SectionTitle';



export default function ProcessSteps({data}) {
  return (
    <section className="bg-[#F6F5F3] px-4 py-7 sm:py-10">
      <div className="mx-auto max-w-6xl">
        {/* eyebrow */}
<SectionTitle
  eyebrow={data.eyebrow}
  lineOne={data.title}
 
/>

        {/* cards */}
        <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {data.steps.map((step, i) => (
            <div key={step.number} className={`rounded-3xl p-4 shadow-sm space-y-1 ${step.bg}`}>
              <div className='flex items-center gap-2'>

              <span className="text-sm font-semibold text-[#c98f00]">{step.number}</span>
              <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
              </div>
              <p className=" text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
