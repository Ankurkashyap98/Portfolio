export const cn = (...classes) => classes.filter(Boolean).join(' ');

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const scrollToId = (id) => {
  const el = document.getElementById(id.replace('#', ''));
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const isExternalUrl = (url) =>
  typeof url === 'string' && /^(https?:)?\/\//.test(url);

export const formatCounter = (value) => {
  if (value >= 1000) return `${Math.round(value / 100) / 10}k`;
  return String(value);
};
