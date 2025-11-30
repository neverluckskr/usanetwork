import { Users, PartyPopper, Frown, Heart, GraduationCap, UserCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const SocietySection = () => {
  return (
    <section id="society" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 glass-panel-strong p-6 rounded-2xl neon-border-red">
            <Users className="w-16 h-16 text-neon-red" />
            <h2 className="text-5xl md:text-6xl font-bold title-glow">
              Суспільство
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue">
              <h3 className="text-3xl font-bold text-neon-blue mb-6">1920-ті: Процвітання</h3>
              <ul className="space-y-4">
                <li className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <PartyPopper className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground mb-1">«Епоха джазу»</p>
                    <p className="text-sm text-foreground/70">Епоха розваг та споживання</p>
                  </div>
                </li>
                <li className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <UserCircle className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground mb-1">Нова мода</p>
                    <p className="text-sm text-foreground/70">«Флепери», короткі сукні</p>
                  </div>
                </li>
                <li className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <Users className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground mb-1">Автомобільна культура</p>
                    <p className="text-sm text-foreground/70">Свобода пересування</p>
                  </div>
                </li>
                <li className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <Users className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground mb-1">Масові медіа</p>
                    <p className="text-sm text-foreground/70">Радіо, кіно, газети</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-panel-strong p-8 rounded-2xl neon-border-red">
              <h3 className="text-3xl font-bold text-neon-red mb-6">1930-ті: Випробування</h3>
              <ul className="space-y-4">
                <li className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <Frown className="w-8 h-8 text-neon-red flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground mb-1">Масова бідність</p>
                    <p className="text-sm text-foreground/70">Черги за хлібом, «Гувервілі»</p>
                  </div>
                </li>
                <li className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <Users className="w-8 h-8 text-neon-red flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground mb-1">Міграція</p>
                    <p className="text-sm text-foreground/70">«Окі» — відхід з Пильової чаші</p>
                  </div>
                </li>
                <li className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <Heart className="w-8 h-8 text-neon-red flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground mb-1">Солідарність</p>
                    <p className="text-sm text-foreground/70">Взаємодопомога, профспілки</p>
                  </div>
                </li>
                <li className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <Users className="w-8 h-8 text-neon-red flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground mb-1">Нові цінності</p>
                    <p className="text-sm text-foreground/70">Від матеріалізму до соціальної справедливості</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue">
            <h3 className="text-3xl font-bold text-neon-blue mb-6">Соціальні зміни</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-xl">
                <UserCircle className="w-12 h-12 mx-auto mb-3 text-neon-blue" />
                <h4 className="font-bold text-foreground mb-2 text-center">Жінки</h4>
                <p className="text-sm text-foreground/70">Зростання зайнятості жінок, незважаючи на кризу. Більша економічна незалежність</p>
              </div>
              <div className="glass-panel p-6 rounded-xl">
                <GraduationCap className="w-12 h-12 mx-auto mb-3 text-neon-blue" />
                <h4 className="font-bold text-foreground mb-2 text-center">Освіта</h4>
                <p className="text-sm text-foreground/70">Більше молоді залишалися в школі через відсутність роботи</p>
              </div>
              <div className="glass-panel p-6 rounded-xl">
                <Users className="w-12 h-12 mx-auto mb-3 text-neon-blue" />
                <h4 className="font-bold text-foreground mb-2 text-center">Афроамериканці</h4>
                <p className="text-sm text-foreground/70">Продовження сегрегації, але початок руху за громадянські права</p>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-red border-t-4">
            <p className="text-xl text-center italic text-foreground/90">
              Велика депресія змінила американське суспільство назавжди, породивши нове розуміння 
              ролі держави та цінності соціальної солідарності.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
