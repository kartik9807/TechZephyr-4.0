"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import "./globals.css";
import CountUp from "react-countup";
import Silk from "@/components/animated_bg/Silk.jsx";
import { motion } from "framer-motion";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================== */}

      <section
        className="relative min-h-screen overflow-hidden"
        style={{
          background: "var(--background)",
        }}
      >
        {/* SILK BACKGROUND */}
        <div className="absolute inset-0">
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
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pb-32 pt-16 sm:px-8 sm:pt-20 lg:px-12">
          {/* Small eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className={`mb-5 flex items-center gap-3 text-[9px] uppercase tracking-[0.35em] sm:text-[10px] ${
              isDark ? "text-zinc-400" : "text-[#7C665A]"
            }`}
          >
            <span className="h-px w-8 bg-current opacity-40" />

            <span>IIT Bhubaneswar</span>

            <span className="h-px w-8 bg-current opacity-40" />
          </motion.div>

          {/* MAIN TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="landing-heading bg-gradient-to-b from-amber-400 via-amber-600 to-black bg-clip-text text-center text-5xl font-black tracking-[-0.06em] text-transparent sm:text-7xl md:text-8xl lg:text-[8.5rem] dark:from-zinc-200 dark:via-zinc-500 dark:to-black"
          >
            TECHZEPHYR 4.0
          </motion.h1>

          {/* EDITION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`mt-4 text-center text-[10px] uppercase tracking-[0.25em] sm:mt-6 sm:text-xs md:text-sm sm:tracking-[0.35em] ${
              isDark
                ? "text-zinc-300/70"
                : "text-[#6B3F2A]/80"
            }`}
          >
            2026 Edition
          </motion.p>

          {/* SUBTITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mt-5 max-w-3xl text-center text-base font-medium leading-relaxed text-foreground sm:text-xl md:text-2xl lg:text-3xl"
          >
            One platform for every hackathon, contest,
            <br className="hidden sm:block" /> and competition on campus.
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className={`mt-5 max-w-2xl text-center text-xs leading-7 sm:text-sm md:text-base ${
              isDark
                ? "text-zinc-300/75"
                : "text-[#4A4038]/80"
            }`}
          >
            TechZephyr brings together every society-run hackathon,
            coding contest, and competition into a single place —
            discover events, register in one click, and track
            results as they happen.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 flex w-full flex-col items-center gap-3 px-6 sm:w-auto sm:flex-row sm:gap-4 sm:px-0"
          >
            <Link
              href="/Competitions"
              className={`group w-full rounded-xl px-8 py-3.5 text-center text-xs font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 sm:w-auto sm:text-sm ${
                isDark
                  ? "bg-white text-black hover:bg-[#7A2E24] hover:text-white hover:shadow-[0_0_35px_rgba(122,46,36,0.35)]"
                  : "bg-[#3A2A24] text-white hover:bg-[#8B3A2E] hover:shadow-[0_0_35px_rgba(139,58,46,0.25)]"
              }`}
            >
              Explore Events
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/AboutUs"
              className={`w-full rounded-xl border px-8 py-3.5 text-center text-xs uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 sm:w-auto sm:text-sm ${
                isDark
                  ? "border-zinc-400/40 text-zinc-100 hover:border-[#D65A45] hover:text-[#F08A72]"
                  : "border-[#6B3F2A]/35 text-[#4A3328] hover:border-[#A44232] hover:text-[#A44232]"
              }`}
            >
              Learn More
            </Link>
          </motion.div>

          {/* =====================================================
              STATS
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 grid w-full max-w-3xl grid-cols-2 overflow-hidden rounded-3xl border border-black/5 bg-white/20 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.025] sm:grid-cols-4"
          >
            {/* Events */}
            <div className="border-b border-r border-black/5 px-5 py-6 text-center dark:border-white/10 sm:border-b-0">
              <div
                className={`text-2xl font-bold sm:text-3xl ${
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
                className={`mt-1 text-[9px] uppercase tracking-widest sm:text-[10px] ${
                  isDark ? "text-zinc-400" : "text-[#705D52]"
                }`}
              >
                Events
              </div>
            </div>

            {/* Societies */}
            <div className="border-b border-black/5 px-5 py-6 text-center dark:border-white/10 sm:border-b-0 sm:border-r">
              <div
                className={`text-2xl font-bold sm:text-3xl ${
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
                className={`mt-1 text-[9px] uppercase tracking-widest sm:text-[10px] ${
                  isDark ? "text-zinc-400" : "text-[#705D52]"
                }`}
              >
                Societies
              </div>
            </div>

            {/* Participants */}
            <div className="border-r border-black/5 px-5 py-6 text-center dark:border-white/10">
              <div
                className={`text-2xl font-bold sm:text-3xl ${
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
                className={`mt-1 text-[9px] uppercase tracking-widest sm:text-[10px] ${
                  isDark ? "text-zinc-400" : "text-[#705D52]"
                }`}
              >
                Participants
              </div>
            </div>

            {/* Prize Pool */}
            <div className="px-5 py-6 text-center">
              <div
                className={`text-2xl font-bold sm:text-3xl ${
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
                className={`mt-1 text-[9px] uppercase tracking-widest sm:text-[10px] ${
                  isDark ? "text-zinc-400" : "text-[#705D52]"
                }`}
              >
                Prize Pool
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SPONSORS
      ========================================================== */}

      <section
        className={`relative border-y px-4 py-12 sm:px-8 sm:py-16 ${
          isDark
            ? "border-white/10 bg-[#0d0b0a]"
            : "border-[#6B3F2A]/10 bg-[#f9f5ee]"
        }`}
      >
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center gap-3">
              <span className={`h-px w-8 ${isDark ? "bg-amber-400/30" : "bg-[#8B3A2E]/30"}`} />
              <p
                className={`text-[10px] font-bold uppercase tracking-[0.35em] sm:text-xs ${
                  isDark ? "text-amber-300/80" : "text-[#8B3A2E]"
                }`}
              >
                In Association With
              </p>
              <span className={`h-px w-8 ${isDark ? "bg-amber-400/30" : "bg-[#8B3A2E]/30"}`} />
            </div>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
              Proud Partners &amp; Sponsors
            </h3>
          </div>

          {/* Sponsors Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {/* World Technocon (Associate Partner) */}
            <a
              href="https://technocon.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-4 rounded-2xl border p-4.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 ${
                isDark
                  ? "border-white/10 bg-white/[0.03] hover:border-amber-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(251,191,36,0.08)]"
                  : "border-[#6B3F2A]/15 bg-white/80 hover:border-[#8B3A2E]/40 hover:bg-white hover:shadow-[0_10px_30px_rgba(107,63,42,0.08)] shadow-xs"
              }`}
            >
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2.5 shadow-xs ring-1 ring-black/5 dark:bg-black/60 dark:ring-white/10">
                <img
                  src="/World Technocon.webp"
                  alt="World Technocon Logo"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="min-w-0 flex-1">
                <span
                  className={`block text-[9px] font-semibold uppercase tracking-[0.2em] ${
                    isDark ? "text-amber-400" : "text-[#8B3A2E]"
                  }`}
                >
                  Associate Partner
                </span>
                <h4 className="mt-0.5 truncate text-base font-bold text-foreground transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-300 sm:text-lg">
                  World Technocon
                </h4>
                <p
                  className={`mt-0.5 text-[11px] leading-tight ${
                    isDark ? "text-zinc-400" : "text-[#705D52]"
                  }`}
                >
                  Associate Sponsor
                </p>
              </div>

              <span
                className={`shrink-0 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 ${
                  isDark ? "text-amber-400" : "text-[#8B3A2E]"
                }`}
              >
                ↗
              </span>
            </a>

            {/* Goibibo (Travel Partner) */}
            <a
              href="https://www.goibibo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-4 rounded-2xl border p-4.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 ${
                isDark
                  ? "border-white/10 bg-white/[0.03] hover:border-amber-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(251,191,36,0.08)]"
                  : "border-[#6B3F2A]/15 bg-white/80 hover:border-[#8B3A2E]/40 hover:bg-white hover:shadow-[0_10px_30px_rgba(107,63,42,0.08)] shadow-xs"
              }`}
            >
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2.5 shadow-xs ring-1 ring-black/5 dark:bg-black/60 dark:ring-white/10">
                <img
                  src="/Goibibo.png"
                  alt="Goibibo Logo"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="min-w-0 flex-1">
                <span
                  className={`block text-[9px] font-semibold uppercase tracking-[0.2em] ${
                    isDark ? "text-amber-400" : "text-[#8B3A2E]"
                  }`}
                >
                  Travel Partner
                </span>
                <h4 className="mt-0.5 truncate text-base font-bold text-foreground transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-300 sm:text-lg">
                  Goibibo
                </h4>
                <p
                  className={`mt-0.5 text-[11px] leading-tight ${
                    isDark ? "text-zinc-400" : "text-[#705D52]"
                  }`}
                >
                  1st Event Sponsor
                </p>
              </div>

              <span
                className={`shrink-0 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 ${
                  isDark ? "text-amber-400" : "text-[#8B3A2E]"
                }`}
              >
                ↗
              </span>
            </a>

            {/* Fin Maverick (Finance Partner) */}
            <a
              href="https://www.finmaverick.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-4 rounded-2xl border p-4.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 ${
                isDark
                  ? "border-white/10 bg-white/[0.03] hover:border-amber-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(251,191,36,0.08)]"
                  : "border-[#6B3F2A]/15 bg-white/80 hover:border-[#8B3A2E]/40 hover:bg-white hover:shadow-[0_10px_30px_rgba(107,63,42,0.08)] shadow-xs"
              }`}
            >
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-xs ring-1 ring-black/5 dark:bg-black/60 dark:ring-white/10">
                <img
                  src="/Fin Maverick.png"
                  alt="Fin Maverick Logo"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="min-w-0 flex-1">
                <span
                  className={`block text-[9px] font-semibold uppercase tracking-[0.2em] ${
                    isDark ? "text-amber-400" : "text-[#8B3A2E]"
                  }`}
                >
                  Finance Partner
                </span>
                <h4 className="mt-0.5 truncate text-base font-bold text-foreground transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-300 sm:text-lg">
                  Fin Maverick
                </h4>
                <p
                  className={`mt-0.5 text-[11px] leading-tight ${
                    isDark ? "text-zinc-400" : "text-[#705D52]"
                  }`}
                >
                  2nd Event Sponsor
                </p>
              </div>

              <span
                className={`shrink-0 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 ${
                  isDark ? "text-amber-400" : "text-[#8B3A2E]"
                }`}
              >
                ↗
              </span>
            </a>
          </div>

          {/* View Full Sponsor Directory link */}
          <div className="mt-8 text-center sm:mt-10">
            <a
              href="/Sponsor"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "border-white/10 bg-white/[0.02] text-zinc-300 hover:border-amber-400/40 hover:text-amber-300"
                  : "border-[#6B3F2A]/20 bg-white/60 text-[#4A3328] hover:border-[#8B3A2E] hover:text-[#8B3A2E] shadow-2xs"
              }`}
            >
              View Full Sponsor Directory
              <span className="text-sm">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          MERCHANDISE
      ========================================================== */}

      <section
        className={`relative overflow-hidden border-t px-4 py-20 sm:px-8 lg:px-16 lg:py-28 ${
          isDark
            ? "border-white/10 bg-[#100d0b]"
            : "border-[#6B3F2A]/10 bg-[#faf8f4]"
        }`}
      >
        {/* Background Glow */}
        <div
          className={`pointer-events-none absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-[150px] ${
            isDark
              ? "bg-red-500/[0.035]"
              : "bg-orange-700/[0.035]"
          }`}
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p
              className={`text-[10px] uppercase tracking-[0.4em] sm:text-xs ${
                isDark
                  ? "text-[#D65A45]"
                  : "text-[#8B3A2E]"
              }`}
            >
              TechZephyr 2026
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
              Official Merchandise
            </h2>

            <p
              className={`mx-auto mt-5 max-w-2xl text-xs leading-7 sm:text-sm ${
                isDark
                  ? "text-zinc-400"
                  : "text-[#62554D]"
              }`}
            >
              A collection built around the identity of TechZephyr 4.0.
              Explore every detail through interactive previews.
            </p>

            {/* Interaction Hint */}
            <div
              className={`mx-auto mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[8px] uppercase tracking-[0.25em] ${
                isDark
                  ? "border-white/10 bg-white/[0.025] text-zinc-500"
                  : "border-[#6B3F2A]/10 bg-white/50 text-[#806A5E]"
              }`}
            >
              Click / Tap to explore
            </div>
          </div>

          {/* =====================================================
              FEATURED MERCH
          ====================================================== */}

          <div className="grid gap-6 lg:grid-cols-2">
            {/* FRONT */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-[2rem] border ${
                isDark
                  ? "border-white/10 bg-white/[0.025]"
                  : "border-[#6B3F2A]/10 bg-white/60"
              }`}
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden flex items-center justify-center p-8 ${
                  isDark
                    ? "bg-linear-to-br from-zinc-900 via-black to-zinc-950"
                    : "bg-linear-to-br from-amber-100/60 via-orange-50 to-amber-200/40"
                }`}
              >
                {/* Background ambient glow */}
                <div className="absolute h-36 w-36 rounded-full bg-amber-500/20 blur-2xl pointer-events-none" />

                {/* Branded Apparel Preview Graphic */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <div className={`relative flex h-24 w-24 items-center justify-center rounded-2xl border backdrop-blur-md shadow-xl transition-transform duration-500 group-hover:scale-110 ${
                    isDark ? "border-amber-400/30 bg-black/60 shadow-amber-500/10" : "border-[#7A2E24]/20 bg-white/90 shadow-[#7A2E24]/10"
                  }`}>
                    <img
                      src="/logo.jpeg"
                      alt="TechZephyr front insignia"
                      className="h-16 w-16 rounded-xl object-contain drop-shadow"
                    />
                  </div>
                  <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-amber-500 dark:text-amber-400">
                    TECHZEPHYR &middot; 4.0
                  </p>
                  <p className={`text-[9px] font-mono uppercase tracking-widest mt-0.5 ${isDark ? "text-white/40" : "text-[#7A2E24]/60"}`}>
                    Flagship Front Crest
                  </p>
                </div>

                {/* Gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Label */}
                <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 backdrop-blur-xl">
                  <span className="text-[8px] uppercase tracking-[0.25em] text-white font-mono font-bold">
                    Design 01
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8">
                <p
                  className={`text-[9px] uppercase tracking-[0.3em] font-mono font-bold ${
                    isDark
                      ? "text-[#D65A45]"
                      : "text-[#A44232]"
                  }`}
                >
                  Front Print
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  TechZephyr 2026
                </h3>

                <p
                  className={`mt-3 text-xs leading-6 ${
                    isDark
                      ? "text-zinc-400"
                      : "text-[#62554D]"
                  }`}
                >
                  The primary TechZephyr identity brought to life through
                  an interactive merchandise preview.
                </p>
              </div>
            </motion.div>

            {/* BACK */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-[2rem] border ${
                isDark
                  ? "border-white/10 bg-white/[0.025]"
                  : "border-[#6B3F2A]/10 bg-white/60"
              }`}
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden flex items-center justify-center p-8 ${
                  isDark
                    ? "bg-linear-to-br from-black via-zinc-950 to-zinc-900"
                    : "bg-linear-to-br from-amber-50 via-orange-100/50 to-amber-100"
                }`}
              >
                {/* Background ambient glow */}
                <div className="absolute h-36 w-36 rounded-full bg-orange-500/15 blur-2xl pointer-events-none" />

                {/* Branded Back Print Graphic */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <div className={`p-4 rounded-2xl border backdrop-blur-md transition-transform duration-500 group-hover:scale-105 ${
                    isDark ? "border-white/10 bg-white/[0.03]" : "border-[#7A2E24]/15 bg-white/80 shadow-lg shadow-amber-950/5"
                  }`}>
                    <div className="flex items-center justify-center gap-2 mb-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-amber-500">
                      <span>STC</span> &bull; <span>IIT BBS</span> &bull; <span>2026</span>
                    </div>
                    <div className="font-mono text-xl sm:text-2xl font-black tracking-tighter landing-heading bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      TECHZEPHYR
                    </div>
                    <p className={`mt-1 font-mono text-[8px] uppercase tracking-[0.4em] ${isDark ? "text-white/50" : "text-[#4A3328]/70"}`}>
                      5 SOCIETIES &middot; 1 SUMMIT
                    </p>
                  </div>
                </div>

                {/* Gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Label */}
                <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 backdrop-blur-xl">
                  <span className="text-[8px] uppercase tracking-[0.25em] text-white font-mono font-bold">
                    Design 02
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8">
                <p
                  className={`text-[9px] uppercase tracking-[0.3em] font-mono font-bold ${
                    isDark
                      ? "text-[#D65A45]"
                      : "text-[#A44232]"
                  }`}
                >
                  Back Print
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  The Signature
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
            </motion.div>
          </div>

          {/* =====================================================
              THIRD DESIGN
          ====================================================== */}

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className={`group relative mt-6 overflow-hidden rounded-[2rem] border ${
              isDark
                ? "border-white/10 bg-white/[0.025]"
                : "border-[#6B3F2A]/10 bg-white/60"
            }`}
          >
            <div className="grid items-center lg:grid-cols-[1.15fr_0.85fr]">
              {/* Graphic Mockup */}
              <div
                className={`relative aspect-[16/10] overflow-hidden flex items-center justify-center p-8 lg:aspect-auto lg:h-full ${
                  isDark
                    ? "bg-linear-to-br from-zinc-950 via-black to-zinc-900"
                    : "bg-linear-to-br from-amber-100/50 via-white to-amber-100/70"
                }`}
              >
                <div className="absolute h-48 w-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center p-6">
                  <div className={`flex items-center gap-3 p-3 rounded-xl border backdrop-blur-md ${
                    isDark ? "border-amber-400/20 bg-amber-400/5" : "border-[#7A2E24]/15 bg-white/80"
                  }`}>
                    <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 rounded-lg object-contain" />
                    <div className="text-left">
                      <p className="text-xs font-black font-mono tracking-wider text-amber-500">LIMITED EDITION</p>
                      <p className={`text-[9px] font-mono tracking-widest ${isDark ? "text-white/60" : "text-[#4A3328]/70"}`}>OFFICIAL FEST APPAREL</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {["Premium Heavyweight", "Embroidered Monogram", "Custom Badge"].map((tag) => (
                      <span key={tag} className={`text-[9px] font-mono uppercase px-2.5 py-1 rounded-md border ${
                        isDark ? "border-white/10 bg-white/5 text-white/70" : "border-[#7A2E24]/10 bg-[#7A2E24]/5 text-[#7A2E24]"
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 lg:p-14">
                <p
                  className={`text-[9px] uppercase tracking-[0.3em] font-mono font-bold ${
                    isDark
                      ? "text-[#D65A45]"
                      : "text-[#A44232]"
                  }`}
                >
                  Design 03
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Built for the
                  <br />
                  <span
                    className={
                      isDark
                        ? "text-[#D65A45]"
                        : "text-[#A44232]"
                    }
                  >
                    TechZephyr generation.
                  </span>
                </h3>

                <p
                  className={`mt-5 text-xs leading-7 sm:text-sm ${
                    isDark
                      ? "text-zinc-400"
                      : "text-[#62554D]"
                  }`}
                >
                  An additional piece from the official TechZephyr
                  merchandise collection. Use the interactive preview
                  to explore the artwork.
                </p>

                <div
                  className={`mt-7 h-px w-16 ${
                    isDark
                      ? "bg-[#D65A45]/40"
                      : "bg-[#A44232]/40"
                  }`}
                />
              </div>
            </div>
          </motion.div>

          {/* Status */}
          <div className="mt-12 text-center">
            <p
              className={`text-[9px] uppercase tracking-[0.3em] ${
                isDark
                  ? "text-zinc-600"
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