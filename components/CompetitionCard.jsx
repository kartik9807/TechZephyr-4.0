"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CompetitionCard({ number, title, description, tag, slug, }) {
    return (
        <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}
            whileHover={{ y: -10, }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl">
            <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transitionduration-500" />
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
            <div className="relative p-8">
                <div className="flex justify-between items-start">
                    <span className="text-6xl font-black text-white/10">{number}</span>
                    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[10px] uppercase tracking-[.3em] text-amber-300">
                        {tag}
                    </span>
                </div>
                <h2 className="mt-8 text-3xl font-bold">{title}</h2>
                <p className="mt-5 leading-8 text-white/60">{description}</p>
                <Link href={`/Competitions/${slug}`} className="mt-10 inline-flex items-center gap-3 text-amber-300 uppercase tracking-[.25em] text-sm">
                    Explore
                    <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
                </Link>
            </div>
        </motion.div>
    );
}