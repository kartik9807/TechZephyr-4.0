"use client";

import React, { useState } from "react";
import { Sparkles, Calendar, Target, Award, Terminal, ChevronRight, Users, Handshake, Zap, ExternalLink } from "lucide-react";
import Silk from "@/components/animated_bg/Silk.jsx";
import Navbar from "@/components/Navbar.jsx";

const editions = [
  {
    id: "3.0",
    name: "TechZephyr 3.0",
    year: "2025",
    dates: "25–26 October 2025",
    theme: "5 Societies, 1 Summit",
    command: "$ init techzephyr_3.0 --flagship",
    status: "EXECUTIVE_SUCCESS",
    overview: "TechZephyr 3.0 was successfully organized by the Science & Technology Council, IIT Bhubaneswar on 25–26 October 2025. The event brought together students, innovators, developers, entrepreneurs, and technology enthusiasts through multiple competitions, workshops, and technical sessions.",
    highlights: [
      "Prize Pool worth ₹70,000+",
      "Multiple technical competitions",
      "National-level participation",
      "Workshops & Hackathons",
      "Networking sessions & Technical exhibitions"
    ],
    competitions: [
      "Competitive Programming Contest",
      "Business Plan Competition",
      "Machine Learning Hackathon",
      "CADathon",
      "Quadruped Challenge",
      "Web Hackathon",
      "Design Marathon",
      "Math-O-Stellar"
    ]
  },
  {
    id: "2.0",
    name: "TechZephyr 2.0",
    year: "2024",
    dates: "October 2024",
    command: "$ load_archive tz_2.0.env",
    status: "CONCLUDED",
    overview: "TechZephyr 2.0 continued the tradition of promoting innovation, technical excellence, and interdisciplinary collaboration. The edition featured competitions, workshops, and technical sessions across multiple engineering domains while encouraging participation from students."
  },
  {
    id: "1.0",
    name: "TechZephyr 1.0",
    year: "2023",
    dates: "October 2023",
    command: "$ cat inaugural_manifest.log",
    status: "ARCHIVED",
    overview: "The inaugural edition of TechZephyr laid the foundation for IIT Bhubaneswar's flagship technical festival. It introduced a platform where students could compete, collaborate, and showcase innovative ideas across multiple technical disciplines."
  }
];

const speakers = [
  { name: "Anil Bhasin", role: "Former Managing Director, India & SAARC, NetApp" },
  { name: "Anirban Mohanty", role: "Technology & Innovation Leader" },
  { name: "Bodhisattwa Sanghapriya", role: "Founder & CEO, IG Drones" },
  { name: "Priyadarshi Sadangi", role: "Space Educator and Founder, Space Club" },
  { name: "Durga Prasad Gouda", role: "Technology Professional & Mentor" },
  { name: "Jaskaran Singh", role: "Competitive Programming Expert" },
  { name: "Avelo Roy", role: "Startup Mentor & Entrepreneur" },
  { name: "Ronnie Ray", role: "Entrepreneur and Business Leader" }
];

const sponsors = [
  "EG", "Hostinger", "AceInt", "Unstop", "RedString", "WorldQuant", 
  "Nox Alfa", "Zerodha", "Wadhwani Foundation", "ISB", 
  "StockGro", "EncodersPro", "ISRO", "Pathway"
];

const impacts = [
  "Supporting national-level competitions and hackathons.",
  "Providing mentorship, industry expertise, and real-world problem statements.",
  "Offering internships, career opportunities, and networking sessions.",
  "Enhancing the overall participant experience through workshops, resources, and sponsorships."
];

export default function LastEditionPage() {
  const [selectedTab, setSelectedTab] = useState("3.0");

  const activeData = editions.find((item) => item.id === selectedTab) || editions[0];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-x-hidden flex flex-col justify-between pt-8 pb-32">
      
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <Silk
          speed={8}
          scale={2}
          color="#262626"
          noiseIntensity={1.8}
          rotation={0}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mt-2 mb-6">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-white/50 font-mono font-semibold mb-2">
            IIT Bhubaneswar &middot; Legacy & Archives
          </p>
          <h1 className="landing-heading text-center text-5xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-zinc-400 to-zinc-800 drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]">
            LAST EDITIONS
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            Exploring the milestone achievements, competition tracks, and growth of TechZephyr 3.0, 2.0, and 1.0.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-zinc-950/90 border border-white/15 rounded-2xl backdrop-blur-md mb-8 w-full max-w-md shadow-lg">
          {editions.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                selectedTab === tab.id
                  ? "bg-white text-black shadow-md scale-[1.02]"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.id === "3.0" && <Sparkles size={12} className={selectedTab === "3.0" ? "text-black" : "text-amber-300"} />}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Active Card Content */}
        <div className="w-full transition-all duration-500 mb-8">
          <div className={`relative rounded-2xl overflow-hidden backdrop-blur-md border transition-all duration-300 ${
            activeData.id === "3.0"
              ? "bg-zinc-900/90 border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.12)]"
              : "bg-zinc-950/85 border-white/15"
          }`}>
            
            {/* Terminal Top Bar */}
            <div className="relative z-10 w-full bg-zinc-950/95 border-b border-white/10 p-4 font-mono text-xs flex flex-col justify-between h-24">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  {activeData.id === "3.0" && (
                    <span className="ml-2 bg-amber-400/20 text-amber-300 text-[9px] uppercase font-bold px-2 py-0.5 rounded border border-amber-400/30 flex items-center gap-1">
                      <Sparkles size={10} /> Flagship
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-white/50 bg-white/5 px-2.5 py-0.5 rounded border border-white/10 font-bold">
                  {activeData.year}.env
                </span>
              </div>

              <div className="space-y-0.5 mt-2">
                <p className="text-amber-300 font-semibold truncate flex items-center gap-1.5 text-xs">
                  <Terminal size={13} className="shrink-0" /> {activeData.command}
                </p>
                <p className="text-[10px] text-white/40">
                  STATUS: <span className="text-emerald-400 font-bold">{activeData.status}</span>
                </p>
              </div>
            </div>

            {/* Card Body */}
            <div className="relative z-10 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wide">
                    {activeData.name}
                  </h2>
                  <p className="text-xs text-amber-300/90 font-mono font-semibold flex items-center gap-1.5 mt-1">
                    <Calendar size={13} /> {activeData.dates}
                  </p>
                </div>

                {activeData.theme && (
                  <div className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs font-mono text-white/90">
                    Theme: <span className="font-bold text-white">"{activeData.theme}"</span>
                  </div>
                )}
              </div>

              <p className="text-sm text-white/80 leading-relaxed mb-6">
                {activeData.overview}
              </p>

              {/* Highlights */}
              {activeData.highlights && (
                <div className="mb-6 pt-4 border-t border-white/10">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-mono font-bold flex items-center gap-1.5">
                    <Award size={14} /> Official Highlights
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeData.highlights.map((item, index) => (
                      <div key={index} className="text-xs text-white/85 flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Competitions */}
              {activeData.competitions && (
                <div className="mb-6 pt-4 border-t border-white/10">
                  <p className="text-xs uppercase tracking-widest text-amber-300 mb-3 font-mono font-bold flex items-center gap-1.5">
                    <Target size={14} /> Competitions Conducted
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeData.competitions.map((item, index) => (
                      <div key={index} className="text-xs font-mono text-white/90 bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center gap-2">
                        <ChevronRight size={12} className="text-amber-400 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/*  Button */}
              <div className="pt-2">
                {activeData.id === "3.0" ? (
                  <a
                    href="https://www.instagram.com/techzephyr.iitbbs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 w-full py-3 uppercase text-xs font-bold tracking-wider text-black bg-white rounded-xl hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.98]"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    View 3.0 Media Highlights <ExternalLink size={14} />
                  </a>
                ) : (
                  <button 
                    disabled
                    className="w-full py-3 uppercase text-xs font-bold tracking-wider text-white/40 border border-white/15 rounded-xl bg-white/5 cursor-default text-center"
                  >
                    Concluded Edition
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {selectedTab === "3.0" && (
          <div className="w-full space-y-8">
            {/* Speakers */}
            <div className="w-full p-6 sm:p-8 rounded-2xl bg-zinc-950/85 border border-white/15 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users size={18} className="text-amber-300" />
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                  Past Featured Speakers
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-white/60 mb-6">
                TechZephyr has hosted distinguished industry leaders, entrepreneurs, researchers, and professionals who have shared their expertise.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {speakers.map((item, index) => (
                  <div key={index} className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 transition-all">
                    <p className="text-xs sm:text-sm font-bold text-white font-mono">{item.name}</p>
                    <p className="text-[11px] text-white/50 mt-0.5">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sponsors */}
            <div className="w-full p-6 sm:p-8 rounded-2xl bg-zinc-950/85 border border-white/15 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Handshake size={18} className="text-emerald-400" />
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                  Our Past Sponsors & Collaborators
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-white/60 mb-6">
                Over the years, TechZephyr has partnered with renowned companies, startups, educational organizations, and technology communities.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {sponsors.map((item, index) => (
                  <span key={index} className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-semibold text-white/85 hover:bg-white/10 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="w-full mb-12 p-6 sm:p-8 rounded-2xl bg-zinc-950/85 border border-white/15 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap size={18} className="text-cyan-400" />
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                  Our Partnership Impact
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-white/60 mb-6">
                Our sponsors have contributed significantly to building a thriving tech ecosystem by:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {impacts.map((item, index) => (
                  <div key={index} className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      <Navbar />

    </section>
  );
}