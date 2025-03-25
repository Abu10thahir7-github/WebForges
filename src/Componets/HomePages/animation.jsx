'use client'
import { useScroll, useTransform, motion } from 'framer-motion';

import Lenis from "@studio-freight/lenis";


import viteSvg from '../../../public/vite.svg'


import { useEffect, useRef } from 'react';

export default function Animation() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="overflow-hidden">
      <div className='h-[50vh]'/>
      <div ref={container}>
        <Slide  src={viteSvg} direction={'left'} left={"-60%"} progress={scrollYProgress}/>
        <Slide  src={viteSvg}  direction={'right'} left={"-75%"} progress={scrollYProgress}/>



      </div>
      <div className='h-[50vh]' />
    </main>
  );
}

const Slide = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
      <Phrase src={props.src}/>
      <Phrase src={props.src}/>
      <Phrase src={props.src}/>
    </motion.div>
  )
}

const Phrase = ({src}) => {

  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className='text-[7.5vw]'> High-performing</p>
      <svg width="94" height="52" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 14H7.66L18.84 2.82L16 0L0 16L16 32L18.82 29.18L7.66 18H32V14Z" fill="#F6BC17"></path>
<path d="M32 18L56.34 18L45.16 29.18L48 32L64 16L48 -1.39876e-06L45.18 2.82L56.34 14L32 14L32 18Z" fill="#F6BC17"></path>
</svg>
    </div>
  )
}