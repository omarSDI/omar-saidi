"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconBrandLinkedin, IconBrandGithub, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";

const SOCIALS = [
    { icon: <IconBrandLinkedin />, href: "https://linkedin.com/in/omar-saidi-9306283a0/", color: "#0077b5", label: "LinkedIn" },
    { icon: <IconBrandGithub />, href: "https://github.com/omarSDI", color: "#333", label: "GitHub" },
    { icon: <IconBrandInstagram />, href: "https://www.instagram.com/omarsaidii_/", color: "#e4405f", label: "Instagram" },
    { icon: <IconBrandWhatsapp />, href: "https://wa.me/21627566936", color: "#25d366", label: "WhatsApp" },
];

export const SocialDock = () => {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/10 p-2 px-6 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] group"
            >
                {SOCIALS.map((social, idx) => (
                    <motion.a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -8, scale: 1.2 }}
                        className="p-3 text-neutral-400 hover:text-white transition-all relative group/icon"
                    >
                        <div className="relative z-10">{social.icon}</div>
                        <motion.div
                            className="absolute inset-0 bg-white/5 rounded-full -z-0 opacity-0 group-hover/icon:opacity-100 transition-opacity"
                            layoutId="social-hover"
                        />
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-white/10 px-2 py-1 rounded text-[10px] text-white opacity-0 group-hover/icon:opacity-100 transition-all pointer-events-none uppercase tracking-tighter">
                            {social.label}
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};
