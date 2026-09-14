import { useState, useRef, useEffect } from 'react';

const TEAM = [
  { name: 'Muhammed Sulaiman T', role: 'Backend Lead', link: 'https://mhdsulu786.vercel.app/' },
  { name: 'Abu Thahir ES', role: 'Frontend Lead', link: 'https://abu-thahir.vercel.app/' },
];

export default function FooterCredit() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative inline-block">
      <p className="pb-8 text-center text-xs font-thin text-slate-400">
        © {new Date().getFullYear()} All rights reserved | Created by{' '}
        <button
          type="button"
          onClick={() => setOpen(prev => !prev)}
          aria-expanded={open}
          aria-haspopup="true"
          className="underline transition-colors hover:text-yellow-300"
        >
          WebForges
        </button>
      </p>

      {open && (
        <div
          role="menu"
          className="absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-3 text-left shadow-xl"
        >
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Our Team
          </p>
          <div className="flex flex-col gap-1">
            {TEAM.map(member => (
              <a
                key={member.name}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                className="flex items-center justify-between rounded-xl px-2 py-2.5 transition-colors hover:bg-gray-50"
              >
                <span>
                  <span className="block text-sm font-medium text-gray-900">{member.name}</span>
                  <span className="block text-xs text-gray-400">{member.role}</span>
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-300"
                >
                  <path
                    d="M2.857 10.893h10.866l-4.991 4.992 1.268 1.259 7.143-7.143-7.143-7.143-1.259 1.259 4.982 4.991H2.857v1.785Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
