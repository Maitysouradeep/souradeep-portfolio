"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function DeveloperAvatar() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    { stiffness: 180, damping: 18 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    { stiffness: 180, damping: 18 }
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto h-44 w-44 sm:h-52 sm:w-52"
      style={{ perspective: 900 }}
    >
      {/* Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-[-14px]
          rounded-full
          border
          border-[var(--foreground)]/10
        "
      />

      {/* Orbit dot */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-14px]"
      >
        <span
          className="
            absolute
            left-1/2
            top-[-4px]
            h-2
            w-2
            -translate-x-1/2
            rounded-full
            bg-[var(--accent)]
            shadow-[0_0_15px_var(--accent)]
          "
        />
      </motion.div>

      {/* Avatar */}
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          relative
          h-full
          w-full
          overflow-hidden
          rounded-full
          border
          border-[var(--border)]
          bg-[var(--surface-soft)]
          shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        "
      >
        <Image
          src="/avatar.png"
          alt="Illustrated developer working on a laptop"
          fill
          priority
          sizes="208px"
          className="object-cover"
        />

        {/* Glass highlight */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-gradient-to-br
            from-white/15
            via-transparent
            to-transparent
          "
        />
      </motion.div>
    </div>
  );
}