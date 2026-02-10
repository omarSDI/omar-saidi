"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Platforme de Troc",
        desc: "Digital exchange platform with complex swapping algorithms.",
        tech: ["Java", "Spring Boot", "Angular", "MySQL"],
        status: "OPERATIONAL",
        ref: "EXCHANGE-01"
    },
    {
        title: "Tourisme Tunisie",
        desc: "Site localization & travel cost estimation engine.",
        tech: ["Java", "MySQL", "JSP"],
        status: "ARCHIVED",
        ref: "TRAVEL-SYS"
    },
    {
        title: "Stock Management (Lilas)",
        desc: "Retail inventory modeling & supply chain analysis.",
        tech: ["HTML", "JS", "MySQL"],
        status: "MAINTENANCE",
        ref: "LILAS-STOCK"
    }
];

export const Missions = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-12 flex items-end justify-between border-b border-white/10 pb-4"
            >
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter uppercase">
                        COMMAND <span className="text-cyber-green">CENTER</span>
                    </h2>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-[0.5em] mt-2">
                        Deployed_Missions_Log
                    </p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-xs font-mono text-cyber-green">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green"></span>
                    </span>
                    SYSTEMS_NOMINAL
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{
                            scale: 1.02,
                            rotateX: 5,
                            rotateY: 5,
                            transition: { duration: 0.2 }
                        }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden hover:border-cyber-green/50 transition-colors duration-500 rounded-sm transform-preserve-3d perspective-1000"
                    >
                        {/* Scanning Line Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-green/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                        <div className="p-6 relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[9px] font-mono text-neutral-500 tracking-widest border border-white/10 px-2 py-0.5 rounded">
                                    {project.ref}
                                </span>
                                <div className={cn(
                                    "text-[9px] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1.5",
                                    project.status === "OPERATIONAL" ? "text-cyber-green bg-cyber-green/10" :
                                        project.status === "MAINTENANCE" ? "text-yellow-500 bg-yellow-500/10" :
                                            "text-neutral-500 bg-neutral-800"
                                )}>
                                    <div className={cn(
                                        "w-1 h-1 rounded-full",
                                        project.status === "OPERATIONAL" ? "bg-cyber-green animate-pulse" :
                                            project.status === "MAINTENANCE" ? "bg-yellow-500" :
                                                "bg-neutral-500"
                                    )} />
                                    {project.status}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold font-mono uppercase text-white mb-2 group-hover:text-cyber-green transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-neutral-400 mb-6 leading-relaxed font-sans">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-[10px] font-mono text-cyber-green border border-cyber-green/20 px-2 py-1 bg-cyber-green/5">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-green opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber-green opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
