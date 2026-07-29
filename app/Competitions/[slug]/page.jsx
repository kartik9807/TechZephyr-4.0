"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Clock, Users, Gauge } from "lucide-react";
import Silk from "@/components/animated_bg/Silk";
import { competitions } from "@/data/competitions";

export default function CompetitionDetails() {
    const { slug } = useParams();
    const competition = competitions.find(
        (item) => item.slug === slug
    );

    const [order, setOrder] = useState([0, 1, 2, 3]);
    const [flashKey, setFlashKey] = useState(0);

    const cycleStack = () => {
        setOrder((prev) => [...prev.slice(1), prev[0]]);
        setFlashKey((k) => k + 1);
    };

    if (!competition) return null;

    const stats = [
        { title: "Prize Pool", value: competition.prize, icon: Trophy, color: "#fde68a", rotate: "-rotate-3", baseRotate: -3 },
        { title: "Duration", value: competition.duration, icon: Clock, color: "#fca5a5", rotate: "rotate-2", baseRotate: 2 },
        { title: "Team Size", value: competition.teamSize, icon: Users, color: "#86efac", rotate: "-rotate-2", baseRotate: -2 },
        { title: "Difficulty", value: competition.difficulty, icon: Gauge, color: "#93c5fd", rotate: "rotate-3", baseRotate: 3 },
    ];

    return (
        <main className="bg-black text-white min-h-screen overflow-hidden">
            <section className="relative min-h-[85vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Silk speed={5} scale={1} color="#262626" noiseIntensity={1.2} rotation={0} />
                </div>
                <div className="absolute right-0 top-20 h-125 w-125 rounded-full bg-amber-400/10 blur-[160px]" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-20">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
                        <p className="uppercase tracking-[0.5em] text-xs text-amber-300">{competition.tag}</p>
                        <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-black leading-none bg-linear-to-b from-white via-zinc-300 to-zinc-700 bg-clip-text text-transparent">
                            {competition.title}
                        </h1>
                        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/60">{competition.description}</p>
                    </motion.div>

                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 mt-24">
                        {stats.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ rotate: 0, scale: 1.06, y: -8 }}
                                transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                                className={`relative ${item.rotate} rounded-sm p-6 pt-9 shadow-[0_14px_30px_rgba(0,0,0,0.55)]`}
                                style={{ backgroundColor: item.color }}
                            >
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/50 backdrop-blur-sm rotate-[-4deg] border border-white/40 shadow-sm" />

                                <div
                                    className="absolute bottom-0 right-0 w-0 h-0"
                                    style={{
                                        borderBottom: "24px solid rgba(0,0,0,0.15)",
                                        borderLeft: "24px solid transparent",
                                    }}
                                />

                                <item.icon className="text-black/50" size={22} strokeWidth={2.2} />
                                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-black/50 font-semibold">
                                    {item.title}
                                </p>
                                <h3 className="mt-2 text-2xl font-black text-black/80">{item.value}</h3>
                            </motion.div>
                        ))}
                    </div>

                    <div className="md:hidden mt-20 flex flex-col items-center">
                        <motion.div
                            onClick={cycleStack}
                            animate={{ rotate: [0, -1.2, 0, 1, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full max-w-[210px] h-52 cursor-pointer select-none"
                        >
                            {order.map((statIndex, position) => {
                                const item = stats[statIndex];
                                const isTop = position === 0;
                                const offsetX = position * 16;
                                const offsetY = position * 14;
                                const fanRotate = item.baseRotate + position * 6; // extra tilt per layer
                                return (
                                    <motion.div
                                        key={statIndex}
                                        animate={{
                                            x: offsetX,
                                            y: offsetY,
                                            rotate: fanRotate,
                                            scale: 1 - position * 0.06,
                                        }}
                                        transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.9 }}
                                        className="absolute inset-0 rounded-sm p-6 pt-9 shadow-[0_14px_30px_rgba(0,0,0,0.55)]"
                                        style={{
                                            backgroundColor: item.color,
                                            zIndex: stats.length - position,
                                        }}
                                    >
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/50 backdrop-blur-sm rotate-[-4deg] border border-white/40 shadow-sm" />

                                        <div
                                            className="absolute bottom-0 right-0 w-0 h-0"
                                            style={{
                                                borderBottom: "24px solid rgba(0,0,0,0.15)",
                                                borderLeft: "24px solid transparent",
                                            }}
                                        />

                                        {isTop ? (
                                            <motion.div
                                                key={`flash-${statIndex}-${flashKey}`}
                                                initial={{ opacity: 0, scale: 0.85, y: 6 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                            >
                                                <item.icon className="text-black/50" size={22} strokeWidth={2.2} />
                                                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-black/50 font-semibold">
                                                    {item.title}
                                                </p>
                                                <h3 className="mt-2 text-2xl font-black text-black/80">{item.value}</h3>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                animate={{ opacity: 1 - position * 0.15 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <item.icon className="text-black/40" size={20} strokeWidth={2.2} />
                                            </motion.div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        <div className="flex gap-2 mt-8">
                            {stats.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        order[0] === i ? "w-6 bg-amber-300" : "w-1.5 bg-white/25"
                                    }`}
                                />
                            ))}
                        </div>

                        <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/40">
                            Tap the stack to flip through
                        </p>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6">
                <div className="rounded-3xl border border-amber-400/20 bg-amber-400/5 p-10 flex flex-col md:flex-row justify-between gap-8">
                    <div>
                        <p className="uppercase tracking-[0.4em] text-xs text-amber-300">Registration</p>
                        <h2 className="mt-4 text-4xl font-black">Registrations Open</h2>
                        <p className="mt-4 text-white/60"> Venue : {competition.venue}</p>
                        <p className="mt-2 text-white/60">Deadline : {competition.registrationDeadline}</p>
                    </div>
                    <Link href="/Register" className="self-center rounded-xl bg-amber-400 px-10 py-4 text-black font-bold hover:bg-amber-300 transition">
                        Register Now
                    </Link>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 mt-28">
                <h2 className="text-4xl font-black">Highlights</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {competition.highlights.map((item, index) => (
                        <div key={index} className="rounded-2xl border border-white/10 bg-white/3 p-8">
                            <span className="text-4xl font-black text-amber-300"> 0{index + 1}</span>
                            <h3 className="mt-5 text-xl font-bold">{item}</h3>
                        </div>
                    ))
                    }
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 mt-28">
                <h2 className="text-4xl font-black">What To Expect</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-10">
                    {competition.details.map((item, index) => (
                        <div key={index} className="flex gap-5 rounded-2xl border border-white/10 bg-white/3 p-6">
                            <div className="h-3 w-3 rounded-full bg-amber-400 mt-2" />
                            <p className="text-white/70 leading-8">{item}</p>
                        </div>
                    ))
                    }
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 mt-28">
                <h2 className="text-4xl font-black">Timeline</h2>
                <div className="mt-10 space-y-5">
                    {competition.timeline.map((item, index) => (
                        <div key={index} className="rounded-2xl border border-white/10 bg-white/3 p-6 flex justify-between">
                            <h3 className="font-bold">{item.title}</h3>
                            <span className="text-amber-300">{item.date}</span>
                        </div>
                    ))
                    }
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 mt-28 pb-32">
                <h2 className="text-4xl font-black">Rules</h2>
                <div className="mt-10 grid md:grid-cols-2 gap-5">
                    {competition.rules.map((rule, index) => (
                        <div key={index} className="rounded-xl border border-white/10 p-6 text-white/70">{rule}</div>
                    ))
                    }
                </div>
                <Link href="/Competitions" className="inline-block mt-16 rounded-full border border-white/20 px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition">
                    Back To Competitions
                </Link>
            </section>
        </main>
    );
}