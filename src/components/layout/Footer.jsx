import { Link } from 'react-router-dom';
import { footer, navigation, socialLinks, SITE } from '@/data';
import { Icon } from '@/components/common/Icon';

export const Footer = () => {
  return (
    <footer className="relative border-t border-accent/10 bg-white/50 backdrop-blur-sm">
      <div className="container-shell section-padding !py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 text-accent">
                {SITE.logoText}
              </span>
              <div>
                <p className="font-medium text-mist">{SITE.fullName}</p>
                <p className="text-sm text-muted">{SITE.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{footer.tagline}</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-sm text-muted transition hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 text-muted transition hover:border-accent/45 hover:text-accent"
              >
                <Icon name={link.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-black/5 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">{footer.copyright}</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full border border-accent/20 px-4 py-2 text-sm text-mist transition hover:border-accent/45 hover:text-accent"
            aria-label={footer.backToTopLabel}
          >
            <Icon name="FiArrowUp" className="h-4 w-4" />
            {footer.backToTopLabel}
          </button>
        </div>
      </div>
    </footer>
  );
};
