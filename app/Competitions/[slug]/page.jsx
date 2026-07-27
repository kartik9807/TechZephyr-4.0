"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Silk from "@/components/animated_bg/Silk";
import { competitions } from "@/data/competitions";

export default function CompetitionDetails() {
    const { slug } = useParams();
    const competition = competitions.find(
        (item) => item.slug === slug
    );
    if (!competition) return null;
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {
                            [
                                {
                                    title: "Prize Pool",
                                    value: competition.prize
                                },
                                {
                                    title: "Duration",
                                    value: competition.duration
                                },
                                {
                                    title: "Team Size",
                                    value: competition.teamSize
                                },
                                {
                                    title: "Difficulty",
                                    value: competition.difficulty
                                }
                            ].map((item, index) => (
                                <div key={index} className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-xl p-7 hover:border-amber-400/30 transition">
                                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">{item.title}</p>
                                    <h3 className="mt-5 text-2xl font-bold">{item.value}</h3>
                                </div>
                            ))
                        }
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