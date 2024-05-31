'use client';

import { useEffect, useRef, useState } from 'react';

const Creative = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHeartCompleted, setIsHeartCompleted] = useState(false);
  const [fillHeart, setFillHeart] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.8; // Adjusted height for the canvas

        const drawHeart = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          ctx.strokeStyle = 'red';
          ctx.lineWidth = 2;
          const path = new Path2D();

          const cx = canvas.width / 2;
          const cy = canvas.height / 2;
          const scale = 15;

          let t = 0;
          const dt = 0.05;

          const animate = () => {
            if (t > Math.PI * 2) {
              setIsHeartCompleted(true);
              if (fillHeart) {
                ctx.fillStyle = 'red';
                ctx.fill(path);
              }
              return;
            }

            const x = scale * 16 * Math.sin(t) ** 3;
            const y = -scale * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

            path.lineTo(cx + x, cy + y);
            ctx.stroke(path);

            t += dt;
            requestAnimationFrame(animate);
          };

          path.moveTo(cx, cy);
          animate();
        };

        drawHeart();
      }
    }
  }, []);

  useEffect(() => {
    if (fillHeart && isHeartCompleted) {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const path = new Path2D();
          const cx = canvas.width / 2;
          const cy = canvas.height / 2;
          const scale = 15;

          for (let t = 0; t <= Math.PI * 2; t += 0.05) {
            const x = scale * 16 * Math.sin(t) ** 3;
            const y = -scale * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
            path.lineTo(cx + x, cy + y);
          }

          ctx.fillStyle = 'red';
          ctx.fill(path);
        }
      }
    }
  }, [fillHeart, isHeartCompleted]);

  return (
    <div className="h-screen flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/purple_bg3.jpg')" }}>
      <canvas ref={canvasRef} className="w-full h-auto"></canvas>
      {isHeartCompleted && (
        <button
          onClick={() => setFillHeart(true)}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Fill Heart
        </button>
      )}
    </div>
  );
};

export default Creative;