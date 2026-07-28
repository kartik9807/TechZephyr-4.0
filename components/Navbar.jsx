"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Trophy, Users, Handshake, History, LogIn, UserPlus, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const links = [
        {
            href: "/",
            label: "Home",
            icon: Home
        },
        {
            href: "/Competitions",
            label: "Competitions",
            icon: Trophy
        },
        {
            href: "/AboutUs",
            label: "About",
            icon: Users
        },
        {
            href: "/Sponsors",
            label: "Sponsors",
            icon: Handshake
        },
        {
            href: "/LastEdition",
            label: "Archive",
            icon: History
        }
    ];

    return (
        <>
            <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 md:hidden">
                <AnimatePresence>
                    {open && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="mb-4 w-72 rounded-3xl border border-white/10 bg-black/75 backdrop-blur-2xl p-3 shadow-[0_0_40px_rgba(251,191,36,.12)]">
                            {links.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex items-center gap-4 rounded-2xl px-4 py-3 hover:bg-white/5 transition ">
                                        <Icon size={18} className="text-amber-300" />
                                        <span>{item.label}</span>
                                    </Link>
                                )
                            })}
                            <div className="mt-2 flex gap-2">
                                <Link href="/Register" className="flex-1 rounded-full bg-amber-400 py-3 text-center font-semibold text-black ">
                                    Register
                                </Link>
                                <Link href="/Login" className="flex-1 rounded-full border border-white/10 bg-white/5 py-3 text-center">
                                    Login
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/75 backdrop-blur-2xl px-6 py-3 w-80 shadow-[0_0_40px_rgba(251,191,36,.12)]">
                    <span className="font-semibold tracking-wider">TechZephyr</span>
                    <button onClick={() => setOpen(!open)} className="ml-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400 text-black">
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
            <div className=" fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 md:block">
                <div className=" flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-3 backdrop-blur-2xl shadow-[0_0_40px_rgba(251,191,36,.12)]">
                    {links.map((item) => {
                        const Icon = item.icon;
                        const active = pathname === item.href;
                        return (
                            <Link key={item.href} href={item.href} className={`relative flex items-center gap-2 rounded-full px-5 py-3 transition-all duration-300
                                ${active ? "bg-amber-400 text-black" : "text-white hover:bg-white/5"}`}>
                                <Icon size={18} />
                                <span className="text-sm">{item.label}</span>
                            </Link>
                        )
                    })}
                    <div className="mx-1 h-8 w-px bg-white/10" />
                    <Link href="/Login" className=" rounded-full border border-white/10 bg-white/5 px-6 py-3 transition hover:border-amber-400/40">
                        Login

                    </Link>
                    <Link href="/Register" className=" rounded-full bg-amber-400 px-7 py-3 font-semibold text-black transition hover:bg-amber-300 hover:shadow-[0_0_25px_rgba(251,191,36,.35)]">
                        Register
                    </Link>
                </div>
            </div>
        </>
    );
}