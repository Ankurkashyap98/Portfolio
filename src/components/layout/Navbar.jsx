import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { navigation, cta, SITE } from '@/data';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { cn } from '@/utils';

export const Navbar = () => {
  const { scrolled } = useScrollProgress();
  const { menuOpen, setMenuOpen } = useApp();
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'mx-auto mt-3 flex w-[min(1120px,calc(100%-1.5rem))] items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 md:px-5',
          scrolled ? 'glass shadow-[0_12px_40px_rgba(13,31,22,0.08)]' : 'bg-transparent'
        )}
      >
        <NavLink
          to="/"
          className="flex items-center gap-2"
          aria-label={`${SITE.name} home`}
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-ink-elevated text-sm font-semibold text-accent">
            {SITE.logoText}
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-mist sm:inline">
            {SITE.name}
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                cn(
                  'relative rounded-full px-3 py-2 text-sm transition-colors',
                  isActive ? 'text-accent' : 'text-muted hover:text-mist'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-accent"
                    />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            href={cta.resume.href}
            variant="ghost"
            className="!px-4 !py-2"
            download={cta.resume.download}
          >
            <Icon name="FiDownload" className="h-4 w-4" />
            Resume
          </Button>
          <Button href={cta.primary.href} className="!px-4 !py-2">
            {cta.primary.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 text-mist lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Icon name={menuOpen ? 'FiX' : 'FiMenu'} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass mx-auto mt-2 w-[min(1120px,calc(100%-1.5rem))] rounded-2xl p-4 lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-3 py-3 text-sm',
                      isActive || location.pathname === item.path
                        ? 'bg-accent/10 text-accent'
                        : 'text-mist'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Button href={cta.resume.href} variant="ghost" download={cta.resume.download}>
                  Resume
                </Button>
                <Button href={cta.primary.href}>{cta.primary.label}</Button>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
};
