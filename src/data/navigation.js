import { SITE } from './site';

export const navigation = [
  { id: 'home', label: 'Home', path: '/', href: '/' },
  { id: 'about', label: 'About', path: '/about', href: '/about' },
  { id: 'experience', label: 'Experience', path: '/experience', href: '/experience' },
  { id: 'skills', label: 'Skills', path: '/skills', href: '/skills' },
  { id: 'projects', label: 'Projects', path: '/projects', href: '/projects' },
  { id: 'freelance', label: 'Freelance', path: '/freelance', href: '/freelance' },
  { id: 'services', label: 'Services', path: '/services', href: '/services' },
  { id: 'contact', label: 'Contact', path: '/contact', href: '/contact' },
];

export const cta = {
  primary: { label: 'Hire Me', href: '/contact' },
  secondary: { label: 'View Projects', href: '/projects' },
  resume: {
    label: 'Download Resume',
    href: SITE.resumeUrl,
    download: 'Ankur-Kashyap-Resume.pdf',
  },
};

export const pagesMeta = {
  about: {
    eyebrow: 'About',
    title: 'About me',
    subtitle: 'Frontend craft, product polish, and clean React-focused delivery.',
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Professional journey',
    subtitle: 'Roles, responsibilities, and outcomes from product and client work.',
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Tools I ship with',
    subtitle: 'Frontend, UI systems, integrations, and collaboration skills I use every day.',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Featured work',
    subtitle: 'Real-world products and marketing builds with clear contribution scope.',
  },
  freelance: {
    eyebrow: 'Freelance',
    title: 'Client collaborations',
    subtitle: 'Work done with my brother on freelance client projects — honest ownership.',
  },
  services: {
    eyebrow: 'Services',
    title: 'What I can build',
    subtitle: 'React interfaces, dashboards, APIs, and maintainable frontend systems.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk on WhatsApp',
    subtitle: 'Send a message and it opens directly in WhatsApp so we can connect fast.',
  },
};
