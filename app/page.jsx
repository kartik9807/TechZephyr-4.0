"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import "./globals.css";
import CountUp from "react-countup";
import Silk from "@/components/animated_bg/Silk.jsx";
import { motion } from "framer-motion";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  /* =========================================================
      CINEMATIC INTRO STATE
  ========================================================== */

  const [showIntro, setShowIntro] = useState(true);
  const [progress, setProgress] = useState(0);
  const [introStage, setIntroStage] = useState(0);
  const [opening, setOpening] = useState(false);

  /* =========================================================
      STAGGERED INTRO REVEAL
  ========================================================== */

  useEffect(() => {
    const timers = [
      setTimeout(() => setIntroStage(1), 500),
      setTimeout(() => setIntroStage(2), 1200),
      setTimeout(() => setIntroStage(3), 1900),
      setTimeout(() => setIntroStage(4), 2600),
      setTimeout(() => setIntroStage(5), 3300),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  /* =========================================================
      PROGRESS BAR
      0 -> 100 over 6 seconds
  ========================================================== */

  useEffect(() => {
    if (!showIntro) return;

    let animationFrame;

    const startTime = performance.now();
    const duration = 6000;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;

      const value = Math.min(
        100,
        Math.floor((elapsed / duration) * 100)
      );

      setProgress(value);

      if (value < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrame);
  }, [showIntro]);

  /* =========================================================
      CURTAIN TRIGGER
      Opens only after progress reaches 100%
  ========================================================== */

  useEffect(() => {
    if (progress < 100) return;

    const openTimer = setTimeout(() => {
      setOpening(true);
    }, 450);

    const removeTimer = setTimeout(() => {
      setShowIntro(false);
    }, 450 + 1450 + 200);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(removeTimer);
    };
  }, [progress]);

  return (
    <>
      {/* =========================================================
          CINEMATIC INTRO
      ========================================================== */}

      {showIntro && (
        <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">

          {/* =====================================================
              CURTAIN BACKGROUND
          ====================================================== */}

          <div className="absolute inset-0 bg-black" />

          {/* =====================================================
              SUBTLE CINEMATIC LIGHT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: opening ? 0 : 1,
            }}
            transition={{ duration: 1 }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/[0.035] blur-[160px]"
          />

          {/* =====================================================
              TOP LIGHT
          ====================================================== */}

          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-amber-400/[0.025] to-transparent" />

          {/* =====================================================
              BOTTOM LIGHT
          ====================================================== */}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-amber-400/[0.025] to-transparent" />

          {/* =====================================================
              SCANLINES
          ====================================================== */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(255,255,255,0.35) 4px)",
            }}
          />

          {/* =====================================================
              CORNER MARKERS
          ====================================================== */}

          <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-white/10" />
          <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-white/10" />
          <div className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-white/10" />
          <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-white/10" />

          {/* =====================================================
              INTRO CONTENT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              y: 0,
            }}
            animate={{
              opacity: opening ? 0 : 1,
              scale: opening ? 1.03 : 1,
              y: opening ? -10 : 0,
            }}
            transition={{
              opacity: {
                duration: 0.45,
                ease: "easeOut",
              },
              scale: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
              y: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center px-5"
          >

            {/* ===================================================
                TOP LABEL
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: introStage >= 1 ? 1 : 0,
                y: introStage >= 1 ? 0 : -15,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-1/2 top-8 -translate-x-1/2 text-center"
            >
              <p className="text-[8px] uppercase tracking-[0.6em] text-amber-300/50 sm:text-[9px]">
                IIT Bhubaneswar
              </p>
            </motion.div>

            {/* ===================================================
                LOGOS
            ==================================================== */}

            <div className="flex items-center justify-center gap-5 sm:gap-8 md:gap-10">

              {/* STC */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.7,
                }}
                animate={{
                  opacity: introStage >= 1 ? 1 : 0,
                  y: introStage >= 1 ? 0 : 25,
                  scale: introStage >= 1 ? 1 : 0.7,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24 md:h-28 md:w-28"
              >
                <div className="absolute inset-0 rounded-full bg-amber-400/[0.06] blur-2xl" />

                <img
                  src="/stc.jpg"
                  alt="Science and Technology Council"
                  className="relative z-10 h-full w-full object-contain"
                />
              </motion.div>

              {/* DIVIDER */}

              <motion.div
                initial={{
                  opacity: 0,
                  scaleY: 0,
                }}
                animate={{
                  opacity: introStage >= 2 ? 1 : 0,
                  scaleY: introStage >= 2 ? 1 : 0,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="h-12 w-px origin-center bg-linear-to-b from-transparent via-white/20 to-transparent sm:h-16"
              />

              {/* TECHZEPHYR */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.7,
                }}
                animate={{
                  opacity: introStage >= 2 ? 1 : 0,
                  y: introStage >= 2 ? 0 : 25,
                  scale: introStage >= 2 ? 1 : 0.7,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28 md:h-32 md:w-32"
              >
                <div className="absolute inset-0 rounded-full bg-amber-400/[0.08] blur-2xl" />

                <img
                  src="/logo.jpeg"
                  alt="TechZephyr"
                  className="relative z-10 h-full w-full object-contain"
                />
              </motion.div>

              {/* DIVIDER */}

              <motion.div
                initial={{
                  opacity: 0,
                  scaleY: 0,
                }}
                animate={{
                  opacity: introStage >= 3 ? 1 : 0,
                  scaleY: introStage >= 3 ? 1 : 0,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="h-12 w-px origin-center bg-linear-to-b from-transparent via-white/20 to-transparent sm:h-16"
              />

              {/* IIT */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.7,
                }}
                animate={{
                  opacity: introStage >= 3 ? 1 : 0,
                  y: introStage >= 3 ? 0 : 25,
                  scale: introStage >= 3 ? 1 : 0.7,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24 md:h-28 md:w-28"
              >
                <div className="absolute inset-0 rounded-full bg-amber-400/[0.06] blur-2xl" />

                <img
                  src="https://upload.wikimedia.org/wikipedia/en/8/82/Indian_Institute_of_Technology_Bhubaneswar_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
                  alt="IIT Bhubaneswar"
                  className="relative z-10 h-full w-full object-contain"
                />
              </motion.div>

            </div>

            {/* ===================================================
                PRESENTATION TEXT
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: introStage >= 4 ? 1 : 0,
                y: introStage >= 4 ? 0 : 18,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 text-center"
            >

              <p className="text-[10px] uppercase tracking-[0.35em] text-amber-300/65 sm:text-xs sm:tracking-[0.45em]">
                Science &amp; Technology Council of IIT Bhubaneswar
              </p>

              <motion.div
                initial={{
                  opacity: 0,
                  scaleX: 0,
                }}
                animate={{
                  opacity: introStage >= 4 ? 1 : 0,
                  scaleX: introStage >= 4 ? 1 : 0,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.5,
                }}
                className="mx-auto mt-3 h-px w-16 bg-amber-400/30"
              />

              <p className="mt-3 text-[9px] uppercase tracking-[0.5em] text-white/30">
                Presents
              </p>

            </motion.div>

            {/* ===================================================
                MAIN EVENT TITLE
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: introStage >= 5 ? 1 : 0,
                scale: introStage >= 5 ? 1 : 0.9,
                y: introStage >= 5 ? 0 : 20,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 text-center"
            >

              <h1 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                TECHZEPHYR 4.0
              </h1>

              <p className="mt-2 text-[9px] uppercase tracking-[0.45em] text-white/30 sm:text-[10px]">
                The Flagship Technical Event
              </p>

            </motion.div>

            {/* ===================================================
                PROGRESS AREA

                IMPORTANT:
                Visible immediately from first frame.
            ==================================================== */}

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
                duration: 0.6,
              }}
              className="mt-12 w-full max-w-md sm:mt-14"
            >

              {/* =================================================
                  PROGRESS LABEL
              ================================================== */}

              <div className="mb-2 flex items-center justify-between">

                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/35 sm:text-[9px]">
                  {progress >= 100
                    ? "System Ready"
                    : progress >= 80
                      ? "Finalizing"
                      : progress >= 50
                        ? "Loading Assets"
                        : "Initializing"}
                </span>

                <span className="font-mono text-[9px] tracking-[0.2em] text-amber-300/70">
                  {String(progress).padStart(3, "0")}%
                </span>

              </div>

              {/* =================================================
                  YELLOW / AMBER PROGRESS BAR

                  Fills continuously from 0 -> 100.
              ================================================== */}

              <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/[0.08]">

                {/* Filled portion */}

                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-yellow-500 via-amber-300 to-yellow-200"
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.08,
                    ease: "linear",
                  }}
                />

                {/* Moving glow */}

                <motion.div
                  className="pointer-events-none absolute inset-y-0 w-16 bg-white/40 blur-md"
                  animate={{
                    left: `calc(${progress}% - 2rem)`,
                    opacity:
                      progress > 0 && progress < 100
                        ? 0.8
                        : 0,
                  }}
                  transition={{
                    duration: 0.08,
                    ease: "linear",
                  }}
                />

                {/* Bright leading edge */}

                <motion.div
                  className="absolute inset-y-0 w-[2px] bg-yellow-100 shadow-[0_0_12px_rgba(253,224,71,0.9)]"
                  animate={{
                    left: `calc(${progress}% - 1px)`,
                    opacity:
                      progress > 0 && progress < 100
                        ? 1
                        : 0,
                  }}
                  transition={{
                    duration: 0.08,
                    ease: "linear",
                  }}
                />

              </div>

              {/* =================================================
                  PROGRESS FOOTER
              ================================================== */}

              <div className="mt-3 flex items-center justify-between">

                <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                  Initializing Experience
                </span>

                <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                  TZ-04 / 2026
                </span>

              </div>

            </motion.div>

          </motion.div>

          {/* =====================================================
              CENTER LINE
          ====================================================== */}

          <motion.div
            initial={{
              scaleY: 0,
              opacity: 0,
            }}
            animate={{
              scaleY: opening ? 1 : 0,
              opacity: opening ? 0.65 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="absolute left-1/2 top-1/2 z-40 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-linear-to-b from-transparent via-amber-300 to-transparent"
          />

          {/* =====================================================
              LEFT CURTAIN
          ====================================================== */}

          <motion.div
            initial={{
              x: "0%",
            }}
            animate={{
              x: opening ? "-100%" : "0%",
            }}
            transition={{
              duration: 1.45,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute inset-y-0 left-0 z-20 w-1/2 bg-black"
          >

            <div className="absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-amber-400/50 to-transparent" />

            <div className="absolute inset-y-0 right-0 w-28 bg-linear-to-l from-amber-400/[0.04] to-transparent" />

          </motion.div>

          {/* =====================================================
              RIGHT CURTAIN
          ====================================================== */}

          <motion.div
            initial={{
              x: "0%",
            }}
            animate={{
              x: opening ? "100%" : "0%",
            }}
            transition={{
              duration: 1.45,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute inset-y-0 right-0 z-20 w-1/2 bg-black"
          >

            <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-amber-400/50 to-transparent" />

            <div className="absolute inset-y-0 left-0 w-28 bg-linear-to-r from-amber-400/[0.04] to-transparent" />

          </motion.div>

        </div>
      )}

      {/* =========================================================
          HERO SECTION
          UNCHANGED
      ========================================================== */}

      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          background: "var(--background)",
        }}
      >

        {/* SILK BACKGROUND */}

        <div
          style={{
            position: "absolute",
            inset: 0,
          }}
        >
          <Silk
            speed={5}
            scale={1}
            noiseIntensity={isDark ? 1.2 : 0.7}
            rotation={0}
            color={isDark ? "#7B7481" : "#D6A84F"}
          />
        </div>

        {/* SILK → BACKGROUND TRANSITION */}

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-72 sm:h-80 md:h-96"
          style={{
            background: isDark
              ? "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 65%, #000 100%)"
              : "linear-gradient(to bottom, transparent 0%, rgba(250,248,242,0.25) 30%, rgba(250,248,242,0.7) 65%, #faf8f2 100%)",
            zIndex: 1,
          }}
        />

        {/* HERO CONTENT */}

        <div
          style={{
            position: "relative",
            zIndex: 2,
          }}
          className="flex flex-col items-center px-4 pt-16 pb-32 sm:pt-20"
        >

          {/* MAIN TITLE */}

          <h1 className="landing-heading text-center text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] bg-clip-text text-transparent bg-linear-to-b from-amber-400 via-amber-600 to-black dark:from-zinc-300 dark:via-zinc-500 dark:to-black">
            TECHZEPHYR 4.0
          </h1>

          {/* EDITION */}

          <p
            className={`mt-4 text-center text-[10px] uppercase tracking-[0.2em]
            sm:mt-6 sm:text-xs md:text-sm sm:tracking-[0.3em]
            ${
              isDark
                ? "text-zinc-300/70"
                : "text-[#6B3F2A]/80"
            }`}
          >
            2026 Edition
          </p>

          {/* SUBTITLE */}

          <h2 className="mt-3 max-w-70 text-center text-base font-medium text-foreground sm:mt-4 sm:max-w-3xl sm:text-xl md:text-2xl lg:text-3xl">
            One platform for every hackathon, contest, and competition on
            campus
          </h2>

          {/* DESCRIPTION */}

          <p
            className={`mt-3 max-w-75 text-center text-xs leading-relaxed
            sm:mt-4 sm:max-w-2xl sm:text-sm md:text-base
            ${
              isDark
                ? "text-zinc-300/75"
                : "text-[#4A4038]/80"
            }`}
          >
            TechZephyr brings together every society-run hackathon, coding
            contest, and competition into a single place — discover events,
            register in one click, and track results as they happen.
          </p>

          {/* HERO BUTTONS */}

          <div className="mt-6 flex w-full flex-col items-center gap-3 px-6 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4 sm:px-0">

            <a
              href="/Competitions"
              className={`w-full rounded-xl px-8 py-3 text-center text-xs font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 sm:w-auto sm:text-sm ${
                isDark
                  ? "bg-white text-black hover:bg-[#7A2E24] hover:text-white hover:shadow-[0_0_25px_rgba(122,46,36,0.35)]"
                  : "bg-[#3A2A24] text-white hover:bg-[#8B3A2E] hover:shadow-[0_0_25px_rgba(139,58,46,0.25)]"
              }`}
            >
              Explore Events
            </a>

            <a
              href="/AboutUs"
              className={`w-full rounded-xl border px-8 py-3 text-center text-xs uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 sm:w-auto sm:text-sm ${
                isDark
                  ? "border-zinc-400/40 text-zinc-100 hover:border-[#D65A45] hover:text-[#F08A72]"
                  : "border-[#6B3F2A]/35 text-[#4A3328] hover:border-[#A44232] hover:text-[#A44232]"
              }`}
            >
              Learn More
            </a>

          </div>

          {/* STATS */}

          <div className="mt-10 grid w-full max-w-xs grid-cols-2 justify-center gap-x-8 gap-y-6 text-center sm:mt-14 sm:flex sm:max-w-none sm:gap-10 md:gap-16">

            {/* EVENTS */}

            <div>
              <div
                className={`text-xl font-bold sm:text-2xl md:text-3xl ${
                  isDark
                    ? "text-white"
                    : "text-[#302722]"
                }`}
              >
                <CountUp
                  end={10}
                  duration={2.5}
                  autoAnimate
                  autoAnimateOnce
                />
              </div>

              <div
                className={`text-[9px] uppercase tracking-widest sm:text-[10px] md:text-xs ${
                  isDark
                    ? "text-zinc-400"
                    : "text-[#705D52]"
                }`}
              >
                Events
              </div>
            </div>

            {/* SOCIETIES */}

            <div>
              <div
                className={`text-xl font-bold sm:text-2xl md:text-3xl ${
                  isDark
                    ? "text-white"
                    : "text-[#302722]"
                }`}
              >
                <CountUp
                  end={5}
                  duration={2.5}
                  autoAnimate
                  autoAnimateOnce
                />
              </div>

              <div
                className={`text-[9px] uppercase tracking-widest sm:text-[10px] md:text-xs ${
                  isDark
                    ? "text-zinc-400"
                    : "text-[#705D52]"
                }`}
              >
                Societies
              </div>
            </div>

            {/* PARTICIPANTS */}

            <div>
              <div
                className={`text-xl font-bold sm:text-2xl md:text-3xl ${
                  isDark
                    ? "text-[#E8E4E0]"
                    : "text-[#8B3A2E]"
                }`}
              >
                <CountUp
                  end={10000}
                  duration={2.5}
                  autoAnimate
                  autoAnimateOnce
                  suffix="+"
                  separator=","
                />
              </div>

              <div
                className={`text-[9px] uppercase tracking-widest sm:text-[10px] md:text-xs ${
                  isDark
                    ? "text-zinc-400"
                    : "text-[#705D52]"
                }`}
              >
                Participants
              </div>
            </div>

            {/* PRIZE POOL */}

            <div>
              <div
                className={`text-xl font-bold sm:text-2xl md:text-3xl ${
                  isDark
                    ? "text-[#F08A72]"
                    : "text-[#9A4A2F]"
                }`}
              >
                <CountUp
                  end={3.2}
                  duration={2.5}
                  autoAnimate
                  autoAnimateOnce
                  prefix="₹"
                  suffix="L"
                />
              </div>

              <div
                className={`text-[9px] uppercase tracking-widest sm:text-[10px] md:text-xs ${
                  isDark
                    ? "text-zinc-400"
                    : "text-[#705D52]"
                }`}
              >
                Prize Pool
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MERCHANDISE SECTION
          UNCHANGED
      ========================================================== */}

      <section className="relative border-t border-border bg-background px-4 py-14 sm:px-8 lg:px-16">

        {/* BACKGROUND GLOW */}

        <div
          className={`pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full blur-[120px] ${
            isDark
              ? "bg-red-500/[0.035]"
              : "bg-orange-700/[0.035]"
          }`}
        />

        <div className="relative mx-auto max-w-7xl">

          {/* SECTION HEADING */}

          <div className="mb-14 text-center">

            <p
              className={`text-[10px] uppercase tracking-[0.35em] sm:text-xs ${
                isDark
                  ? "text-zinc-400"
                  : "text-[#8B3A2E]"
              }`}
            >
              TechZephyr 2026
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Official Merchandise
            </h2>

            <p
              className={`mx-auto mt-5 max-w-2xl text-xs leading-7 sm:text-sm ${
                isDark
                  ? "text-zinc-400"
                  : "text-[#62554D]"
              }`}
            >
              Wear the experience. Explore the official TechZephyr 2026
              merchandise designs created for this edition.
            </p>

          </div>

          {/* MERCHANDISE GRID */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* =================================================
                MERCH ITEM 01
            ================================================== */}

            <div
              className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? "border-white/10 bg-white/[0.025] hover:border-[#A44232]/50"
                  : "border-[#6B3F2A]/15 bg-white/60 hover:border-[#A44232]/40"
              }`}
            >

              <div
                className={`relative flex aspect-square items-center justify-center overflow-hidden border-b p-8 ${
                  isDark
                    ? "border-white/10 bg-black/20"
                    : "border-[#6B3F2A]/10 bg-[#F4EFE8]/70"
                }`}
              >

                <img
                  src="/merch/techzephyr-front.png"
                  alt="TechZephyr 2026 front merchandise design"
                  className="max-h-full max-w-full object-contain"
                />

              </div>

              <div className="p-6">

                <p
                  className={`text-[9px] uppercase tracking-[0.3em] ${
                    isDark
                      ? "text-[#D65A45]"
                      : "text-[#A44232]"
                  }`}
                >
                  Design 01
                </p>

                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  TechZephyr 2026 — Front Print
                </h3>

                <p
                  className={`mt-3 text-xs leading-6 ${
                    isDark
                      ? "text-zinc-400"
                      : "text-[#62554D]"
                  }`}
                >
                  Official artwork created for the TechZephyr 2026
                  merchandise collection.
                </p>

              </div>

            </div>

            {/* =================================================
                MERCH ITEM 02
            ================================================== */}

            <div
              className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? "border-white/10 bg-white/[0.025] hover:border-[#A44232]/50"
                  : "border-[#6B3F2A]/15 bg-white/60 hover:border-[#A44232]/40"
              }`}
            >

              <div
                className={`relative flex aspect-square items-center justify-center overflow-hidden border-b p-8 ${
                  isDark
                    ? "border-white/10 bg-black/20"
                    : "border-[#6B3F2A]/10 bg-[#F4EFE8]/70"
                }`}
              >

                <img
                  src="/merch/techzephyr-back.png"
                  alt="TechZephyr 2026 back merchandise design"
                  className="max-h-full max-w-full object-contain"
                />

              </div>

              <div className="p-6">

                <p
                  className={`text-[9px] uppercase tracking-[0.3em] ${
                    isDark
                      ? "text-[#D65A45]"
                      : "text-[#A44232]"
                  }`}
                >
                  Design 02
                </p>

                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  TechZephyr 2026 — Back Print
                </h3>

                <p
                  className={`mt-3 text-xs leading-6 ${
                    isDark
                      ? "text-zinc-400"
                      : "text-[#62554D]"
                  }`}
                >
                  The signature back artwork representing the 2026
                  TechZephyr edition.
                </p>

              </div>

            </div>

            {/* =================================================
                MERCH ITEM 03
            ================================================== */}

            <div
              className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? "border-white/10 bg-white/[0.025] hover:border-[#A44232]/50"
                  : "border-[#6B3F2A]/15 bg-white/60 hover:border-[#A44232]/40"
              }`}
            >

              <div
                className={`relative flex aspect-square items-center justify-center overflow-hidden border-b p-8 ${
                  isDark
                    ? "border-white/10 bg-black/20"
                    : "border-[#6B3F2A]/10 bg-[#F4EFE8]/70"
                }`}
              >

                <img
                  src="/merch/techzephyr-design.png"
                  alt="TechZephyr 2026 merchandise artwork"
                  className="max-h-full max-w-full object-contain"
                />

              </div>

              <div className="p-6">

                <p
                  className={`text-[9px] uppercase tracking-[0.3em] ${
                    isDark
                      ? "text-[#D65A45]"
                      : "text-[#A44232]"
                  }`}
                >
                  Design 03
                </p>

                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  TechZephyr 2026 — Artwork
                </h3>

                <p
                  className={`mt-3 text-xs leading-6 ${
                    isDark
                      ? "text-zinc-400"
                      : "text-[#62554D]"
                  }`}
                >
                  An additional piece of artwork from the official
                  TechZephyr merchandise collection.
                </p>

              </div>

            </div>

          </div>

          {/* =====================================================
              MERCHANDISE STATUS
          ====================================================== */}

          <div className="mt-12 text-center">

            <p
              className={`text-[10px] uppercase tracking-[0.25em] ${
                isDark
                  ? "text-zinc-500"
                  : "text-[#806A5E]"
              }`}
            >
              Merchandise availability will be announced soon
            </p>

          </div>

        </div>
      </section>
    </>
  );
}