import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils';

export const LazyImage = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  ...props
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn('overflow-hidden bg-ink-elevated', className)}>
      {visible ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            'h-full w-full object-cover transition duration-700 ease-out',
            loaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0',
            imgClassName
          )}
          {...props}
        />
      ) : (
        <div className="h-full w-full animate-pulse bg-accent/5" aria-hidden="true" />
      )}
    </div>
  );
};
