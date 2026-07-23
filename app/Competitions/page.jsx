"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Silk from "@/components/animated_bg/Silk";
import SectionHeading from "@/components/SectionHeading";
import CompetitionCard from "@/components/CompetitionCard";
import CTA from "@/components/CTA";
import { competitions } from "@/data/competitions";

export default function Competitions() {
    return (
        <main className="bg-black text-white overflow-hidden">
            <section className="relative min-h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <Silk speed={5} scale={1} color="#262626" noiseIntensity={1.2} rotation={0} />
                </div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black" />
                <div className="relative z-10 flex min-h-screen items-center">
                    <div className="mx-auto max-w-7xl px-6 w-full">
                        <motion.div initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="max-w-5xl">
                            <p className="uppercase tracking-[0.45em] text-xs text-white/40 mb-6"> TechZephyr 2026</p>
                            <h1 className="landing-heading text-6xl md:text-8xl lg:text-[9rem] bg-clip-text text-transparent bg-linear-to-b from-zinc-300 via-zinc-500 to-black">COMPETE</h1>
                            <h2 className="mt-6 text-3xl md:text-5xl font-semibold">Challenge. Create. Conquer.</h2>
                            <p className="mt-8 max-w-3xl text-lg leading-9 text-white/60">
                                Explore a diverse lineup of competitions designed to challenge creativity, technical excellence and
                                problem-solving skills across multiple domains.
                            </p>
                            <div className="mt-12 flex flex-wrap gap-5">
                                <Link href="/Register"
                                    className="rounded-full bg-white px-9 py-4 text-black text-sm uppercase tracking-[0.25em] font-semibold hover:bg-zinc-300 transition">
                                    Register Now
                                </Link>
                                <Link href="/AboutUs"
                                    className="rounded-full border border-white/20 px-9 py-4 text-sm uppercase tracking-[0.25em] hover:bg-white hover:text-black transition">
                                    About TechZephyr
                                </Link>
                            </div>
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
                        className="rounded-[45px] border border-white/10 bg-white/3 backdrop-blur-xl p-10 md:p-20 overflow-hidden relative">
                        <div className="absolute right-10 top-10 text-[12rem] font-black text-white/3">TZ</div>
                        <div className="relative z-10 max-w-3xl">
                            <p className="uppercase tracking-[0.4em] text-xs text-white/40">Flagship Challenge</p>
                            <h2 className="mt-6 text-4xl md:text-6xl font-bold">Innovation Without Limits</h2>
                            <p className="mt-8 text-lg leading-9 text-white/60">
                                TechZephyr competitions are designed to provide participants with opportunities to transform ideas
                                into impactful solutions while competing with some of the brightest minds across institutes.
                            </p>
                            <div className="mt-10 grid sm:grid-cols-3 gap-6">
                                <div className="border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-3xl font-bold">8</h3>
                                    <p className="mt-2 text-white/50 text-sm uppercase tracking-widest">Competitions</p>
                                </div>
                                <div className="border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-3xl font-bold">1000+</h3>
                                    <p className="mt-2 text-white/50 text-sm uppercase tracking-widest">Participants</p>
                                </div>
                                <div className="border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-3xl font-bold">∞</h3>
                                    <p className="mt-2 text-white/50 text-sm uppercase tracking-widest">Ideas</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="py-32 border-t border-white/10">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading subtitle="Experience" title="Why Participate?" />
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {[{
                            title: "Learn",
                            description: "Gain practical knowledge by solving real-world problems and working with emerging technologies."
                        },
                        {
                            title: "Compete",
                            description: "Challenge yourself against talented innovators and developers from different institutes."
                        },
                        {
                            title: "Collaborate",
                            description: "Connect with like-minded creators, mentors and industry professionals."
                        },
                        {
                            title: "Build",
                            description: "Transform your ideas into working solutions through hackathons and technical challenges."
                        }].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ duration: .6, delay: index * .1 }} whileHover={{ y: -10 }}
                                className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8 transition-all duration-500">
                                <div className="text-5xl font-black text-white/10">0{index + 1}</div>
                                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                                <p className="mt-4 leading-8 text-white/60">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <SectionHeading subtitle="Competition Flow" title="Your Journey" />
                    <div className="mt-16 space-y-8">
                        {[
                            {
                                step: "01",
                                title: "Register",
                                description: "Choose your preferred competition and register your team."
                            },
                            {
                                step: "02",
                                title: "Innovate",
                                description: "Work on ideas, prototypes and solutions with your team."
                            },
                            {
                                step: "03",
                                title: "Present",
                                description: "Showcase your work before judges and industry experts."
                            },
                            {
                                step: "04",
                                title: "Win",
                                description: "Earn recognition, rewards and opportunities."
                            }].map((item, index) => (
                                <motion.div key={item.step} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                    transition={{ duration: .6, delay: index * .15 }} className="flex gap-8 items-start">
                                    <div className="text-4xl font-black text-white/20">{item.step}</div>
                                    <div className="flex-1 rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8">
                                        <h3 className="text-3xl font-bold">{item.title}</h3>
                                        <p className="mt-4 text-white/60 leading-8">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </section>
            <section className="border-t border-white/10"><CTA /></section>
        </main>)
}