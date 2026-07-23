"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, center = true, }) {
    return (
        <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", }}
            className={`mb-14 ${center ? "text-center" : "text-left"}`}>
            <p className="uppercase tracking-[0.35em] text-xs text-white/40 mb-4">{subtitle}</p>
            <h2 className="landing-heading text-4xl sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-linear-to-b from-zinc-300 via-zinc-500 to-black">
                {title}
            </h2>
            <div className={`mt-6 h-px bg-linear-to-r from-transparent via-zinc-500 to-transparent ${center ? "mx-auto" : ""} w-32`} />
        </motion.div>
    );
}