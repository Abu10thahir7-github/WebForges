'use client';
import { useScroll, useTransform, motion, useReducedMotion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import viteSvg from '../../../public/vite.svg';
import { useEffect, useRef } from 'react';

export default function Animation( ) {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const lenis = new Lenis();
    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // without this, every page that mounts this component adds another
    // Lenis instance + rAF loop that never stops
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="overflow-hidden py-5">
      {/* real heading for screen readers — the marquee below is decorative */}
      <h2 className="sr-only">High-performing web design and development</h2>

      <div ref={container} aria-hidden="true">
        <Slide src={viteSvg} direction="left" left="-60%" progress={scrollYProgress} />
        <Slide direction="right" left="-75%" progress={scrollYProgress} />
      </div>
    </main>
  );
}

const Slide = ({ direction, left, progress, src }) => {
  const prefersReducedMotion = useReducedMotion();
  const dir = direction === 'left' ? -1 : 1;

  // no side-to-side drift for people who've asked their OS to reduce motion
  const translateX = useTransform(
    progress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [150 * dir, -150 * dir],
  );

  return (
    <motion.div
      style={{ x: translateX, left }}
      className="relative flex flex-nowrap whitespace-nowrap"
    >
      {[0, 1, 2].map(i => (
        <Phrase key={i} src={src} />
      ))}
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className="flex items-center gap-3 px-3 text-black ">
      <p className="text-[10vw] leading-none sm:text-5xl">HIGH-PERFORMING</p>

      <svg
        width="56"
        height="30"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 sm:h-10 sm:w-20 md:h-[52px] md:w-[94px]"
      >
        <path
          d="M32 14H7.66L18.84 2.82L16 0L0 16L16 32L18.82 29.18L7.66 18H32V14Z"
          fill="#F6BC17"
        />
        <path
          d="M32 18L56.34 18L45.16 29.18L48 32L64 16L48 -1.39876e-06L45.18 2.82L56.34 14L32 14L32 18Z"
          fill="#F6BC17"
        />
      </svg>
      <p className="text-[10vw] leading-none sm:text-5xl">AUTOMATED</p>
      <svg
        width="56"
        height="30"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 sm:h-10 sm:w-20 md:h-[52px] md:w-[94px]"
      >
        <path
          d="M32 14H7.66L18.84 2.82L16 0L0 16L16 32L18.82 29.18L7.66 18H32V14Z"
          fill="#F6BC17"
        />
        <path
          d="M32 18L56.34 18L45.16 29.18L48 32L64 16L48 -1.39876e-06L45.18 2.82L56.34 14L32 14L32 18Z"
          fill="#F6BC17"
        />
      </svg>
      <p className="text-[10vw] leading-none sm:text-5xl">SCALABLE</p>
        <svg
        width="56"
        height="30"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 sm:h-10 sm:w-20 md:h-[52px] md:w-[94px]"
      >
        <path
          d="M32 14H7.66L18.84 2.82L16 0L0 16L16 32L18.82 29.18L7.66 18H32V14Z"
          fill="#F6BC17"
        />
        <path
          d="M32 18L56.34 18L45.16 29.18L48 32L64 16L48 -1.39876e-06L45.18 2.82L56.34 14L32 14L32 18Z"
          fill="#F6BC17"
        />
      </svg>
    </div>
  );
};
