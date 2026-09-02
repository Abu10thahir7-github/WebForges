export const keyFeatures = [
  'Responsive storefront',
  'Product browsing',
  'Product details',
  'Search & filtering',
  'Shopping cart',
  'Secure checkout flow',
  'Admin functionality',
  'Responsive mobile experience',
];

export const designIntro =
  'Every screen was structured around simple navigation, clear product information, and a consistent visual system.';

export const designImages = {
  'Desktop UI': [
    'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787935734/ChatGPT_Image_Aug_28_2026_09_06_43_PM_y6t89b.png',
  ],
  'Mobile UI': [
    'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787935722/ChatGPT_Image_Aug_28_2026_09_11_38_PM_mz5z5p.png',
  ],
  Components: [
    'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787935721/ChatGPT_Image_Aug_28_2026_09_14_21_PM_dnalrt.png',
  ],
  Typography: [
    'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787935712/ChatGPT_Image_Aug_28_2026_09_16_42_PM_ycsr3h.png',
  ],
  'Color System': [
    'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787935723/ChatGPT_Image_Aug_28_2026_09_18_58_PM_jpxpsg.png',
  ],
  Interaction: [
    'https://res.cloudinary.com/dcrf52w3g/image/upload/v1787935731/ChatGPT_Image_Aug_28_2026_09_21_59_PM_ccjydp.png',
  ],
};

export const techStack = {
  Frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js'],
  Database: ['MongoDB'],
  Integration: ['REST APIs'],
};

export const screenshotSections = [
  { label: 'Homepage', image: '/images/projects/trendzio-home.png', type: 'desktop' },
  { label: 'Product experience', image: '/images/projects/trendzio-product.png', type: 'desktop' },
  { label: 'Mobile experience', image: '/images/projects/trendzio-mobile.png', type: 'mobile' },
  { label: 'Dashboard / Admin', image: '/images/projects/trendzio-admin.png', type: 'desktop' },
];
export const Plans = [
  {
    category: 'Static website',
    name: 'Starter',
    price: '₹4,999–₹6,999',
    audience: 'Best for personal websites & small businesses',
    features: [
      '1–5 pages, fully responsive',
      'Custom modern UI design',
      'Contact form integration',
      'Basic SEO setup',
      'Social media links',
      'WhatsApp chat button',
      'Free domain, 1 year (limited)',
      '1 week of free support',
    ],
    cta: 'Build my site',
    active: false,
  },
  {
    category: 'E-commerce website',
    name: 'Business',
    price: '₹14,999',
    audience: 'Best for startups & small online stores',
    features: [
      'Product listing & categories',
      'Add to cart & checkout',
      'User login & signup',
      'Payment gateway integration',
      'Order management dashboard',
      'Mobile & tablet responsive',
      'Basic SEO setup',
      'WhatsApp order support',
      'Free domain, 1 year (limited)',
      '1 month of free support',
    ],
    cta: 'Launch my store',
    active: true,
    tag: 'Recommended for stores',
  },
  {
    category: 'Advanced, SEO + Ads',
    name: 'Premium Pro',
    price: '₹34,999',
    audience: 'Best for growing brands & professional businesses',
    features: [
      'Unlimited pages / products',
      'Premium UI/UX design',
      'Advanced admin dashboard',
      'Secure website (SSL + protection)',
      'Payment gateway & order tracking',
      'Speed & performance optimization',
      '1 month SEO optimization',
      '1 month Meta ads setup (FB & Instagram)',
      'Backup & security setup',
      'Mobile, tablet & desktop responsive',
      'Free domain, 1 year (limited)',
      'Free hosting, 1 year',
      '3 months of priority support',
    ],
    cta: 'Scale with Premium Pro',
    active: false,
  },
];

export const ComparisonRows = [
  { label: 'Pages', values: ['1–5', '5–10+', 'Unlimited'] },
  { label: 'Responsive design', values: [true, true, true] },
  { label: 'UI/UX design', values: [true, true, 'Premium'] },
  { label: 'SEO', values: ['Basic', 'Basic', 'Advanced'] },
  { label: 'Admin dashboard', values: [false, true, true] },
  { label: 'Payment integration', values: [false, true, true] },
  { label: 'Support', values: ['1 week', '1 month', '3 months'] },
];


export const HomeFaqs = [
  {
    q: 'What services does WebForges offer?',
    a: 'We build business websites, e-commerce stores, landing pages, web portals, and custom web applications — along with SEO, branding, and business automation to help you work smarter, not just look good online.',
  },
  {
    q: 'How long does it take to build a website?',
    a: "A static or business website typically takes 1–2 weeks. E-commerce stores and custom portals usually take 3–6 weeks depending on features. We'll give you a clear timeline before the project starts.",
  },
  {
    q: 'How much does a website cost?',
    a: 'Pricing depends on scope — from affordable starter sites for small businesses to advanced e-commerce and portal builds. Check our Pricing page for tiered plans, or reach out for a custom quote.',
  },
  {
    q: 'Do you provide hosting and domain support?',
    a: "Yes. Most of our plans include free domain registration for the first year and guidance on hosting setup, so you don't have to manage the technical side alone.",
  },
  {
    q: 'Will my website be mobile-friendly and SEO-optimized?',
    a: 'Every site we build is fully responsive across devices and includes on-page SEO essentials — proper heading structure, meta tags, fast load times, and structured data — from day one.',
  },
  {
    q: 'Do you offer support after the website is launched?',
    a: 'Yes — we offer ongoing website maintenance and support plans covering updates, backups, bug fixes, and performance monitoring, so your site stays secure and up to date.',
  },
  {
    q: 'Can you redesign my existing website instead of building from scratch?',
    a: 'Absolutely. We offer website redesign services to modernize outdated sites — improving UI/UX, performance, and SEO while preserving what already works for your brand.',
  },
  {
    q: 'How do I get started with WebForges?',
    a: "Just reach out through our Contact page or WhatsApp. We'll discuss your goals, recommend the right solution, and share a timeline and quote — no pressure, no obligation.",
  },
];
export const Pricingfaqs = [
  {
    q: 'What’s included in the website price?',
    a: 'Each plan includes design, development, responsive layouts, basic setup, and the features listed under that plan. Additional requirements can be discussed before the project starts.',
  },
  {
    q: 'How long does a project take?',
    a: 'Project timelines depend on the scope and requirements. A simple website can usually be completed within 1–2 weeks, while larger projects may take several weeks.',
  },
  {
    q: 'Can I request custom features?',
    a: 'Yes. Custom features can be added based on your requirements. We will discuss the functionality and pricing before development begins.',
  },
  {
    q: 'Do you provide hosting and domain?',
    a: 'Yes. Hosting and domain setup can be provided as part of selected plans or as an additional service, depending on your requirements.',
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Yes. You can upgrade your project as your business grows. Additional features and services can be added based on your new requirements.',
  },
  {
    q: 'Do you provide maintenance and support?',
    a: 'Yes. Support is included for a limited period depending on the selected plan. Ongoing maintenance and updates can also be arranged separately.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept common payment methods such as UPI, bank transfer, and other agreed payment options. Payment terms will be confirmed before the project begins.',
  },
  {
    q: 'Is there any hidden cost?',
    a: 'No. We aim to keep pricing transparent. Any additional cost will be discussed and approved before extra work begins.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. We can redesign an existing website to improve its UI, usability, responsiveness, performance, and overall user experience.',
  },
  {
    q: 'Can you build a completely custom website?',
    a: 'Yes. If your requirements do not fit one of the listed plans, we can create a custom package based on your project scope and goals.',
  },
];
export const STACK = [
  'Next.js',
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'Tailwind CSS',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'REST APIs',
  'Redux Toolkit',
  'Figma',
  'Git',
  'GitHub',
  'Webhooks',
  'API Integrations',
  'Workflow Automation',
];
// Only if you have real data:
export const metrics = null; // e.g. [{ value: '+38%', label: 'Conversion rate' }, ...]

export const qualitative = [
  {
    title: 'A scalable foundation',
    desc: 'Built with a maintainable architecture ready for future features.',
  },
  {
    title: 'Responsive experience',
    desc: 'Designed for desktop, tablet and mobile users.',
  },
  {
    title: 'Improved user experience',
    desc: 'Simplified navigation and clearer content hierarchy.',
  },
];
