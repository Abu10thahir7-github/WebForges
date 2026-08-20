'use client';
import { useEffect, useState } from 'react';
import {
  Image as ImageIcon,
  FileText,
  AudioLines,
  Braces,
  ArrowUpRight,
  Lock,
  Search,
  Star,
} from 'lucide-react';

import { fadeIn } from '../../../data/variants';

/**
 * "Free Tools" — minimal project showcase
 * ------------------------------------------------------
 * Styled to match the "Featured" cards in the Portfolio section:
 * a preview panel + title + short pitch + a handful of highlight
 * tools, not a full searchable directory. Drop in after
 * "My Portfolio", before "Get In Touch".
 */

const HIGHLIGHT_TOOLS = [
  { name: 'Image Tools', icon: ImageIcon },
  { name: 'PDF Tools', icon: FileText },
  { name: 'Audio Tools', icon: AudioLines },
  { name: 'Developer Tools', icon: Braces },
];

function useLiveCounter(seed = 42318) {
  const [count, setCount] = useState(seed);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 3));
    }, 2400);
    return () => clearInterval(id);
  }, []);
  return count;
}

export default function FreeToolsSection() {
  const liveCount = useLiveCounter();

  return (
    <section
      id="freetools"
      aria-labelledby="freetools-heading"
      className="relative  w-4/5 m-auto py-16 md:py-20"
    >
      <div className=" ">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-lg flex items-center gap-3 uppercase text-[#f6bc17] font-medium">
            <svg
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
            </svg>
            Our Free Tools
          </p>

          <p className="mt-4 max-w-lg text-neutral-600">
            A web app I'm building with 37+ browser-based utilities — image, PDF, audio and
            developer tools, free with no sign-up.
          </p>
        </div>
        {/* showcase card */}
        <div className="mt-10 overflow-hidden rounded-xl border border-black/10 bg-white/[0.02]">
          {/* preview — mock browser window standing in for a real screenshot */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#f6bc17] via-[#0a0a0a] to-[#0a0a0a] p-4 sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <span className="absolute right-3 top-3 z-50 inline-flex items-center gap-1 rounded-full bg-black/20 px-2.5 py-1 text-[11px] font-medium text-[#f6bc17] backdrop-blur-xs">
              <Star size={12} className="text-[#f6bc17]" aria-hidden />
              Featured
            </span>

            {/* browser chrome */}
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0d0d0d] shadow-2xl shadow-black">
              <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-3 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <div className="flex flex-1 items-center gap-1.5 rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-neutral-500">
                  <Lock size={9} className="text-[#f6bc17]" />
                  freetooly.webforges.site
                </div>
              </div>

              {/* mock page content */}
              <div className="space-y-3 p-2 sm:p-5">
                <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
                  <Search size={12} className="shrink-0 text-neutral-600" />
                  <div className="h-2 w-28 rounded-full bg-white/10 sm:w-40" />
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {HIGHLIGHT_TOOLS.map(tool => {
                    const Icon = tool.icon;
                    return (
                      <a
                        key={tool.name}
                        href={'https://freetooly.webforges.site'}
                        className="rounded-md border border-white/10 bg-white/[0.02] p-2.5 hover:bg-gray-200/10"
                      >
                        <div className="flex justify-between">
                          <div className="flex gap-1.5">
                            <Icon size={14} className="mb-2 text-[#f6bc17]" />{' '}
                            <p className="text-xs text-neutral-300">{tool.name}</p>
                          </div>
                          <ArrowUpRight size={15} className="text-[#f6bc17]" />
                        </div>

                        <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
                        <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/[0.06]" />
                      </a>
                    );
                  })}
                </div>

                <div className="hidden gap-2.5 sm:grid sm:grid-cols-4">
                  {[0, 1, 2, 3].map(i => (
                    <div
                      key={i}
                      className="rounded-md border border-white/5 bg-white/[0.015] p-2.5"
                    >
                      <div className="mb-2 h-3.5 w-3.5 rounded bg-white/10" />
                      <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* body */}
          <div className="p-6 sm:p-8 bg-gray-200">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-black">Free Tools</h3>
                <p className="mt-1.5 max-w-md text-sm text-neutral-500">
                  Everyday image, PDF, audio and developer utilities that run entirely in the
                  browser — nothing uploaded, nothing to install.
                </p>
              </div>
              <a
                href="https://freetooly.webforges.site"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-gray-100 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-300"
              >
                Visit site
                <ArrowUpRight
                  size={15}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center  gap-3 border-t border-black/10 pt-5">
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                <Lock size={12} className="text-[#f6bc17]" />
                Private — processed on your device
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sparkle() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
    </svg>
  );
}
