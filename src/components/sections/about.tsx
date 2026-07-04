"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
    IconMapPin, IconMail, IconPhone, IconDownload,
    IconBrandReact, IconBrandAngular, IconBrandNodejs,
    IconDeviceMobile, IconDatabase, IconPalette
} from "@tabler/icons-react";

export const About = () => {
    return (
        <section id="about" className="py-24 bg-black relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-16">
                    <span className="text-cyber-green text-sm font-mono tracking-widest uppercase">01. Profil</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        À Propos & <span className="text-neutral-500">Compétences</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: About Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 bg-[#0a0a0a]/50 p-8 rounded-2xl border border-white/5"
                    >
                        <h3 className="text-2xl font-bold">Mon Profil</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Diplômé en Développement des Systèmes Informatiques (Licence DSI, ISET Béja), je maîtrise le cycle complet de développement d'applications web, mobiles et back-end. Fort d’une expérience concrète, j'ai développé de solides compétences en architectures microservices, gestion des bases de données et intégration d'IA. Rigoureux et orienté solutions, je mets mon expertise technique au service de la réussite de vos projets.
                        </p>
                        
                        <div className="space-y-4 pt-4 border-t border-white/10">
                            <div className="flex items-center gap-4 text-neutral-300">
                                <IconMapPin className="w-5 h-5 text-cyber-green" />
                                <span>Béja, Tunisie 9023</span>
                            </div>
                            <div className="flex items-center gap-4 text-neutral-300">
                                <IconMail className="w-5 h-5 text-cyber-green" />
                                <span>saidiiomar.it@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-neutral-300">
                                <IconPhone className="w-5 h-5 text-cyber-green" />
                                <span>+216 27 566 936</span>
                            </div>
                        </div>

                        <a 
                            href="/OMAR-SAIDI.pdf" 
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-green text-black font-bold rounded-lg hover:bg-cyber-green/90 transition-colors mt-8"
                        >
                            Télécharger CV <IconDownload className="w-4 h-4" />
                        </a>
                    </motion.div>

                    {/* Right: Skills Grid */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold">Tech Stack & Outils</h3>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                { name: "React / Next.js", icon: IconBrandReact, color: "text-[#61dbfb]" },
                                { name: "Angular", icon: IconBrandAngular, color: "text-[#dd0031]" },
                                { name: ".NET / C#", icon: IconDatabase, color: "text-purple-500" },
                                { name: "Flutter", icon: IconDeviceMobile, color: "text-[#02569b]" },
                                { name: "Spring Boot", icon: IconBrandNodejs, color: "text-[#68a063]" },
                                { name: "PostgreSQL", icon: IconDatabase, color: "text-[#336791]" },
                                { name: "Microservices", icon: IconDatabase, color: "text-electric-blue" },
                                { name: "Gemini AI", icon: IconPalette, color: "text-yellow-500" },
                            ].map((skill, i) => (
                                <div key={i} className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1">
                                    <skill.icon className={`w-8 h-8 ${skill.color}`} />
                                    <span className="text-sm font-medium text-neutral-300">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
