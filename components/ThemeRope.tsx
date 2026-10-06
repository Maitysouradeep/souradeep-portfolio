'use client';

import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeRope() {
  const [isDark, setIsDark] = useState(false);
  const [isPulling, setIsPulling] = useState(false);

  const pullY = useMotionValue(0);
  const controls = useAnimation();

  const ropeScale = useTransform(
    pullY,
    [0, 70],
    [1, 1.12]
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const changeTheme = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
  };

  const handleDragStart = () => {
    setIsPulling(true);
  };

  const handleDrag = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { y: number } }
  ) => {
    const distance = Math.max(0, Math.min(info.offset.y, 70));

    pullY.set(distance);
  };

  const handleDragEnd = async (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { y: number } }
  ) => {
    const distance = Math.max(0, info.offset.y);

    if (distance >= 45) {
      changeTheme();

      await new Promise((resolve) => setTimeout(resolve, 80));
    }

    await controls.start({
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 180,
        damping: 14,
      },
    });

    pullY.set(0);
    setIsPulling(false);
  };

  return (
    <div className="fixed right-[8px] sm:right-[18px] top-0 z-[90] block">
      {/* Entire hanging rope */}
      <motion.div
        className="relative h-[280px] w-8 sm:h-[350px] sm:w-10 origin-top"
        animate={{
          rotate: isPulling
            ? 0
            : [0, -0.7, 0.6, -0.45, 0.35, 0],
        }}
        transition={
          isPulling
            ? {
                duration: 0.2,
              }
            : {
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      >
        {/* Main rope */}
        <motion.div
          className="absolute left-1/2 top-0 h-[260px] sm:h-[330px] w-[1px] -translate-x-1/2 origin-top bg-[var(--muted)]"
          style={{
            scaleY: ropeScale,
          }}
        />

        {/* Soft rope highlight */}
        <motion.div
          className="absolute left-1/2 top-0 h-[260px] sm:h-[330px] w-[2px] -translate-x-1/2 origin-top bg-[var(--foreground)]/[0.12]"
          style={{
            scaleY: ropeScale,
          }}
        />

        {/* Pull handle */}
        <motion.div
          drag="y"
          dragConstraints={{
            top: 0,
            bottom: 70,
          }}
          dragElastic={0.12}
          dragMomentum={false}
          animate={controls}
          style={{
            y: pullY,
          }}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          className="absolute bottom-[2px] left-1/2 flex h-8 w-8 sm:h-9 sm:w-9 -translate-x-1/2 cursor-grab items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-[0_4px_20px_rgba(0,0,0,0.14)] active:cursor-grabbing"
        >
          {/* Inner light */}
          <motion.span
            className="h-2 w-2 rounded-full bg-[var(--foreground)]"
            animate={{
              scale: isPulling ? [1, 0.8, 1] : 1,
              opacity: isDark ? 0.9 : 0.7,
            }}
            transition={{
              duration: 0.5,
              repeat: isPulling ? Infinity : 0,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}