'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function MagneticButton({
  children,
  className = '',
  href = '#',
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 15,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;

    x.set(mouseX * 0.18);
    y.set(mouseY * 0.18);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      data-cursor
      className={className}
    >
      {children}
    </motion.a>
  );
}