import { Film, Book, Music, Palette, Camera } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const CultureSection = () => {
  return (
    <section id="culture" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <ScrollReveal className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 glass-panel-strong p-6 rounded-2xl neon-border-blue">
            <Palette className="w-16 h-16 text-neon-blue" />
            <h2 className="text-5xl md:text-6xl font-bold title-glow-blue">
              Культура
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-panel-strong p-8 rounded-2xl neon-border-red">
            <h3 className="text-3xl font-bold text-neon-red mb-6">Література</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Book className="w-8 h-8 text-neon-blue" />
                  <h4 className="text-xl font-bold text-neon-blue">«Втрачене покоління»</h4>
                </div>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Ернест Гемінгуей</li>
                  <li>• Френсіс Скотт Фіцджеральд</li>
                  <li>• Джон Стейнбек («Грона гніву»)</li>
                  <li>• Вільям Фолкнер</li>
                </ul>
              </div>
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Book className="w-8 h-8 text-neon-blue" />
                  <h4 className="text-xl font-bold text-neon-blue">Соціальний реалізм</h4>
                </div>
                <p className="text-foreground/80">
                  Література відображала реальність Депресії: безробіття, бідність, 
                  боротьбу за виживання. Яскравий приклад — «Грона гніву» Джона Стейнбека.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue">
            <h3 className="text-3xl font-bold text-neon-blue mb-6">Кіно</h3>
            <div className="space-y-4">
              <p className="text-foreground/90">
                Золота доба Голлівуду. Незважаючи на кризу, кіно процвітало — людям потрібен був ескапізм.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-panel p-4 rounded-lg text-center">
                  <Film className="w-12 h-12 mx-auto mb-2 text-neon-blue" />
                  <p className="font-bold text-foreground">«Віднесені вітром» (1939)</p>
                </div>
                <div className="glass-panel p-4 rounded-lg text-center">
                  <Film className="w-12 h-12 mx-auto mb-2 text-neon-blue" />
                  <p className="font-bold text-foreground">Мюзикли</p>
                </div>
                <div className="glass-panel p-4 rounded-lg text-center">
                  <Film className="w-12 h-12 mx-auto mb-2 text-neon-blue" />
                  <p className="font-bold text-foreground">Комедії Чапліна</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel-strong p-8 rounded-2xl neon-border-red">
              <div className="flex items-center gap-3 mb-6">
                <Music className="w-10 h-10 text-neon-red" />
                <h3 className="text-3xl font-bold text-neon-red">Музика</h3>
              </div>
              <ul className="space-y-3">
                <li className="glass-panel p-4 rounded-lg">
                  <p className="font-bold text-foreground">Джаз</p>
                  <p className="text-sm text-foreground/70">Луї Армстронг, Дюк Еллінгтон, ера «свінгу»</p>
                </li>
                <li className="glass-panel p-4 rounded-lg">
                  <p className="font-bold text-foreground">Блюз</p>
                  <p className="text-sm text-foreground/70">Музика страждань та надії</p>
                </li>
                <li className="glass-panel p-4 rounded-lg">
                  <p className="font-bold text-foreground">Фолк</p>
                  <p className="text-sm text-foreground/70">Вуді Гатрі — голос робітничого класу</p>
                </li>
              </ul>
            </div>

            <div className="glass-panel-strong p-8 rounded-2xl neon-border-blue">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-10 h-10 text-neon-blue" />
                <h3 className="text-3xl font-bold text-neon-blue">Мистецтво</h3>
              </div>
              <ul className="space-y-3">
                <li className="glass-panel p-4 rounded-lg">
                  <p className="font-bold text-foreground">Соціальний реалізм</p>
                  <p className="text-sm text-foreground/70">Зображення реального життя людей</p>
                </li>
                <li className="glass-panel p-4 rounded-lg">
                  <p className="font-bold text-foreground">WPA Arts Programs</p>
                  <p className="text-sm text-foreground/70">Державна підтримка художників</p>
                </li>
                <li className="glass-panel p-4 rounded-lg flex items-center gap-3">
                  <Camera className="w-6 h-6 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Фотографія</p>
                    <p className="text-sm text-foreground/70">Доротея Ланж — документація Депресії</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-panel-strong p-8 rounded-2xl border-l-4 border-neon-red">
            <p className="text-xl text-foreground/90 italic text-center">
              Культура 1930-х відобразила трагедію епохи, але також показала силу людського духу 
              та прагнення до краси навіть у найтемніші часи.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
