import { useMemo } from 'react';

function FloatingDots({ cantidad = 24 }) {
  const puntos = useMemo(() => {
    return Array.from({ length: cantidad }).map((_, i) => {
      const size = 3 + Math.random() * 6;
      return {
        id: i,
        size,
        left: Math.random() * 100,
        delay: Math.random() * 16,
        duration: 12 + Math.random() * 10,
      };
    });
  }, [cantidad]);

  return (
    <div className="sky">
      {puntos.map((p) => (
        <div
          key={p.id}
          className="float-dot"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}vw`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingDots;
