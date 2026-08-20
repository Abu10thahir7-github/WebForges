import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { fadeIn } from '../../data/variants';
import Button from '../../Componets/UI/Button';

const ACCENT = '#f6bc16';

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveLink = path =>
    location.pathname === path ? 'text-yellow-300' : 'text-slate-300 hover:text-yellow-300';

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socials = [
    { name: 'Twitter / X', href: null, icon: 'x' },
    { name: 'Facebook', href: null, icon: 'facebook' },
    { name: 'Instagram', href: 'https://www.instagram.com/web_forges/', icon: 'instagram' },
  ];

  return (
    <footer  className='bg-black'>
      <div className="w-[90%] sm:w-4/5 mx-auto pt-16 ">


      <div className="mb-8">
        <h2 className="text-xl font-semibold tracking-tight">Web Forges</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 mb-8 border-b border-white/10">
        {/* Intro + CTA */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.1]">
            L<span className="italic font-light">e</span>t's w
            <span className="italic font-light">o</span>rk <br />t
            <span className="italic font-light">o</span>gether
          </h1>
          <p className="text-sm font-extralight text-slate-300 max-w-[280px]">
            Reach out anytime to discuss a collaboration or just to connect with our team.
          </p>
       <Button to="/contact"   size="md">Contact us</Button>
        </div>

        {/* Address */}
        <div className="lg:col-span-3 flex flex-col">
          <p className="text-sm text-slate-400 pb-3 mb-4 border-b border-white/10 w-fit">
            Our address
          </p>
          <ul className="flex flex-col gap-3 text-sm text-slate-200">
            <li>
              <a
                className="hover:text-yellow-300 transition-colors"
                href="mailto:webforges.site@gmail.com"
              >
                webforges.site@gmail.com
              </a>
            </li>
            <li className="flex flex-col gap-1">
              <a className="hover:text-yellow-300 transition-colors" href="tel:+919037435846">
                +91 90374 35846
              </a>
              <a
                className="hover:text-yellow-300 transition-colors"
                href="https://wa.me/918921966289"
                target="_blank"
                rel="noreferrer"
              >
                +91 89219 66289 (WhatsApp)
              </a>
            </li>
            <li className="text-slate-400">Palakkad, Kerala, India</li>
          </ul>
        </div>

        {/* Follow us */}
        <div className="lg:col-span-2 flex flex-col">
          <p className="text-sm text-slate-400 pb-3 mb-4 border-b border-white/10 w-fit">
            Follow us
          </p>
          <ul className="flex gap-3">
            {socials.map(s => (
              <li key={s.name}>
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-[#f6bc16] hover:text-[#f6bc16]"
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                ) : (
                  // No live link provided yet — rendered as a disabled state
                  // rather than a href="" link that silently reloads the page.
                  <span
                    aria-label={`${s.name} (coming soon)`}
                    title="Coming soon"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 cursor-not-allowed"
                  >
                    <SocialIcon name={s.icon} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-2 flex flex-col">
          <p className="text-sm text-slate-400 pb-3 mb-4 border-b border-white/10 w-fit">
            Navigation
          </p>
          <ul className="flex flex-col gap-3 text-base">
            {menuItems.map(item => (
              <li key={item.path}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`group flex items-center gap-3 transition-colors ${getActiveLink(item.path)}`}
                >
                  <svg
                    width="9"
                    height="12"
                    viewBox="0 0 11 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M10.6667 7L0.166747 13.0622L0.166748 0.937822L10.6667 7Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-center text-xs font-thin text-slate-400 pb-8">
        © {new Date().getFullYear()} All rights reserved | Created by{' '}
        <a
          href="https://abu-thahir.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-yellow-300 transition-colors"
        >
          WebForges
        </a>
      </p>
       </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  if (name === 'x') {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.45993 2H4.0499C3.1199 2 2.64991 3.13 3.30991 3.79L9.03989 9.52C10.6799 11.16 13.3299 11.16 14.9699 9.52L20.6999 3.79C21.3599 3.13 20.8899 2 19.9599 2H18.5499C17.7199 2 16.9199 2.33 16.3299 2.92L12.7499 6.5C12.3399 6.91 11.6799 6.91 11.2699 6.5L7.68991 2.92C7.08991 2.33 6.28993 2 5.45993 2Z"
          fill="currentColor"
        />
        <path
          d="M5.45993 21.97H4.0499C3.1199 21.97 2.64991 20.84 3.30991 20.18L9.03989 14.45C10.6799 12.81 13.3299 12.81 14.9699 14.45L20.6999 20.18C21.3599 20.84 20.8899 21.97 19.9599 21.97H18.5499C17.7199 21.97 16.9199 21.64 16.3299 21.05L12.7499 17.47C12.3399 17.06 11.6799 17.06 11.2699 17.47L7.68991 21.05C7.08991 21.64 6.28993 21.97 5.45993 21.97Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (name === 'facebook') {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Footer;
