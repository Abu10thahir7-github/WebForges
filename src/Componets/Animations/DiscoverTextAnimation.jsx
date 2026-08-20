// src/Componets/Animations/DiscoverTextAnimation.jsx
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';
import { useRef } from 'react';

export default function DiscoverTextAnimation({ Text }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  // smooths the raw scroll value so the transform doesn't visually stutter
  // on fast/short scroll bursts — cheap, and removes most of the remaining jank
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.5,
  });

  return (
    <div className="w-full min-w-0 overflow-hidden">
      <div ref={container}>
        <Slide direction="right" left="-4%" progress={smoothProgress} text={Text} />
      </div>
    </div>
  );
}

const Slide = props => {
  const direction = props.direction === 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction]);
  return (
    <motion.div
      style={{ x: translateX, left: props.left, willChange: 'transform' }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase text={props.text} />
    </motion.div>
  );
};

const Phrase = ({ text }) => {
  return (
    <p className="p-4 sm:px-6 shrink-0 block font-serif text-3xl italic text-gray-700 sm:text-4xl md:text-5xl leading-none text-[13vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw]">
      {text}
    </p>
  );
};