"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IconDownload, IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Accueil", href: "#home" },
        { name: "À Propos", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Parcours", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="#home" className="text-2xl font-bold font-mono tracking-tighter">
                        Omar<span className="text-cyber-green">.S</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-neutral-300 hover:text-cyber-green transition-colors text-sm font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CV Button */}
                    <a
                        href="/OMAR-SAIDI.pdf"
                        download
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-cyber-green text-black font-semibold rounded-full hover:bg-cyber-green/90 transition-all text-sm"
                    >
                        Télécharger CV <IconDownload className="w-4 h-4" />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <IconX /> : <IconMenu2 />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 flex flex-col md:hidden"
                    >
                        <div className="flex flex-col space-y-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-medium text-neutral-300 hover:text-cyber-green"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/OMAR-SAIDI.pdf"
                                download
                                className="mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-cyber-green text-black font-bold rounded-full w-full max-w-xs mx-auto"
                            >
                                Télécharger CV <IconDownload className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
