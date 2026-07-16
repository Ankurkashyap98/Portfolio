import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/utils';

const variants = {
  primary:
    'bg-accent text-white shadow-[0_10px_30px_rgba(11,154,90,0.28)] hover:bg-accent-soft',
  secondary:
    'glass text-mist hover:border-accent/40 hover:shadow-[0_10px_28px_rgba(11,154,90,0.12)]',
  ghost:
    'bg-transparent border border-accent/25 text-mist hover:border-accent/50 hover:bg-accent/5',
};

const isInternalPath = (href) =>
  typeof href === 'string' &&
  href.startsWith('/') &&
  !href.startsWith('//') &&
  !href.endsWith('.pdf');

export const Button = ({
  as = 'button',
  href,
  children,
  variant = 'primary',
  className = '',
  magnetic = true,
  ...props
}) => {
  const internal = isInternalPath(href);
  const Comp = href ? (internal ? motion(Link) : motion.a) : motion[as] || motion.button;
  const linkProps = href
    ? internal
      ? { to: href }
      : { href }
    : {};

  return (
    <Comp
      {...linkProps}
      whileHover={magnetic ? { y: -2, scale: 1.02 } : undefined}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
