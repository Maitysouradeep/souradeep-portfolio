'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');

    const dark = savedTheme
      ? savedTheme === 'dark'
      : true;

    document.documentElement.classList.toggle('dark', dark);

    setIsDark(dark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;

    document.documentElement.classList.toggle(
      'dark',
      nextTheme
    );

    localStorage.setItem(
      'portfolio-theme',
      nextTheme ? 'dark' : 'light'
    );

    setIsDark(nextTheme);
  };

  if (!mounted) {
    return (
      <div
        className="
          h-12 w-12
          rounded-full
          border border-black/15
          bg-white
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          dark:border-white/15
          dark:bg-[#111315]
        "
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark
          ? 'Switch to light mode'
          : 'Switch to dark mode'
      }
      className="
        group relative
        flex h-12 w-12
        items-center justify-center
        rounded-full

        border
        border-black/15
        bg-white
        text-black

        shadow-[0_8px_30px_rgba(0,0,0,0.10)]

        transition-all duration-300

        hover:scale-105
        hover:border-[#6f9900]/60
        hover:shadow-[0_10px_35px_rgba(0,0,0,0.15)]

        dark:border-white/15
        dark:bg-[#111315]
        dark:text-white

        dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]

        dark:hover:border-[#b7ff3c]/60
        dark:hover:shadow-[0_0_30px_rgba(183,255,60,0.12)]
      "
    >
      {/* Glow */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          rounded-full

          bg-[#6f9900]/10
          opacity-0
          blur-xl

          transition-opacity duration-300

          group-hover:opacity-100

          dark:bg-[#b7ff3c]/10
        "
      />

      {/* Icon */}
      <span className="relative z-10">
        {isDark ? (
          <Sun
            size={19}
            strokeWidth={2}
            className="
              text-[#b7ff3c]
              transition-transform duration-500
              group-hover:rotate-90
            "
          />
        ) : (
          <Moon
            size={19}
            strokeWidth={2}
            className="
              text-[#4f6900]
              transition-transform duration-500
              group-hover:-rotate-12
            "
          />
        )}
      </span>
    </button>
  );
}