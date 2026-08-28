"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Home,
    Trophy,
    Users,
    Handshake,
    History,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const links = [
        {
            href: "/",
            label: "Home",
            icon: Home,
        },
        {
            href: "/Competitions",
            label: "Competitions",
            icon: Trophy,
        },
        {
            href: "/AboutUs",
            label: "About",
            icon: Users,
        },
        {
            href: "/Sponsor",
            label: "Sponsors",
            icon: Handshake,
        },
        {
            href: "/LastEdition",
            label: "Archive",
            icon: History,
        },
    ];

    return (
        <>
            {/* =========================================================
                MOBILE NAVIGATION
                ========================================================= */}

            <div className="fixed inset-0 z-50 pointer-events-none md:hidden">

                {/* =====================================================
                    BACKDROP
                    ===================================================== */}

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            onClick={() => setOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
                        />
                    )}
                </AnimatePresence>


                {/* =====================================================
                    FLOATING MENU BUTTON
                    ===================================================== */}

                <motion.button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    whileTap={{ scale: 0.92 }}
                    className={
                        "pointer-events-auto absolute right-5 top-5 z-[70] " +
                        "flex h-12 w-12 items-center justify-center " +
                        "rounded-2xl border border-white/10 " +
                        "bg-black/75 backdrop-blur-2xl " +
                        "shadow-[0_0_35px_rgba(251,191,36,.12)] " +
                        "transition-all duration-300 " +
                        (open
                            ? "border-amber-400/30 shadow-[0_0_35px_rgba(251,191,36,.18)]"
                            : "")
                    }
                >

                    <span className="relative flex h-5 w-6 flex-col justify-center">

                        {/* Top line */}
                        <span
                            className={
                                "absolute left-0 h-[2px] rounded-full bg-amber-300 " +
                                "transition-all duration-300 ease-in-out " +
                                (open
                                    ? "top-[9px] w-6 rotate-45"
                                    : "top-[3px] w-6")
                            }
                        />

                        {/* Middle line */}
                        <span
                            className={
                                "absolute left-0 top-[9px] h-[2px] rounded-full bg-amber-300 " +
                                "transition-all duration-200 ease-in-out " +
                                (open
                                    ? "w-0 opacity-0"
                                    : "w-4 opacity-100")
                            }
                        />

                        {/* Bottom line */}
                        <span
                            className={
                                "absolute left-0 h-[2px] rounded-full bg-amber-300 " +
                                "transition-all duration-300 ease-in-out " +
                                (open
                                    ? "top-[9px] w-6 -rotate-45"
                                    : "top-[15px] w-5")
                            }
                        />

                    </span>

                </motion.button>


                {/* =====================================================
                    SLIDING MOBILE DRAWER
                    ===================================================== */}

                <AnimatePresence>
                    {open && (
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 280,
                                damping: 28,
                                mass: 0.8,
                            }}
                            className="pointer-events-auto absolute left-0 top-0 flex h-full w-[82%] max-w-[340px] flex-col overflow-hidden border-r border-white/10 bg-black/90 px-5 pb-6 pt-7 shadow-[20px_0_60px_rgba(0,0,0,.55)] backdrop-blur-2xl"
                        >

                            {/* =================================================
                                DRAWER HEADER
                                ================================================= */}

                            <div className="mb-8 flex items-center justify-between px-2">

                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.12,
                                            duration: 0.3,
                                        }}
                                        className="text-xl font-semibold tracking-wider"
                                    >
                                        TechZephyr
                                    </motion.div>

                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{
                                            width: 64,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            delay: 0.2,
                                            duration: 0.4,
                                        }}
                                        className="mt-3 h-px bg-amber-400"
                                    />
                                </div>

                            </div>


                            {/* =================================================
                                NAVIGATION LINKS
                                ================================================= */}

                            <nav className="flex flex-col gap-2">

                                {links.map((item, index) => {
                                    const Icon = item.icon;
                                    const active = pathname === item.href;

                                    return (
                                        <motion.div
                                            key={item.href}
                                            initial={{
                                                opacity: 0,
                                                x: -25,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            transition={{
                                                delay: 0.12 + index * 0.07,
                                                duration: 0.35,
                                                ease: "easeOut",
                                            }}
                                        >

                                            <Link
                                                href={item.href}
                                                onClick={() =>
                                                    setOpen(false)
                                                }
                                                className={
                                                    "group flex items-center gap-4 rounded-2xl px-4 py-4 " +
                                                    "transition-all duration-200 " +
                                                    (
                                                        active
                                                            ? "bg-amber-400 text-black"
                                                            : "text-white hover:bg-white/5"
                                                    )
                                                }
                                            >

                                                <Icon
                                                    size={19}
                                                    className={
                                                        "transition-transform duration-200 " +
                                                        (
                                                            active
                                                                ? "text-black"
                                                                : "text-amber-300 group-hover:scale-110"
                                                        )
                                                    }
                                                />

                                                <span className="text-sm font-medium">
                                                    {item.label}
                                                </span>

                                            </Link>

                                        </motion.div>
                                    );
                                })}

                            </nav>


                            {/* =================================================
                                FLEXIBLE SPACE
                                ================================================= */}

                            <div className="flex-1" />


                            {/* =================================================
                                AUTH BUTTONS
                                ================================================= */}

                            {/* <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.35,
                                }}
                                className="mt-6 flex flex-col gap-3"
                            >

                                <Link
                                    href="/Register"
                                    onClick={() => setOpen(false)}
                                    className="rounded-full bg-amber-400 py-3.5 text-center font-semibold text-black transition-all duration-200 hover:bg-amber-300 hover:shadow-[0_0_25px_rgba(251,191,36,.25)]"
                                >
                                    Register
                                </Link>

                                <Link
                                    href="/Login"
                                    onClick={() => setOpen(false)}
                                    className="rounded-full border border-white/10 bg-white/5 py-3.5 text-center text-white transition-all duration-200 hover:border-amber-400/40 hover:bg-white/10"
                                >
                                    Login
                                </Link>

                            </motion.div> */}

                        </motion.aside>
                    )}
                </AnimatePresence>

            </div>


            {/* =========================================================
                DESKTOP NAVBAR
                ========================================================= */}

            <div className="fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 md:block">

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-3 backdrop-blur-2xl shadow-[0_0_40px_rgba(251,191,36,.12)]">

                    {links.map((item) => {
                        const Icon = item.icon;
                        const active = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative flex items-center gap-2 rounded-full px-5 py-3 transition-all duration-300
                                ${
                                    active
                                        ? "bg-amber-400 text-black"
                                        : "text-white hover:bg-white/5"
                                }`}
                            >
                                <Icon size={18} />

                                <span className="text-sm">
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}

                    {/* <div className="mx-1 h-8 w-px bg-white/10" /> */}

                    {/* <Link
                        href="/Login"
                        className="rounded-full border border-white/10 bg-white/5 px-6 py-3 transition hover:border-amber-400/40"
                    >
                        Login
                    </Link>

                    <Link
                        href="/Register"
                        className="rounded-full bg-amber-400 px-7 py-3 font-semibold text-black transition hover:bg-amber-300 hover:shadow-[0_0_25px_rgba(251,191,36,.35)]"
                    >
                        Register
                    </Link> */}

                </div>

            </div>
        </>
    );
}
