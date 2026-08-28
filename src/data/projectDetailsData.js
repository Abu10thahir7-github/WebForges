// TODO: swap every image path below for a real screenshot once assets are ready.

export const projectDetails = [

  {
    slug: 'trendzio',
    category: 'E-Commerce',
    title: 'Trendzio',
    tagline: 'A modern shopping experience built for the web.',
    liveUrl: 'https://www.trendzio.shop/',
    githubUrl: '',
    heroImage: 'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787915672/ChatGPT_Image_Aug_21_2026_10_03_26_AM_lfne9l.png',

    client: 'Trendzio',
    industry: 'E-Commerce',
    service: 'Web Development',
    role: 'Design + Development',
    year: '2026',
    status: 'Completed',

    challenge:
      'The goal was to create a fast, responsive storefront that could present products clearly while providing a smooth shopping experience from browsing to checkout, without the clutter that slows most e-commerce sites down.',
    approach:
      'We started with the product-discovery flow — how a visitor moves from landing, to browsing, to a single product page — and built the interface around that path first, adding merchandising and marketing elements afterward rather than before.',
    design:
      'The UI leans on generous whitespace, a restrained color palette, and large product photography so the products stay the visual focus. Every interactive element was designed to feel immediate — no unnecessary transitions standing between a customer and checkout.',
    development:
      'Built as a performant Next.js storefront with a MongoDB-backed product catalog, server-rendered pages for SEO, and a component library shared across product, cart, and checkout flows to keep the codebase consistent as it grows.',

    keyFeatures: [
      { title: 'Product Catalog', desc: 'Structured, filterable listings with category and search support.' },
      { title: 'Cart & Checkout', desc: 'A streamlined, low-friction path from cart to confirmed order.' },
      { title: 'Responsive Layouts', desc: 'Fully adapted layouts across mobile, tablet, and desktop.' },
      { title: 'Secure Payments', desc: 'Integrated payment handling built with security best practices.' },
    ],

    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],

    screenshots: [

    ],

    outcome:
      'A responsive e-commerce platform with structured product experiences, modern UI, and a scalable technical foundation.',
  },
  {
    slug: 'flyocean',
    category: 'Travel / Business Website',
    title: 'Flyocean Travel & Tourism',
    tagline: 'A destination-first website for a growing travel brand.',
    liveUrl: 'https://www.flyoceantravel.com/',
    githubUrl: '',
    heroImage: 'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787916002/ChatGPT_Image_Aug_13_2026_04_16_27_PM_gfd6nu.png',

    client: 'Flyocean Travel & Tourism',
    industry: 'Travel & Tourism',
    service: 'Web Development',
    role: 'Design + Development',
    year: '2025',
    status: 'Completed',

    challenge:
      'The business needed a website that could showcase travel packages and destinations persuasively, while remaining simple enough for the team to update without developer help.',
    approach:
      'We prioritized visual storytelling — large destination imagery, clear package breakdowns, and a straightforward enquiry path — over dense text, since travel decisions are driven by imagery and trust.',
    design:
      'A warm, editorial layout with large photography blocks and clean typography, designed to feel like a travel magazine rather than a generic booking form.',
    development:
      'A React front end with Tailwind CSS and Framer Motion for subtle scroll-based reveals, kept lightweight so pages load quickly even on mobile connections.',

    keyFeatures: [
      { title: 'Destination Showcases', desc: 'Rich imagery-led sections for each travel package.' },
      { title: 'Enquiry Forms', desc: 'A simple path for visitors to request a quote or callback.' },
      { title: 'Mobile-First Layout', desc: 'Designed primarily for the mobile browsing most visitors use.' },
      { title: 'Fast Load Times', desc: 'Optimized imagery and lightweight animation for quick page loads.' },
    ],

    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],

    screenshots: [
      '/images/projects/flyocean-1.png',
      '/images/projects/flyocean-2.png',
    ],

    outcome:
      'A modern, imagery-led business website that presents travel packages clearly and gives the team an easy way to keep content current.',
  },
  {
    slug: 'talktower',
    category: 'Education / Learning Platform',
    title: 'Talk Tower',
    tagline: 'A learning platform built around clarity, not clutter.',
    liveUrl: 'https://www.talktower.in/',
    githubUrl: '',
    heroImage: 'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787916008/ChatGPT_Image_Aug_13_2026_04_55_08_PM_p9givb.png',

    client: 'Talk Tower',
    industry: 'Education',
    service: 'Web Development',
    role: 'Design + Development',
    year: '2025',
    status: 'Completed',

    challenge:
      'The platform needed to organize course content, manage user progress, and remain simple to navigate for learners with varying levels of technical comfort.',
    approach:
      'We mapped the learner journey first — sign-up, course access, progress tracking — then designed each screen around a single clear action, avoiding the dashboard overload common in learning platforms.',
    design:
      'A calm, focused interface with clear typographic hierarchy, letting course content take center stage instead of competing with heavy navigation chrome.',
    development:
      'A React and Node.js application with MongoDB for course and user data, structured so new course types can be added without reworking the core data model.',

    keyFeatures: [
      { title: 'Course Navigation', desc: 'Clear, structured access to lessons and modules.' },
      { title: 'Progress Tracking', desc: 'Learners can see exactly where they left off.' },
      { title: 'User Accounts', desc: 'Simple sign-up and profile management.' },
      { title: 'Responsive Design', desc: 'A consistent experience across devices.' },
    ],

    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],

    screenshots: [
      '/images/projects/talktower-1.png',
      '/images/projects/talktower-2.png',
    ],

    outcome:
      'A structured learning platform with clear course navigation, a clean interface, and a foundation built to support future course and user growth.',
  },


  {
    slug: 'velonto',
    category: 'Food Delivery',
    title: 'Velonto',
    tagline: 'Connecting local restaurants with hungry customers.',
    liveUrl: 'https://velonto.vercel.app/',
    githubUrl: '',
    heroImage: 'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787915679/ChatGPT_Image_Aug_21_2026_10_05_14_AM_tzgclc.png',

    client: 'Velonto',
    industry: 'Food & Delivery',
    service: 'Web Application Development',
    role: 'Design + Development',
    year: '2025',
    status: 'Completed',

    challenge:
      'The platform needed to make ordering food from local restaurants feel as fast and easy as browsing a menu on a phone, with minimal steps to checkout.',
    approach:
      'We focused the design around the ordering path — menu browsing, cart, and checkout — keeping every other feature secondary to that core flow.',
    design:
      'A bright, appetite-driven visual style with food photography front and center, paired with a simple, thumb-friendly mobile layout.',
    development:
      'A React application backed by Firebase for real-time order and menu data, chosen to keep the build lightweight and fast to iterate on.',

    keyFeatures: [
      { title: 'Restaurant Listings', desc: 'Browse local restaurants and their menus.' },
      { title: 'Real-Time Ordering', desc: 'Live order status backed by Firebase.' },
      { title: 'Cart & Checkout', desc: 'A quick, mobile-first ordering flow.' },
      { title: 'Responsive Design', desc: 'Built mobile-first for on-the-go ordering.' },
    ],

    techStack: ['React', 'Firebase', 'Tailwind CSS'],

    screenshots: ['/images/projects/velonto-1.png', '/images/projects/velonto-2.png'],

    outcome:
      'A fast, mobile-first food ordering platform connecting local restaurants with customers through a clean, simple interface.',
  },
];

export function getProjectBySlug(slug) {
  return projectDetails.find(p => p.slug === slug);
}

export function getAdjacentProject(slug) {
  const index = projectDetails.findIndex(p => p.slug === slug);
  if (index === -1) return projectDetails[0];
  return projectDetails[(index + 1) % projectDetails.length];
}