export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const SECTION_IDS = {
  home: 'home',
  about: 'about',
  experience: 'experience',
  skills: 'skills',
  projects: 'projects',
  freelance: 'freelance',
  services: 'services',
  testimonials: 'testimonials',
  contact: 'contact',
};

export const ANIMATION = {
  ease: [0.22, 1, 0.36, 1],
  duration: {
    fast: 0.35,
    base: 0.6,
    slow: 0.9,
  },
  stagger: 0.08,
};

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};
