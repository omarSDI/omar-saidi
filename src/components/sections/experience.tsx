"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconBriefcase, IconSchool, IconCertificate, IconHeart, IconArrowUpRight } from "@tabler/icons-react";

export const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-black relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-16">
                    <span className="text-cyber-green text-sm font-mono tracking-widest uppercase">03. Parcours</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Expériences & <span className="text-neutral-500">Certifications</span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Big Box - PFE */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 bg-gradient-to-br from-[#0a0a0a] to-[#111] p-8 rounded-3xl border border-white/10 hover:border-cyber-green/50 transition-colors relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <IconBriefcase className="w-32 h-32 text-cyber-green" />
                        </div>
                        
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-cyber-green/10 rounded-xl border border-cyber-green/20">
                                <IconBriefcase className="w-6 h-6 text-cyber-green" />
                            </div>
                            <span className="px-3 py-1 bg-cyber-green/10 text-cyber-green text-xs font-mono uppercase tracking-widest rounded-full border border-cyber-green/20">
                                Mission PFE Active
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-2">Stage PFE @ Centre National de l'Informatique</h3>
                        <p className="text-neutral-400 font-mono text-sm mb-6">Février 2026 — Juin 2026</p>

                        <ul className="space-y-3 text-neutral-300 mb-8 max-w-lg relative z-10">
                            <li className="flex items-start gap-3">
                                <span className="text-cyber-green mt-1">▹</span>
                                Conception d'Ent-Skills-Training, plateforme web & mobile de gestion des formations.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyber-green mt-1">▹</span>
                                Architecture microservices complexe avec YARP, JWT, et SignalR.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyber-green mt-1">▹</span>
                                Intégration de l'Intelligence Artificielle : moteur ML.NET et chatbot Gemini API.
                            </li>
                        </ul>

                        <div className="flex flex-wrap gap-2 relative z-10">
                            {["ASP.NET Core", "React", "Flutter", "PostgreSQL", "Docker", "SignalR", "ML.NET"].map(t => (
                                <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-neutral-400">{t}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Medium Box - Education */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-colors"
                    >
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 w-max mb-6">
                            <IconSchool className="w-6 h-6 text-neutral-300" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Formation & Diplômes</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-white">Licence en DSI</h4>
                                <p className="text-sm text-neutral-400 mb-1">ISET Béja (2022 — 2026)</p>
                                <p className="text-xs text-neutral-500 font-mono">Spécialité : Développement Systèmes Informatiques</p>
                            </div>
                            <div className="h-px w-full bg-white/5" />
                            <div>
                                <h4 className="font-bold text-white">Baccalauréat</h4>
                                <p className="text-sm text-neutral-400 mb-1">Lycée El Biaa (2021)</p>
                                <p className="text-xs text-neutral-500 font-mono">Section : Économie & Gestion</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Medium Box - Other Internships */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-colors"
                    >
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 w-max mb-6">
                            <IconBriefcase className="w-6 h-6 text-neutral-300" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Expériences Précédentes</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-white">Stage Professionnel @ Centre Inf. Béja</h4>
                                <p className="text-xs text-neutral-500 font-mono mb-2">Jan 2025 — Avr 2025</p>
                                <p className="text-sm text-neutral-400">Site e-commerce : gestion de catalogue, stocks et commandes. (PHP, MySQL, JS)</p>
                            </div>
                            <div className="h-px w-full bg-white/5" />
                            <div>
                                <h4 className="font-bold text-white">Stage d'Initiation @ Lilas Informatique</h4>
                                <p className="text-xs text-neutral-500 font-mono mb-2">Jan 2022 — Fév 2022</p>
                                <p className="text-sm text-neutral-400">Conception d'une application de gestion de stock et suivi logistique.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Small Box - Certifications */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] p-8 rounded-3xl border border-white/10 hover:border-yellow-500/30 transition-colors flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                                <IconCertificate className="w-6 h-6 text-yellow-500" />
                            </div>
                            <h3 className="text-lg font-bold">Certifications</h3>
                        </div>
                        <h4 className="font-bold text-white">PCAP : Programming Essentials</h4>
                        <p className="text-sm text-neutral-400 mb-1">Cisco & Python Institute</p>
                        <p className="text-xs text-neutral-500 font-mono">Obtenu en 2023</p>
                    </motion.div>

                    {/* Small Box - Soft Skills / Langues */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] p-8 rounded-3xl border border-white/10 hover:border-pink-500/30 transition-colors flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-pink-500/10 rounded-xl border border-pink-500/20">
                                <IconHeart className="w-6 h-6 text-pink-500" />
                            </div>
                            <h3 className="text-lg font-bold">Intérêts & Langues</h3>
                        </div>
                        <p className="text-sm text-neutral-400 mb-3">
                            <strong className="text-white">Arabe:</strong> Maternelle • <strong className="text-white">Français:</strong> Courant • <strong className="text-white">Anglais:</strong> Technique
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["IA", "Sports", "Dessin"].map(i => (
                                <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-neutral-400">{i}</span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
