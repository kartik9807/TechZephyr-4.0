"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Trophy,
    Clock,
    Users,
    Gauge,
    ExternalLink,
} from "lucide-react";

import Silk from "@/components/animated_bg/Silk";
import { competitions } from "@/data/competitions";

export default function CompetitionDetails() {
    const { slug } = useParams();

    const competition = competitions.find(
        (item) => item.slug === slug
    );

    const [showCurtain, setShowCurtain] = useState(true);
    const [isOpening, setIsOpening] = useState(false);

    useEffect(() => {
        if (!competition) return;

        // Keep society branding visible before opening
        const openTimer = setTimeout(() => {
            setIsOpening(true);
        }, 1650);

        // Remove curtain after the opening animation finishes
        const closeTimer = setTimeout(() => {
            setShowCurtain(false);
        }, 2850);

        return () => {
            clearTimeout(openTimer);
            clearTimeout(closeTimer);
        };
    }, [competition]);

    const [order, setOrder] = useState([0, 1, 2, 3]);
    const [flashKey, setFlashKey] = useState(0);

    const cycleStack = () => {
        setOrder((prev) => [...prev.slice(1), prev[0]]);
        setFlashKey((key) => key + 1);
    };

    const stats = [
        {
            title: "Prize Pool",
            value: competition?.prize,
            icon: Trophy,
            color: "#fde68a",
            rotate: "-rotate-3",
            baseRotate: -3,
        },
        {
            title: "Duration",
            value: competition?.duration,
            icon: Clock,
            color: "#fca5a5",
            rotate: "rotate-2",
            baseRotate: 2,
        },
        {
            title: "Team Size",
            value: competition?.teamSize,
            icon: Users,
            color: "#86efac",
            rotate: "-rotate-2",
            baseRotate: -2,
        },
        {
            title: "Difficulty",
            value: competition?.difficulty,
            icon: Gauge,
            color: "#93c5fd",
            rotate: "rotate-3",
            baseRotate: 3,
        },
    ];

    return (
        <main className="min-h-screen overflow-hidden bg-black text-white">
            {/* CINEMATIC SOCIETY CURTAIN */}
            {showCurtain && (
                <div className="fixed inset-0 z-[9999] pointer-events-auto">

                    {/* Deep black background */}
                    <div className="absolute inset-0 bg-black" />

                    {/* Society branding */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.88,
                            y: 15,
                        }}
                        animate={{
                            opacity: isOpening ? 0 : 1,
                            scale: isOpening ? 1.04 : 1,
                            y: isOpening ? -10 : 0,
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
                        className="absolute inset-0 z-30 flex items-center justify-center"
                    >
                        <div className="flex flex-col items-center text-center">

                            {/* Society Logo */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.75,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative flex h-32 w-32 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_120px_rgba(251,191,36,0.10)] backdrop-blur-xl md:h-36 md:w-36"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-amber-400/10 blur-2xl" />

                                <img
                                    src={competition.society_logo}
                                    alt={competition.society}
                                    className="relative z-10 h-full w-full object-contain"
                                />
                            </motion.div>

                            {/* Presented By */}
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
                                    delay: 0.35,
                                    duration: 0.45,
                                }}
                                className="mt-8 text-[10px] uppercase tracking-[0.55em] text-amber-300/70"
                            >
                                Presented By
                            </motion.p>

                            {/* Society Name */}
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.55,
                                    ease: "easeOut",
                                }}
                                className="mt-3 max-w-3xl px-6 text-3xl font-black tracking-tight text-white md:text-5xl"
                            >
                                {competition.society}
                            </motion.h2>

                            {/* Divider */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    scaleX: 1,
                                }}
                                transition={{
                                    delay: 0.7,
                                    duration: 0.55,
                                    ease: "easeOut",
                                }}
                                className="mt-6 flex items-center gap-4"
                            >
                                <span className="h-px w-10 bg-amber-400/30" />

                                <span className="text-[9px] uppercase tracking-[0.45em] text-white/25">
                                    Presents
                                </span>

                                <span className="h-px w-10 bg-amber-400/30" />
                            </motion.div>

                            {/* Competition Name */}
                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 8,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.85,
                                    duration: 0.5,
                                }}
                                className="mt-5 text-base font-medium tracking-wide text-white/50 md:text-lg"
                            >
                                {competition.title}
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* LEFT CURTAIN */}
                    <motion.div
                        initial={{
                            x: "0%",
                        }}
                        animate={{
                            x: isOpening ? "-100%" : "0%",
                        }}
                        transition={{
                            duration: 1.1,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        className="absolute inset-y-0 left-0 z-20 w-1/2 bg-black"
                    >
                        <div className="absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-amber-400/35 to-transparent" />

                        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-amber-400/[0.025] to-transparent" />
                    </motion.div>

                    {/* RIGHT CURTAIN */}
                    <motion.div
                        initial={{
                            x: "0%",
                        }}
                        animate={{
                            x: isOpening ? "100%" : "0%",
                        }}
                        transition={{
                            duration: 1.1,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        className="absolute inset-y-0 right-0 z-20 w-1/2 bg-black"
                    >
                        <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-amber-400/35 to-transparent" />

                        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-amber-400/[0.025] to-transparent" />
                    </motion.div>

                    {/* Top cinematic line */}
                    <motion.div
                        initial={{
                            scaleX: 0,
                            opacity: 0,
                        }}
                        animate={{
                            scaleX: 1,
                            opacity: isOpening ? 0 : 1,
                        }}
                        transition={{
                            delay: 0.55,
                            duration: 0.7,
                        }}
                        className="absolute left-1/2 top-8 z-40 h-px w-28 -translate-x-1/2 bg-linear-to-r from-transparent via-amber-400/40 to-transparent"
                    />

                    {/* Bottom cinematic line */}
                    <motion.div
                        initial={{
                            scaleX: 0,
                            opacity: 0,
                        }}
                        animate={{
                            scaleX: 1,
                            opacity: isOpening ? 0 : 1,
                        }}
                        transition={{
                            delay: 0.55,
                            duration: 0.7,
                        }}
                        className="absolute bottom-8 left-1/2 z-40 h-px w-28 -translate-x-1/2 bg-linear-to-r from-transparent via-amber-400/40 to-transparent"
                    />
                </div>
            )}
            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative min-h-[85vh] overflow-hidden">

                <div className="absolute inset-0">
                    <Silk
                        speed={5}
                        scale={1}
                        color="#262626"
                        noiseIntensity={1.2}
                        rotation={0}
                    />
                </div>

                <div className="absolute right-0 top-20 h-125 w-125 rounded-full bg-amber-400/10 blur-[160px]" />

                <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-20">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >

                        <div className="flex flex-wrap items-center gap-3">

                            <p className="uppercase tracking-[0.5em] text-xs text-amber-300">
                                {competition.tag}
                            </p>

                            <span className="h-px w-12 bg-amber-400/40" />

                            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                                Tech Zephyr 4.0
                            </span>

                        </div>

                        <h1 className="mt-6 text-5xl font-black leading-none bg-linear-to-b from-white via-zinc-300 to-zinc-700 bg-clip-text text-transparent md:text-7xl lg:text-8xl">
                            {competition.title}
                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/60">
                            {competition.description}
                        </p>

                        {/* Basic event metadata */}

                        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/35">

                            <span>
                                {competition.domain}
                            </span>

                            <span>
                                {competition.mode}
                            </span>

                            <span>
                                {competition.venue}
                            </span>

                            <span>
                                Deadline — {competition.registrationDeadline}
                            </span>

                        </div>

                    </motion.div>


                    {/* =====================================================
                        FLAPPY PAPER CARDS — ORIGINAL DESIGN PRESERVED
                    ===================================================== */}

                    <div className="mt-24 hidden gap-x-10 gap-y-14 md:grid md:grid-cols-2 lg:grid-cols-4">

                        {stats.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    whileHover={{
                                        rotate: 0,
                                        scale: 1.06,
                                        y: -8,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                    }}
                                    className={`relative ${item.rotate} rounded-sm p-6 pt-9 shadow-[0_14px_30px_rgba(0,0,0,0.55)]`}
                                    style={{
                                        backgroundColor: item.color,
                                    }}
                                >

                                    <div className="absolute -top-3 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-4deg] border border-white/40 bg-white/50 shadow-sm backdrop-blur-sm" />

                                    <div
                                        className="absolute bottom-0 right-0 h-0 w-0"
                                        style={{
                                            borderBottom:
                                                "24px solid rgba(0,0,0,0.15)",
                                            borderLeft:
                                                "24px solid transparent",
                                        }}
                                    />

                                    <Icon
                                        className="text-black/50"
                                        size={22}
                                        strokeWidth={2.2}
                                    />

                                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
                                        {item.title}
                                    </p>

                                    <h3 className="mt-2 text-2xl font-black text-black/80">
                                        {item.value}
                                    </h3>

                                </motion.div>
                            );
                        })}

                    </div>


                    {/* =====================================================
                        MOBILE FLAPPY STACK
                    ===================================================== */}

                    <div className="mt-20 flex flex-col items-center md:hidden">

                        <motion.div
                            onClick={cycleStack}
                            animate={{
                                rotate: [0, -1.2, 0, 1, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative h-52 w-full max-w-52.5 cursor-pointer select-none"
                        >

                            {order.map((statIndex, position) => {

                                const item = stats[statIndex];

                                const Icon = item.icon;

                                const isTop = position === 0;

                                const offsetX = position * 16;
                                const offsetY = position * 14;

                                const fanRotate =
                                    item.baseRotate + position * 6;

                                return (
                                    <motion.div
                                        key={statIndex}
                                        animate={{
                                            x: offsetX,
                                            y: offsetY,
                                            rotate: fanRotate,
                                            scale:
                                                1 -
                                                position * 0.06,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 24,
                                            mass: 0.9,
                                        }}
                                        className="absolute inset-0 rounded-sm p-6 pt-9 shadow-[0_14px_30px_rgba(0,0,0,0.55)]"
                                        style={{
                                            backgroundColor:
                                                item.color,
                                            zIndex:
                                                stats.length -
                                                position,
                                        }}
                                    >

                                        <div className="absolute -top-3 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-4deg] border border-white/40 bg-white/50 shadow-sm backdrop-blur-sm" />

                                        <div
                                            className="absolute bottom-0 right-0 h-0 w-0"
                                            style={{
                                                borderBottom:
                                                    "24px solid rgba(0,0,0,0.15)",
                                                borderLeft:
                                                    "24px solid transparent",
                                            }}
                                        />

                                        {isTop ? (
                                            <motion.div
                                                key={`flash-${statIndex}-${flashKey}`}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.85,
                                                    y: 6,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    duration: 0.35,
                                                    ease: [
                                                        0.22,
                                                        1,
                                                        0.36,
                                                        1,
                                                    ],
                                                }}
                                            >

                                                <Icon
                                                    className="text-black/50"
                                                    size={22}
                                                    strokeWidth={2.2}
                                                />

                                                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
                                                    {item.title}
                                                </p>

                                                <h3 className="mt-2 text-2xl font-black text-black/80">
                                                    {item.value}
                                                </h3>

                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                animate={{
                                                    opacity:
                                                        1 -
                                                        position *
                                                        0.15,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                }}
                                            >
                                                <Icon
                                                    className="text-black/40"
                                                    size={20}
                                                    strokeWidth={2.2}
                                                />
                                            </motion.div>
                                        )}

                                    </motion.div>
                                );
                            })}

                        </motion.div>

                        <div className="mt-8 flex gap-2">

                            {stats.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${order[0] === i
                                        ? "w-6 bg-amber-300"
                                        : "w-1.5 bg-white/25"
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


            {/* =========================================================
                REGISTRATION
            ========================================================= */}

            <section className="mx-auto max-w-7xl px-6">

                <div className="rounded-3xl border border-amber-400/20 bg-amber-400/5 p-10 md:flex md:items-center md:justify-between">

                    <div>

                        <p className="uppercase tracking-[0.4em] text-xs text-amber-300">
                            Registration
                        </p>

                        <h2 className="mt-4 text-4xl font-black">
                            Ready to participate?
                        </h2>

                        <p className="mt-4 max-w-2xl leading-7 text-white/60">
                            Register through the official Unstop listing
                            for {competition.title}. All registration,
                            eligibility and submission instructions are
                            handled through the official event page.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-5 text-xs uppercase tracking-[0.2em] text-white/35">

                            <span>
                                Venue — {competition.venue}
                            </span>

                            <span>
                                Deadline — {competition.registrationDeadline}
                            </span>

                        </div>

                    </div>

                    <a
                        href={competition.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex shrink-0 items-center gap-3 self-center rounded-xl bg-amber-400 px-8 py-4 font-bold text-black transition hover:bg-amber-300 hover:shadow-[0_0_30px_rgba(251,191,36,.2)] md:mt-0"
                    >
                        Register on Unstop

                        <ExternalLink size={17} />
                    </a>

                </div>

            </section>


            {/* =========================================================
                HIGHLIGHTS
            ========================================================= */}

            <section className="mx-auto mt-20 max-w-7xl px-6">

                {/* Heading */}
                <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-amber-300">
                        The Challenge
                    </p>

                    <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
                        Highlights
                    </h2>
                </div>


                {/* Single Large Container */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="group relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl"
                >

                    {/* Ambient Glow */}
                    <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-amber-400/10 blur-[110px]" />

                    <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-400/5 blur-[110px]" />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-400/[0.035] via-transparent to-transparent" />


                    {/* Header */}
                    <div className="relative flex flex-col gap-3 border-b border-white/10 px-6 py-5 sm:px-8 md:flex-row md:items-center md:justify-between">

                        <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-amber-300">
                                Key Highlights
                            </p>

                            <h3 className="mt-1.5 text-lg font-bold tracking-tight md:text-xl">
                                What Makes This Competition Different
                            </h3>
                        </div>

                        <div className="w-fit rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5">
                            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/30">
                                {competition.highlights.length} Key Points
                            </span>
                        </div>

                    </div>


                    {/* Highlights */}
                    <div className="relative">

                        {competition.highlights.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: -12,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.06,
                                    ease: "easeOut",
                                }}
                                className="group/highlight relative border-b border-white/10 last:border-b-0"
                            >

                                <div className="flex items-center gap-4 px-6 py-4 sm:px-8 md:py-5">

                                    {/* Number */}
                                    <div className="flex shrink-0 items-center gap-3">

                                        <span className="font-mono text-[10px] tracking-[0.2em] text-amber-300/80">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <div className="h-px w-6 bg-amber-400/20 transition-all duration-300 group-hover/highlight:w-10 group-hover/highlight:bg-amber-400/50" />

                                    </div>


                                    {/* Highlight */}
                                    <h3 className="flex-1 text-sm font-semibold leading-5 text-white/65 transition-colors duration-300 group-hover/highlight:text-white sm:text-base">
                                        {item}
                                    </h3>


                                    {/* Index */}
                                    <span className="hidden text-[8px] uppercase tracking-[0.25em] text-white/20 sm:block">
                                        Highlight
                                    </span>

                                </div>


                                {/* Hover Line */}
                                <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-amber-400/60 to-transparent transition-all duration-500 group-hover/highlight:w-full" />

                            </motion.div>

                        ))}

                    </div>


                    {/* Footer */}
                    <div className="relative flex items-center justify-between bg-black/20 px-6 py-3.5 sm:px-8">

                        <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                            {competition.title}
                        </span>

                        <span className="text-[8px] uppercase tracking-[0.25em] text-amber-300/40">
                            Key Features
                        </span>

                    </div>

                </motion.div>

            </section>

            {/* =========================================================
                WHAT TO EXPECT
            ========================================================= */}

            <section className="mx-auto mt-20 max-w-7xl px-6">

                {/* Heading */}

                <div className="text-center">

                    <p className="text-[10px] uppercase tracking-[0.4em] text-amber-300">
                        Experience
                    </p>

                    <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
                        What To Expect
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/45">
                        More than a competition — an experience designed to
                        challenge, inspire and connect brilliant minds.
                    </p>

                </div>


                {/* Single Large Container */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="group relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl"
                >

                    {/* Ambient background */}

                    <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-amber-400/10 blur-[110px]" />

                    <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-400/5 blur-[110px]" />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-400/[0.035] via-transparent to-transparent" />


                    {/* Header */}

                    <div className="relative flex flex-col gap-3 border-b border-white/10 px-6 py-5 sm:px-8 md:flex-row md:items-center md:justify-between">

                        <div>

                            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-amber-300">
                                Competition Experience
                            </p>

                            <h3 className="mt-1.5 text-xl font-bold tracking-tight md:text-2xl">
                                Built To Challenge You
                            </h3>

                        </div>


                        <div className="w-fit rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5">

                            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/30">
                                {competition.details.length} Experiences
                            </span>

                        </div>

                    </div>


                    {/* Details */}

                    <div className="relative">

                        {competition.details.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: -12,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.06,
                                    ease: "easeOut",
                                }}
                                className="group/item relative border-b border-white/10 last:border-b-0"
                            >

                                <div className="flex flex-col gap-3 px-6 py-5 sm:px-8 md:flex-row md:items-center md:py-6">

                                    {/* Number */}

                                    <div className="flex shrink-0 items-center gap-3 md:w-28">

                                        <span className="font-mono text-[10px] tracking-[0.25em] text-amber-300/70">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <div className="h-px w-8 bg-amber-400/20 transition-all duration-300 group-hover/item:w-12 group-hover/item:bg-amber-400/50" />

                                    </div>


                                    {/* Main text */}

                                    <div className="flex-1">

                                        <p className="text-sm font-semibold leading-6 text-white/70 transition-colors duration-300 group-hover/item:text-white md:text-base">
                                            {item}
                                        </p>

                                    </div>


                                    {/* Stage label */}

                                    <div className="hidden shrink-0 md:block">

                                        <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[8px] uppercase tracking-[0.25em] text-white/25 transition-all duration-300 group-hover/item:border-amber-400/20 group-hover/item:bg-amber-400/5 group-hover/item:text-amber-300/70">
                                            Stage {index + 1}
                                        </span>

                                    </div>

                                </div>


                                {/* Hover line */}

                                <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-amber-400/60 to-transparent transition-all duration-500 group-hover/item:w-full" />

                            </motion.div>

                        ))}

                    </div>


                    {/* Footer */}

                    <div className="relative flex flex-col gap-2 bg-black/20 px-6 py-4 sm:px-8 md:flex-row md:items-center md:justify-between">

                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                            {competition.title}
                        </p>

                        <p className="text-[9px] uppercase tracking-[0.25em] text-amber-300/45">
                            Challenge · Build · Compete
                        </p>

                    </div>

                </motion.div>

            </section>

            {/* =========================================================
                JUDGING CRITERIA
            ========================================================= */}
            {competition.judgingCriteria?.length > 0 && (
                <section className="mx-auto mt-20 max-w-7xl px-6">

                    {/* UNIFIED EVALUATION CARD */}
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl">

                        {/* HEADER */}
                        <div className="border-b border-white/10 px-6 py-5 md:px-8">

                            <p className="text-[9px] uppercase tracking-[0.4em] text-amber-300">
                                Evaluation
                            </p>

                            <h2 className="mt-1.5 text-2xl font-black tracking-tight md:text-3xl">
                                How You Will Be Judged
                            </h2>

                        </div>


                        {/* CRITERIA */}
                        <div className="divide-y divide-white/[0.07]">

                            {competition.judgingCriteria.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        x: -12,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        margin: "-50px",
                                    }}
                                    transition={{
                                        duration: 0.35,
                                        delay: index * 0.05,
                                        ease: "easeOut",
                                    }}
                                    className="group grid gap-3 px-6 py-4 transition-colors hover:bg-white/[0.025] md:grid-cols-[55px_180px_100px_1fr] md:items-center md:px-8"
                                >

                                    {/* NUMBER */}
                                    <span className="font-mono text-[10px] font-semibold tracking-wider text-amber-300/80">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>


                                    {/* TITLE */}
                                    <h3 className="text-sm font-bold text-white/85">
                                        {item.title}
                                    </h3>


                                    {/* VALUE */}
                                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                                        {item.value}
                                    </span>


                                    {/* DESCRIPTION */}
                                    <p className="text-xs leading-5 text-white/40 transition-colors group-hover:text-white/55">
                                        {item.description}
                                    </p>

                                </motion.div>
                            ))}

                        </div>


                        {/* BOTTOM ACCENT */}
                        <div className="h-px w-full bg-linear-to-r from-transparent via-amber-400/25 to-transparent" />

                    </div>

                </section>
            )}

            {/* =========================================================
                TIMELINE
            ========================================================= */}

            <section className="mx-auto mt-32 max-w-7xl px-6 pb-8">

                <div className="text-center">

                    <p className="uppercase tracking-[0.45em] text-xs text-amber-300">
                        Schedule
                    </p>

                    <h2 className="mt-4 text-4xl font-black md:text-5xl">
                        Competition Timeline
                    </h2>

                </div>

                <div className="relative mt-24">

                    <div className="absolute left-0 right-0 top-7 hidden h-px bg-linear-to-r from-transparent via-white/20 to-transparent md:block" />

                    <div className="grid gap-14 md:grid-cols-4">

                        {competition.timeline.map(
                            (item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="relative"
                                >

                                    <div className="flex justify-center">

                                        <div className="relative">

                                            <div className="h-5 w-5 rounded-full bg-amber-400 shadow-[0_0_25px_rgba(251,191,36,.8)]" />

                                            <motion.div
                                                animate={{
                                                    scale: [
                                                        1,
                                                        1.8,
                                                        1,
                                                    ],
                                                    opacity: [
                                                        0.7,
                                                        0,
                                                        0.7,
                                                    ],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay:
                                                        index * 0.25,
                                                }}
                                                className="absolute inset-0 rounded-full border border-amber-300"
                                            />

                                        </div>

                                    </div>

                                    <div className="mt-10 text-center">

                                        <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-amber-300">
                                            {item.date}
                                        </span>

                                        <h3 className="mt-6 text-xl font-bold">
                                            {item.title}
                                        </h3>

                                    </div>

                                </motion.div>
                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =========================================================
                PRIZES
            ========================================================= */}
            {competition.prizeBreakdown?.length > 0 && (
                <section className="mx-auto mt-20 max-w-7xl px-6">

                    {/* UNIFIED REWARDS CARD */}
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl">

                        <div className="grid md:grid-cols-[0.8fr_1.2fr]">

                            {/* LEFT — INTRO */}
                            <div className="border-b border-white/10 px-6 py-6 md:border-b-0 md:border-r md:px-8">

                                <p className="text-[10px] uppercase tracking-[0.4em] text-amber-300">
                                    Rewards
                                </p>

                                <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
                                    What&apos;s At Stake
                                </h2>

                                <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                                    Compete, build your reputation and take home
                                    rewards along with recognition from Tech Zephyr.
                                </p>

                            </div>


                            {/* RIGHT — PRIZE BREAKDOWN */}
                            <div className="divide-y divide-white/[0.07]">

                                {competition.prizeBreakdown.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center gap-5 px-6 py-4 transition-colors hover:bg-white/[0.025] md:px-8"
                                    >

                                        {/* NUMBER */}
                                        <span className="shrink-0 font-mono text-[10px] font-semibold tracking-wider text-amber-300/80">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>


                                        {/* PRIZE */}
                                        <span className="flex-1 text-right text-sm font-medium text-white/65 transition-colors group-hover:text-white/85">
                                            {item}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>


                        {/* BOTTOM ACCENT */}
                        <div className="h-px w-full bg-linear-to-r from-transparent via-amber-400/30 to-transparent" />

                    </div>

                </section>
            )}
            {/* =========================================================
                RULES
            ========================================================= */}

            <section className="mx-auto mt-24 max-w-7xl px-6 pb-20">

                {/* UNIFIED RULES CARD */}
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl">

                    {/* HEADER */}
                    <div className="flex items-end justify-between gap-6 border-b border-white/10 px-6 py-6 md:px-8">

                        <div>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-amber-300">
                                Guidelines
                            </p>

                            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
                                Rules & Regulations
                            </h2>
                        </div>

                        {/* Small decorative indicator */}
                        <div className="hidden items-center gap-2 md:flex">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                            <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                                Please Read Carefully
                            </span>
                        </div>

                    </div>


                    {/* RULES */}
                    <div className="divide-y divide-white/[0.07]">

                        {competition.rules.map((rule, index) => (
                            <div
                                key={index}
                                className="group flex gap-5 px-6 py-4 transition-colors hover:bg-white/[0.025] md:px-8"
                            >

                                {/* NUMBER */}
                                <span className="mt-0.5 shrink-0 font-mono text-[10px] font-semibold tracking-wider text-amber-300/80">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* RULE */}
                                <p className="text-sm leading-6 text-white/55 transition-colors group-hover:text-white/75">
                                    {rule}
                                </p>

                            </div>
                        ))}

                    </div>


                    {/* ACTIONS */}
                    <div className="flex flex-wrap gap-3 border-t border-white/10 px-6 py-5 md:px-8">

                        <Link
                            href="/Competitions"
                            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white/70 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                        >
                            Back To Competitions
                        </Link>

                        <a
                            href={competition.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:bg-amber-300"
                        >
                            Register on Unstop
                            <ExternalLink size={14} />
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}