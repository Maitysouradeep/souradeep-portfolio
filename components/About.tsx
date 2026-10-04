"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="
        relative
        overflow-hidden
        border-t
        border-[var(--border)]
        bg-[var(--background)]
        px-6
        py-28
        text-[var(--foreground)]
        transition-colors
        duration-500
        sm:px-10
        lg:px-16
        lg:py-36
      "
    >
      {/* Background number */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-20px]
          top-16
          select-none
          text-[180px]
          font-medium
          leading-none
          tracking-[-0.08em]
          text-[var(--foreground)]
          opacity-[0.025]
          sm:text-[240px]
        "
      >
        02
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-20
            flex
            items-end
            justify-between
            border-b
            border-[var(--border)]
            pb-5
          "
        >
          <div>
            <p
              className="
                mb-3
                font-mono
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[var(--accent)]
              "
            >
              02 — About
            </p>

            <h2
              className="
                text-4xl
                font-medium
                tracking-[-0.05em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              A little about me.
            </h2>
          </div>

          <span
            className="
              hidden
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[var(--muted-soft)]
              sm:block
            "
          >
            Who I am
          </span>
        </motion.div>

        {/* Main About content */}
        <div
          className="
            grid
            gap-16
            lg:grid-cols-[1.35fr_0.65fr]
            lg:gap-24
          "
        >
          {/* Left — Story */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3
              className="
                max-w-4xl
                text-[clamp(2.2rem,5vw,4.8rem)]
                font-light
                leading-[0.98]
                tracking-[-0.06em]
              "
            >
              I like turning
              <span className="text-[var(--accent)]">
                {" "}
                ideas
              </span>{" "}
              into things people can actually use.
            </h3>

            <div
              className="
                mt-12
                grid
                gap-8
                sm:grid-cols-2
              "
            >
              <p
                className="
                  text-base
                  leading-7
                  text-[var(--muted)]
                  sm:text-lg
                "
              >
                I'm Souradeep, a Full-Stack Developer
                focused on building modern web
                applications and exploring practical
                ways to bring AI into products.
              </p>

              <p
                className="
                  text-base
                  leading-7
                  text-[var(--muted)]
                  sm:text-lg
                "
              >
                I enjoy working across the stack —
                from crafting interfaces with React
                and Next.js to building APIs,
                databases, and AI-powered features.
              </p>
            </div>

            <motion.a
              href="#projects"
              data-cursor
              whileHover={{ x: 5 }}
              className="
                mt-10
                inline-flex
                items-center
                gap-2
                border-b
                border-[var(--foreground)]/20
                pb-2
                text-sm
                text-[var(--foreground)]
                transition-colors
                hover:border-[var(--accent)]
              "
            >
              See what I've been building
              <ArrowUpRight size={15} />
            </motion.a>
          </motion.div>

          {/* Right — All details in ONE place */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pt-2"
          >
            <div
              className="
                border-y
                border-[var(--border)]
              "
            >
              {/* Based in */}
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-6
                  border-b
                  border-[var(--border)]
                  py-6
                "
              >
                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[var(--muted-soft)]
                  "
                >
                  Based in
                </span>

                <span
                  className="
                    text-right
                    text-sm
                    text-[var(--foreground)]
                  "
                >
                  Kolkata, India
                </span>
              </div>

              {/* Focus */}
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-6
                  border-b
                  border-[var(--border)]
                  py-6
                "
              >
                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[var(--muted-soft)]
                  "
                >
                  Focus
                </span>

                <span
                  className="
                    text-right
                    text-sm
                    text-[var(--foreground)]
                  "
                >
                  Full-Stack Development
                </span>
              </div>

              {/* Exploring */}
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-6
                  border-b
                  border-[var(--border)]
                  py-6
                "
              >
                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[var(--muted-soft)]
                  "
                >
                  Exploring
                </span>

                <span
                  className="
                    max-w-[230px]
                    text-right
                    text-sm
                    leading-6
                    text-[var(--foreground)]
                  "
                >
                  AI · RAG · AI Agents · Product
                  Development
                </span>
              </div>

              {/* Working style */}
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-6
                  py-6
                "
              >
                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[var(--muted-soft)]
                  "
                >
                  Working style
                </span>

                <span
                  className="
                    text-right
                    text-sm
                    text-[var(--foreground)]
                  "
                >
                  Build → Test → Refine
                </span>
              </div>
            </div>

            {/* Availability */}
            <div
              className="
                mt-8
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--surface)]
                px-4
                py-3
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[var(--accent)]
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[var(--accent)]
                  "
                />
              </span>

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-[var(--muted)]
                "
              >
                Open to opportunities
              </span>
            </div>

            {/* Small personal note */}
            <p
              className="
                mt-7
                max-w-sm
                text-sm
                leading-6
                text-[var(--muted)]
              "
            >
              I enjoy learning by building — taking an
              idea, turning it into a working product,
              and improving it along the way.
            </p>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="
            mt-24
            border-t
            border-[var(--border)]
            pt-5
          "
        >
          <div className="flex items-center justify-between">
            <span
              className="
                font-mono
                text-[10px]
                tracking-[0.18em]
                text-[var(--muted-soft)]
              "
            >
              SOURadeep MAITY
            </span>

            <span
              className="
                font-mono
                text-[10px]
                tracking-[0.18em]
                text-[var(--muted-soft)]
              "
            >
              2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}