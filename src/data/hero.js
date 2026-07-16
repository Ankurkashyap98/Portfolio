export const hero = {
  greeting: 'Hello, I am',
  name: 'Ankur Kashyap',
  roles: [
    'MERN Stack Developer',
    'Frontend Developer',
    'UI Developer',
    'React Developer',
  ],
  description:
    'I build polished, responsive web interfaces with React, Next.js, Node.js, Express.js, MYSQL,PostgreSQL, Tailwind CSS, and modern UI libraries — from marketing sites to long-term product frontends.',
  stats: [
    { id: 'experience', value: 2, suffix: '+', label: 'Years Experience' },
    { id: 'projects', value: 10, suffix: '+', label: 'Projects Shipped' },
    { id: 'stack', value: 15, suffix: '+', label: 'Technologies' },
  ],
  ctas: [
    { id: 'hire', label: 'Hire Me', href: '/contact', variant: 'primary' },
    { id: 'projects', label: 'View Projects', href: '/projects', variant: 'secondary' },
    {
      id: 'resume',
      label: 'Download Resume',
      href: '/resume.pdf',
      variant: 'ghost',
      download: 'Ankur-Kashyap-Resume.pdf',
    },
  ],
  scrollHint: 'Scroll to explore',
};
