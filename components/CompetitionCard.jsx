"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export default function CompetitionCard({ number, title, description, tag, slug, bgImage, image }) {
    const cardBg = bgImage || image;
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/90 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/45 hover:shadow-xl dark:border-white/10 dark:bg-zinc-950/85 dark:hover:border-amber-400/35 dark:hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
        >
            {/* Thematic Domain Background Image */}
            {cardBg && (
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <img
                        src={cardBg}
                        alt={`${title} domain background`}
                        className="h-full w-full object-cover object-center opacity-35 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-50 dark:opacity-40 dark:group-hover:opacity-55"
                    />
                    {/* Theme adaptive overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/75 to-background/30 dark:from-zinc-950 dark:via-zinc-950/70 dark:to-black/30" />
                </div>
            )}

            {/* Glowing top line & subtle ambient glow */}
            <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-transparent via-amber-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-400/5 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pointer-events-none" />

            {/* Content Body */}
            <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div>
                    <div className="flex items-start justify-between gap-3">
                        <span className="font-mono text-5xl sm:text-6xl font-black text-amber-500/25 dark:text-amber-400/20 transition-colors duration-300 group-hover:text-amber-500/40 dark:group-hover:text-amber-400/30">
                            {number}
                        </span>
                        <span className="rounded-md border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-300 backdrop-blur-xs">
                            {tag}
                        </span>
                    </div>

                    <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-amber-500 dark:group-hover:text-amber-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                        {title}
                    </h2>

                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {description}
                    </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                        href={`/Competitions/${slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-300 transition-all duration-300 hover:text-amber-500 dark:hover:text-amber-200 group-hover:text-amber-500 dark:group-hover:text-amber-200"
                    >
                        <span>Explore Competition</span>
                        <ArrowUpRight
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            size={16}
                        />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

