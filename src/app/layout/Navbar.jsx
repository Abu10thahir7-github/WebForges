// src/Componets/ui/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../app/layout/header';
const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // hide-on-scroll-down / show-on-scroll-up, same pattern as NavBarSidebar.jsx
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);

      if (menuOpen) return; // never hide the bar while the mobile menu is open

      if (y > lastScrollY && y > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(y);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, menuOpen]);

  // close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 shadow-sm backdrop-blur border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="relative flex items-center justify-between px-5 py-4 sm:px-10 sm:py-5">
          <Link to="/" className=" font-semibold text-gray-900 sm:block">
            Web<span className="font-normal italic">Forges</span>
          </Link>
          {/* left — "book a call" pill */}

          {/* center — brand mark, desktop only */}

          {/* right — desktop links + menu toggle */}
          <div className="flex  items-center gap-6">
            <nav className="  absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
              {NAV_LINKS.map(link => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 py-1.5 pl-1.5 pr-4 text-xs font-medium text-gray-800 shadow-sm transition-colors hover:border-gray-300"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[10px] text-white">
              WF
            </span>
            <span className=" ">Book a free call</span>
            <span className="flex items-center gap-1 text-[11px] text-emerald-600">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              <span className="hidden sm:inline">Available now</span>
            </span>
          </Link>
<div className='block md:hidden'>

          <Header />
</div>
        </div>
      </motion.header>

      {/* mobile / full nav drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-full flex-col justify-between bg-white px-8 py-8 shadow-2xl sm:w-[420px]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">
                    Web<span className="font-normal italic">Forges</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900"
                  >
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M4 4l12 12M16 4 4 16"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>

                <nav className="mt-14 flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                      >
                        <Link
                          to={link.href}
                          className={`block border-b border-gray-100 py-4 text-3xl transition-colors ${
                            isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#f6bc17] hover:text-black"
                >
                  Start a Project
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M4 16 16 4M16 4H7M16 4v9"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
