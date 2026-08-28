
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ExternalLink,
    Handshake,
    Sparkles,
    Building2,
    ArrowUpRight,
    ShieldCheck,
    Globe,
} from "lucide-react";

import Silk from "@/components/animated_bg/Silk.jsx";
import Navbar from "@/components/Navbar.jsx";
import SectionHeading from "@/components/SectionHeading";

export default function SponsorsPage() {
    /*
    ============================================================
    CURRENT SPONSORS
    ============================================================
    Replace the logo paths with your actual files from /public
    whenever you have them.
    */

    const sponsors = [
        {
            id: "goibibo",
            name: "Goibibo",
            tier: "1st Event Sponsor",
            tag: "TRAVEL PARTNER",
            category: "Travel & Technology",
            description:
                "Goibibo is one of India's leading digital travel platforms, offering travellers convenient access to flights, hotels, trains, buses and travel experiences through a technology-driven ecosystem.",
            contribution:
                "As the 1st Event Sponsor of TechZephyr 2026, Goibibo joins us in creating a stronger platform for students, innovators and technology enthusiasts. Their association reflects the growing connection between technology, mobility and the modern digital economy.",
            highlights: [
                "Digital travel platform",
                "Technology-driven services",
                "Travel & mobility ecosystem",
            ],
            logo: "/Goibibo.png",
            website: "https://www.goibibo.com/",
            accent: "amber",
        },

        {
            id: "fin-maverick",
            name: "Fin Maverick",
            tier: "2nd Event Sponsor",
            tag: "FINANCE PARTNER",
            category: "Finance & Markets",
            description:
                "Fin Maverick is a finance-focused platform dedicated to building financial awareness and developing a practical understanding of markets, investing and modern financial decision-making.",
            contribution:
                "As the 2nd Event Sponsor of TechZephyr 2026, Fin Maverick strengthens the festival's focus on finance, entrepreneurship and analytical thinking. Their partnership brings an industry-oriented perspective to students exploring the intersection of technology and financial innovation.",
            highlights: [
                "Finance & investment ecosystem",
                "Financial awareness",
                "Markets & analytical thinking",
            ],
            logo: "/Fin Maverick.jpeg",
            website: "https://www.finmaverick.com/",
            accent: "orange",
        },

        {
            id: "world-technocon",
            name: "World Technocon",
            tier: "Associate Sponsor",
            tag: "ASSOCIATE PARTNER",
            category: "Technology & Innovation",
            description:
                "World Technocon is a technology-oriented organisation focused on creating opportunities around technical knowledge, innovation and industry engagement.",
            contribution:
                "As an Associate Sponsor of TechZephyr 2026, World Technocon supports our vision of building meaningful connections between students, technology and industry. Their association contributes to an ecosystem where young innovators can learn, collaborate and explore emerging opportunities.",
            highlights: [
                "Technology & innovation",
                "Technical engagement",
                "Industry collaboration",
            ],
            logo: "/World Technocon.webp",
            website: "https://technocon.org/",
            accent: "amber",
        },
    ];

    /*
    ============================================================
    PAST SPONSORS
    ============================================================
    Add/remove names whenever required.
    */

    const pastSponsors = [
        {
            name: "GeeksforGeeks",
            logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/GeeksForGeeks_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        },
        {
            name: "Hostinger",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Hostinger_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        },
        {
            name: "AceInt",
            logo: "https://aceint-website.s3.ap-south-1.amazonaws.com/productlogo/combinePrimary.png",
        },
        {
            name: "Unstop",
            logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue-Large.png",
        },
        {
            name: "RedString",
            logo: "https://www.redstring.co.in/opengraph-image?b991850bcbebc296",
        },
        {
            name: "WorldQuant",
            logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WorldQuant_Text_Logo_2022.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        },
        {
            name: "Nakshatra",
            logo: "https://www.naxxatra.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fcommon%2Fnaxxatra-header-negative.25d71fc1baa36bd1f0b9d15f9e7a09f1.png&w=3840&q=75",
        },
        {
            name: "Zerodha",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zerodha_logo.svg/960px-Zerodha_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        },
        {
            name: "Wadhwani Foundation",
            logo: "https://wadhwanifoundation.org/wp-content/uploads/2023/10/Wadhwani-Foundation-Logo.png",
        },
        {
            name: "ISB",
            logo: "https://images.indianexpress.com/2024/11/Untitled-design-60.jpg",
        },
        {
            name: "StockGro",
            logo: "https://shop.stockgro.club/cdn/shop/files/Group_43782_280x.svg?v=1693126447",
        },
        {
            name: "EncodersPro",
            logo: "https://encoderspro.com/store/1/enpro_logo%20(1).png",
        },
        {
            name: "ISRO",
            logo: "https://i.pinimg.com/736x/53/90/cc/5390cc763267fcdf77044bb570805350.jpg",
        },
        {
            name: "Pathway",
            logo: "https://sg-imgs.dealroom.co/27f5be6a034528c54c59d7a1df317177.png",
        },
    ];

    const sponsorStats = [
        {
            value: "03",
            label: "Current Partners",
        },
        {
            value: "02",
            label: "Event Sponsors",
        },
        {
            value: "01",
            label: "Associate Sponsor",
        },
        {
            value: "10k+",
            label: 'Our Ecosystem'
        }
    ];

    return (
        <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
            {/* =========================================================
          BACKGROUND
      ========================================================= */}

            <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
                <Silk
                    speed={5}
                    scale={1.5}
                    color="#262626"
                    noiseIntensity={1.2}
                    rotation={0}
                />
            </div>

            <div className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-transparent via-black/20 to-black" />

            <div className="fixed left-1/4 top-20 z-0 h-96 w-96 rounded-full bg-amber-400/5 blur-[140px]" />

            {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-32">

                {/* =======================================================
            HERO
        ======================================================= */}

                <section className="flex min-h-[72vh] flex-col items-center justify-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <span className="h-px w-10 bg-linear-to-r from-transparent to-amber-400" />

                        <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-amber-300">
                            TechZephyr 2026 · Partnerships
                        </p>

                        <span className="h-px w-10 bg-linear-to-l from-transparent to-amber-400" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                        className="max-w-5xl text-5xl font-black tracking-tight sm:text-6xl md:text-8xl"
                    >
                        OUR
                        <span className="bg-linear-to-b from-white via-zinc-300 to-zinc-700 bg-clip-text text-transparent">
                            {" "}
                            SPONSORS
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.18 }}
                        className="mt-7 max-w-2xl text-sm leading-8 text-white/50 sm:text-base"
                    >
                        TechZephyr is powered by organisations that believe in innovation,
                        technology, entrepreneurship and the potential of the next
                        generation of innovators.
                    </motion.p>

                    {/* Hero badge */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.28 }}
                        className="mt-12 flex items-center gap-3 rounded-full border border-amber-400/20 bg-amber-400/5 px-5 py-2.5 backdrop-blur-xl"
                    >
                        <Handshake size={15} className="text-amber-300" />

                        <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/60">
                            Building Partnerships · Creating Impact
                        </span>
                    </motion.div>

                    {/* Hero stats */}

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.38 }}
                        className="mt-20 grid w-full max-w-3xl grid-cols-2 border border-white/10 bg-white/[0.025] backdrop-blur-xl md:grid-cols-4"
                    >
                        {sponsorStats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`p-6 ${index !== sponsorStats.length - 1
                                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                                    : ""
                                    }`}
                            >
                                <p className="text-3xl font-black text-amber-300">
                                    {stat.value}
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/35">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* =======================================================
            CURRENT SPONSORS
        ======================================================= */}

                <section className="border-t border-white/10 pt-20">

                    <SectionHeading
                        subtitle="TechZephyr 2026"
                        title="Our Partners"
                    />

                    <div className="mt-4 space-y-8">

                        {sponsors.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.id}
                                initial={{
                                    opacity: 0,
                                    y: 45,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.08,
                                }}
                                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] backdrop-blur-xl"
                            >

                                {/* Ambient background */}

                                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/5 blur-[110px] transition-all duration-700 group-hover:bg-amber-400/10" />

                                <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-400/5 blur-[110px]" />

                                {/* Terminal header */}

                                <div className="flex items-center justify-between border-b border-white/10 bg-zinc-950/60 px-5 py-3 font-mono">

                                    <div className="flex items-center gap-2">

                                        <div className="flex gap-1.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                                            <div className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                                        </div>

                                        <span className="ml-3 text-[9px] uppercase tracking-[0.25em] text-white/30">
                                            sponsor_{String(index + 1).padStart(2, "0")}.partner
                                        </span>

                                    </div>

                                    <span className="text-[9px] uppercase tracking-widest text-amber-400/60">
                                        {sponsor.tier}
                                    </span>

                                </div>


                                {/* Main sponsor content */}

                                <div className="grid lg:grid-cols-[0.8fr_1.2fr]">


                                    {/* =================================================
              LOGO SIDE
          ================================================= */}

                                    <div className="relative flex min-h-72 items-center justify-center border-b border-white/10 p-10 lg:border-b-0 lg:border-r">

                                        <div className="absolute inset-0 bg-linear-to-br from-amber-400/[0.04] via-transparent to-transparent" />

                                        <motion.div
                                            whileHover={{
                                                scale: 1.05,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                            className="relative flex h-56 w-56 items-center justify-center rounded-full border border-white/10 bg-black/50 shadow-[0_0_70px_rgba(245,158,11,.08)]"
                                        >

                                            <div className="absolute inset-5 rounded-full bg-amber-400/5 blur-2xl" />

                                            <img
                                                src={sponsor.logo}
                                                alt={`${sponsor.name} logo`}
                                                className="relative z-10 max-h-32 max-w-40 object-contain"
                                            />

                                        </motion.div>


                                        {/* Partner number */}

                                        <div className="absolute bottom-6 left-7 flex items-center gap-3">

                                            <span className="text-[10px] font-mono tracking-[0.3em] text-amber-300">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="h-px w-12 bg-amber-400/30" />

                                            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                                                Official Partner
                                            </span>

                                        </div>

                                    </div>


                                    {/* =================================================
              DETAILS SIDE
          ================================================= */}

                                    <div className="relative p-8 sm:p-10 lg:p-12">

                                        {/* Header */}

                                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                                            <div>

                                                <p className="mb-3 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-amber-300">

                                                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,.8)]" />

                                                    {sponsor.tag}

                                                </p>

                                                <h3 className="text-4xl font-black tracking-tight sm:text-5xl">
                                                    {sponsor.name}
                                                </h3>

                                                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/30">
                                                    {sponsor.category}
                                                </p>

                                            </div>


                                            <div className="w-fit rounded-md border border-amber-400/20 bg-amber-400/5 px-3 py-1.5">

                                                <span className="text-[9px] font-mono uppercase tracking-wider text-amber-300">
                                                    {sponsor.tier}
                                                </span>

                                            </div>

                                        </div>


                                        {/* Divider */}

                                        <div className="my-8 h-px bg-linear-to-r from-amber-400/50 via-white/10 to-transparent" />


                                        {/* About */}

                                        <div>

                                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
                                                About the Partner
                                            </p>

                                            <p className="max-w-2xl text-sm leading-8 text-white/60">
                                                {sponsor.description}
                                            </p>

                                        </div>


                                        {/* Partnership Impact */}

                                        <div className="mt-8 rounded-xl border border-white/5 bg-white/[0.025] p-5">

                                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-300">
                                                Partnership Impact
                                            </p>

                                            <p className="mt-3 text-sm leading-7 text-white/50">
                                                {sponsor.contribution}
                                            </p>

                                        </div>


                                        {/* Highlights */}

                                        <div className="mt-8">

                                            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
                                                Partner Focus
                                            </p>

                                            <div className="flex flex-wrap gap-2">

                                                {sponsor.highlights.map((highlight) => (
                                                    <span
                                                        key={highlight}
                                                        className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-white/50 transition-colors duration-300 group-hover:border-amber-400/10 group-hover:text-white/60"
                                                    >
                                                        {highlight}
                                                    </span>
                                                ))}

                                            </div>

                                        </div>


                                        {/* Bottom CTA */}

                                        <div className="mt-8 flex flex-wrap items-center gap-4">

                                            <a
                                                href={sponsor.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-amber-300 hover:shadow-[0_0_25px_rgba(251,191,36,.2)]"
                                            >
                                                Visit Website
                                                <span className="text-sm">↗</span>
                                            </a>

                                            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                                                TechZephyr 2026 Partner
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </motion.div>
                        ))}

                    </div>

                </section>

                {/* =======================================================
            WHY PARTNERS MATTER
        ======================================================= */}

                <section className="mt-28 border-t border-white/10 pt-20">

                    <SectionHeading
                        subtitle="Beyond Sponsorship"
                        title="Partnerships That Create Impact"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025] backdrop-blur-xl"
                    >

                        {/* Ambient glow */}
                        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-amber-400/5 blur-[120px]" />
                        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-amber-400/5 blur-[120px]" />

                        <div className="relative">

                            {/* Card Header */}
                            <div className="border-b border-white/10 bg-zinc-950/30 px-8 py-7 sm:px-10">

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                                    <div>
                                        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-amber-300">
                                            Our Partnership Philosophy
                                        </p>

                                        <p className="mt-2 max-w-2xl text-sm leading-7 text-white/40">
                                            Our sponsors and collaborators are more than supporters.
                                            They help us create opportunities, connect students with
                                            industry and inspire the next generation of innovators.
                                        </p>
                                    </div>

                                    <span className="w-fit rounded-md border border-amber-400/20 bg-amber-400/5 px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-amber-300">
                                        IMPACT / 03
                                    </span>

                                </div>

                            </div>


                            {/* Impact Items */}
                            <div className="grid md:grid-cols-3">

                                {[
                                    {
                                        number: "01",
                                        title: "Enable",
                                        text:
                                            "Our partners help us create larger opportunities for students through competitions, workshops and technical experiences.",
                                    },
                                    {
                                        number: "02",
                                        title: "Connect",
                                        text:
                                            "Industry partnerships bring students closer to professionals, organisations, technologies and real-world challenges.",
                                    },
                                    {
                                        number: "03",
                                        title: "Inspire",
                                        text:
                                            "Strong collaborations encourage students to transform technical knowledge into ideas, products and meaningful impact.",
                                    },
                                ].map((item, index) => (

                                    <motion.div
                                        key={item.number}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.45,
                                            delay: index * 0.1,
                                        }}
                                        className={`group/item relative p-8 sm:p-10 ${index !== 2
                                            ? "border-b border-white/10 md:border-b-0 md:border-r"
                                            : ""
                                            }`}
                                    >

                                        {/* Number */}
                                        <div className="flex items-center gap-4">

                                            <span className="text-xs font-mono tracking-[0.3em] text-amber-300">
                                                {item.number}
                                            </span>

                                            <span className="h-px w-12 bg-linear-to-r from-amber-400/50 to-transparent transition-all duration-300 group-hover/item:w-20" />

                                        </div>


                                        {/* Title */}
                                        <h3 className="mt-10 text-2xl font-bold tracking-tight text-white">
                                            {item.title}
                                        </h3>


                                        {/* Description */}
                                        <p className="mt-4 text-sm leading-7 text-white/45">
                                            {item.text}
                                        </p>


                                        {/* Bottom Accent */}
                                        <div className="mt-8 h-px w-10 bg-amber-400/40 transition-all duration-300 group-hover/item:w-24" />

                                    </motion.div>

                                ))}

                            </div>


                            {/* Bottom Label */}
                            <div className="border-t border-white/5 bg-black/20 px-8 py-5 sm:px-10">

                                <p className="text-[9px] uppercase tracking-[0.4em] text-white/25">
                                    Science • Technology • Innovation • Collaboration
                                </p>

                            </div>

                        </div>

                    </motion.div>

                </section>

                {/* =======================================================
            PAST SPONSORS
        ======================================================= */}

                <section className="mt-28 border-t border-white/10 pt-20">

                    <SectionHeading
                        subtitle="Legacy & Archives"
                        title="Past Sponsors & Collaborators"
                    />

                    <motion.div
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
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl sm:p-10"
                    >

                        {/* Ambient background */}

                        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/5 blur-[110px]" />

                        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-400/5 blur-[100px]" />

                        <div className="relative">

                            {/* Header */}

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                                <div>

                                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-amber-300">
                                        Our Legacy
                                    </p>

                                    <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                                        Previous Partners
                                    </h3>

                                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/40">
                                        Organisations and communities that have supported TechZephyr
                                        throughout its journey and contributed to the growth of our
                                        technical ecosystem.
                                    </p>

                                </div>

                                <div className="w-fit shrink-0 rounded-md border border-white/10 bg-white/5 px-3 py-1.5">
                                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/35">
                                        ARCHIVE / PARTNERS
                                    </span>
                                </div>

                            </div>


                            {/* Divider */}

                            <div className="my-8 h-px bg-linear-to-r from-amber-400/30 via-white/10 to-transparent" />


                            {/* Sponsor Grid */}

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

                                {pastSponsors.map((sponsor, index) => (
                                    <motion.div
                                        key={sponsor.name}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            delay: index * 0.04,
                                        }}
                                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/[0.035]"
                                    >

                                        {/* Card glow */}

                                        <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-amber-400/5 blur-2xl" />

                                        {/* Logo */}

                                        <div className="relative flex h-24 items-center justify-center rounded-xl border border-white/5 bg-black/30 p-4">

                                            <img
                                                src={sponsor.logo}
                                                alt={`${sponsor.name} logo`}
                                                className="max-h-16 max-w-full object-contain"
                                            />

                                        </div>

                                        {/* Name */}

                                        <div className="mt-4 text-center">

                                            <p className="text-[11px] font-medium tracking-wide text-white/70">
                                                {sponsor.name}
                                            </p>

                                        </div>

                                    </motion.div>
                                ))}

                            </div>


                            {/* Bottom label */}

                            <div className="mt-8 flex items-center gap-4">

                                <div className="h-px flex-1 bg-linear-to-r from-amber-400/20 to-transparent" />

                                <p className="shrink-0 text-[9px] uppercase tracking-[0.3em] text-white/20">
                                    TechZephyr · Previous Editions
                                </p>

                                <div className="h-px flex-1 bg-linear-to-l from-amber-400/20 to-transparent" />

                            </div>

                        </div>

                    </motion.div>

                </section>

                {/* =======================================================
            BECOME A PARTNER
        ======================================================= */}

                <section className="mt-28">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 35,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="relative overflow-hidden rounded-[35px] border border-amber-400/20 bg-linear-to-br from-amber-400/[0.08] via-white/[0.025] to-transparent p-8 sm:p-12 lg:p-16"
                    >

                        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />

                        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

                            <div>

                                <p className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.35em] text-amber-300">

                                    <Handshake size={14} />

                                    Partner With TechZephyr
                                </p>

                                <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                                    Build the next generation of innovators with us.
                                </h2>

                                <p className="mt-6 max-w-2xl text-sm leading-8 text-white/50">
                                    Partner with TechZephyr to connect your organisation with
                                    talented students, emerging technologies, technical
                                    communities and a growing innovation ecosystem at IIT
                                    Bhubaneswar.
                                </p>

                            </div>

                            <a
                                href="/Contact"
                                className="group inline-flex w-fit items-center justify-center gap-3 rounded-xl bg-amber-400 px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-amber-300 hover:shadow-[0_0_35px_rgba(251,191,36,.2)]"
                            >
                                Become a Partner

                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>

                        </div>

                        <div className="relative mt-10 h-px bg-linear-to-r from-amber-400/40 via-white/10 to-transparent" />

                        <div className="relative mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">

                            <p className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                                IIT Bhubaneswar
                            </p>

                            <span className="h-1 w-1 rounded-full bg-amber-400/40" />

                            <p className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                                Science & Technology Council
                            </p>

                            <span className="h-1 w-1 rounded-full bg-amber-400/40" />

                            <p className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                                TechZephyr 2026
                            </p>

                        </div>

                    </motion.div>

                </section>

            </div>

            <Navbar />
        </main>
    );
}