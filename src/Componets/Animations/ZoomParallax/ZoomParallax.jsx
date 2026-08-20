import styles from './styles.module.scss';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale10 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const texts = [
    { text: ' Website Design & Development', scale: scale4 },
    { text: 'E-Commerce Solutions', scale: scale5 },
    { text: 'Web Applications', scale: scale6 },
    { text: ' UI/UX Design', scale: scale5 },
    { text: 'Mobile-Friendly Development', scale: scale6 },
    { text: 'Website Maintenance & Support', scale: scale8 },
    { text: 'Branding & Creative', scale: scale9 },
    { text: 'SEO', scale: scale10 },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {texts.map(({ text, scale }, index) => (
          <div key={index} style={{ scale }} className={styles.el}>
            <div className={styles.textContainer}>
              <h2 className="text-sm md:text-4xl font-semibold uppercase ">{text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
