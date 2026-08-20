import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div

      >
        <div className={styles.header}>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      <AnimatePresence>
        {isActive && (
          <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.overlay}
            onClick={() => setIsActive(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
