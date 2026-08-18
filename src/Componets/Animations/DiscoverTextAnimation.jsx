'use client';
import { useScroll, useTransform, motion } from 'framer-motion';

import Lenis from '@studio-freight/lenis';

import { useEffect, useRef } from 'react';

export default function DiscoverTextAnimation() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden  ">
      <div ref={container} className="">
        <Slide direction={'right'} left={'-4%'} progress={scrollYProgress} />
      </div>
    </main>
  );
}

const Slide = props => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction]);
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />
    </motion.div>
  );
};

const Phrase = () => {
  return (
    <p className="px-4 sm:px-6 shrink-0  block font-serif text-3xl italic text-gray-700 sm:text-4xl md:text-5xl leading-none text-white text-[13vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw]">
      D<span className=" font-light">i</span>sc
      <span className=" font-light">o</span>very{' '}
      <span className=" font-light">o</span>ur s
      <span className=" font-light">e</span>rv
      <span className=" font-light">i</span>ce
      <span className=" font-light">s</span>
    </p>
  );
};
