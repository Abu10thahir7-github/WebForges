import React from 'react';
import { Check, Minus, Globe } from 'lucide-react';
import { ComparisonRows, Plans } from '../../../data/datas';
import { MessageCircle } from 'lucide-react';

/* ---------------------------------------------------------
   Data
--------------------------------------------------------- */

/* ---------------------------------------------------------
   Component
--------------------------------------------------------- */
const WHATSAPP_NUMBER = '918921966289';

function buildWhatsAppLink(plan) {
  const message =
    `Hi WebForges! I'd like to go ahead with the *${plan.name}* plan ` +
    `(${plan.category}, ${plan.price}). Can you tell me the next steps?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Pricing() {
  return (
    <section className="bg-slate-50 px-2 py-14">
      <div className="mx-auto mb-5 max-w-6xl  ">
        <h2 className="   mb-2 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
          Three ways to launch
        </h2>
        <p className="  max-w-md text-base leading-relaxed text-gray-500">
          Pick the build that matches where your business is right now. Each plan scopes up in
          pages, commerce systems, and support.
        </p>
      </div>

      {/* Browser-window frame */}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
        {/* Chrome bar */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <div className="ml-3 flex-1 truncate rounded-md border border-slate-200 bg-white px-3 py-1 font-mono text-xs text-slate-400">
            webforges.site/pricing
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {Plans.map(plan => (
            <div
              key={plan.name}
              className={`flex items-center justify-between  gap-2 border-b px-6 py-3.5 text-sm font-medium ${
                plan.active
                  ? 'border-[#f6bc17] bg-white text-[#f6bc17]'
                  : 'border-slate-200 bg-slate-50 text-slate-500 lg:border-r lg:border-b-slate-200'
              }`}
            >
              {' '}
              <div className="flex items-center gap-2">
                <Globe size={14} className={plan.active ? 'text-[#f6bc17]' : 'text-slate-400'} />

                {plan.name}
              </div>
              {plan.tag && (
                <span className="  w-fit rounded-full bg-[#f6bc17]/20 px-3 py-1 text-xs font-semibold text-black">
                  {plan.tag}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Panels */}
        <div className="grid grid-cols-1 divide-y divide-slate-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
          {Plans.map(plan => (
            <div
              key={plan.name}
              className={`flex flex-col p-4 lg:p-6 ${plan.active ? 'bg-yellow-50/40' : 'bg-white'}`}
            >
              <span className="mb-2 text-sm text-slate-500">{plan.category}</span>

              <div className="mb-2 font-mono text-3xl font-semibold tracking-tight text-slate-900">
                {plan.price}
              </div>
              <p className="mb-2 text-sm leading-relaxed text-slate-500">{plan.audience}</p>

              <ul className="mb-8 flex-1 space-y-2.5 border-t border-slate-200 pt-5">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[#f6bc17]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={buildWhatsAppLink(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  plan.active
                    ? 'inline-flex items-center justify-center rounded-lg bg-[#f6bc17] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#f6bc17]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  gap-2 focus-visible:outline-[#f6bc17]'
                    : 'inline-flex items-center justify-center rounded-lg border border-slate-900 px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-slate-700 gap-2'
                }
              >
                <MessageCircle size={17} strokeWidth={2.25} />
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison table */}
      <div className="mx-auto mt-10 max-w-6xl">
        <h3 className="mb-7 text-2xl font-semibold text-slate-900">Compare what's included</h3>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b border-slate-200 px-5 py-5 text-left text-base font-semibold text-slate-900">
                  Feature
                </th>
                <th className="border-b border-slate-200 px-5 py-5 text-center text-base font-semibold text-slate-900">
                  Starter
                </th>
                <th className="border-b border-slate-200 bg-[#f6bc17]/20 px-5 py-5 text-center text-base font-semibold text-slate-900">
                  Business
                </th>
                <th className="border-b border-slate-200 px-5 py-5 text-center text-base font-semibold text-slate-900">
                  Premium Pro
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {ComparisonRows.map(row => (
                <tr key={row.label}>
                  <td className="px-5 py-4 text-left text-sm font-medium text-slate-900">
                    {row.label}
                  </td>
                  {row.values.map((val, i) => (
                    <td
                      key={i}
                      className={`px-5 py-4 text-center text-sm text-gray-700 ${
                        i === 1 ? 'bg-[#f6bc17]/20' : ''
                      }`}
                    >
                      {val === true && (
                        <Check size={18} strokeWidth={2.5} className="mx-auto text-[#f6bc17]" />
                      )}
                      {val === false && (
                        <Minus size={16} className="mx-auto text-sm text-gray-700" />
                      )}
                      {typeof val === 'string' && val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
