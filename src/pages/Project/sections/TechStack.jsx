import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import { STACK } from '../../../data/datas';
import Marquee from '../../../Componets/Animations/Marquee';
import SectionLabel from '../../../Componets/UI/SectionLabel';
import SectionTitle from '../../../Componets/shared/SectionTitle';

export default function TechStack({ stack }) {
  // stack shape: { Frontend: [...], Backend: [...], Database: [...], Integration: [...] }
  const groups = Object.entries(stack);

  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">
      <div className="mb-5 max-w-xl">
        <SectionTitle eyebrow="Development" lineOne="   Built with the right technology" />

        <p className="mt-2 text-base text-gray-500">Modern tools. Practical solutions.</p>
      </div>
<div className='space-y-3'>


      <Marquee items={STACK} direction="left" speed={30} pauseOnHover={true} />
      <Marquee items={STACK} direction="right" speed={40} pauseOnHover={true} /></div>
    </section>
  );
}
