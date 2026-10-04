'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const lines = [
  {
    command: 'whoami',
    output: 'Souradeep Maity',
  },
  {
    command: 'role',
    output: 'Full-Stack Developer',
  },
  {
    command: 'focus',
    output: 'Web · AI · SaaS',
  },
  {
    command: 'currently_building',
    output: 'NexusFlow',
  },
];

export default function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((current) => {
        if (current >= lines.length) {
          clearInterval(interval);
          return current;
        }

        return current + 1;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        terminal-card
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--surface)]/90
        shadow-2xl
        backdrop-blur-xl
        transition-all
        duration-500
      "
    >
      {/* Header */}
      <div
        className="
          flex items-center justify-between
          border-b border-[var(--border)]
          px-5 py-4
        "
      >
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>

        <span
          className="
            font-mono
            text-[11px]
            text-[var(--muted-soft)]
          "
        >
          souradeep@portfolio
        </span>
      </div>

      {/* Body */}
      <div
        className="
          min-h-[410px]
          space-y-7
          p-7
          font-mono
          text-sm
        "
      >
        {lines.slice(0, visibleLines).map((line) => (
          <motion.div
            key={line.command}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Command */}
            <p className="text-[var(--muted-soft)]">
              <span className="text-[var(--accent)]">
                $
              </span>{' '}
              {line.command}
            </p>

            {/* Output */}
            <p
              className="
                mt-2
                text-[var(--foreground)]/70
              "
            >
              {line.output}
            </p>
          </motion.div>
        ))}

        {/* Terminal prompt */}
        <div
          className="
            border-t
            border-[var(--border)]
            pt-5
            text-[var(--muted-soft)]
          "
        >
          <span className="text-[var(--accent)]">
            souradeep
          </span>

          @portfolio:~${' '}

          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            █
          </motion.span>
        </div>
      </div>
    </div>
  );
}