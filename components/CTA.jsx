"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="relative overflow-hidden py-32">
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[130px]" />
                <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
            </div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}
                className="relative z-10 mx-auto max-w-6xl px-6 text-center">
                <p className="uppercase tracking-[0.4em] text-xs text-white/40">TechZephyr 2026</p>
                <h2 className="landing-heading mt-5 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-300 via-zinc-500 to-black">
                    Build.<br />Compete.<br />Innovate.
                </h2>
                <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/60">
                    Join hundreds of innovators, developers, designers,
                    entrepreneurs and problem solvers for the flagship
                    technology festival of IIT Bhubaneswar.
                </p>
                <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
                    <Link href="/Register"
                        className="rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition-all duration-500 hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-[0_0_35px_rgba(255,255,255,.3)]">
                        Register Now
                    </Link>
                    <Link href="/Sponsors"
                        className="rounded-full border border-white/20 px-10 py-4 text-sm uppercase tracking-[0.25em] text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-black">
                        Become a Sponsor
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}