// src/hooks/useLenisScroll.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

let lenisInstance = null;

export default function useLenisScroll() {
  useEffect(() => {
    if (lenisInstance) return; // guard: never create a second instance

    lenisInstance = new Lenis();

    let rafId;
    function raf(time) {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance.destroy();
      lenisInstance = null;
    };
  }, []);
}