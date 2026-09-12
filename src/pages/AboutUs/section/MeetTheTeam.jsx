import { motion } from 'framer-motion';
import { fadeIn } from '../../../data/variants';
import SectionTitle from '../../../Componets/shared/SectionTitle';

const TEAM = [
  {
    name: 'Muhammed Sulaiman T',

    desc: 'Builds the systems and infrastructure behind every project.',
    link: 'https://mhdsulu786.vercel.app/',
  },
  {
    name: 'Abu Thahir ES',

    desc: 'Turns designs into fast, responsive, real interfaces.',
    link: 'https://abu-thahir.vercel.app/',
  },
];

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();
}

export default function MeetTheTeam() {
  return (
    <section className="md:w-4/5 px-3 m-auto border-t border-gray-200 py-8">
      <SectionTitle eyebrow="Our Team" lineOne="Meet the" accentWord="team" breakLine={false} />

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((member, index) => (
          <motion.a
            key={member.name}
            href={member.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn('up', 0.1 + index * 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-[#f6bc17] group-hover:text-black">
                {initials(member.name)}
              </div>   <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-[#f6bc17] group-hover:text-[#f6bc17]">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.857 10.893h10.866l-4.991 4.992 1.268 1.259 7.143-7.143-7.143-7.143-1.259 1.259 4.982 4.991H2.857v1.785Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>

           

            <p className="text-sm leading-relaxed text-gray-500">{member.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}