import { Globe, Ban, Handshake, ShieldAlert } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ForeignPolicySection = () => {
  return (
    <section id="foreign-policy" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 glass-panel-strong p-6 rounded-2xl neon-border-blue">
            <Globe className="w-16 h-16 text-neon-blue" />
            <h2 className="text-5xl md:text-6xl font-bold title-glow-blue">
              Зовнішня політика
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-panel-strong p-8 rounded-2xl neon-border-red">
            <h3 className="text-3xl font-bold text-neon-red mb-6">Ізоляціонізм 1920-х</h3>
            <p className="text-foreground/90 mb-4">
              Після Першої світової війни США дотримувалися політики ізоляціонізму — 
              невтручання в європейські справи та фокусу на внутрішньому розвитку.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-lg flex items-center gap-3">
                <Ban className="w-8 h-8 text-neon-red flex-shrink-0" />
                <div>
                  <p className="font-bold text-foreground mb-1">Відмова від Ліги Націй</p>
                  <p className="text-sm text-foreground/70">Конгрес відхилив членство</p>
                </div>
              </div>
              <div className="glass-panel p-4 rounded-lg flex items-center gap-3">
                <ShieldAlert className="w-8 h-8 text-neon-red flex-shrink-0" />
                <div>
                  <p className="font-bold text-foreground mb-1">Торговий протекціонізм</p>
                  <p className="text-sm text-foreground/70">Високі митні збори</p>
                </div>
              </div>
              <div className="glass-panel p-4 rounded-lg flex items-center gap-3">
                <Ban className="w-8 h-8 text-neon-red flex-shrink-0" />
                <div>
                  <p className="font-bold text-foreground mb-1">Імміграційні квоти</p>
                  <p className="text-sm text-foreground/70">Обмеження в'їзду іноземців</p>
                </div>
              </div>
              <div className="glass-panel p-4 rounded-lg flex items-center gap-3">
                <Handshake className="w-8 h-8 text-neon-red flex-shrink-0" />
                <div>
                  <p className="font-bold text-foreground mb-1">Пацифізм</p>
                  <p className="text-sm text-foreground/70">Антивоєнні настрої в суспільстві</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue">
            <h3 className="text-3xl font-bold text-neon-blue mb-6">«Політика добросусідства»</h3>
            <p className="text-foreground/90 mb-4">
              Рузвельт змінив підхід до Латинської Америки, відмовившись від військового втручання.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-neon-blue text-xl">●</span>
                <div>
                  <p className="font-bold text-foreground">Невтручання</p>
                  <p className="text-sm text-foreground/70">Відмова від військових інтервенцій</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-blue text-xl">●</span>
                <div>
                  <p className="font-bold text-foreground">Економічна співпраця</p>
                  <p className="text-sm text-foreground/70">Торговельні угоди та допомога</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-blue text-xl">●</span>
                <div>
                  <p className="font-bold text-foreground">Взаємна повага</p>
                  <p className="text-sm text-foreground/70">Визнання суверенітету</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-red">
            <h3 className="text-3xl font-bold text-neon-red mb-6">Кінець 1930-х: Загроза війни</h3>
            <div className="space-y-4">
              <p className="text-foreground/90">
                З приходом до влади нацистів в Німеччині та початком агресії Японії в Азії 
                США поступово відходили від ізоляціонізму.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-panel p-4 rounded-lg text-center">
                  <p className="text-3xl mb-2">🇩🇪</p>
                  <p className="font-bold text-foreground">1933</p>
                  <p className="text-sm text-foreground/70">Гітлер при владі</p>
                </div>
                <div className="glass-panel p-4 rounded-lg text-center">
                  <p className="text-3xl mb-2">🇮🇹</p>
                  <p className="font-bold text-foreground">1935</p>
                  <p className="text-sm text-foreground/70">Італія в Ефіопії</p>
                </div>
                <div className="glass-panel p-4 rounded-lg text-center">
                  <p className="text-3xl mb-2">🇪🇸</p>
                  <p className="font-bold text-foreground">1936</p>
                  <p className="text-sm text-foreground/70">Громадянська війна в Іспанії</p>
                </div>
              </div>
              <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-blue mt-4">
                <ShieldAlert className="w-8 h-8 mx-auto mb-2 text-neon-blue" />
                <p className="font-bold text-foreground mb-2 text-center">Закони про нейтралітет (1935-1937)</p>
                <p className="text-sm text-foreground/70 text-center">
                  США заборонили продаж зброї воюючим країнам, але це не могло зупинити війну, що насувається
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
