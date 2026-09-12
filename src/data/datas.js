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

export const
HomeFaqs = [
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
export const AboutFaqs = [
  {
    "q": "How does a project start?",
    "a": "We start with a quick conversation to understand your business, goals, audience, and requirements. Then we recommend the right approach, scope, and next steps."
  },
  {
    "q": "How long does a website take?",
    "a": "Most projects take around 1–4 weeks, depending on the number of pages, features, content, and feedback cycles."
  },
  {
    "q": "Can you redesign an existing website?",
    "a": "Yes. We can redesign your existing website to improve its visual quality, usability, mobile experience, structure, and overall customer journey."
  },
  {
    "q": "Do you provide ongoing support?",
    "a": "Yes. We provide support after launch and can continue helping with updates, improvements, maintenance, and future requirements."
  },
  {
    "q": "Can you build custom features?",
    "a": "Yes. We can create custom functionality based on your business needs, including unique workflows, dashboards, booking systems, e-commerce features, and other requirements."
  },
  {
    "q": "Do you work with businesses outside Kerala?",
    "a": "Yes. We work with businesses across India and beyond. Projects can be handled remotely through online meetings and communication."
  },
  {
    "q": "Can you help if I don't have a clear idea?",
    "a": "Absolutely. We can help turn your idea into a clear plan by understanding your goals and suggesting the right structure and user experience."
  },
  {
    "q": "Do you provide website content?",
    "a": "We can help with content structure, messaging, and page copy. If you already have content, we can organize it appropriately for the website."
  },
  {
    "q": "Can you build a website for a new business?",
    "a": "Yes. We work with startups, small businesses, and growing brands to create a professional online presence from the ground up."
  },
  {
    "q": "What happens after the website is launched?",
    "a": "We make sure everything is working properly and provide the necessary handover and support. You can also continue with us for future improvements and updates."
  },
  {
    "q": "Can I request changes during the project?",
    "a": "Yes. Feedback is part of the process. We review requested changes together and keep the project aligned with your goals and agreed scope."
  },
  {
    "q": "How much does a website cost?",
    "a": "The cost depends on the type of website, number of pages, features, and level of customization. We offer clear packages and can also provide a custom quote for specific requirements."
  }
]
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
   bg: 'bg-yellow-50',
  },
  {
    title: 'Responsive experience',
    desc: 'Designed for desktop, tablet and mobile users.',
  bg: 'bg-[#FCF2D9]',
  },
  {
    title: 'Improved user experience',
    desc: 'Simplified navigation and clearer content hierarchy.',
   bg: 'bg-emerald-50',
  },
];

export const whyWebForgesData = {
  eyebrow: 'Why WebForges',
  headingLines: ['More than just a website.'],
  background: 'bg-white',
  columns: 3,
  points: [
    {
      title: 'Built around your goals',
      desc: 'Every project is designed around your business, audience, and objectives.',

      bg: 'bg-emerald-50',
    },
    {
      title: 'Clear communication',
      desc: 'Stay informed throughout the project with straightforward communication.',

      bg: 'bg-yellow-50',
    },
    {
      title: 'Designed to grow',
      desc: 'We build flexible digital experiences that can evolve with your business.',

      bg: 'bg-[#E9E7FB]',
    },
  ],
};

// src/data/featuredArticles.js
export const featuredArticles = [
  {
    eyebrow: 'Featured',
    category: 'Web Development',
    title: 'How to Build a Website That Actually Grows Your Business',
    excerpt:
      "A website isn't just a digital brochure — it's a growth tool. Here's how to think about structure, content, and conversion from day one.",
    image:
      'https://res.cloudinary.com/dcrf52w3g/image/upload/v1789120351/featured-article_pschgw.webp',
    link: '/articles/how-to-build-a-website-that-grows-your-business',
  },
];
