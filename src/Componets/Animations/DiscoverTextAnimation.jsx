'use client'
import { useScroll, useTransform, motion } from 'framer-motion';

import Lenis from "@studio-freight/lenis";




import { useEffect, useRef } from 'react';

export default function DiscoverTextAnimation() {

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
      <div className='h-[27vh]'/>
      <div ref={container}>

        <Slide    direction={'right'} left={"-8%"} progress={scrollYProgress}/>



      </div>
      <div className='h-[20vh]' />
    </main>
  );
}

const Slide = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">

      <Phrase src={props.src}/>

    </motion.div>
  )
}

const Phrase = ({src}) => {

  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className='text-[9.5vw]'> Discovery Our Services</p>

    </div>
  )
}