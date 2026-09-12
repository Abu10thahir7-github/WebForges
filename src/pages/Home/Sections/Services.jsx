import { Link } from 'react-router-dom';
import DiscoverTextAnimation from '../../../Componets/Animations/DiscoverTextAnimation.jsx';

import Button from '../../../Componets/UI/Button.jsx';
import SectionTitle from '../../../Componets/shared/SectionTitle.jsx';

function Services() {
  const solutions = [
    {
      title: 'Web Design & Development',
      desc: 'Custom, responsive sites built to load fast and convert visitors into leads.',
      href: '/services/webdesign',
      icon: <path d="M4 5h16v11H4V5Zm0 14h16M9 12l2-2 2 2 3-3" />,
    },
    {
      title: 'E-Commerce',
      desc: 'Conversion-ready online stores with secure checkout and inventory built in.',
      href: '/services/ecommerce',
      icon: <path d="M6 6h12l-1 13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 6ZM9 6V4a3 3 0 0 1 6 0v2" />,
    },
    {
      title: 'SEO Optimization',
      desc: 'Structured content and technical SEO so the right people can find you first.',
      href: '/services/seo-website',
      icon: <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35" />,
    },
    {
      title: 'Website Maintenance',
      desc: 'Ongoing updates, backups, and fixes so you never think about uptime again.',
      href: '/services/website-maintenance',
      icon: (
        <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4L21 6l-3-3-3.3 3.3Z" />
      ),
    },
    {
      title: 'Branding & Design',
      desc: 'Logos, banners, and visual identity that make your business recognizable.',
      href: '/services/branding',
      icon: (
        <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      ),
    },
    {
      title: 'Automation & Workflows',
      desc: 'Connect the tools you already use so leads and orders follow up themselves.',
      href: '/contact',
      icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
    },
  ];
  return (
    <section className="md:w-4/5 px-6 m-auto py-16 md:py-20" aria-labelledby="solutions-heading">



      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
 <SectionTitle
        eyebrow="Our Services"
        lineOne="Everything you need to "
        accentWord="launch and grow"
        lineTwoRest="online"

      />
        <div className="flex flex-col  ">
          <p className="max-w-sm text-sm pb-2 text-gray-500">
            Pick a starting point below, or tell us where you're stuck and we'll point you to the
            right one.
          </p>
          <Button to="/service" size="md" variant="primary">
            See all services
          </Button>
        </div>
      </div>
      <div className="relative z-10 mt-6 sm:mt-8">
        {' '}
        <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <DiscoverTextAnimation Text="Discovery our services" />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-2  md:gap-3 lg:grid-cols-3">
        {solutions.map((item, i) => (
          <Link
            key={item.title}
            to={item.href}
            className="group relative flex h-full flex-row items-center justify-between gap-3 overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 transition-all hover:border-gray-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bc17]"
          >
            {/* accent bar, top edge */}
            <span className="absolute left-0 top-0 h-1 w-0 bg-[#f6bc17] transition-all duration-300 group-hover:w-full" />

            {/* index + icon row */}
            <div className="flex items-center gap-2 justify-between">
              <span className="flex md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full md:border border-gray-200 bg-white text-gray-900 transition-all group-hover:border-[#f6bc17] group-hover:bg-[#f6bc17]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
              </span>
              <h3 className="sm:text-base text-sm font-semibold text-gray-900">{item.title}</h3>
            </div>

            {/* title + desc, grows to fill space */}

            {/* learn more, pinned to bottom, aligns across all cards */}
            <span className=" hidden sm:block flex items-center   text-sm font-medium text-gray-900">
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M2.85 10.89h10.87L8.73 15.88 10 17.14l7.14-7.14L10 2.86 8.74 4.12l4.98 4.98H2.85v1.79Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;
