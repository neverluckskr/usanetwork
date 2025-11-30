import { memo, useEffect, useRef, useState } from "react";

export const ScrollProgress = memo(() => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number>();

  const animateProgress = () => {
    const difference = targetRef.current - progressRef.current;

    if (Math.abs(difference) < 0.1) {
      progressRef.current = targetRef.current;
      setScrollProgress(targetRef.current);
      rafRef.current = undefined;
      return;
    }

    progressRef.current += difference * 0.12;
    setScrollProgress(progressRef.current);
    rafRef.current = requestAnimationFrame(animateProgress);
  };

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const safeHeight = Math.max(scrollHeight, 1);
      const scrolled = (window.scrollY / safeHeight) * 100;

      targetRef.current = Math.min(Math.max(scrolled, 0), 100);

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animateProgress);
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted/30 z-50">
      <div
        className="h-full bg-gradient-to-r from-neon-blue via-neon-red to-neon-blue will-change-[width]"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: "0 0 20px hsl(var(--neon-red)), 0 0 40px hsl(var(--neon-blue))",
        }}
      />
    </div>
  );
});

ScrollProgress.displayName = "ScrollProgress";
