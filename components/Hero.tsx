"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import ProjectWindow from "./ProjectWindow";
import DeveloperAvatar from "./DeveloperAvatar";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        overflow-x-clip
        bg-[var(--background)]
        px-6
        pb-16
        pt-32
        text-[var(--foreground)]
        transition-colors
        duration-500
        sm:px-10
        lg:px-16
        lg:pt-36
      "
    >
      {/* Background grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
          [background-image:linear-gradient(to_right,var(--grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid)_1px,transparent_1px)]
          [background-size:80px_80px]
          [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
        "
      />

      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[var(--accent)]
          opacity-[0.035]
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Top metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mb-16
            flex
            items-center
            justify-between
            border-b
            border-[var(--border)]
            pb-4
            sm:mb-20
          "
        >
          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-[var(--muted)]
            "
          >
            Souradeep Maity
          </span>

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-[var(--muted-soft)]
            "
          >
            Kolkata · India
          </span>
        </motion.div>

        {/* Main hero */}
        <div
          className="
            grid
            items-start
            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
          "
        >
          {/* LEFT SIDE */}
          <div>
            {/* Developer illustration */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mb-10
                flex
                justify-center
                lg:justify-start
              "
            >
              <DeveloperAvatar />
            </motion.div>

            {/* Identity */}
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="
                mb-5
                font-mono
                text-[11px]
                uppercase
                tracking-[0.22em]
                text-[var(--accent)]
              "
            >
              Full-Stack Developer · AI Builder
            </motion.p>

            {/* First name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  y: "105%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-[clamp(4rem,9vw,8rem)]
                  font-medium
                  leading-[0.82]
                  tracking-[-0.07em]
                "
              >
                Souradeep
              </motion.h1>
            </div>

            {/* Last name */}
            <div className="mt-1 overflow-hidden">
              <motion.h2
                initial={{
                  y: "105%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.48,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-[clamp(4rem,9vw,8rem)]
                  font-light
                  leading-[0.82]
                  tracking-[-0.07em]
                  text-[var(--foreground)]/75
                "
              >
                Maity
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.7,
              }}
              className="
                mt-9
                max-w-xl
                text-base
                leading-7
                text-[var(--muted)]
                sm:text-lg
                sm:leading-8
              "
            >
              I build web products, experiment with
              AI-powered systems, and turn ideas into
              things people can actually use.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.82,
              }}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              {/* View work */}
              <a
                href="#projects"
                data-cursor
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[var(--foreground)]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-[var(--background)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                "
              >
                View selected work

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>

              {/* Contact */}
              <a
                href="#contact"
                data-cursor
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[var(--border)]
                  px-5
                  py-3
                  text-sm
                  text-[var(--foreground)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[var(--accent)]
                "
              >
                Let's talk
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="pt-8 lg:pt-28">
            <ProjectWindow />

            {/* Project hint */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 1,
              }}
              className="
                mt-5
                flex
                items-center
                justify-between
                px-1
              "
            >
              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[var(--muted-soft)]
                "
              >
                Selected build
              </span>

              <span
                className="
                  flex
                  items-center
                  gap-2
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[var(--muted-soft)]
                "
              >
                Scroll to explore

                <ArrowDown size={11} />
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bottom marker */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="
            mt-20
            flex
            items-center
            justify-between
            border-t
            border-[var(--border)]
            pt-5
            sm:mt-24
          "
        >
          <span
            className="
              font-mono
              text-[10px]
              tracking-[0.18em]
              text-[var(--muted-soft)]
            "
          >
            01
          </span>

          <span
            className="
              font-mono
              text-[10px]
              tracking-[0.18em]
              text-[var(--muted-soft)]
            "
          >
            SCROLL
          </span>
        </motion.div>
      </div>
    </section>
  );
}