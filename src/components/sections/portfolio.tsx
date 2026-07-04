"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IconArrowRight, IconEye } from "@tabler/icons-react";

const PROJECTS = [
    {
        id: "lansyai",
        title: "Lansy.ai",
        category: "AI/SaaS",
        tag: "AI_SaaS_Platform",
        desc: "An advanced AI-powered platform generating highly optimized, ATS-friendly CVs tailored to specific job offers using RAG and intelligent analysis.",
        tech: ["Next.js", "FastAPI", "Gemini API", "ChromaDB"],
        link: "#live-demo"
    },
    {
        id: "gestion-formation",
        title: "Gestion de Formation",
        category: "Enterprise",
        tag: "PFE_Project",
        desc: "A comprehensive Training Management Platform built with a Microservices Architecture using .NET 8. End-to-end lifecycle management of professional training.",
        tech: [".NET 8", "Microservices", "YARP", "SignalR"],
        link: "/projects/gestion-de-formation"
    },
    {
        id: "ecommerce",
        title: "Tunis Shoes",
        category: "Web",
        tag: "E-Commerce",
        desc: "Mission-critical E-commerce ecosystem with real-time inventory and secure authentication.",
        tech: ["Next.js", "Supabase", "Tailwind"],
        link: "https://tunis-shoes-admin.vercel.app/"
    },
    {
        id: "troc",
        title: "Plateforme de Troc",
        category: "Académique",
        tag: "Web_App",
        desc: "Digital exchange platform for complex swapping logic with user and ad management.",
        tech: ["Java", "Spring Boot", "Angular"],
        link: "#"
    },
    {
        id: "tourisme",
        title: "Tourisme Tunisie",
        category: "Académique",
        tag: "Desktop_App",
        desc: "Java application for site localization and travel cost estimation across Tunisia.",
        tech: ["Java", "MySQL"],
        link: "#"
    }
];

const FILTERS = ["Tout", "Web", "Enterprise", "AI/SaaS", "Académique"];

export const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("Tout");

    const filteredProjects = PROJECTS.filter(p => 
        activeFilter === "Tout" || p.category === activeFilter
    );

    return (
        <section id="portfolio" className="py-24 bg-[#050505] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <span className="text-cyber-green text-sm font-mono tracking-widest uppercase">02. Travaux</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Mes <span className="text-neutral-500">Projets</span>
                    </h2>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {FILTERS.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-all ${
                                activeFilter === filter 
                                    ? "bg-white text-black font-bold" 
                                    : "bg-white/5 text-neutral-400 hover:bg-white/10"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-colors flex flex-col h-full"
                            >
                                {/* Simulated Image Area - Using a dark gradient instead of actual images for now to match the cyberpunk clean aesthetic */}
                                <div className="h-48 w-full bg-gradient-to-br from-neutral-900 to-black relative flex items-center justify-center border-b border-white/5 overflow-hidden">
                                    <div className="absolute inset-0 bg-cyber-green/5 group-hover:bg-cyber-green/20 transition-colors z-0" />
                                    <h3 className="text-2xl font-bold font-mono text-white/20 uppercase tracking-widest z-10 group-hover:scale-110 transition-transform">
                                        {project.title}
                                    </h3>
                                    
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-20">
                                        {project.link.startsWith("/") ? (
                                            <Link href={project.link} className="flex items-center gap-2 text-white font-mono uppercase tracking-widest text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                                                <IconEye className="w-4 h-4" /> Voir Détails
                                            </Link>
                                        ) : (
                                            <a href={project.link} target={project.link === "#" ? "_self" : "_blank"} className="flex items-center gap-2 text-white font-mono uppercase tracking-widest text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                                                <IconEye className="w-4 h-4" /> Voir Projet
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <span className="text-[10px] text-cyber-green font-mono uppercase tracking-widest mb-2 border border-cyber-green/30 bg-cyber-green/5 px-2 py-0.5 rounded self-start">
                                        {project.tag}
                                    </span>
                                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-sm text-neutral-400 mb-6 flex-1 line-clamp-3">
                                        {project.desc}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[10px] text-neutral-300 font-mono bg-white/5 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};
