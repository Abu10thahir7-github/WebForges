import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import { STACK } from '../../../data/datas';
import Marquee from '../../../Componets/Animations/Marquee';
import SectionLabel from '../../../Componets/UI/SectionLabel';

export default function TechStack({ stack }) {
  // stack shape: { Frontend: [...], Backend: [...], Database: [...], Integration: [...] }
  const groups = Object.entries(stack);


  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">

      <div

        className="mb-5 max-w-xl"
      >
          <SectionLabel text=" Development" />

        <h2 className="text-2xl mt-2 font-bold text-gray-900 sm:text-3xl">
          Built with the right technology
        </h2>
        <p className="mt-2 text-base text-gray-500">Modern tools. Practical solutions.</p>
      </div>

       <Marquee items={STACK} direction="left" speed={30} pauseOnHover={true} />
    </section>
  );
}