"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Circle,
  Layers3,
  Sparkles,
} from "lucide-react";

export default function ProjectWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative w-full"
      data-cursor
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-10
          rounded-[3rem]
          bg-[var(--accent)]
          opacity-[0.04]
          blur-3xl
          transition-opacity
          duration-700
          group-hover:opacity-[0.09]
        "
      />

      <div
        className="
          relative
          overflow-hidden
          rounded-[1.75rem]
          border
          border-[var(--border)]
          bg-[var(--surface)]
          shadow-[0_25px_80px_rgba(0,0,0,0.08)]
          transition-all
          duration-500
          dark:shadow-[0_25px_80px_rgba(0,0,0,0.28)]
          group-hover:-translate-y-1
        "
      >
        {/* Window header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[var(--border)]
            px-5
            py-4
          "
        >
          <div className="flex items-center gap-2">
            <Circle
              size={7}
              fill="currentColor"
              className="text-[var(--accent)]"
            />

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-[var(--muted)]
              "
            >
              Current Build
            </span>
          </div>

          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.18em]
              text-[var(--muted-soft)]
            "
          >
            01 / 06
          </span>
        </div>

        {/* Project information */}
        <div className="p-5 sm:p-7">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p
                className="
                  mb-2
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-[var(--accent)]
                "
              >
                Building
              </p>

              <h3
                className="
                  text-2xl
                  font-medium
                  tracking-[-0.04em]
                  text-[var(--foreground)]
                  sm:text-3xl
                "
              >
                NexusFlow
              </h3>

              <p
                className="
                  mt-2
                  max-w-xs
                  text-sm
                  leading-6
                  text-[var(--muted)]
                "
              >
                A SaaS workspace platform designed
                around simple team workflows.
              </p>
            </div>

            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[var(--border)]
                text-[var(--foreground)]
              "
            >
              <ArrowUpRight size={17} strokeWidth={1.7} />
            </motion.div>
          </div>

          {/* Mini product preview */}
          <div
            className="
              relative
              mt-7
              overflow-hidden
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--surface-soft)]
              p-3
            "
          >
            {/* Fake browser top bar */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-[var(--border)]
                pb-3
              "
            >
              <div className="flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted-soft)] opacity-40" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted-soft)] opacity-40" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted-soft)] opacity-40" />
              </div>

              <span
                className="
                  font-mono
                  text-[7px]
                  tracking-[0.15em]
                  text-[var(--muted-soft)]
                "
              >
                NEXUSFLOW / DASHBOARD
              </span>
            </div>

            {/* Dashboard */}
            <div className="grid grid-cols-[72px_1fr] gap-3 pt-3">
              {/* Sidebar */}
              <div
                className="
                  hidden
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-2
                  sm:block
                "
              >
                <div
                  className="
                    mb-4
                    h-2
                    w-7
                    rounded-full
                    bg-[var(--foreground)]
                    opacity-20
                  "
                />

                <div className="space-y-2">
                  <div className="h-1.5 w-full rounded-full bg-[var(--accent)] opacity-70" />
                  <div className="h-1.5 w-4/5 rounded-full bg-[var(--muted-soft)] opacity-20" />
                  <div className="h-1.5 w-3/5 rounded-full bg-[var(--muted-soft)] opacity-20" />
                  <div className="h-1.5 w-4/5 rounded-full bg-[var(--muted-soft)] opacity-20" />
                </div>
              </div>

              {/* Main preview */}
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "24",
                    "08",
                    "91%",
                  ].map((value, index) => (
                    <div
                      key={value}
                      className="
                        rounded-xl
                        border
                        border-[var(--border)]
                        bg-[var(--surface)]
                        p-3
                      "
                    >
                      <p
                        className="
                          font-mono
                          text-[7px]
                          uppercase
                          tracking-wider
                          text-[var(--muted-soft)]
                        "
                      >
                        {index === 0
                          ? "Tasks"
                          : index === 1
                            ? "Teams"
                            : "Progress"}
                      </p>

                      <p
                        className="
                          mt-2
                          text-sm
                          font-medium
                          tracking-tight
                          text-[var(--foreground)]
                        "
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                    p-3
                  "
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className="
                        font-mono
                        text-[7px]
                        uppercase
                        tracking-wider
                        text-[var(--muted-soft)]
                      "
                    >
                      Activity
                    </span>

                    <Layers3
                      size={12}
                      className="text-[var(--accent)]"
                    />
                  </div>

                  <div className="flex h-16 items-end gap-1">
                    {[35, 52, 42, 70, 48, 82, 62, 91, 72, 96].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 0.7,
                            delay: 0.5 + index * 0.04,
                            ease: "easeOut",
                          }}
                          className={`
                            flex-1
                            rounded-t-sm
                            ${
                              index === 7
                                ? "bg-[var(--accent)]"
                                : "bg-[var(--foreground)] opacity-[0.08]"
                            }
                          `}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
            "
          >
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Firebase"].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-[var(--border)]
                    px-2.5
                    py-1
                    font-mono
                    text-[8px]
                    tracking-wide
                    text-[var(--muted)]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                font-mono
                text-[9px]
                uppercase
                tracking-[0.16em]
                text-[var(--foreground)]
              "
            >
              <Sparkles
                size={12}
                className="text-[var(--accent)]"
              />

              In progress
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}