import { useScrollProgress } from '@/hooks/useScrollProgress';

export const ScrollProgress = () => {
  const { progress } = useScrollProgress();

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-accent-deep via-accent to-accent-soft shadow-[0_0_12px_rgba(11,154,90,0.35)]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
