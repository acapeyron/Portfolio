import React from 'react';

interface Dot {
  top: string; // Position verticale
  left: string; // Position horizontale
  size: string; // Taille du point
  animationDuration: string; // Durée d'animation
  animationDelay: string; // Délai d'animation
}

const RandomDotsBackground: React.FC= () => {
  // Fonction pour générer un tableau de points aléatoires
  const generateDots = (): Dot[] => {
    return Array.from({ length: 100 }, () => ({
      top: Math.random() * 100 + '%', // Position verticale aléatoire
      left: Math.random() * 100 + '%', // Position horizontale aléatoire
      size: Math.random() * 1.8 + 0.2 + 'px', // Taille entre 0.2px et 2px
      animationDuration: Math.random() * 5 + 5 + 's', // Durée d'animation entre 5s et 10s
      animationDelay: Math.random() * 5 + 5 + 's', // Délai d'animation entre 5s et 10s
    }));
  };

  const dots = generateDots();

  return (
    <div className="absolute w-screen h-screen overflow-hidden -z-50">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full animate-blink"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.animationDelay,
            animationDuration: dot.animationDuration
          }}
        ></div>
      ))}
    </div>
  );
};

export default RandomDotsBackground;
