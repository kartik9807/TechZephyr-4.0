"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
    {
        value: 1000,
        suffix: "+",
        title: "Participants",
        description: "Expected participants during TechZephyr."
    },
    {
        value: 100,
        suffix: "+",
        title: "Colleges",
        description: "Institutes expected to participate."
    },
    {
        value: 100000,
        suffix: "+",
        separator: ",",
        title: "People Reached",
        description: "Combined outreach across digital platforms."
    },
    {
        value: 5,
        title: "STC Societies",
        description: "Robotics, Coding, Finance, Design and Astronomy."
    }
];

export default function Stats() {
    return (
        <section className="py-24">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}
                className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {stats.map((item, index) => (
                        <motion.div key={index} whileHover={{ y: -10, scale: 1.03 }}
                            className="group rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8 transition-all duration-500">
                            <div className="text-5xl md:text-6xl font-black text-white">
                                <CountUp end={item.value} duration={2.5} separator={item?.separator} suffix={item?.suffix}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                            </div>
                            <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                            <p className="mt-4 text-white/60 leading-7">{item.description}</p>
                            <div className="mt-8 h-px bg-linear-to-r from-white/40 to-transparent w-0 group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}