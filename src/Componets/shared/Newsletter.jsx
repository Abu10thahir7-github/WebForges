import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../data/variants';
import SectionLabel from '../UI/SectionLabel';


export default function Newsletter({ data }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to real subscription endpoint
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-16">
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 rounded-3xl bg-gray-50 px-6 py-14 text-center sm:px-14"
      >
        <SectionLabel text={data.eyebrow} />
        <h2 className="max-w-lg text-2xl font-bold text-gray-900 sm:text-3xl">{data.title}</h2>
        <p className="max-w-md text-sm text-gray-500">{data.description}</p>

        {submitted ? (
          <p className="mt-4 text-sm font-medium text-gray-900">{data.successMessage}</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type={data.input.type}
              name={data.input.name}
              placeholder={data.input.placeholder}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full flex-1 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm text-gray-900 outline-none transition focus:border-[#f6bc17]"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-[#f6bc17] px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              {data.button}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}