"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
    {
        value: 1000,
        suffix: "+",
        title: "Participants",
        description: "Expected participants",
    },
    {
        value: 100,
        suffix: "+",
        title: "Colleges",
        description: "Institutes participating",
    },
    {
        value: 100000,
        suffix: "+",
        separator: ",",
        title: "People Reached",
        description: "Digital outreach",
    },
    {
        value: 5,
        title: "STC Societies",
        description: "Technical communities",
    },
];

export default function Stats() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45 }}
                    className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] backdrop-blur-xl"
                >

                    {/* Header */}
                    <div className="border-b border-white/10 px-8 py-8 md:px-10">
                        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-amber-300">
                            TechZephyr 4.0
                        </p>

                        <div className="mt-3 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                            <h2 className="text-2xl font-semibold text-white md:text-3xl">
                                The Scale of TechZephyr
                            </h2>

                            <p className="max-w-md text-sm leading-6 text-white/40 md:text-right">
                                A growing ecosystem connecting students,
                                institutions and technology communities.
                            </p>
                        </div>
                    </div>


                    {/* Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-4">

                        {stats.map((item, index) => (
                            <div
                                key={item.title}
                                className={
                                    "relative px-6 py-9 md:px-8 md:py-10 " +
                                    (
                                        index !== 0
                                            ? "border-l border-white/10"
                                            : ""
                                    )
                                }
                            >

                                <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                                    <CountUp
                                        end={item.value}
                                        duration={1.5}
                                        separator={item.separator}
                                        suffix={item.suffix}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                </div>

                                <h3 className="mt-4 text-sm font-semibold text-white md:text-base">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-white/40">
                                    {item.description}
                                </p>

                                <div className="absolute bottom-0 left-0 h-px w-0 bg-amber-400 transition-all duration-500 group-hover:w-full" />
                            </div>
                        ))}

                    </div>

                </motion.div>

            </div>
        </section>
    );
}