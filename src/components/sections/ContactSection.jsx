import { AnimatePresence, motion } from 'framer-motion';
import { contact, socialLinks } from '@/data';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Reveal } from '@/components/common/Reveal';
import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { useContactForm } from '@/hooks/useContactForm';
import { cn } from '@/utils';

const Field = ({ field, value, error, onChange }) => {
  const shared =
    'peer w-full rounded-2xl border border-accent/15 bg-white px-4 pb-3 pt-6 text-sm text-mist outline-none transition focus:border-accent/45 focus:shadow-[0_0_0_4px_rgba(11,154,90,0.1)]';

  return (
    <label className="relative block">
      {field.type === 'textarea' ? (
        <textarea
          id={field.id}
          name={field.name}
          rows={field.rows || 5}
          value={value}
          onChange={onChange}
          required={field.required}
          placeholder=" "
          className={cn(shared, 'resize-y min-h-[140px]', error && 'border-red-400/50')}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${field.id}-error` : undefined}
        />
      ) : (
        <input
          id={field.id}
          name={field.name}
          type={field.type}
          value={value}
          onChange={onChange}
          required={field.required}
          autoComplete={field.autoComplete}
          placeholder=" "
          className={cn(shared, error && 'border-red-400/50')}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${field.id}-error` : undefined}
        />
      )}
      <span className="pointer-events-none absolute left-4 top-3 text-xs text-muted transition peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-accent">
        {field.label}
      </span>
      {error ? (
        <span id={`${field.id}-error`} className="mt-1.5 block text-xs text-red-600">
          {error}
        </span>
      ) : null}
    </label>
  );
};

export const ContactSection = ({ showHeader = true }) => {
  const { values, errors, status, feedback, onChange, onSubmit } = useContactForm(
    contact.form.fields
  );

  return (
    <section
      id="contact"
      className={
        showHeader
          ? 'section-padding relative'
          : 'relative px-5 pb-20 pt-4 sm:px-8 md:pb-28 lg:px-12'
      }
    >
      <div className="container-shell">
        {showHeader ? (
          <SectionHeader
            eyebrow={contact.eyebrow}
            title={contact.title}
            subtitle={contact.subtitle}
          />
        ) : null}

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glow-border glass rounded-3xl p-6 md:p-8">
              <ul className="space-y-5">
                {contact.details.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Icon name={item.icon} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 inline-block text-sm text-mist transition hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-mist">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-3">
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
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="glow-border glass relative overflow-hidden rounded-3xl p-6 md:p-8"
              noValidate
            >
              <div className="grid gap-4">
                {contact.form.fields.map((field) => (
                  <Field
                    key={field.id}
                    field={field}
                    value={values[field.name]}
                    error={errors[field.name]}
                    onChange={onChange}
                  />
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button type="submit" disabled={status === 'loading'} aria-busy={status === 'loading'}>
                  {status === 'loading' ? (
                    <>
                      <Icon name="FiLoader" className="h-4 w-4 animate-spin" />
                      Opening WhatsApp…
                    </>
                  ) : (
                    <>
                      <Icon name="FiMessageCircle" className="h-4 w-4" />
                      {contact.form.submitLabel}
                    </>
                  )}
                </Button>

                <AnimatePresence mode="wait">
                  {feedback === 'success' ? (
                    <motion.p
                      key="success"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2 text-sm text-accent"
                    >
                      <Icon name="FiCheck" className="h-4 w-4" />
                      {contact.form.successMessage}
                    </motion.p>
                  ) : null}
                  {feedback === 'error' && status === 'error' ? (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-red-600"
                    >
                      {contact.form.errorMessage}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
