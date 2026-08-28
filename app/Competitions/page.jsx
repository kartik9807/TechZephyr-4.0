"use client";

// import { motion } from "framer-motion";
import Link from "next/link";
import Silk from "@/components/animated_bg/Silk";
import SectionHeading from "@/components/SectionHeading";
import CompetitionCard from "@/components/CompetitionCard";
import CTA from "@/components/CTA";
import { competitions } from "@/data/competitions";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Trophy, BriefcaseBusiness, Gift, Users, GraduationCap, Award, Rocket, Brain, UserPlus, Lightbulb, Presentation, } from "lucide-react";

export default function Competitions() {
    const dashboardEvents = [
        {
            society: "WebnD",
            title: "Web Development Hackathon",
            description: "24-hour full-stack development challenge",
            date: "27 AUG",
            duration: "24 Hours",
            venue: "Computer Centre",
            prize: "₹50,000",
            difficulty: "Intermediate",
            number: "01",
        },
        {
            society: "Neuromancers",
            title: "Competitive Programming",
            description: "Algorithmic problem solving challenge",
            date: "27 AUG",
            duration: "3 Hours",
            venue: "Computer Centre",
            prize: "₹30,000",
            difficulty: "Advanced",
            number: "02",
        },
        {
            society: "RISC",
            title: "RC Planes Competition",
            description: "Aircraft design and flight challenge",
            date: "26 AUG",
            duration: "2 Days",
            venue: "Sports Ground",
            prize: "₹60,000",
            difficulty: "Advanced",
            number: "03",
        },
        {
            society: "FEBS",
            title: "B-Plan Competition",
            description: "Pitch innovative startup ideas to experts",
            date: "27 AUG",
            duration: "1 Day",
            venue: "Seminar Hall",
            prize: "₹40,000",
            difficulty: "Beginner",
            number: "04",
        },
        {
            society: "Nakshatra",
            title: "Astronomy Challenge",
            description: "Explore astronomy through an interactive challenge",
            date: "28 AUG",
            duration: "4 Hours",
            venue: "Lecture Hall",
            prize: "₹25,000",
            difficulty: "Intermediate",
            number: "05",
        },
        {
            society: "STC",
            title: "Agentic AI Hackathon",
            description: "Build intelligent autonomous AI agents",
            date: "27 AUG",
            duration: "24 Hours",
            venue: "Innovation Hub",
            prize: "₹50,000",
            difficulty: "Intermediate",
            number: "06",
        },
        {
            society: "RISC",
            title: "Tech Innovation Challenge",
            description: "Build impactful multidisciplinary solutions",
            date: "28 AUG",
            duration: "36 Hours",
            venue: "Innovation Hub",
            prize: "₹70,000",
            difficulty: "Intermediate",
            number: "07",
        },
        {
            society: "WebnD",
            title: "Code Relay",
            description: "Fast-paced collaborative coding challenge",
            date: "30 AUG",
            duration: "6 Hours",
            venue: "LT-101",
            prize: "₹35,000",
            difficulty: "Intermediate",
            number: "08",
        },
    ];

    const [activeDashboardEvent, setActiveDashboardEvent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDashboardEvent(
                (prev) => (prev + 1) % dashboardEvents.length
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const currentEvent = dashboardEvents[activeDashboardEvent];

    const nextEvent =
        dashboardEvents[
        (activeDashboardEvent + 1) % dashboardEvents.length
        ];
    return (
        <main className="bg-black text-white overflow-hidden">
            <section className="relative min-h-[78vh] overflow-hidden flex items-center ">
                {/* Background */}
                <div className="absolute inset-0">
                    <Silk
                        speed={5}
                        scale={1}
                        color="#262626"
                        noiseIntensity={1.2}
                        rotation={0}
                    />
                </div>

                {/* Ambient glow */}
                <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-amber-400/10 blur-[150px]" />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black" />

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
                    <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 lg:gap-14">

                        {/* =========================================================
                LEFT SIDE
            ========================================================= */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                        >
                            <p className="uppercase tracking-[0.45em] text-xs text-amber-300 mb-5 pt-5">
                                TECHZEPHYR 2026
                            </p>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight bg-linear-to-b from-white via-zinc-300 to-zinc-700 bg-clip-text text-transparent">
                                COMPETE.
                            </h1>

                            <h2 className="mt-5 text-2xl md:text-4xl font-semibold">
                                Challenge Ideas.
                                <br />
                                Build Solutions.
                            </h2>

                            <p className="mt-8 max-w-2xl text-lg text-white/60 leading-9">
                                Explore hackathons, programming contests, robotics
                                competitions, finance challenges, astronomy events and
                                much more.
                            </p>

                            <div className="mt-12 flex gap-5 flex-wrap">
                                <Link
                                    href="/Register"
                                    className="rounded-xl bg-amber-400 px-8 py-4 text-black font-semibold uppercase hover:bg-amber-300 transition duration-300"
                                >
                                    Register
                                </Link>

                                <Link
                                    href="/AboutUs"
                                    className="rounded-xl border border-white/10 px-8 py-4 uppercase hover:border-amber-400 hover:text-amber-300 transition duration-300"
                                >
                                    About
                                </Link>
                            </div>
                        </motion.div>


                        {/* =========================================================
                RIGHT SIDE — UPCOMING EVENTS DASHBOARD
            ========================================================= */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 30,
                                scale: 0.97
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1
                            }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1,
                                ease: "easeOut"
                            }}
                            className="relative flex w-full items-center justify-center lg:h-[460px]"
                        >
                            {/* Ambient glow */}
                            <div className="absolute h-72 w-72 rounded-full bg-amber-400/10 blur-[120px]" />

                            {/* DASHBOARD */}
                            <div className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-black/50 backdrop-blur-2xl shadow-[0_0_70px_rgba(251,191,36,.07)]">

                                {/* Decorative glow */}
                                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-amber-400/10 blur-[90px]" />

                                {/* HEADER */}
                                <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4">

                                    <div>
                                        <p className="text-[8px] uppercase tracking-[0.35em] text-white/30">
                                            TechZephyr
                                        </p>

                                        <h3 className="mt-1 text-lg font-bold tracking-tight">
                                            Event Dashboard
                                        </h3>
                                    </div>

                                    {/* LIVE */}
                                    <div className="flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/5 px-2.5 py-1">

                                        <motion.span
                                            animate={{
                                                opacity: [1, 0.35, 1],
                                                scale: [1, 0.75, 1]
                                            }}
                                            transition={{
                                                duration: 1.1,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,.8)]"
                                        />

                                        <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-red-400">
                                            Live
                                        </span>

                                    </div>

                                </div>


                                {/* CONTENT */}
                                <div className="relative px-5 py-5">

                                    {/* UPCOMING LABEL */}
                                    <div className="flex items-center gap-3">

                                        <span className="text-[8px] uppercase tracking-[0.35em] text-amber-300">
                                            Upcoming Event
                                        </span>

                                        <div className="h-px flex-1 bg-linear-to-r from-amber-400/40 to-transparent" />

                                    </div>


                                    {/* =================================================
                CURRENT EVENT
            ================================================= */}

                                    <AnimatePresence mode="wait">

                                        <motion.div
                                            key={currentEvent.number}
                                            initial={{
                                                opacity: 0,
                                                y: 15,
                                                filter: "blur(8px)"
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                filter: "blur(0px)"
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -15,
                                                filter: "blur(8px)"
                                            }}
                                            transition={{
                                                duration: 0.28,
                                                ease: "easeOut"
                                            }}
                                            className="mt-4"
                                        >

                                            {/* EVENT HEADER */}

                                            <div className="flex items-start justify-between gap-4">

                                                <div className="min-w-0">

                                                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                                                        {currentEvent.society}
                                                    </p>

                                                    <h4 className="mt-1 text-2xl font-bold tracking-tight">
                                                        {currentEvent.title}
                                                    </h4>

                                                    <p className="mt-1 text-xs text-white/40">
                                                        {currentEvent.description}
                                                    </p>

                                                </div>


                                                {/* EVENT NUMBER */}

                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/5">

                                                    <span className="font-mono text-sm font-bold text-amber-300">
                                                        {currentEvent.number}
                                                    </span>

                                                </div>

                                            </div>


                                            {/* EVENT DETAILS */}

                                            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-white/10 py-4">

                                                {/* DATE */}

                                                <div>

                                                    <p className="text-[7px] uppercase tracking-[0.25em] text-white/25">
                                                        Date
                                                    </p>

                                                    <p className="mt-1 text-xs font-semibold">
                                                        {currentEvent.date}
                                                    </p>

                                                </div>


                                                <div className="h-6 w-px bg-white/10" />


                                                {/* DURATION */}

                                                <div>

                                                    <p className="text-[7px] uppercase tracking-[0.25em] text-white/25">
                                                        Duration
                                                    </p>

                                                    <p className="mt-1 text-xs font-semibold">
                                                        {currentEvent.duration}
                                                    </p>

                                                </div>


                                                <div className="h-6 w-px bg-white/10" />


                                                {/* VENUE */}

                                                <div className="min-w-0 flex-1">

                                                    <p className="text-[7px] uppercase tracking-[0.25em] text-white/25">
                                                        Venue
                                                    </p>

                                                    <p className="mt-1 truncate text-xs font-semibold">
                                                        {currentEvent.venue}
                                                    </p>

                                                </div>

                                            </div>


                                            {/* PRIZE + DIFFICULTY */}

                                            <div className="mt-4 flex items-center justify-between">

                                                <div>

                                                    <p className="text-[7px] uppercase tracking-[0.25em] text-white/25">
                                                        Prize Pool
                                                    </p>

                                                    <p className="mt-1 text-sm font-bold text-amber-300">
                                                        {currentEvent.prize}
                                                    </p>

                                                </div>


                                                <div className="text-right">

                                                    <p className="text-[7px] uppercase tracking-[0.25em] text-white/25">
                                                        Difficulty
                                                    </p>

                                                    <p className="mt-1 text-xs font-semibold">
                                                        {currentEvent.difficulty}
                                                    </p>

                                                </div>

                                            </div>

                                        </motion.div>

                                    </AnimatePresence>


                                    {/* =================================================
                NEXT EVENT
            ================================================= */}

                                    <div className="mt-5">

                                        <div className="flex items-center justify-between">

                                            <p className="text-[8px] uppercase tracking-[0.35em] text-white/25">
                                                Next Up
                                            </p>

                                            <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                                                {nextEvent.date}
                                            </span>

                                        </div>


                                        <AnimatePresence mode="wait">

                                            <motion.div
                                                key={`next-${nextEvent.number}`}
                                                initial={{
                                                    opacity: 0,
                                                    x: 10
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    x: -10
                                                }}
                                                transition={{
                                                    duration: 0.22
                                                }}
                                                className="mt-3 flex items-center gap-3"
                                            >

                                                {/* ICON */}

                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">

                                                    <span className="font-mono text-sm text-amber-300">
                                                        {nextEvent.number}
                                                    </span>

                                                </div>


                                                {/* EVENT */}

                                                <div className="min-w-0 flex-1">

                                                    <h4 className="truncate text-sm font-semibold">
                                                        {nextEvent.title}
                                                    </h4>

                                                    <p className="mt-1 truncate text-[10px] text-white/35">
                                                        {nextEvent.society}
                                                        {" · "}
                                                        {nextEvent.duration}
                                                        {" · "}
                                                        {nextEvent.venue}
                                                    </p>

                                                </div>


                                                <span className="text-sm text-white/20">
                                                    →
                                                </span>

                                            </motion.div>

                                        </AnimatePresence>

                                    </div>


                                    {/* =================================================
                STATS
            ================================================= */}

                                    <div className="mt-5 flex items-center gap-8 border-t border-white/10 pt-4">

                                        <div className="flex items-center gap-2">

                                            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />

                                            <div>

                                                <span className="text-base font-bold">
                                                    05
                                                </span>

                                                <span className="ml-2 text-[7px] uppercase tracking-[0.2em] text-white/25">
                                                    Societies
                                                </span>

                                            </div>

                                        </div>


                                        <div className="flex items-center gap-2">

                                            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />

                                            <div>

                                                <span className="text-base font-bold">
                                                    {dashboardEvents.length.toString().padStart(2, "0")}+
                                                </span>

                                                <span className="ml-2 text-[7px] uppercase tracking-[0.2em] text-white/25">
                                                    Events
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* BOTTOM ACCENT */}

                                <div className="h-px w-full bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />

                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading subtitle="Events & Challenges" title="Explore Competitions" />
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {competitions.map((competition, index) => (
                            <CompetitionCard key={index} number={competition.number} tag={competition.tag} title={competition.title} description={competition.shortDescription} slug={competition.slug} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-10 border-t border-white/10">
                <div className="mx-auto max-w-7xl px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="relative overflow-hidden rounded-[45px] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-10 md:p-20"
                    >

                        {/* Background glows */}
                        <div className="absolute -top-28 -right-24 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />

                        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-white/5 blur-[120px]" />

                        <div className="absolute right-14 top-1/2 -translate-y-1/2 hidden lg:block h-85 w-85 rounded-full bg-amber-400/20 blur-[90px] pointer-events-none" />


                        {/* Logo */}
                        <motion.div
                            initial={{
                                scale: 2.3,
                                opacity: 0,
                                filter: "blur(16px)"
                            }}
                            whileInView={{
                                scale: 1,
                                opacity: 0.16,
                                filter: "blur(0px)"
                            }}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            viewport={{ once: true }}
                            className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none"
                        >
                            <img
                                src="/logo.jpeg"
                                alt="TechZephyr"
                                className="w-82.5 h-82.5 rounded-full object-cover select-none"
                            />
                        </motion.div>


                        {/* Main Content */}
                        <div className="relative z-10 max-w-3xl">

                            {/* Label */}
                            <motion.p
                                initial={{
                                    opacity: 0,
                                    x: -30
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    delay: 0.08,
                                    duration: 0.2
                                }}
                                viewport={{ once: true }}
                                className="uppercase tracking-[0.4em] text-xs text-white/40"
                            >
                                Flagship Challenge
                            </motion.p>


                            {/* Heading */}
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                    x: -40
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    delay: 0.15,
                                    duration: 0.22
                                }}
                                viewport={{ once: true }}
                                className="mt-6 text-4xl md:text-6xl font-bold"
                            >
                                Innovation Without Limits
                            </motion.h2>


                            {/* Description */}
                            <motion.p
                                initial={{
                                    opacity: 0,
                                    x: -35
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    delay: 0.22,
                                    duration: 0.35
                                }}
                                viewport={{ once: true }}
                                className="mt-8 text-lg leading-9 text-white/60"
                            >
                                TechZephyr competitions are designed to provide participants
                                with opportunities to transform ideas into impactful
                                solutions while competing with some of the brightest minds
                                across institutes.
                            </motion.p>


                            {/* =====================================================
                    STATISTICS — SINGLE UNIFIED ROW
                    ===================================================== */}

                            <div className="mt-12 flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/10">

                                {[
                                    {
                                        number: "8",
                                        label: "Competitions"
                                    },
                                    {
                                        number: "1000+",
                                        label: "Participants"
                                    },
                                    {
                                        number: "1500+",
                                        label: "Ideas"
                                    }
                                ].map((item, index) => (

                                    <motion.div
                                        key={item.label}
                                        initial={{
                                            opacity: 0,
                                            y: 25
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        transition={{
                                            delay: 0.2 + index * 0.08,
                                            duration: 0.2
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            y: -4
                                        }}
                                        className="flex-1 px-6 py-5 first:pl-0 last:pr-0 transition-all duration-300"
                                    >

                                        <h3 className="text-4xl font-black">
                                            {item.number}
                                        </h3>

                                        <div className="mt-4 h-px w-12 bg-amber-400/60" />

                                        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/45">
                                            {item.label}
                                        </p>

                                    </motion.div>

                                ))}

                            </div>

                        </div>

                    </motion.div>

                </div>
            </section>
            <section className="py-10 border-t border-white/10 overflow-hidden">
                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        subtitle="Experience"
                        title="Why You Should Join"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative mt-16 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.035] backdrop-blur-xl"
                    >

                        {/* Ambient glow */}
                        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />
                        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-amber-400/5 blur-[120px]" />

                        <div className="relative z-10 grid md:grid-cols-2 xl:grid-cols-4">

                            {[
                                {
                                    icon: Trophy,
                                    title: "Compete Nationally",
                                    description:
                                        "Challenge yourself against talented participants from institutes across the country."
                                },
                                {
                                    icon: BriefcaseBusiness,
                                    title: "Industry Exposure",
                                    description:
                                        "Interact with experts, mentors and companies while exploring emerging technologies."
                                },
                                {
                                    icon: Gift,
                                    title: "Exciting Prizes",
                                    description:
                                        "Win attractive prizes and gain recognition for your innovation and technical excellence."
                                },
                                {
                                    icon: Users,
                                    title: "Professional Network",
                                    description:
                                        "Connect with innovators, founders and professionals from various technical domains."
                                },
                                {
                                    icon: GraduationCap,
                                    title: "Hands-on Learning",
                                    description:
                                        "Experience practical workshops, hackathons and engineering challenges."
                                },
                                {
                                    icon: Award,
                                    title: "Certificates",
                                    description:
                                        "Receive valuable certificates that strengthen your academic and professional profile."
                                },
                                {
                                    icon: Rocket,
                                    title: "Internship Access",
                                    description:
                                        "Discover internship opportunities through company collaborations and networking."
                                },
                                {
                                    icon: Brain,
                                    title: "Develop Skills",
                                    description:
                                        "Improve technical knowledge, teamwork, communication and leadership abilities."
                                }
                            ].map((item, index) => {

                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{
                                            opacity: 0,
                                            y: 25
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        viewport={{
                                            once: true
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.05
                                        }}
                                        whileHover={{
                                            backgroundColor:
                                                "rgba(255,255,255,0.025)"
                                        }}
                                        className={`
                                group relative p-8 md:p-9
                                transition-all duration-300
                                border-white/10

                                ${index % 4 !== 3
                                                ? "xl:border-r"
                                                : ""
                                            }

                                ${index < 4
                                                ? "xl:border-b"
                                                : ""
                                            }

                                ${index % 2 !== 1
                                                ? "md:border-r xl:border-r-0"
                                                : ""
                                            }

                                ${index < 6
                                                ? "md:border-b xl:border-b-0"
                                                : ""
                                            }
                            `}
                                    >

                                        {/* Hover glow */}
                                        <div
                                            className="
                                    absolute -right-16 -top-16
                                    h-40 w-40
                                    rounded-full
                                    bg-amber-400/10
                                    blur-[80px]
                                    opacity-0
                                    transition-opacity duration-300
                                    group-hover:opacity-100
                                "
                                        />

                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{
                                                scale: 1.08,
                                                rotate: 4
                                            }}
                                            transition={{
                                                duration: 0.2
                                            }}
                                            className="
                                    relative mb-7
                                    flex h-14 w-14
                                    items-center justify-center
                                    rounded-2xl
                                    border border-amber-400/20
                                    bg-linear-to-br
                                    from-amber-400/15
                                    to-transparent
                                "
                                        >
                                            <div className="absolute inset-2 rounded-xl bg-amber-400/10 blur-lg" />

                                            <Icon
                                                size={27}
                                                strokeWidth={1.8}
                                                className="relative text-amber-300"
                                            />
                                        </motion.div>

                                        {/* Number */}
                                        <span className="
                                absolute right-8 top-8
                                text-xs
                                font-medium
                                tracking-[0.2em]
                                text-white/15
                                transition-colors duration-300
                                group-hover:text-amber-300/30
                            ">
                                            0{index + 1}
                                        </span>

                                        {/* Content */}
                                        <h3 className="
                                text-xl
                                font-bold
                                leading-tight
                            ">
                                            {item.title}
                                        </h3>

                                        <p className="
                                mt-4
                                text-sm
                                leading-7
                                text-white/60
                            ">
                                            {item.description}
                                        </p>

                                        {/* Bottom accent */}
                                        <div className="
                                mt-7
                                h-px
                                w-8
                                bg-amber-400/50
                                transition-all
                                duration-300
                                group-hover:w-16
                            " />

                                    </motion.div>
                                );
                            })}

                        </div>
                    </motion.div>

                </div>
            </section>
            <section className="py-10">
                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        subtitle="Competition Flow"
                        title="Your Journey"
                    />

                    <div className="relative mt-20">

                        {/* Timeline */}
                        <div className="absolute left-7 top-0 bottom-0 w-px bg-linear-to-b from-amber-400/70 via-amber-400/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

                        {[
                            {
                                title: "Register",
                                description: "Choose your preferred competition and complete your registration.",
                                icon: UserPlus,
                            },
                            {
                                title: "Innovate",
                                description: "Collaborate with your team to build creative and impactful solutions.",
                                icon: Lightbulb,
                            },
                            {
                                title: "Present",
                                description: "Showcase your project before judges, mentors and industry experts.",
                                icon: Presentation,
                            },
                            {
                                title: "Win",
                                description: "Earn prizes, certificates, recognition and exciting opportunities.",
                                icon: Trophy,
                            },
                        ].map((item, index) => {

                            const Icon = item.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.35,
                                        delay: index * 0.07,
                                        ease: "easeOut",
                                    }}
                                    className="relative mb-14 flex items-center md:mb-20"
                                >

                                    {/* Desktop connector */}
                                    <div
                                        className={
                                            "absolute top-1/2 hidden h-px w-24 bg-linear-to-r from-amber-400/50 to-transparent md:block " +
                                            (isLeft ? "right-1/2" : "left-1/2 rotate-180")
                                        }
                                    />

                                    {/* Timeline icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.18 }}
                                        className="absolute left-7 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-amber-400/30 bg-black shadow-[0_0_25px_rgba(251,191,36,.15)] md:left-1/2 md:h-16 md:w-16"
                                    >
                                        <div className="absolute inset-2 rounded-full bg-amber-400/10 blur-md" />

                                        <Icon
                                            size={24}
                                            strokeWidth={1.8}
                                            className="relative text-amber-300"
                                        />
                                    </motion.div>

                                    {/* Card */}
                                    <motion.div
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.2 }}
                                        className={
                                            "group relative ml-16 w-[calc(100%-4rem)] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/25 hover:bg-white/[0.05] md:ml-0 md:w-[45%] " +
                                            (isLeft
                                                ? "md:mr-auto md:pr-12 md:text-right"
                                                : "md:ml-auto md:pl-12 md:text-left")
                                        }
                                    >

                                        {/* Hover glow */}
                                        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-400/10 blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                        {/* Step */}
                                        <span className="relative text-xs font-medium uppercase tracking-[0.3em] text-amber-300/50">
                                            Step 0{index + 1}
                                        </span>

                                        {/* Title */}
                                        <h3 className="relative mt-3 text-2xl font-bold text-white md:text-3xl">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="relative mt-4 text-sm leading-7 text-white/55 md:text-[15px]">
                                            {item.description}
                                        </p>

                                        {/* Accent */}
                                        <div
                                            className={
                                                "mt-6 h-px w-10 bg-amber-400/60 transition-all duration-300 group-hover:w-20 " +
                                                (isLeft ? "md:ml-auto" : "")
                                            }
                                        />

                                    </motion.div>

                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="border-t border-white/10"><CTA /></section>
        </main>)
}