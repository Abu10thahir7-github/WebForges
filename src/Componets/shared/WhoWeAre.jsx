import { Link } from 'react-router-dom';

import SectionLabel from '../../Componets/UI/SectionLabel';
import SectionTitle from './SectionTitle';
import Button from '../UI/Button';

const AUDIENCE = [
  'Startups',
  'Small Businesses',
  'Local Businesses',
  'E-commerce Brands',
  'Growing Companies',
  'Service Businesses',
];

export default function WhoWeAre({ image = '/images/about/team-working.jpg' }) {
  return (
    <section className="md:w-4/5 px-3 m-auto border-t border-gray-200 py-8 ">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        {/* Left — sticky heading + CTA + image */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div>
            <SectionTitle
              eyebrow="Who We Are"
              lineOne="We build digital experiences that"
              accentWord="move businesses forward."
            />
          </div>

          <div className="mt-8">
            <Button
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f6bc17] px-6 py-3 text-sm font-medium text-black shadow-md transition-transform hover:scale-105"
            >
              Let's Build Something
            </Button>
          </div>

          {/* Supporting image */}
          <div className="mt-10 hidden overflow-hidden rounded-3xl lg:block">
            <img
            src="https://res.cloudinary.com/dcrf52w3g/image/upload/v1789278519/whoweare_cg4isj.png"
              alt="The WebForges team at work"
              loading="lazy"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>

        {/* Right — body content */}
        <div className="flex flex-col gap-6">
          {/* Mobile-only image — shown above body copy since sticky doesn't apply on small screens */}
          <div className="overflow-hidden rounded-3xl lg:hidden">
            <img
              src="https://res.cloudinary.com/dcrf52w3g/image/upload/v1789278519/whoweare_cg4isj.png"
              alt="The WebForges team at work"
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>

          <p className=" text-base leading-relaxed text-gray-500">
            WebForges is a web development and digital experience agency helping businesses turn
            ideas into professional, effective online experiences.
          </p>

          <p className="text-base leading-relaxed text-gray-500">
            We combine thoughtful design, practical development, and a clear understanding of
            business goals to create websites that are easy to use, built to perform, and designed
            to grow with your business.
          </p>

          <p className="text-base leading-relaxed text-gray-500">
            From a new business website to an e-commerce store, landing page, or complete redesign,
            we focus on creating digital experiences that make a real difference — not just websites
            that look good.
          </p>

          {/* Goal callout */}
          <div className="border-l-4 border-[#f6bc17] bg-gray-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Our goal is simple
            </p>
            <p className="mt-2 text-xl font-medium leading-snug text-gray-900 sm:text-2xl">
              Make your business easier to discover, understand, trust, and choose online.
            </p>
          </div>

          {/* Who we work with */}
          <div className="border-t border-gray-100 pt-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
              We work with
            </p>
            <div className="flex flex-wrap gap-2.5">
              {AUDIENCE.map(item => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}