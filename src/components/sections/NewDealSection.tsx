import { Wrench, RefreshCw, Settings, Scale } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const NewDealSection = () => {
  return (
    <section id="new-deal" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 glass-panel-strong p-6 rounded-2xl neon-border-red">
            <Wrench className="w-16 h-16 text-neon-red" />
            <h2 className="text-5xl md:text-6xl font-bold title-glow">
              Новий курс
            </h2>
          </div>
          <p className="text-xl text-foreground/80 mt-6 max-w-3xl mx-auto">
            Програма економічних та соціальних реформ, спрямована на вихід із Великої депресії
          </p>
        </div>

        <div className="space-y-8">
          <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue">
            <h3 className="text-3xl font-bold text-neon-blue mb-6">Три основні напрямки (3 R)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-xl">
                <RefreshCw className="w-12 h-12 mx-auto mb-3 text-neon-red" />
                <h4 className="text-xl font-bold text-neon-red mb-2">Relief</h4>
                <p className="text-sm text-foreground/80">Допомога нужденним</p>
                <p className="text-foreground/70 mt-2 text-xs">Програми соціальної підтримки безробітних та бідних</p>
              </div>
              <div className="glass-panel p-6 rounded-xl">
                <Settings className="w-12 h-12 mx-auto mb-3 text-neon-red" />
                <h4 className="text-xl font-bold text-neon-red mb-2">Recovery</h4>
                <p className="text-sm text-foreground/80">Відновлення економіки</p>
                <p className="text-foreground/70 mt-2 text-xs">Стимулювання економічного зростання та зайнятості</p>
              </div>
              <div className="glass-panel p-6 rounded-xl">
                <Scale className="w-12 h-12 mx-auto mb-3 text-neon-red" />
                <h4 className="text-xl font-bold text-neon-red mb-2">Reform</h4>
                <p className="text-sm text-foreground/80">Реформи системи</p>
                <p className="text-foreground/70 mt-2 text-xs">Запобігання майбутнім кризам</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel-strong p-8 rounded-2xl neon-border-red">
              <h3 className="text-2xl font-bold text-neon-red mb-6">Ключові програми</h3>
              <ul className="space-y-4">
                <li className="glass-panel p-4 rounded-lg">
                  <p className="font-bold text-foreground">CCC (Civilian Conservation Corps)</p>
                  <p className="text-sm text-foreground/70">Працевлаштування молоді на громадських роботах</p>
                </li>
                <li className="glass-panel p-4 rounded-lg">
                  <p className="font-bold text-foreground">WPA (Works Progress Administration)</p>
                  <p className="text-sm text-foreground/70">Створення робочих місць у будівництві</p>
                </li>
                <li className="glass-panel p-4 rounded-lg">
                  <p className="font-bold text-foreground">TVA (Tennessee Valley Authority)</p>
                  <p className="text-sm text-foreground/70">Розвиток долини Теннессі, будівництво ГЕС</p>
                </li>
                <li className="glass-panel p-4 rounded-lg">
                  <p className="font-bold text-foreground">AAA (Agricultural Adjustment Act)</p>
                  <p className="text-sm text-foreground/70">Підтримка фермерів та сільського господарства</p>
                </li>
              </ul>
            </div>

            <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue">
              <h3 className="text-2xl font-bold text-neon-blue mb-6">Результати</h3>
              <div className="space-y-4">
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue">
                  <p className="font-bold text-foreground mb-2">✓ Зниження безробіття</p>
                  <p className="text-sm text-foreground/70">З 25% до 15% до 1937 року</p>
                </div>
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue">
                  <p className="font-bold text-foreground mb-2">✓ Відновлення банківської системи</p>
                  <p className="text-sm text-foreground/70">FDIC — страхування вкладів</p>
                </div>
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue">
                  <p className="font-bold text-foreground mb-2">✓ Створення інфраструктури</p>
                  <p className="text-sm text-foreground/70">Дороги, мости, школи, лікарні</p>
                </div>
                <div className="glass-panel p-4 rounded-lg border-l-4 border-neon-blue">
                  <p className="font-bold text-foreground mb-2">✓ Соціальний захист</p>
                  <p className="text-sm text-foreground/70">Основа сучасної системи соцзабезпечення</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl border-t-4 border-neon-red">
            <p className="text-center text-xl text-foreground/90 italic">
              Новий курс не лише вивів США з кризи, але й фундаментально змінив 
              уявлення про роль держави в економіці, заклавши основи сучасної 
              соціальної держави.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
