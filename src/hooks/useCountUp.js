import { useEffect, useRef, useState } from 'react';

export const useCountUp = (end, { duration = 1600, start = 0, enabled = true } = {}) => {
  const [value, setValue] = useState(start);
  const frame = useRef(null);

  useEffect(() => {
    if (!enabled) {
      setValue(start);
      return undefined;
    }

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + (end - start) * eased));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [end, duration, start, enabled]);

  return value;
};
