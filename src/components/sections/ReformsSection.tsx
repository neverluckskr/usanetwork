import { Gavel, Users, Clock, Shield } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ReformsSection = () => {
  return (
    <section id="reforms" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 glass-panel-strong p-6 rounded-2xl neon-border-blue">
            <Gavel className="w-16 h-16 text-neon-blue" />
            <h2 className="text-5xl md:text-6xl font-bold title-glow-blue">
              Ключові реформи
            </h2>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="glass-panel-strong p-8 rounded-2xl neon-border-red hover:scale-[1.02] transition-transform">
            <h3 className="text-3xl font-bold text-neon-red mb-4">Social Security Act (1935)</h3>
            <p className="text-foreground/90 mb-4">
              Створення системи соціального забезпечення — одне з найбільших досягнень Нового курсу.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="glass-panel p-4 rounded-lg">
                <Users className="w-8 h-8 mx-auto mb-2 text-neon-blue" />
                <p className="font-bold text-foreground mb-2">Пенсії за віком</p>
                <p className="text-sm text-foreground/70">Для людей старше 65 років</p>
              </div>
              <div className="glass-panel p-4 rounded-lg">
                <Shield className="w-8 h-8 mx-auto mb-2 text-neon-blue" />
                <p className="font-bold text-foreground mb-2">Допомоги з безробіття</p>
                <p className="text-sm text-foreground/70">Тимчасова підтримка</p>
              </div>
              <div className="glass-panel p-4 rounded-lg">
                <Users className="w-8 h-8 mx-auto mb-2 text-neon-blue" />
                <p className="font-bold text-foreground mb-2">Допомога інвалідам</p>
                <p className="text-sm text-foreground/70">Соціальний захист</p>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue hover:scale-[1.02] transition-transform">
            <h3 className="text-3xl font-bold text-neon-blue mb-4">Wagner Act (1935)</h3>
            <p className="text-foreground/90 mb-4">
              Національний закон про трудові відносини — захист прав робітників і профспілок.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-neon-red">▸</span><span>Право на створення профспілок</span></li>
              <li className="flex items-start gap-2"><span className="text-neon-red">▸</span><span>Колективні переговори</span></li>
              <li className="flex items-start gap-2"><span className="text-neon-red">▸</span><span>Захист від недобросовісної практики роботодавців</span></li>
            </ul>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-red hover:scale-[1.02] transition-transform">
            <h3 className="text-3xl font-bold text-neon-red mb-4">Fair Labor Standards Act (1938)</h3>
            <p className="text-foreground/90 mb-4">
              Встановлення мінімальних стандартів праці.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-lg">
                <Clock className="w-8 h-8 mx-auto mb-2 text-neon-blue" />
                <p className="font-bold text-foreground mb-2">Максимальний робочий тиждень</p>
                <p className="text-sm text-foreground/70">44 години (пізніше 40 годин)</p>
              </div>
              <div className="glass-panel p-4 rounded-lg">
                <Shield className="w-8 h-8 mx-auto mb-2 text-neon-blue" />
                <p className="font-bold text-foreground mb-2">Мінімальна зарплата</p>
                <p className="text-sm text-foreground/70">25 центів на годину</p>
              </div>
              <div className="glass-panel p-4 rounded-lg">
                <Users className="w-8 h-8 mx-auto mb-2 text-neon-blue" />
                <p className="font-bold text-foreground mb-2">Заборона дитячої праці</p>
                <p className="text-sm text-foreground/70">Для дітей до 16 років</p>
              </div>
              <div className="glass-panel p-4 rounded-lg">
                <Clock className="w-8 h-8 mx-auto mb-2 text-neon-blue" />
                <p className="font-bold text-foreground mb-2">Оплата понаднормових</p>
                <p className="text-sm text-foreground/70">Півторний тариф</p>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue hover:scale-[1.02] transition-transform">
            <h3 className="text-3xl font-bold text-neon-blue mb-4">Фінансові реформи</h3>
            <div className="space-y-3">
              <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue">
                <p className="font-bold text-foreground">Glass-Steagall Act (1933)</p>
                <p className="text-sm text-foreground/70">Поділ комерційних та інвестиційних банків</p>
              </div>
              <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue">
                <p className="font-bold text-foreground">FDIC — Federal Deposit Insurance Corporation</p>
                <p className="text-sm text-foreground/70">Страхування банківських вкладів</p>
              </div>
              <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue">
                <p className="font-bold text-foreground">SEC — Securities and Exchange Commission</p>
                <p className="text-sm text-foreground/70">Регулювання фондового ринку</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
