const ContactPageData = {
  hero: {
    eyebrow: 'CONTACT',
    title: "LET'S BUILD SOMETHING THAT MATTERS.",
    description:
      "Tell us what you're building, what you're trying to improve, or where you're stuck. We'll help you figure out the right next step.",
    primaryCta: 'Start a Project',
    secondaryCta: 'Ask a Question',
  },
  contactOptions: [
    {
      title: 'Start a Project',
      description:
        "Have a website, e-commerce store, or digital project in mind? Tell us what you need and let's turn the idea into something real.",
      cta: 'Start a Project',
      bg: 'bg-yellow-50',
    },
    {
      title: 'Ask a Question',
      description:
        "Not sure what you need yet? Share your idea, and we'll help you understand the best direction.",
      cta: 'Send an Enquiry',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Existing Client',
      description:
        "Need an update, improvement, or support with an existing project? We're here to help.",
      cta: 'Get Support',
      bg: 'bg-green-50',
    },
  ],
  projectForm: {
    eyebrow: 'PROJECT ENQUIRY',
    title: 'Tell Us About Your Project',
    description:
      'Share a few details about your project. The more we know, the better we can understand your goals and recommend the right approach.',
    fields: [
      {
        name: 'name',
        label: 'Name',
        placeholder: 'Your name',
        type: 'text',
        required: true,
      },
      {
        name: 'email',
        label: 'Email',
        placeholder: 'you@example.com',
        type: 'email',
        required: true,
      },
      {
        name: 'business',
        label: 'Business / Company',
        placeholder: 'Your business name',
        type: 'text',
        required: false,
      },
      {
        name: 'service',
        label: 'What do you need?',
        type: 'select',
        required: true,
        options: [
          'Business Website',
          'E-commerce Website',
          'Landing Page',
          'Website Redesign',
          'Custom Web Application',
          'Other',
        ],
      },
      {
        name: 'message',
        label: 'Tell us about your project',
        placeholder:
          "Briefly describe your goals, requirements, or the problem you're trying to solve.",
        type: 'textarea',
        required: true,
      },
      {
        name: 'budget',
        label: 'Budget Range',
        type: 'select',
        required: false,
        options: [
          '₹5,000 – ₹10,000',
          '₹10,000 – ₹25,000',
          '₹25,000 – ₹50,000',
          '₹50,000+',
          'Not sure yet',
        ],
      },
      {
        name: 'timeline',
        label: 'Timeline',
        type: 'select',
        required: false,
        options: ['ASAP', '1–2 weeks', '1 month', '1–3 months', 'Flexible'],
      },
      {
        name: 'source',
        label: 'How did you find us?',
        type: 'select',
        required: false,
        options: ['Google', 'Instagram', 'LinkedIn', 'Referral', 'Other'],
      },
    ],
    submitCta: 'Send Project Enquiry',
    supportingText: 'We usually respond within 1 business day.',
  },
  directContact: {
    eyebrow: 'GET IN TOUCH',
    title: 'Prefer to Talk Directly?',
    description:
      'Have a quick question or want to discuss your project before filling out the form? Reach out directly.',
    email: {
      label: 'Email',
      value: 'webforges.site@gmail.com',
    },
    phone: {
      label: 'Phone / WhatsApp',
      value: '+91 90374 35846',
    },
    location: {
      label: 'Location',
      value: 'Palakkad, Kerala, India',
    },

    cta: 'Chat on WhatsApp',
  },
  process: {
    eyebrow: 'WHAT HAPPENS NEXT',
    title: 'From Message to Launch',
    steps: [
      {
        number: '01',
        title: 'Tell Us About It',
        description: 'Share your idea, goals, requirements, and what you want to achieve.',
        bg: 'bg-white',
      },
      {
        number: '02',
        title: 'We Review',
        description:
          "We'll understand your needs and recommend a practical direction for the project.",
          bg: 'bg-[#FCF2D9]',
      },
      {
        number: '03',
        title: 'Plan & Proposal',
        description: "You'll receive a clear scope, timeline, and pricing before the work begins.",
        bg: 'bg-[#E9E7FB]',
      },
      {
        number: '04',
        title: 'Build & Refine',
        description:
          'We create the project, review it with you, and refine the details based on feedback.',
          bg: 'bg-emerald-50',
      },
      {
        number: '05',
        title: 'Launch',
        description:
          'Once everything is ready, we launch your project and provide the required support.',
            bg: 'bg-yellow-50',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Before You Reach Out',
    items: [
      {
        q: 'How quickly will you respond?',
        a: 'We typically respond within 1 business day.',
      },
      {
        q: 'Do you work with clients remotely?',
        a: 'Yes. We work with businesses across India and beyond through online communication and collaboration.',
      },
      {
        q: 'Can I contact you before deciding on a package?',
        a: "Absolutely. You can discuss your requirements with us before choosing a plan. We'll help you understand the best option for your project.",
      },
      {
        q: "What if I don't know exactly what I need?",
        a: "That's completely fine. Tell us about your business, goals, and current situation, and we'll help you determine the right direction.",
      },
      {
        q: 'Can I request a custom project?',
        a: "Yes. If your requirements don't fit our standard packages, we can create a custom proposal based on your specific needs.",
      },
      {
        q: 'Can you redesign my existing website?',
        a: 'Yes. We can review your current website and improve its structure, visual experience, usability, and overall customer journey.',
      },
      {
        q: 'Do you provide support after launch?',
        a: 'Yes. We can provide post-launch support and continue helping with updates, improvements, maintenance, and future requirements.',
      },
      {
        q: 'How much does a project cost?',
        a: 'Pricing depends on the type of project, scope, number of pages, features, and level of customization. We offer clear packages as well as custom quotes.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'HAVE A PROJECT IN MIND?',
    title: "LET'S START A CONVERSATION.",
    description:
      "No complicated process. No pressure. Just tell us what you're trying to build, and we'll take it from there.",
    cta: 'Start Your Project',
      "button": {
      "label": "Start a project",
      "href": "/contact"
    }
  },
};

export default ContactPageData;
