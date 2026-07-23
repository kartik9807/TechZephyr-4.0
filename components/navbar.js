"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Examination", label: "Examination" },
    { href: "/Tracks", label: "Tracks" },
    { href: "/Register", label: "Register", isPrimary: true },
    { href: "/Login", label: "Login", isOutline: true },
    { href: "/AboutUs", label: "About Us" },
    { href: "/Sponsors", label: "Sponsors" },
    { href: "/LastEdition", label: "Last Edition" },
  ];

  return (
    <nav className="fixed z-50 bottom-0 w-full bg-black/60 backdrop-blur-md border-t border-white/10">
      
      {/* Mobile Bar Header */}
      <div className="flex md:hidden items-center gap-3 px-4 py-3">
        <Link 
          href="/Register" 
          className="flex-1 text-center uppercase text-black bg-white py-2.5 rounded-full font-semibold text-xs tracking-wide transition-all duration-300 active:scale-95"
        >
          Register
        </Link>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-white/60"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-md px-4 py-4 max-h-[60vh] overflow-y-auto">
          <ul className="flex flex-col divide-y divide-white/10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-center text-white uppercase text-sm tracking-wide hover:text-white/50 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    
      <ul className="hidden md:flex justify-center items-center space-x-6 font-medium text-sm md:text-md lg:text-lg py-2.5">
        <li><Link href="/" className="text-white uppercase hover:text-white/50">Home</Link></li>
        <li><Link href="/Examination" className="text-white uppercase hover:text-white/50">Examination</Link></li>
        <li><Link href="/Tracks" className="text-white uppercase hover:text-white/50">Tracks</Link></li>
        <li><Link href="/Register" className="text-black uppercase bg-white py-2.5 border border-white px-6 hover:bg-transparent hover:text-white transition-all duration-300 font-semibold">Register</Link></li>
        <li><Link href="/Login" className="text-black uppercase border bg-white border-white py-2.5 px-6 hover:bg-transparent hover:text-white transition-all duration-300 font-semibold">Login</Link></li>
        <li><Link href="/AboutUs" className="text-white uppercase hover:text-white/50">About Us</Link></li>
        <li><Link href="/Sponsors" className="text-white uppercase hover:text-white/50">Sponsors</Link></li>
        <li><Link href="/LastEdition" className="text-white uppercase hover:text-white/50">Last Edition</Link></li>
      </ul>

    </nav>
  );
}