import { useState } from "react";
import { X, Menu, Building2, TrendingDown, AlertTriangle, Zap, Waves, UserCircle, Wrench, Gavel, DollarSign, Globe, Users, Film, Cpu, Award, FileCheck } from "lucide-react";

const sections = [
  { id: "hero", title: "Головна", Icon: Building2 },
  { id: "depression-intro", title: "Велика депресія", Icon: TrendingDown },
  { id: "causes", title: "Причини кризи", Icon: AlertTriangle },
  { id: "crash", title: "Крах 1929", Icon: Zap },
  { id: "consequences", title: "Наслідки", Icon: Waves },
  { id: "roosevelt", title: "Франклін Рузвельт", Icon: UserCircle },
  { id: "new-deal", title: "Новий курс", Icon: Wrench },
  { id: "reforms", title: "Реформи", Icon: Gavel },
  { id: "economy", title: "Економіка 20-30х", Icon: DollarSign },
  { id: "foreign-policy", title: "Зовнішня політика", Icon: Globe },
  { id: "society", title: "Суспільство", Icon: Users },
  { id: "culture", title: "Культура", Icon: Film },
  { id: "technology", title: "Технології", Icon: Cpu },
  { id: "legacy", title: "Спадщина епохи", Icon: Award },
  { id: "conclusion", title: "Висновок", Icon: FileCheck },
];

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 glass-panel-strong p-3 rounded-xl neon-border-red hover:scale-110 transition-transform duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-neon-red" />
        ) : (
          <Menu className="w-6 h-6 text-neon-red" />
        )}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-80 z-40 glass-panel-strong border-r-2 border-neon-red shadow-[0_0_30px_rgba(255,0,60,0.3)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 pt-24 h-full overflow-y-auto">
          <h2 className="text-2xl font-bold mb-8 neon-glow-red">Навігація</h2>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-full text-left p-4 rounded-lg glass-panel hover:bg-muted/30 transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="flex items-center gap-3">
                  <section.Icon className="w-6 h-6 text-neon-blue group-hover:text-neon-red group-hover:scale-125 transition-all duration-300" />
                  <span className="text-foreground group-hover:text-neon-red transition-colors duration-300">
                    {section.title}
                  </span>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
