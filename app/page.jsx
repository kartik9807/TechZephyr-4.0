"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import "./globals.css";
import CountUp from "react-countup";
import Silk from "@/components/animated_bg/Silk.jsx";

export default function Home() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================== */}

      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          background: "var(--background)",
        }}
      >
        {/* =====================================================
            SILK BACKGROUND
        ====================================================== */}

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

        {/* =====================================================
            SMOOTH SILK → BACKGROUND TRANSITION
        ====================================================== */}

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-72 sm:h-80 md:h-96"
          style={{
            background: isDark
              ? "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 65%, #000 100%)"
              : "linear-gradient(to bottom, transparent 0%, rgba(250,248,242,0.25) 30%, rgba(250,248,242,0.7) 65%, #faf8f2 100%)",
            zIndex: 1,
          }}
        />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div
          style={{
            position: "relative",
            zIndex: 2,
          }}
          className="flex flex-col items-center px-4 pt-16 pb-32 sm:pt-20"
        >
          {/* =====================================================
              MAIN TITLE
          ====================================================== */}

          <h1 className="landing-heading text-center text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] bg-clip-text text-transparent bg-linear-to-b from-amber-400 via-amber-600 to-black dark:from-zinc-300 dark:via-zinc-500 dark:to-black">
            TECHZEPHYR 4.0
          </h1>

          {/* =====================================================
              EDITION
          ====================================================== */}

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

          {/* =====================================================
              SUBTITLE
          ====================================================== */}

          <h2 className="mt-3 max-w-70 text-center text-base font-medium text-foreground sm:mt-4 sm:max-w-3xl sm:text-xl md:text-2xl lg:text-3xl">
            One platform for every hackathon, contest, and competition on
            campus
          </h2>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

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

          {/* =====================================================
              HERO BUTTONS
          ====================================================== */}

          <div className="mt-6 flex w-full flex-col items-center gap-3 px-6 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4 sm:px-0">
            {/* Explore Events */}

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

            {/* Learn More */}

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

          {/* =====================================================
              STATS
          ====================================================== */}

          <div className="mt-10 grid w-full max-w-xs grid-cols-2 justify-center gap-x-8 gap-y-6 text-center sm:mt-14 sm:flex sm:max-w-none sm:gap-10 md:gap-16">
            {/* Events */}

            <div>
              <div
                className={`text-xl font-bold sm:text-2xl md:text-3xl ${
                  isDark ? "text-white" : "text-[#302722]"
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

            {/* Societies */}

            <div>
              <div
                className={`text-xl font-bold sm:text-2xl md:text-3xl ${
                  isDark ? "text-white" : "text-[#302722]"
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

            {/* Participants */}

            <div>
              <div
                className={`text-xl font-bold sm:text-2xl md:text-3xl ${
                  isDark ? "text-[#E8E4E0]" : "text-[#8B3A2E]"
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

            {/* Prize Pool */}

            <div>
              <div
                className={`text-xl font-bold sm:text-2xl md:text-3xl ${
                  isDark ? "text-[#F08A72]" : "text-[#9A4A2F]"
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
      ========================================================== */}

      <section className="relative border-t border-border bg-background px-4 py-14 sm:px-8 lg:px-16">
        {/* Background Glow */}

        <div
          className={`pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full blur-[120px] ${
            isDark
              ? "bg-red-500/[0.035]"
              : "bg-orange-700/[0.035]"
          }`}
        />

        <div className="relative mx-auto max-w-7xl">

          {/* =====================================================
              SECTION HEADING
          ====================================================== */}

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

          {/* =====================================================
              MERCHANDISE GRID
          ====================================================== */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* ===================================================
                MERCH ITEM 01
            ==================================================== */}

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

            {/* ===================================================
                MERCH ITEM 02
            ==================================================== */}

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
                  The signature back artwork representing the 2026 TechZephyr
                  edition.
                </p>

              </div>
            </div>

            {/* ===================================================
                MERCH ITEM 03
            ==================================================== */}

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
                  An additional piece of artwork from the official TechZephyr
                  merchandise collection.
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