"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="relative overflow-hidden py-32 border-t border-white/10">
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-162.5 w-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[180px]" />
                <div className="absolute right-20 top-20 h-56 w-56 rounded-full bg-amber-300/10 blur-[100px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,.08),transparent_60%)]" />
            </div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: .8 }} className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="rounded-[32px] border border-white/10 bg-white/4 backdrop-blur-2xl px-8 py-20 md:px-16 text-center overflow-hidden relative">
                    <p className="uppercase tracking-[0.45em] text-xs text-amber-300">TECHZEPHYR 2026</p>
                    <h2 className="mt-6 text-5xl md:text-7xl font-black leading-none bg-linear-to-b from-white via-zinc-300 to-zinc-700 bg-clip-text text-transparent">
                        Build.<br />Compete.<br />Innovate.
                    </h2>
                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/60">
                        Join hundreds of innovators, developers, designers, entrepreneurs and researchers for the flagship technology festival of IIT Bhubaneswar.
                    </p>
                    <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">
                        <Link href="/Register" className="rounded-xl bg-amber-400 px-10 py-4 text-black font-semibold uppercase tracking-[0.25em] transition-all
                            duration-300 hover:bg-amber-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(251,191,36,.45)]">
                            Register Now
                        </Link>
                        <Link href="/Sponsors" className="rounded-xl border border-white/15 px-10 py-4 uppercase tracking-[0.25em] transition-all duration-300
                            hover:border-amber-300 hover:bg-amber-400/10 hover:text-amber-300">
                            Become a Sponsor
                        </Link>
                    </div>
                    <div className="mt-14 flex justify-center gap-10 flex-wrap text-center">
                        <div>
                            <h3 className="text-3xl font-black text-amber-300">1000+</h3>
                            <p className="text-white/40 uppercase text-xs tracking-widest mt-2">Participants</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-amber-300">8</h3>
                            <p className="text-white/40 uppercase text-xs tracking-widest mt-2">Competitions</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-amber-300">₹3L+</h3>
                            <p className="text-white/40 uppercase text-xs tracking-widest mt-2">Prize Pool</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}