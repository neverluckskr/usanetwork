import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const { threshold = 0.2, rootMargin = "0px" } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const elementRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(window.scrollY);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentScrollY;

      if (element) {
        const rect = element.getBoundingClientRect();
        // Анимация запускается когда элемент уже близко к видимой области
        const isInView = rect.top < window.innerHeight + 100 && rect.bottom > -100;
        
        if (isInView && !hasAnimated.current) {
          setDirection(scrollDirection);
          setIsVisible(true);
          hasAnimated.current = true;
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentScrollY = window.scrollY;
            const scrollDirection = currentScrollY > lastScrollY.current ? "down" : "up";
            setDirection(scrollDirection);
            setIsVisible(true);
            hasAnimated.current = true;
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);
    lastScrollY.current = window.scrollY;
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, rootMargin]);

  return { ref: elementRef, isVisible, direction };
};

