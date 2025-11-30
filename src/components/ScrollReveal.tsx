import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export const ScrollReveal = ({ children, className = "" }: ScrollRevealProps) => {
  const { ref, isVisible, direction } = useScrollReveal({
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  });

  const baseClasses = direction === "up" ? "reveal-item-up" : "reveal-item";
  const visibleClass = direction === "up" ? "reveal-item-up-visible" : "reveal-item-visible";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${isVisible ? visibleClass : ""} ${className}`}
    >
      {children}
    </div>
  );
};

