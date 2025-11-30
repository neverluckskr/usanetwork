import { useEffect, useState } from "react";
import RooseveltPortrait from "../../../assets/Franklin_Delano_Roosevelt,_Portrait_1933.jpg";
import MigrantMother from "../../../assets/Lange-MigrantMother02.jpg";

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-[10%] w-64 h-64 neon-border-red rounded-3xl rotate-12 animate-pulse-glow overflow-hidden hero-fade-in ${isLoaded ? "hero-fade-in-visible" : ""}`}>
          <div className="relative w-full h-full">
            <img
              src={MigrantMother}
              alt="Доротея Ленг, «Мати-мігрантка»"
              className="w-full h-full object-cover opacity-95"
              loading="lazy"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-transparent" />
          </div>
        </div>
        <div
          className={`absolute bottom-40 right-20 w-80 h-80 neon-border-blue rounded-3xl -rotate-12 animate-pulse-glow-blue overflow-hidden hero-fade-in ${isLoaded ? "hero-fade-in-visible" : ""}`}
        >
          <div className="relative w-full h-full">
            <img
              src={RooseveltPortrait}
              alt="Франклін Делано Рузвельт, 1933 рік"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="glass-panel-strong p-12 rounded-3xl max-w-4xl mx-auto neon-border-red">
          <div className="space-y-8">
            <h1 className={`text-5xl md:text-7xl font-bold neon-glow-red tracking-tight hero-fade-in ${isLoaded ? "hero-fade-in-visible" : ""}`}>
              США 1929–1939
            </h1>
            
            <div className={`h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-neon-red to-transparent rounded-full hero-fade-in ${isLoaded ? "hero-fade-in-visible" : ""}`} />
            
            <p className={`text-xl md:text-2xl text-muted-foreground hero-fade-in ${isLoaded ? "hero-fade-in-visible" : ""}`}>
              Розробили: <span className="text-neon-blue font-semibold">Степанов Павло</span> та <span className="text-neon-blue font-semibold">Боричевський Ісмаїл</span>
            </p>
            
            <div className={`glass-panel p-8 rounded-2xl border border-neon-blue/30 hero-fade-in ${isLoaded ? "hero-fade-in-visible" : ""}`}>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                Презентація присвячена одному з найдраматичніших періодів в історії США — 
                <span className="text-neon-red font-semibold"> Великій депресії</span> та епосі 
                <span className="text-neon-blue font-semibold"> Франкліна Рузвельта</span>. 
                Тут ви знайдете детальний аналіз економічної кризи 1929 року, 
                політики «Нового курсу» та трансформації американського суспільства.
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-12 flex justify-center gap-4 hero-fade-in ${isLoaded ? "hero-fade-in-visible" : ""}`}>
          <div className="w-3 h-3 rounded-full bg-neon-red animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-foreground animate-pulse" style={{ animationDelay: "0.3s" }} />
          <div className="w-3 h-3 rounded-full bg-neon-blue animate-pulse" style={{ animationDelay: "0.6s" }} />
        </div>
      </div>
    </section>
  );
};
