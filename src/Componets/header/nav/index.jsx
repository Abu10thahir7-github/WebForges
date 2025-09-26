import React, { useState } from 'react';
import styles from './style.module.css';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'About Us',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export default function index() {
  const location = useLocation();
  const pathname = location.pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
      onClick={e => e.stopPropagation()}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
