import { FileCheck, TrendingUp, Users, Landmark } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ConclusionSection = () => {
  return (
    <section id="conclusion" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-5xl mx-auto relative z-10">
        <div className="glass-panel-strong p-12 rounded-3xl neon-border-blue">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-4 mb-6">
              <FileCheck className="w-16 h-16 text-neon-blue" />
              <h2 className="text-5xl md:text-6xl font-bold title-glow-blue">
                Висновок
              </h2>
            </div>
          </div>

          <div className="h-1 w-full mb-10 bg-gradient-to-r from-neon-blue via-neon-red to-neon-blue rounded-full" />

          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl">
              <p className="text-xl text-foreground/90 leading-relaxed mb-6">
                Період 1929–1939 років став визначальним в історії Сполучених Штатів Америки. 
                <span className="text-neon-red font-semibold"> Велика депресія</span> оголила 
                слабкості економічної системи та призвела до безпрецедентної соціальної кризи, 
                але також показала здатність нації до адаптації та перетворення.
              </p>

              <p className="text-xl text-foreground/90 leading-relaxed">
                <span className="text-neon-blue font-semibold">Франклін Делано Рузвельт</span> та його 
                <span className="text-neon-blue font-semibold"> Новий курс</span> не просто вивели 
                країну з кризи — вони фундаментально змінили уявлення про роль держави, 
                створили систему соціального захисту та заклали основи сучасного американського суспільства.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-xl neon-border-red text-center">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-neon-red" />
                <h3 className="text-xl font-bold text-neon-red mb-3">Економіка</h3>
                <p className="text-sm text-foreground/80">
                  Від краху до відновлення через державне регулювання
                </p>
              </div>
              <div className="glass-panel p-6 rounded-xl neon-border-blue text-center">
                <Users className="w-16 h-16 mx-auto mb-4 text-neon-blue" />
                <h3 className="text-xl font-bold text-neon-blue mb-3">Суспільство</h3>
                <p className="text-sm text-foreground/80">
                  Нове розуміння солідарності та соціальної відповідальності
                </p>
              </div>
              <div className="glass-panel p-6 rounded-xl neon-border-red text-center">
                <Landmark className="w-16 h-16 mx-auto mb-4 text-neon-red" />
                <h3 className="text-xl font-bold text-neon-red mb-3">Політика</h3>
                <p className="text-sm text-foreground/80">
                  Активна роль держави в захисті громадян та регулюванні економіки
                </p>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-t-4 border-neon-blue">
              <h3 className="text-2xl font-bold text-neon-blue mb-4 text-center">Історичне значення</h3>
              <p className="text-lg text-foreground/90 leading-relaxed text-center">
                Велика депресія та Новий курс назавжди змінили траєкторію розвитку США 
                та всього західного світу. Створені в 1930-х інститути та принципи продовжують 
                визначати соціально-економічну політику до наших днів.
              </p>
            </div>

            <div className="glass-panel-strong p-10 rounded-3xl neon-border-red border-4">
              <p className="text-2xl md:text-3xl text-center italic text-foreground/95 font-light leading-relaxed">
                Цей період навчив Америку, що навіть у найтемніші часи 
                <span className="text-neon-red font-semibold not-italic"> рішуче лідерство</span>, 
                <span className="text-neon-blue font-semibold not-italic"> соціальна солідарність</span> та 
                <span className="text-neon-red font-semibold not-italic"> віра в майбутнє</span> 
                здатні подолати будь-які випробування.
              </p>
            </div>

            <div className="text-center pt-8">
              <div className="glass-panel inline-block px-8 py-4 rounded-2xl neon-border-blue">
                <p className="text-foreground/80">Дякую за увагу!</p>
                <div className="flex justify-center gap-3 mt-4">
                  <div className="w-3 h-3 rounded-full bg-neon-red animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-foreground animate-pulse" style={{ animationDelay: "0.3s" }} />
                  <div className="w-3 h-3 rounded-full bg-neon-blue animate-pulse" style={{ animationDelay: "0.6s" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
