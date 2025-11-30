import { memo, useEffect, useState } from "react";

const sectionIds = [
  "hero",
  "depression-intro",
  "causes",
  "crash",
  "consequences",
  "roosevelt",
  "new-deal",
  "reforms",
  "economy",
  "foreign-policy",
  "society",
  "culture",
  "technology",
  "legacy",
  "conclusion",
];

export const SectionIndicator = memo(() => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sectionIds[index]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {sectionIds.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === activeSection
              ? "bg-neon-red scale-150 shadow-[0_0_15px_hsl(var(--neon-red)),0_0_30px_hsl(var(--neon-red)),0_0_45px_hsl(var(--glow-red))]"
              : "bg-foreground/30 hover:bg-foreground/50 hover:shadow-[0_0_10px_hsl(var(--foreground)/0.5)]"
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
});

SectionIndicator.displayName = "SectionIndicator";
