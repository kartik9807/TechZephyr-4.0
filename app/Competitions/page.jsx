"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Silk from "@/components/animated_bg/Silk";
import SectionHeading from "@/components/SectionHeading";
import CompetitionCard from "@/components/CompetitionCard";
import CTA from "@/components/CTA";
import { competitions } from "@/data/competitions";
import { Trophy, BriefcaseBusiness, Gift, Users, GraduationCap, Award, Rocket, Brain, UserPlus, Lightbulb, Presentation, } from "lucide-react";

export default function Competitions() {
    return (
        <main className="bg-black text-white overflow-hidden">
            <section className="relative min-h-[78vh] overflow-hidden flex items-center">
                <div className="absolute inset-0">
                    <Silk speed={5} scale={1} color="#262626" noiseIntensity={1.2} rotation={0} />
                </div>
                <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-amber-400/10 blur-[150px]" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
                    <div className="grid lg:grid-cols-2 items-center gap-10">
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
                            <p className=" uppercase tracking-[0.45em] text-xs text-amber-300 mb-5">TECHZEPHYR 2026</p>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight bg-linear-to-b from-white via-zinc-300 to-zinc-700 bg-clip-text text-transparent">
                                COMPETE.
                            </h1>
                            <h2 className="mt-5 text-2xl md:text-4xl font-semibold">Challenge Ideas.<br />Build Solutions.</h2>
                            <p className="mt-8 max-w-2xl text-lg text-white/60 leading-9">
                                Explore hackathons, programming contests, robotics competitions, finance challenges, astronomy events and much more.
                            </p>
                            <div className="mt-12 flex gap-5 flex-wrap">
                                <Link href="/Register" className="rounded-xl bg-amber-400 px-8 py-4 text-black font-semibold uppercase hover:bg-amber-300 transition">
                                    Register
                                </Link>
                                <Link href="/AboutUs" className="rounded-xl border border-white/10 px-8 py-4 uppercase hover:border-amber-400 hover:text-amber-300 transition">
                                    About
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative hidden lg:flex justify-center items-center h-125">
                            <div className="absolute h-105 w-105 rounded-full bg-amber-400/20 blur-[130px]" />
                            <div className="absolute h-105 w-105 rounded-full border border-white/10" />
                            {
                                [
                                    {
                                        name: "WebnD",
                                        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84AnGJxBOuQTsTX3M-Oh1TNyJ83PRIhDDMJ7zotDSQQ&s=10'
                                    },
                                    {
                                        name: "RISC",
                                        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DB0dfde0pvVnGTQT_uWctgvIV5zYB8UeO5-F2ZSBL0wxE2lFWIDI0IU&s=10'
                                    },
                                    {
                                        name: "FEBS",
                                        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSTMSEkGgorngP2gPYNeJsPNHOJH_RAoYw38WUHWfTQ&s=10'
                                    },
                                    {
                                        name: "Nakshatra",
                                        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4wTehWaf_p7hMbvcCVAGDtvXfQmhTk_tcMconRCfsOLCqwqSivBsPTA&s=10'
                                    },
                                    {
                                        name: "Neuromancers",
                                        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMbjm-4TrkjlOX3icE7eAmVhez756S2faRmXTvJGekQ&s=10'
                                    }

                                ].map((society, index) => {
                                    const positions = [
                                        "top-5 left-1/2 -translate-x-1/2",
                                        "top-1/3 right-0",
                                        "bottom-10 right-16",
                                        "bottom-10 left-16",
                                        "top-1/3 left-0"
                                    ];
                                    return (
                                        <motion.div key={society.name} animate={{ y: [0, -8, 0] }} transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                                            className={`absolute ${positions[index]} h-20 w-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,.12)]`}>
                                            <img src={society.logo} alt={society.name} className=" h-12 w-12 object-contain" />
                                        </motion.div>
                                    )
                                })
                            }
                            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }}
                                className=" relative z-20 h-48 w-48 rounded-full border border-amber-400/30 bg-black/40 backdrop-blur-xl flex items-center justify-center shadow-[0_0_90px_rgba(251,191,36,.35)]">
                                <img src="/stc.jpg" alt="STC" className=" h-32 w-32 rounded-full object-contain" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading subtitle="Events & Challenges" title="Explore Competitions" />
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {competitions.map((competition, index) => (
                            <CompetitionCard key={index} number={competition.number} tag={competition.tag} title={competition.title} description={competition.shortDescription} slug={competition.slug} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-32 border-t border-white/10">
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}
                        className="relative overflow-hidden rounded-[45px] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-10 md:p-20">
                        <div className="absolute -top-28 -right-24 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />
                        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-white/5 blur-[120px]" />
                        <div className="absolute right-14 top-1/2 -translate-y-1/2 hidden lg:block h-85 w-85 rounded-full bg-amber-400/20 blur-[90px] pointer-events-none" />
                        <motion.div initial={{ scale: 2.3, opacity: 0, filter: "blur(16px)" }} whileInView={{ scale: 1, opacity: .16, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}
                            className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
                            <img src="/logo.jpeg" alt="TechZephyr" className=" w-82.5 h-82.5 rounded-full object-cover select-none" />
                        </motion.div>
                        <div className="relative z-10 max-w-3xl">
                            <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .55, duration: .55 }}
                                viewport={{ once: true }} className="uppercase tracking-[0.4em] text-xs text-white/40">
                                Flagship Challenge
                            </motion.p>
                            <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .72, duration: .6 }}
                                viewport={{ once: true }} className="mt-6 text-4xl md:text-6xl font-bold">
                                Innovation Without Limits
                            </motion.h2>
                            <motion.p initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .9, duration: .6 }}
                                viewport={{ once: true }} className="mt-8 text-lg leading-9 text-white/60">
                                TechZephyr competitions are designed to provide participants with opportunities to transform ideas into impactful
                                solutions while competing with some of the brightest minds across institutes.
                            </motion.p>
                            <div className="mt-12 grid sm:grid-cols-3 gap-6">
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
                                    <motion.div key={item.label} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 + index * .15, duration: .5 }}
                                        viewport={{ once: true }} whileHover={{ y: -6, borderColor: "rgba(251,191,36,.35)" }}
                                        className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md p-6 transition-all duration-500">
                                        <h3 className="text-4xl font-black">{item.number}</h3>
                                        <div className="mt-4 h-px w-12 bg-amber-400/60" />
                                        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/45">{item.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="py-32 border-t border-white/10 overflow-hidden">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading subtitle="Experience" title="Why You Should Join" />
                    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {[
                            {
                                icon: Trophy,
                                title: "Compete Nationally",
                                description: "Challenge yourself against talented participants from institutes across the country."
                            },
                            {
                                icon: BriefcaseBusiness,
                                title: "Industry Exposure",
                                description: "Interact with experts, mentors and companies while exploring emerging technologies."
                            },
                            {
                                icon: Gift,
                                title: "Exciting Prizes",
                                description: "Win attractive prizes and gain recognition for your innovation and technical excellence."
                            },
                            {
                                icon: Users,
                                title: "Professional Network",
                                description: "Connect with innovators, founders and professionals from various technical domains."
                            },
                            {
                                icon: GraduationCap,
                                title: "Hands-on Learning",
                                description: "Experience practical workshops, hackathons and engineering challenges."
                            },
                            {
                                icon: Award,
                                title: "Certificates",
                                description: "Receive valuable certificates that strengthen your academic and professional profile."
                            },
                            {
                                icon: Rocket,
                                title: "Internship Access",
                                description: "Discover internship opportunities through company collaborations and networking."
                            },
                            {
                                icon: Brain,
                                title: "Develop Skills",
                                description: "Improve technical knowledge, teamwork, communication and leadership abilities."
                            }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div key={item.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, delay: index * .08 }} whileHover={{ y: -10 }}
                                    className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-8 transition-all duration-500 hover:border-amber-400/30 hover:shadow-[0_0_40px_rgba(245,158,11,.12)]">
                                    <div className=" absolute -right-12 -top-12 h-44 w-44 rounded-full bg-amber-400/10 blur-[90px] opacity-0 transition-all duration-700 group-hover:opacity-100" />
                                    <div className=" relative mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-amber-400/20 bg-linear-to-br from-amber-400/15 to-transparent transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                        <div className="absolute inset-2 rounded-full bg-amber-400/10 blur-xl" />
                                        <Icon size={34} strokeWidth={1.8} className="relative text-amber-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold leading-tight">{item.title}</h3>
                                    <p className=" mt-5 leading-8 text-white/60">{item.description}</p>
                                    <div className="mt-10 h-px w-0 bg-linear-to-r from-amber-400 to-transparent transition-all duration-700 group-hover:w-full" />
                                    <div className="absolute right-6 bottom-6 h-2 w-2 rounded-full bg-amber-300/70 opacity-0 transition duration-500 group-hover:opacity-100" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading subtitle="Competition Flow" title="Your Journey" />
                    <div className="relative mt-24">
                        <div className="absolute left-8 md:left-1/2 top-0 h-full w-px translate-x-0 md:-translate-x-1/2 bg-linear-to-b from-amber-400/70 via-white/10 to-transparent" />
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
                            }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: index * .18 }} viewport={{ once: true }}
                                    className={`relative flex items-center mb-16 md:mb-20 justify-start md:${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                                    <div className={`hidden md:block absolute top-1/2 h-px bg-linear-to-r from-amber-400/60 to-white/10 ${index % 2 === 0
                                        ? "right-1/2 w-28" : "left-1/2 w-28"}`} />
                                    <div className="absolute left-8 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-20 h-14 w-14 md:h-16 md:w-16 rounded-full border border-amber-400/40 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,.25)]">
                                        <Icon size={24} className="text-amber-300" />
                                    </div>
                                    <motion.div whileHover={{ y: -6, borderColor: "rgba(251,191,36,.35)" }}
                                        className={`w-full rounded-3xl border border-white/10bg-white/[0.035] backdrop-blur-xl p-6 md:p-8 transition-all duration-500 hover:border-amber-400/30 hover:-translate-y-1 ml-24 md:ml-0 md:max-w-md
                                            ${index % 2 === 0 ? "md:mr-auto md:text-right md:pr-16" : "md:ml-auto md:text-left md:pl-16"}`}>
                                        <h3 className="text-3xl font-bold">{item.title}</h3>
                                        <p className="mt-5 leading-8 text-white/60">{item.description}</p>
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