import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const sentences = [
  'Impact, Lasting changes',
  'Innovation, Bold ideas',
  'Design, Creative solutions',
  'Experience, Experienced team',
  'Bringing Your Digital Ideas to Life with Modern,',
  'Scalable,',
  'and High-Performing Solutions.',
];

function TextRotateAnimate() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSentenceIndex(prev => (prev + 1) % sentences.length);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [currentSentenceIndex]);

  return (
    <div className="relative h-[200px] overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentSentenceIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-lg  w-full sm:text-sm md:text-6xl text-center font-semibold "
        >
          {sentences[currentSentenceIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default TextRotateAnimate;
