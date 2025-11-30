import { Waves } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ConsequencesSection = () => {
  return (
    <section id="consequences" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 glass-panel-strong p-6 rounded-2xl neon-border-blue">
            <Waves className="w-16 h-16 text-neon-blue" />
            <h2 className="text-5xl md:text-6xl font-bold title-glow-blue">
              Наслідки
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel-strong p-8 rounded-2xl neon-border-red">
            <h3 className="text-3xl font-bold text-neon-red mb-6">Економічні</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-neon-red text-xl">●</span>
                <div>
                  <p className="font-bold text-foreground">Масове безробіття</p>
                  <p className="text-foreground/80 text-sm">До 1933 року без роботи залишилися 15 млн американців</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-red text-xl">●</span>
                <div>
                  <p className="font-bold text-foreground">Банківська криза</p>
                  <p className="text-foreground/80 text-sm">Закрилися тисячі банків, люди втратили заощадження</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-red text-xl">●</span>
                <div>
                  <p className="font-bold text-foreground">Промисловий спад</p>
                  <p className="text-foreground/80 text-sm">Виробництво скоротилося майже вдвічі</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-red text-xl">●</span>
                <div>
                  <p className="font-bold text-foreground">Дефляція</p>
                  <p className="text-foreground/80 text-sm">Ціни падали, але доходів не було</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue">
            <h3 className="text-3xl font-bold text-neon-blue mb-6">Соціальні</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-neon-blue text-xl">●</span>
                <div>
                  <p className="font-bold text-foreground">Бідність і голод</p>
                  <p className="text-foreground/80 text-sm">Черги за безкоштовним хлібом, «Гувервілі»</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-blue text-xl">●</span>
                <div>
                  <p className="font-bold text-foreground">Міграція</p>
                  <p className="text-foreground/80 text-sm">Масовий відхід фермерів з Великих рівнин</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-blue text-xl">●</span>
                <div>
                  <p className="font-bold text-foreground">Психологічна криза</p>
                  <p className="text-foreground/80 text-sm">Втрата віри в «американську мрію»</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-blue text-xl">●</span>
                <div>
                  <p className="font-bold text-foreground">Сімейні трагедії</p>
                  <p className="text-foreground/80 text-sm">Розпад сімей, зростання злочинності</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 glass-panel-strong p-8 rounded-2xl neon-border-red">
          <h3 className="text-2xl font-bold text-neon-red mb-4">Глобальний вплив</h3>
          <p className="text-foreground/90 mb-4">
            Велика депресія не обмежилася США. Криза поширилася по всьому світу, 
            викликавши політичну нестабільність в Європі та сприявши приходу до влади 
            радикальних режимів, що зрештою призвело до Другої світової війни.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="glass-panel p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-neon-red">-50%</p>
              <p className="text-sm text-foreground/80">Світова торгівля</p>
            </div>
            <div className="glass-panel p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-neon-red">30M+</p>
              <p className="text-sm text-foreground/80">Безробітних у світі</p>
            </div>
            <div className="glass-panel p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-neon-red">~10 років</p>
              <p className="text-sm text-foreground/80">Тривалість кризи</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
