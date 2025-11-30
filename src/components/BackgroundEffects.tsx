import { memo, useMemo } from "react";

const STARS_COUNT = 50;

// Мемоизация позиций звезд для стабильности
const generateStarPositions = () => {
  const stars = [];
  for (let i = 0; i < STARS_COUNT; i++) {
    stars.push({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
    });
  }
  return stars;
};

export const BackgroundEffects = memo(() => {
  const starPositions = useMemo(() => generateStarPositions(), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-red/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-neon-red/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="absolute inset-0 opacity-20">
        {starPositions.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animation: `float ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-red/50 to-transparent animate-neon-flicker" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent animate-neon-flicker" style={{ animationDelay: "0.7s" }} />
    </div>
  );
});

BackgroundEffects.displayName = "BackgroundEffects";
