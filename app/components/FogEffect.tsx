"use client";

import { useEffect, useState } from "react";

interface Blob {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  moveX: number;
  moveY: number;
  color: string;
}

export default function FogEffect() {
  const [blobs, setBlobs] = useState<Blob[]>([]);

  useEffect(() => {
    const generated: Blob[] = [
      // Large soft circles
      { id: 0, size: 420, x: -8, y: -5, duration: 24, delay: 0, moveX: 18, moveY: 12, color: "rgba(100, 200, 255, 0.35)" },
      { id: 1, size: 380, x: 65, y: -10, duration: 28, delay: 2, moveX: -12, moveY: 18, color: "rgba(0, 170, 240, 0.3)" },
      { id: 2, size: 350, x: 35, y: 55, duration: 26, delay: 1, moveX: -16, moveY: -14, color: "rgba(80, 190, 250, 0.25)" },
      { id: 3, size: 400, x: -12, y: 65, duration: 30, delay: 3, moveX: 22, moveY: -10, color: "rgba(60, 180, 240, 0.3)" },
      { id: 4, size: 300, x: 80, y: 45, duration: 22, delay: 4, moveX: -10, moveY: 14, color: "rgba(120, 210, 255, 0.25)" },
      // Medium accent circles
      { id: 5, size: 220, x: 20, y: 15, duration: 18, delay: 0.5, moveX: 14, moveY: -16, color: "rgba(0, 153, 204, 0.2)" },
      { id: 6, size: 260, x: 50, y: -8, duration: 20, delay: 2.5, moveX: -14, moveY: 10, color: "rgba(100, 200, 255, 0.2)" },
      { id: 7, size: 200, x: 10, y: 75, duration: 19, delay: 1.5, moveX: 10, moveY: -8, color: "rgba(80, 190, 250, 0.18)" },
    ];
    setBlobs(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className="absolute rounded-full"
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            filter: `blur(${blob.size * 0.25}px)`,
            animation: `blobMove${blob.id} ${blob.duration}s ease-in-out ${blob.delay}s infinite`,
          }}
        />
      ))}

      <style>{`
        ${blobs
          .map(
            (blob) => `
          @keyframes blobMove${blob.id} {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            25% {
              transform: translate(${blob.moveX * 0.6}vw, ${blob.moveY}vh) scale(1.08);
            }
            50% {
              transform: translate(${blob.moveX}vw, ${blob.moveY * 0.3}vh) scale(1.02);
            }
            75% {
              transform: translate(${-blob.moveX * 0.4}vw, ${-blob.moveY * 0.6}vh) scale(0.96);
            }
          }
        `
          )
          .join("\n")}
      `}</style>
    </div>
  );
}
