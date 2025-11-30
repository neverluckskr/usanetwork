import { TrendingDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const DepressionIntroSection = () => {
  return (
    <section id="depression-intro" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-5xl mx-auto relative z-10">
        <div className="glass-panel-strong p-12 rounded-3xl neon-border-red">
          <div className="flex items-center gap-4 mb-8">
            <TrendingDown className="w-16 h-16 text-neon-red" />
            <h2 className="text-5xl md:text-6xl font-bold title-glow">
              Велика депресія
            </h2>
          </div>

          <div className="h-1 w-full mb-8 bg-gradient-to-r from-neon-red via-transparent to-neon-red rounded-full" />

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              <span className="text-neon-red font-semibold text-xl">Велика депресія</span> (1929–1939) — 
              найбільша економічна криза XX століття, що охопила США і весь світ. 
              Почавшись з краху фондового ринку в жовтні 1929 року, криза призвела до 
              масового безробіття, банкрутств банків, падіння виробництва та глибокої соціальної кризи.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="glass-panel p-6 rounded-xl neon-border-blue">
                <h3 className="text-2xl font-bold text-neon-blue mb-4">Масштаб катастрофи</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-red">▸</span>
                    <span>Безробіття досягло <span className="text-neon-red font-bold">25%</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-red">▸</span>
                    <span>ВВП впав на <span className="text-neon-red font-bold">30%</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-red">▸</span>
                    <span>Збанкрутували <span className="text-neon-red font-bold">9000+ банків</span></span>
                  </li>
                </ul>
              </div>

              <div className="glass-panel p-6 rounded-xl neon-border-blue">
                <h3 className="text-2xl font-bold text-neon-blue mb-4">Соціальні наслідки</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-red">▸</span>
                    <span>Мільйони сімей втратили домівки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-red">▸</span>
                    <span>Зростання безпритульності та злиднів</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-red">▸</span>
                    <span>Психологічна травма покоління</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 glass-panel p-6 rounded-xl border-l-4 border-neon-red">
              <p className="text-foreground italic">
                "Єдине, чого ми повинні боятися — це самого страху" — ці слова Франкліна Рузвельта 
                стали символом надії в найтемніші часи американської історії.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
