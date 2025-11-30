import { Award, Landmark, Shield, Briefcase, Building2, Building, GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const LegacySection = () => {
  return (
    <section id="legacy" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 glass-panel-strong p-6 rounded-2xl neon-border-blue">
            <Award className="w-16 h-16 text-neon-blue" />
            <h2 className="text-5xl md:text-6xl font-bold title-glow-blue">
              Спадщина епохи
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-panel-strong p-10 rounded-3xl neon-border-red">
            <h3 className="text-4xl font-bold text-neon-red mb-8 text-center">Вплив на сучасність</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="glass-panel p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Landmark className="w-10 h-10 text-neon-blue" />
                    <h4 className="text-xl font-bold text-neon-blue">Роль держави</h4>
                  </div>
                  <p className="text-foreground/80">
                    Новий курс назавжди змінив уявлення про роль уряду. 
                    Держава стала активним учасником економіки та гарантом соціального захисту.
                  </p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-10 h-10 text-neon-blue" />
                    <h4 className="text-xl font-bold text-neon-blue">Соціальне забезпечення</h4>
                  </div>
                  <p className="text-foreground/80">
                    Social Security Act став основою сучасної системи соціального захисту, 
                    яка діє досі.
                  </p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="w-10 h-10 text-neon-blue" />
                    <h4 className="text-xl font-bold text-neon-blue">Права працівників</h4>
                  </div>
                  <p className="text-foreground/80">
                    Трудове законодавство 1930-х заклало основи сучасних прав 
                    працівників та профспілкового руху.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="glass-panel p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-10 h-10 text-neon-blue" />
                    <h4 className="text-xl font-bold text-neon-blue">Фінансове регулювання</h4>
                  </div>
                  <p className="text-foreground/80">
                    Створені регуляторні органи (SEC, FDIC) продовжують захищати 
                    фінансову систему та вкладників.
                  </p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Building className="w-10 h-10 text-neon-blue" />
                    <h4 className="text-xl font-bold text-neon-blue">Інфраструктура</h4>
                  </div>
                  <p className="text-foreground/80">
                    Побудована в 1930-х інфраструктура (дороги, мости, дамби) 
                    використовується досі.
                  </p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-10 h-10 text-neon-blue" />
                    <h4 className="text-xl font-bold text-neon-blue">Цінності</h4>
                  </div>
                  <p className="text-foreground/80">
                    Покоління, що пережило Депресію, передало цінності ощадливості, 
                    солідарності та важливості соціальної справедливості.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue">
            <h3 className="text-3xl font-bold text-neon-blue mb-6">Уроки історії</h3>
            <div className="space-y-4">
              <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-red">
                <p className="font-bold text-neon-red text-lg mb-2">Важливість регулювання</p>
                <p className="text-foreground/80">
                  Необхідність державного контролю за фінансовими ринками 
                  для запобігання кризам
                </p>
              </div>
              <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-red">
                <p className="font-bold text-neon-red text-lg mb-2">Соціальна відповідальність</p>
                <p className="text-foreground/80">
                  Держава несе відповідальність за добробут громадян в 
                  періоди економічних криз
                </p>
              </div>
              <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-red">
                <p className="font-bold text-neon-red text-lg mb-2">Активні дії</p>
                <p className="text-foreground/80">
                  Рішучі та швидкі заходи уряду можуть пом'якшити 
                  наслідки економічних катастроф
                </p>
              </div>
              <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-red">
                <p className="font-bold text-neon-red text-lg mb-2">Стійкість суспільства</p>
                <p className="text-foreground/80">
                  Навіть у найважчі часи люди здатні проявляти 
                  солідарність та знаходити сили для відновлення
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-10 rounded-3xl border-4 border-neon-red">
            <blockquote className="text-2xl md:text-3xl text-center italic text-foreground font-light leading-relaxed">
              "Єдине, кого нам потрібно боятися, — це нас самих. 
              Америка здатна подолати будь-які випробування, якщо збереже віру в себе."
              <span className="block mt-6 text-neon-blue text-xl not-italic">— Франклін Д. Рузвельт</span>
            </blockquote>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
