'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorPosition {
  x: number;
  y: number;
}

interface Heart {
  id: string;
  x: number;
  y: number;
}

export const CustomCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      // Create heart burst on click
      const newHearts = Array.from({ length: 5 }, (_, i) => ({
        id: `${Date.now()}-${i}`,
        x: e.clientX,
        y: e.clientY,
      }));

      setHearts((prev) => [...prev, ...newHearts]);

      // Remove hearts after animation
      setTimeout(() => {
        setHearts((prev) =>
          prev.filter((h) => !newHearts.find((nh) => nh.id === h.id))
        );
      }, 600);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('click', handleClick);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('click', handleClick);
      };
    }
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <motion.div
          className="text-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
          }}
        >
          💕
        </motion.div>
      </div>

      {/* Heart burst particles */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="fixed pointer-events-none text-xl"
          initial={{
            x: heart.x,
            y: heart.y,
            scale: 1,
            opacity: 1,
          }}
          animate={{
            x: heart.x + (Math.random() - 0.5) * 100,
            y: heart.y + (Math.random() - 0.5) * 100,
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          💖
        </motion.div>
      ))}
    </>
  );
};
