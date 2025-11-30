import { DollarSign, TrendingUp, TrendingDown, Car, Zap, Building2, CreditCard } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const EconomySection = () => {
  return (
    <section id="economy" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 glass-panel-strong p-6 rounded-2xl neon-border-red">
            <DollarSign className="w-16 h-16 text-neon-red" />
            <h2 className="text-5xl md:text-6xl font-bold title-glow">
              Економіка 20-30-х
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue">
            <h3 className="text-3xl font-bold text-neon-blue mb-6">«Ревучі двадцяті» (1920-1929)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-neon-blue mb-1">Економічний бум</p>
                    <p className="text-sm text-foreground/80">ВВП виріс на 42%, масове виробництво</p>
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <Car className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-neon-blue mb-1">Автомобілізація</p>
                    <p className="text-sm text-foreground/80">Форд, конвеєр, масове споживання</p>
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <Zap className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-neon-blue mb-1">Електрифікація</p>
                    <p className="text-sm text-foreground/80">Нові технології, побутова техніка</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-neon-blue mb-1">Фондовий бум</p>
                    <p className="text-sm text-foreground/80">Спекулятивна бульбашка на біржі</p>
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-neon-blue mb-1">Урбанізація</p>
                    <p className="text-sm text-foreground/80">Зростання міст, хмарочоси</p>
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <CreditCard className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-neon-blue mb-1">Кредити</p>
                    <p className="text-sm text-foreground/80">Купівля товарів в розстрочку</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-red">
            <h3 className="text-3xl font-bold text-neon-red mb-6">Депресія (1929-1939)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-5xl font-bold text-neon-red mb-3">-47%</div>
                <p className="text-sm text-foreground/80">Промислове виробництво до 1932</p>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-5xl font-bold text-neon-red mb-3">25%</div>
                <p className="text-sm text-foreground/80">Рівень безробіття в піку</p>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-5xl font-bold text-neon-red mb-3">9000+</div>
                <p className="text-sm text-foreground/80">Збанкрутілих банків</p>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue">
            <h3 className="text-3xl font-bold text-neon-blue mb-6">Відновлення (1933-1939)</h3>
            <div className="space-y-4">
              <p className="text-foreground/90">
                Завдяки політиці Нового курсу економіка почала поступово відновлюватися:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue">
                  <p className="font-bold text-foreground mb-2">1933-1937: Зростання</p>
                  <p className="text-sm text-foreground/70">ВВП виріс на 60%, безробіття знизилося</p>
                </div>
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-red">
                  <p className="font-bold text-foreground mb-2">1937-1938: Рецесія</p>
                  <p className="text-sm text-foreground/70">Тимчасовий спад через скорочення витрат</p>
                </div>
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue">
                  <p className="font-bold text-foreground mb-2">1938-1939: Відновлення</p>
                  <p className="text-sm text-foreground/70">Відновлення державних програм</p>
                </div>
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue">
                  <p className="font-bold text-foreground mb-2">1940+: Воєнна економіка</p>
                  <p className="text-sm text-foreground/70">Остаточний вихід з кризи</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
