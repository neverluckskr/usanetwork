import { AlertTriangle, TrendingUp, Building2, Scale, DollarSign } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const CausesSection = () => {
  const causes = [
    {
      title: "Спекулятивна бульбашка",
      description: "Необґрунтоване зростання цін на акції, купівля в кредит",
      Icon: TrendingUp
    },
    {
      title: "Перевиробництво",
      description: "Товарів виробляли більше, ніж могли купити",
      Icon: Building2
    },
    {
      title: "Слабке регулювання",
      description: "Відсутність контролю за фінансовим сектором",
      Icon: Scale
    },
    {
      title: "Нерівність доходів",
      description: "Концентрація багатства в руках небагатьох",
      Icon: DollarSign
    }
  ];

  return (
    <section id="causes" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 glass-panel-strong p-6 rounded-2xl neon-border-red">
            <AlertTriangle className="w-16 h-16 text-neon-red" />
            <h2 className="text-5xl md:text-6xl font-bold title-glow">
              Причини кризи
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {causes.map((cause, index) => (
            <div
              key={index}
              className="glass-panel-strong p-8 rounded-2xl neon-border-blue hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <cause.Icon className="w-12 h-12 text-neon-blue" />
                <div>
                  <h3 className="text-2xl font-bold text-neon-blue mb-3">{cause.title}</h3>
                  <p className="text-foreground/80">{cause.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-panel-strong p-8 rounded-2xl neon-border-red">
          <h3 className="text-3xl font-bold text-neon-red mb-6">Ланцюгова реакція краху</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-panel neon-border-red flex items-center justify-center text-neon-red font-bold">1</div>
              <p className="flex-1 text-foreground/90">Крах фондового ринку → паніка інвесторів</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-panel neon-border-red flex items-center justify-center text-neon-red font-bold">2</div>
              <p className="flex-1 text-foreground/90">Банківська криза → масове вилучення вкладів</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-panel neon-border-red flex items-center justify-center text-neon-red font-bold">3</div>
              <p className="flex-1 text-foreground/90">Скорочення виробництва → масові звільнення</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-panel neon-border-red flex items-center justify-center text-neon-red font-bold">4</div>
              <p className="flex-1 text-foreground/90">Падіння попиту → поглиблення кризи</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
