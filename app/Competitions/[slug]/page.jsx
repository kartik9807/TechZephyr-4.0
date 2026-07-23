"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Silk from "@/components/animated_bg/Silk";
import Link from "next/link";
import { competitions } from "@/data/competitions";

export default function CompetitionDetails() {
    const { slug } = useParams();
    const competition = competitions.find((item) => item.slug === slug);
    if (!competition) return null;

    return (
        <main className="bg-black text-white min-h-screen overflow-hidden">
            <section className="relative min-h-screen">
                <div className="absolute inset-0">
                    <Silk speed={5} scale={1} color="#262626" noiseIntensity={1.2} rotation={0} />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
                        <p className="uppercase tracking-[0.4em] text-xs text-white/40">{competition.tag}</p>
                        <h1 className="landing-heading mt-6 text-6xl md:text-8xl bg-linear-to-b from-zinc-300 to-black bg-clip-text text-transparent">
                            {competition.title}
                        </h1>
                        <p className="mt-8 max-w-3xl text-lg text-white/60 leading-9">{competition.description}</p>
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div className="border border-white/10 rounded-3xl p-6 bg-white/5">
                                Domain
                                <h3 className="text-xl font-bold mt-3">{competition.domain}</h3>
                            </div>
                            <div className="border border-white/10 rounded-3xl p-6 bg-white/5">
                                Mode
                                <h3 className="text-xl font-bold mt-3">{competition.mode}</h3>
                            </div>
                            <div className="border border-white/10 rounded-3xl p-6 bg-white/5">
                                Team
                                <h3 className="text-xl font-bold mt-3">{competition.teamSize}</h3>
                            </div>
                        </div>
                        <section className="mt-20">
                            <h2 className="text-4xl font-bold">What To Expect</h2>
                            <div className="mt-8 grid md:grid-cols-2 gap-5">
                                {competition.details.map((item, index) => (
                                    <div key={index} className="border border-white/10 rounded-2xl p-6 bg-white/5">{item}</div>
                                ))
                                }
                            </div>
                        </section>
                        <Link href="/Competitions"
                            className="inline-block mt-16 rounded-full bg-white text-black px-8 py-4 uppercase tracking-widest text-sm">
                            Back To Competitions
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}