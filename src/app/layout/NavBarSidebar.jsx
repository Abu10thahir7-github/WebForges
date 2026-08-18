import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../data/variants';
import { Link, useLocation } from 'react-router-dom';
import image_logo from '../../assets/images/brand/logo.png';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Pricing', href: '/pricing', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBarSidebar() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 50,
        width: '100%',
      }}
    >
      <Disclosure as="nav" className="navbar-container border-hidden bg-transparent">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <center className="sm:hidden text-2xl flex items-center">
              <img src={image_logo} alt="webforges-logo" className="w-20 h-20" />
            </center>

            {/* Mobile button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray hover:text-white focus:ring-2 focus:bg-yellow-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21M3 6H21M9 18H21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </DisclosureButton>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch">
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map(item => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={classNames(
                          isActive
                            ? 'bg-yellow-500 text-black'
                            : 'text-white hover:bg-yellow-500 hover:text-black',
                          'rounded-full uppercase px-3 py-2 text-sm font-normal lg:text-lg',
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map(item => {
              const isActive = location.pathname === item.href;
              return (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={classNames(
                    isActive
                      ? 'bg-yellow-500 text-black'
                      : 'text-gray-300 hover:bg-yellow-500 hover:text-white',
                    'block uppercase rounded-full px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              );
            })}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </motion.div>
  );
}
