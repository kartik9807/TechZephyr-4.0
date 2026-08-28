"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="relative overflow-hidden border-t border-[#2B211C]/10 bg-[#FAF8F4] py-32 dark:border-[#F5F0E8]/10 dark:bg-[#17120F]">

            {/* Background atmosphere */}
            <div className="pointer-events-none absolute inset-0">

                <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C84B2F]/8 blur-[180px]" />

                <div className="absolute right-20 top-20 h-56 w-56 rounded-full bg-[#E06A4F]/8 blur-[100px]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,75,47,.07),transparent_60%)]" />

            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8 }}
                className="relative z-10 mx-auto max-w-6xl px-6"
            >

                <div className="relative overflow-hidden rounded-[32px] border border-[#2B211C]/10 bg-[#F5F0E8]/80 px-8 py-20 text-center backdrop-blur-2xl dark:border-[#F5F0E8]/10 dark:bg-[#2B211C]/70 md:px-16">

                    {/* Small accent */}
                    <div className="absolute left-1/2 top-0 h-[2px] w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C84B2F] to-transparent" />

                    <p className="text-xs uppercase tracking-[0.45em] text-[#C84B2F] dark:text-[#E06A4F]">
                        TECHZEPHYR 2026
                    </p>

                    <h2 className="mt-6 bg-gradient-to-b from-[#2B211C] via-[#5A4034] to-[#9B7563] bg-clip-text text-5xl font-black leading-none text-transparent dark:from-[#FAF8F4] dark:via-[#D6D1C8] dark:to-[#8E8982] md:text-7xl">
                        Build.
                        <br />
                        Compete.
                        <br />
                        Innovate.
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#6F6962] dark:text-[#B4ADA5]">
                        Join hundreds of innovators, developers, designers,
                        entrepreneurs and researchers for the flagship
                        technology festival of IIT Bhubaneswar.
                    </p>

                    <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

                        <Link
                            href="/Register"
                            className="rounded-xl bg-[#2B211C] px-10 py-4 font-semibold uppercase tracking-[0.25em] text-[#FAF8F4] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C84B2F] hover:shadow-[0_15px_40px_rgba(200,75,47,.25)] dark:bg-[#F5F0E8] dark:text-[#2B211C] dark:hover:bg-[#E06A4F]"
                        >
                            Register Now
                        </Link>

                        <Link
                            href="/Sponsors"
                            className="rounded-xl border border-[#2B211C]/20 px-10 py-4 uppercase tracking-[0.25em] text-[#2B211C] transition-all duration-300 hover:-translate-y-1 hover:border-[#C84B2F] hover:bg-[#C84B2F]/5 hover:text-[#C84B2F] dark:border-[#F5F0E8]/20 dark:text-[#F5F0E8] dark:hover:border-[#E06A4F] dark:hover:text-[#E06A4F]"
                        >
                            Become a Sponsor
                        </Link>

                    </div>

                    <div className="mt-14 flex flex-wrap justify-center gap-10 text-center">

                        <div>
                            <h3 className="text-3xl font-black text-[#C84B2F] dark:text-[#E06A4F]">
                                1000+
                            </h3>
                            <p className="mt-2 text-xs uppercase tracking-widest text-[#817970] dark:text-[#9F9890]">
                                Participants
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-black text-[#C84B2F] dark:text-[#E06A4F]">
                                8
                            </h3>
                            <p className="mt-2 text-xs uppercase tracking-widest text-[#817970] dark:text-[#9F9890]">
                                Competitions
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-black text-[#C84B2F] dark:text-[#E06A4F]">
                                ₹3L+
                            </h3>
                            <p className="mt-2 text-xs uppercase tracking-widest text-[#817970] dark:text-[#9F9890]">
                                Prize Pool
                            </p>
                        </div>

                    </div>

                </div>
            </motion.div>
        </section>
    );
}