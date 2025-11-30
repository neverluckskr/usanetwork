import { UserCircle, Target, Zap, Radio } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const RooseveltSection = () => {
  return (
    <section id="roosevelt" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-6xl mx-auto relative z-10">
        <div className="glass-panel-strong p-12 rounded-3xl neon-border-blue">
          <div className="flex items-center gap-4 mb-8">
            <UserCircle className="w-16 h-16 text-neon-blue" />
            <h2 className="text-5xl md:text-6xl font-bold title-glow-blue">
              Франклін Д. Рузвельт
            </h2>
          </div>

          <div className="h-1 w-full mb-8 bg-gradient-to-r from-neon-blue via-transparent to-neon-blue rounded-full" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-neon-blue mb-4">Біографія</h3>
              <ul className="space-y-3 text-foreground/90">
                <li><span className="text-neon-red">◆</span> Народився 30 січня 1882 року в Нью-Йорку</li>
                <li><span className="text-neon-red">◆</span> З багатої та впливової родини</li>
                <li><span className="text-neon-red">◆</span> Освіта в Гарварді та Колумбійському університеті</li>
                <li><span className="text-neon-red">◆</span> У 1921 перехворів поліомієлітом, втратив здатність ходити</li>
                <li><span className="text-neon-red">◆</span> Губернатор Нью-Йорка (1929–1932)</li>
                <li><span className="text-neon-red">◆</span> 32-й президент США (1933–1945)</li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-neon-blue mb-4">Президентство</h3>
              <ul className="space-y-3 text-foreground/90">
                <li><span className="text-neon-red">◆</span> Обраний у розпал Великої депресії (1932)</li>
                <li><span className="text-neon-red">◆</span> Єдиний президент з 4 термінами</li>
                <li><span className="text-neon-red">◆</span> Створив програму «Новий курс»</li>
                <li><span className="text-neon-red">◆</span> Радикально змінив роль держави в економіці</li>
                <li><span className="text-neon-red">◆</span> Провів США через Другу світову війну</li>
                <li><span className="text-neon-red">◆</span> Помер на посаді 12 квітня 1945 року</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 glass-panel p-8 rounded-2xl border-l-4 border-neon-blue">
            <h3 className="text-2xl font-bold text-neon-blue mb-4">Знаменна інавгураційна промова (1933)</h3>
            <blockquote className="text-xl italic text-foreground/90 mb-4">
              "Єдине, чого ми повинні боятися, — це самого страху... 
              безіменного, безглуздого, невиправданого жаху, що паралізує необхідні зусилля 
              для перетворення відступу в наступ."
            </blockquote>
            <p className="text-foreground/80">
              Ці слова стали символом надії для мільйонів американців, що занурилися у відчай кризи.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-xl neon-border-red text-center">
              <Target className="w-12 h-12 mx-auto mb-2 text-neon-red" />
              <p className="font-bold text-neon-red">Бачення</p>
              <p className="text-sm text-foreground/80 mt-2">Активна роль держави в економіці</p>
            </div>
            <div className="glass-panel p-6 rounded-xl neon-border-red text-center">
              <Zap className="w-12 h-12 mx-auto mb-2 text-neon-red" />
              <p className="font-bold text-neon-red">Рішучість</p>
              <p className="text-sm text-foreground/80 mt-2">100 днів інтенсивних реформ</p>
            </div>
            <div className="glass-panel p-6 rounded-xl neon-border-red text-center">
              <Radio className="w-12 h-12 mx-auto mb-2 text-neon-red" />
              <p className="font-bold text-neon-red">Комунікація</p>
              <p className="text-sm text-foreground/80 mt-2">«Бесіди біля каміна» з народом</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
