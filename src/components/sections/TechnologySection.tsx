import { Zap, Car, Radio, Plane, Tv, Film, Camera, Building, School, Hospital, Trees } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const TechnologySection = () => {
  return (
    <section id="technology" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 glass-panel-strong p-6 rounded-2xl neon-border-red">
            <Zap className="w-16 h-16 text-neon-red" />
            <h2 className="text-5xl md:text-6xl font-bold title-glow">
              Технології
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue">
            <h3 className="text-3xl font-bold text-neon-blue mb-6">Технологічна революція 1920-х</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="glass-panel p-6 rounded-xl neon-border-red">
                  <Car className="w-12 h-12 mx-auto mb-3 text-neon-red" />
                  <h4 className="text-xl font-bold text-neon-red mb-2">Автомобілі</h4>
                  <p className="text-foreground/80">
                    Генрі Форд та конвеєрне виробництво. До 1929 року — 23 мільйони 
                    автомобілів на дорогах США.
                  </p>
                </div>
                <div className="glass-panel p-6 rounded-xl neon-border-red">
                  <Radio className="w-12 h-12 mx-auto mb-3 text-neon-red" />
                  <h4 className="text-xl font-bold text-neon-red mb-2">Радіо</h4>
                  <p className="text-foreground/80">
                    Масове поширення радіоприймачів. Перші радіостанції та 
                    народження масової культури.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="glass-panel p-6 rounded-xl neon-border-red">
                  <Zap className="w-12 h-12 mx-auto mb-3 text-neon-red" />
                  <h4 className="text-xl font-bold text-neon-red mb-2">Електрика</h4>
                  <p className="text-foreground/80">
                    Електрифікація будинків. Холодильники, пилососи, пральні машини 
                    змінюють побут.
                  </p>
                </div>
                <div className="glass-panel p-6 rounded-xl neon-border-red">
                  <Plane className="w-12 h-12 mx-auto mb-3 text-neon-red" />
                  <h4 className="text-xl font-bold text-neon-red mb-2">Авіація</h4>
                  <p className="text-foreground/80">
                    Чарльз Ліндберг (1927) — перший трансатлантичний переліт. 
                    Розвиток комерційної авіації.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue">
            <h3 className="text-3xl font-bold text-neon-blue mb-6">Інновації 1930-х</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-xl text-center">
                <Tv className="w-16 h-16 mx-auto mb-4 text-neon-blue" />
                <h4 className="font-bold text-foreground mb-2">Телебачення</h4>
                <p className="text-sm text-foreground/70">Перші експериментальні трансляції</p>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <Film className="w-16 h-16 mx-auto mb-4 text-neon-blue" />
                <h4 className="font-bold text-foreground mb-2">Звукове кіно</h4>
                <p className="text-sm text-foreground/70">Кінець ери німого кіно (1927)</p>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <Camera className="w-16 h-16 mx-auto mb-4 text-neon-blue" />
                <h4 className="font-bold text-foreground mb-2">Кольорова фотографія</h4>
                <p className="text-sm text-foreground/70">Kodachrome (1935)</p>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-red">
            <h3 className="text-3xl font-bold text-neon-red mb-6">Інфраструктурні проєкти</h3>
            <p className="text-foreground/90 mb-6">
              Завдяки Новому курсу в США була створена масштабна інфраструктура:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue flex items-center gap-3">
                  <Building className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Дамба Гувера (1936)</p>
                    <p className="text-sm text-foreground/70">Найбільша дамба свого часу</p>
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue flex items-center gap-3">
                  <Building className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Дороги та мости</p>
                    <p className="text-sm text-foreground/70">Тисячі кілометрів нових доріг</p>
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue flex items-center gap-3">
                  <Zap className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Електростанції</p>
                    <p className="text-sm text-foreground/70">TVA — електрифікація Півдня</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue flex items-center gap-3">
                  <School className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Школи та бібліотеки</p>
                    <p className="text-sm text-foreground/70">Тисячі нових будівель</p>
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue flex items-center gap-3">
                  <Hospital className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Лікарні</p>
                    <p className="text-sm text-foreground/70">Розвиток охорони здоров'я</p>
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue flex items-center gap-3">
                  <Trees className="w-8 h-8 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Парки</p>
                    <p className="text-sm text-foreground/70">Національні та міські парки</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl border-t-4 border-neon-blue">
            <p className="text-xl text-center italic text-foreground/90">
              Технологічний прогрес 1920-30-х заклав фундамент для післявоєнного буму та 
              сучасного американського способу життя.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
