"use client";

import React, { useState } from "react";
import './globals.css';
import CountUp from "react-countup";
import Silk from "@/components/animated_bg/Silk.jsx";

export default function Home() {
  return (
    <>
      <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Silk
            speed={5}
            scale={1}
            color="#262626"
            noiseIntensity={1.2}
            rotation={0}
          />
        </div>

        <div style={{ position: "relative", zIndex: 1 }} className="flex flex-col items-center pt-16 sm:pt-20 px-4 pb-32">
          <h1 className="landing-heading text-center text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] bg-clip-text text-transparent bg-linear-to-b from-zinc-400 via-zinc-600 to-black drop-shadow-[0_0_30px_rgba(139,123,255,0.35)]">
            TECHZEPHYR
          </h1>
          <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs md:text-sm text-white/50 mt-4 sm:mt-6 text-center">
            2026 Edition &middot; [Month Day–Day]
          </p>
          <h2 className="mt-3 sm:mt-4 text-center text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-white max-w-70 sm:max-w-3xl">
            One platform for every hackathon, contest, and competition on campus
          </h2>
          <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm md:text-base text-white/60 max-w-75 sm:max-w-2xl leading-relaxed">
            TechZephyr brings together every society-run hackathon, coding contest,
            and competition into a single place — discover events, register in one
            click, and track results as they happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto items-center px-6 sm:px-0">
            <a href="/Register" className="w-full sm:w-auto text-center uppercase text-black bg-white py-3 px-8 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:bg-[#262626] hover:text-white hover:shadow-[0_0_20px_rgba(38,38,38,0.6)] hover:-translate-y-0.5">Explore Events</a>
            <a href="/AboutUs" className="w-full sm:w-auto text-center uppercase text-white border border-white/40 py-3 px-8 rounded-full text-xs sm:text-sm tracking-wide transition-all duration-300 hover:border-[#737373] hover:text-[#737373] hover:-translate-y-0.5">Learn More</a>
          </div>
          <div className="grid justify-center grid-cols-2 sm:flex gap-x-8 gap-y-6 sm:gap-10 md:gap-16 mt-10 sm:mt-14 text-center w-full max-w-xs sm:max-w-none">
            <div>
              <div className="font-bold text-xl sm:text-2xl md:text-3xl text-white">
                <CountUp end={40} duration={2.5} autoAnimate autoAnimateOnce suffix="+" />
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-white/50">Events</div>
            </div>
            <div>
              <div className="font-bold text-xl sm:text-2xl md:text-3xl text-white">
                <CountUp end={5} duration={2.5} autoAnimate autoAnimateOnce />
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-white/50">Societies</div>
            </div>
            <div>
              <div className="font-bold text-xl sm:text-2xl md:text-3xl text-white">
                <CountUp end={1000} duration={2.5} autoAnimate autoAnimateOnce suffix="+" separator="," />
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-white/50">Participants</div>
            </div>
            <div>
              <div className="font-bold text-xl sm:text-2xl md:text-3xl text-white">
                <CountUp end={5} duration={4.5} autoAnimate autoAnimateOnce prefix="₹" suffix="L" />
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-white/50">Prize Pool</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}