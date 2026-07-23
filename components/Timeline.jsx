"use client";

import { motion } from "framer-motion";

const achievements = [
    {
        year: "2024",
        title: "ICPC World Finals",
        description: "World Rank 75 at the ICPC World Finals in Kazakhstan, the third-highest ranked Indian team.",
    },
    {
        year: "2024",
        title: "e-Yantra Gold Medal",
        description: "Gold Medal at IIT Bombay's prestigious e-Yantra Robotics Competition.",
    },
    {
        year: "2025",
        title: "ICPC Asia West",
        description: "Qualification to ICPC Asia West by the Neuromancers team.",
    },
    {
        year: "2025",
        title: "Code Relay",
        description: "A flagship 36-hour hackathon receiving more than 880 team registrations across Web2 and Web3 tracks.",
    },
    {
        year: "2025",
        title: "ML Hackathon",
        description: "Campus-wide AI hackathon with 50+ teams solving real-world machine learning challenges.",
    },
    {
        year: "2025",
        title: "Flipkart GRID Robotics",
        description: "Four teams qualified for the national finals in the Robotics Track.",
    },
];

export default function Timeline() {
    return (
        <section className="py-24">
            <div className="max-w-5xl mx-auto px-6">
                {achievements.map((item, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: index % 2 ? 80 : -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        transition={{ duration: 0.7, }} className="relative flex gap-8 pb-16">
                        <div className="relative flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-white" />
                            {index !== achievements.length - 1 && (
                                <div className="w-px flex-1 bg-white/20 mt-2" />
                            )}
                        </div>
                        <motion.div whileHover={{ y: -5, scale: 1.02, }} className="flex-1 rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8 transition-all duration-500">
                            <span className="text-xs uppercase tracking-[0.35em] text-white/40">{item.year}</span>
                            <h3 className="text-3xl font-bold mt-3 text-white">{item.title}</h3>
                            <p className="mt-4 text-white/60 leading-7">{item.description}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}