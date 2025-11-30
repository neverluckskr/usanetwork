import { Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const CrashSection = () => {
  return (
    <section id="crash" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-5xl mx-auto relative z-10">
        <div className="glass-panel-strong p-12 rounded-3xl neon-border-red">
          <div className="flex items-center gap-4 mb-8">
            <Zap className="w-16 h-16 text-neon-red" />
            <h2 className="text-5xl md:text-6xl font-bold title-glow">
              Чорний четвер
            </h2>
          </div>

          <div className="h-1 w-full mb-8 bg-gradient-to-r from-neon-red via-transparent to-neon-red rounded-full" />

          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-red">
              <p className="text-xl text-neon-red font-bold mb-2">24 жовтня 1929 року</p>
              <p className="text-foreground/90">
                День, що назавжди змінив історію. Цього дня на Нью-Йоркській фондовій біржі 
                розпочався панічний розпродаж акцій, що поклав початок найбільшій економічній 
                кризі XX століття.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-neon-red mb-2">-89%</div>
                <p className="text-sm text-foreground/80">Падіння індексу Dow Jones</p>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-neon-red mb-2">$30 млрд</div>
                <p className="text-sm text-foreground/80">Втрати за перший тиждень</p>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-neon-red mb-2">16M</div>
                <p className="text-sm text-foreground/80">Проданих акцій за день</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold text-neon-blue">Події жовтня 1929:</h3>
              <div className="space-y-3">
                <div className="glass-panel p-4 rounded-lg hover:bg-muted/20 transition-colors">
                  <p className="text-neon-red font-bold">24 жовтня (Чорний четвер)</p>
                  <p className="text-foreground/90">Початок краху, перша хвиля паніки</p>
                </div>
                <div className="glass-panel p-4 rounded-lg hover:bg-muted/20 transition-colors">
                  <p className="text-neon-red font-bold">28 жовтня (Чорний понеділок)</p>
                  <p className="text-foreground/90">Індекс впав на 13% за день</p>
                </div>
                <div className="glass-panel p-4 rounded-lg hover:bg-muted/20 transition-colors">
                  <p className="text-neon-red font-bold">29 жовтня (Чорний вівторок)</p>
                  <p className="text-foreground/90">Рекордне падіння на 12%, остаточний крах</p>
                </div>
              </div>
            </div>

            <div className="mt-8 glass-panel p-6 rounded-xl border border-neon-blue/50">
              <p className="text-foreground/90 italic text-center text-lg">
                "Вулиці Волл-стріт були заповнені людьми, що втратили всі свої заощадження за один день. 
                Це був кінець епохи «ревучих двадцятих» і початок темного десятиліття."
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
