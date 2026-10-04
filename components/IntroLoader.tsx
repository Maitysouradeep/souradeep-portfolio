"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type IntroLoaderProps = {
  onComplete: () => void;
};

export default function IntroLoader({
  onComplete,
}: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isTearing, setIsTearing] = useState(false);

  useEffect(() => {
    const duration = 1600;
    const start = performance.now();

    let frame: number;

    const animate = (time: number) => {
      const elapsed = time - start;
      const percentage = Math.min(elapsed / duration, 1);

      setProgress(Math.round(percentage * 100));

      if (percentage < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsTearing(true);

          setTimeout(() => {
            onComplete();
          }, 850);
        }, 180);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] overflow-hidden bg-[#f2f1ec]"
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.15,
        }}
      >
        {/* LEFT PAPER */}
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 bg-[#f2f1ec]"
          animate={
            isTearing
              ? {
                  x: "-105%",
                }
              : {
                  x: 0,
                }
          }
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{
            clipPath: `
              polygon(
                0 0,
                100% 0,
                98% 5%,
                100% 10%,
                97% 15%,
                100% 20%,
                98% 25%,
                100% 30%,
                97% 35%,
                100% 40%,
                98% 45%,
                100% 50%,
                97% 55%,
                100% 60%,
                98% 65%,
                100% 70%,
                97% 75%,
                100% 80%,
                98% 85%,
                100% 90%,
                98% 95%,
                100% 100%,
                0 100%
              )
            `,
          }}
        />

        {/* RIGHT PAPER */}
        <motion.div
          className="absolute inset-y-0 right-0 w-1/2 bg-[#f2f1ec]"
          animate={
            isTearing
              ? {
                  x: "105%",
                }
              : {
                  x: 0,
                }
          }
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{
            clipPath: `
              polygon(
                0 0,
                100% 0,
                100% 100%,
                0 100%,
                2% 95%,
                0 90%,
                3% 85%,
                0 80%,
                2% 75%,
                0 70%,
                3% 65%,
                0 60%,
                2% 55%,
                0 50%,
                3% 45%,
                0 40%,
                2% 35%,
                0 30%,
                3% 25%,
                0 20%,
                2% 15%,
                0 10%,
                2% 5%
              )
            `,
          }}
        />

        {/* INTRO CONTENT */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
          animate={
            isTearing
              ? {
                  opacity: 0,
                  scale: 0.96,
                }
              : {
                  opacity: 1,
                  scale: 1,
                }
          }
          transition={{
            duration: 0.3,
          }}
        >
          <div className="w-full max-w-5xl px-8 sm:px-12">
            {/* NAME */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-[clamp(3.2rem,10vw,8rem)]
                  font-semibold
                  leading-[0.82]
                  tracking-[-0.075em]
                  text-[#111]
                "
              >
                SOURADEEP
              </motion.h1>
            </div>

            <div className="mt-2 overflow-hidden">
              <motion.h2
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.23,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-[clamp(3.2rem,10vw,8rem)]
                  font-light
                  leading-[0.82]
                  tracking-[-0.075em]
                  text-[#111]
                "
              >
                MAITY
              </motion.h2>
            </div>

            {/* BOTTOM INFO */}
            <div className="mt-10 flex items-end justify-between sm:mt-14">
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
                  delay: 0.65,
                  duration: 0.5,
                }}
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-black/45
                  sm:text-xs
                "
              >
                Full-Stack Developer
              </motion.p>

              <div className="flex flex-col items-end">
                <span
                  className="
                    font-mono
                    text-xs
                    tracking-[0.15em]
                    text-black/45
                  "
                >
                  {progress}%
                </span>

                <div
                  className="
                    mt-2
                    h-[1px]
                    w-24
                    overflow-hidden
                    bg-black/10
                    sm:w-32
                  "
                >
                  <motion.div
                    className="h-full bg-black"
                    animate={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SMALL TEAR SHADOW */}
        {isTearing && (
          <motion.div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              z-30
              h-full
              w-[3px]
              -translate-x-1/2
              bg-black/10
              blur-[2px]
            "
            initial={{
              opacity: 0,
              scaleY: 0,
            }}
            animate={{
              opacity: 1,
              scaleY: 1,
            }}
            transition={{
              duration: 0.25,
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}