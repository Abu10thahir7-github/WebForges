import styles from './style.module.scss';
import { Link } from 'react-router-dom';

import { slide, scale } from '../../anim';

export default function Index({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className={styles.indicator}
      ></div>
      <Link to={href}>{title}</Link>
    </div>
  );
}
