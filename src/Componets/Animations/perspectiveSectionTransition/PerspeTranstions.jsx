'use client';


import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';
import grid from '../../../assets/grid.png';
import abu from '../../../assets/abu.png';
export default function PerspeTranstions() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
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
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress}/>
      <Section2 scrollYProgress={scrollYProgress}/>
    </main>
  );
}

const Section1 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 h-screen   text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
      <p>Backend Lead</p>
      <div className="flex gap-4">
        <p></p>
        <div className="relative ">

        <p>Sulaiman </p>
        <a className="text-base" href="https://mhdsulu786.vercel.app/"> Learn More → </a>
        </div>
      </div>
    </motion.div>
  )
}

const Section2 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.div style={{scale, rotate}} className="relative h-screen abu-profile text-[3.5vw] flex flex-col items-center bg-black justify-center  text-white pb-[10vh]">
     <p>Frontend Lead</p>
      <div className="flex gap-4">
        <p></p>
        <div className="relative ">

        <p>Abu Thahir ES </p>
        <a className="text-base" href="https://abu-thahir.vercel.app/"> Learn More → </a>
        </div>
      </div>
    </motion.div>
  )
}