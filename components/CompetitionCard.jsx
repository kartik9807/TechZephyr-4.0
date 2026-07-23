"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CompetitionCard({ number, title, description, tag, slug }) {
    return (
        <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02, }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-500">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_60%)]" />
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/20 transition-all duration-500" />
            <div className="relative p-8 flex flex-col h-full">
                <span className="text-6xl font-black text-white/10">{number}</span>
                <div className="mt-3">
                    <span className="rounded-full border border-white/20 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-white/60">
                        {tag}
                    </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white leading-tight">
                    {title}
                </h3>
                <p className="mt-5 text-white/60 leading-7 text-sm flex-1">
                    {description}
                </p>
                <div className="mt-8 flex items-center justify-between">
                    <Link href={`/Competitions/${slug}`} className="uppercase tracking-[0.25em] text-xs text-white/40 hover:text-white transition">
                        Explore
                    </Link>
                    <div className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-black">
                        <Link href={`/Competitions/${slug}`}><ArrowUpRight size={18} /></Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}