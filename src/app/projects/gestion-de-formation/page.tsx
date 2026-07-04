"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconArrowLeft, IconCheck, IconServer, IconNetwork, IconDatabase, IconShieldLock, IconDeviceMobile, IconLayoutDashboard, IconActivity, IconTrophy } from "@tabler/icons-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function GestionDeFormationCaseStudy() {
    return (
        <main className="min-h-screen bg-black text-white relative">
            <BackgroundBeams />
            
            <div className="relative z-10 max-w-5xl mx-auto px-4 py-16">
                {/* Back Button */}
                <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 font-mono text-sm uppercase tracking-widest">
                    <IconArrowLeft className="w-4 h-4" /> Return to Main System
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-4 mb-6 flex-wrap">
                        <span className="px-3 py-1 bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-xs rounded uppercase font-mono tracking-tighter">Enterprise</span>
                        <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs rounded uppercase font-mono tracking-tighter">PFE_Project</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-400 text-xs rounded uppercase font-mono tracking-tighter">Academic Year 2025–2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter mb-4">
                        Gestion de Formation
                    </h1>
                    <p className="text-xl text-neutral-400 font-sans italic border-l-4 border-electric-blue pl-4">
                        A comprehensive Training Management Platform built with a robust Microservices Architecture using .NET 8. Designed for end-to-end lifecycle management of professional training programs.
                    </p>
                </header>

                {/* Architecture Diagram */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <h2 className="text-2xl font-bold font-mono tracking-tighter uppercase">System <span className="text-electric-blue">Architecture</span></h2>
                        <div className="h-px bg-white/10 flex-1" />
                    </div>

                    <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric-blue via-cyber-green to-yellow-500 opacity-50" />
                        
                        <div className="flex flex-col items-center">
                            {/* Gateway */}
                            <div className="w-full max-w-sm mb-12 relative group">
                                <div className="absolute inset-0 bg-electric-blue/20 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative border border-electric-blue/30 bg-electric-blue/5 p-6 rounded-lg text-center z-10 flex flex-col items-center gap-2">
                                    <IconNetwork className="w-8 h-8 text-electric-blue" />
                                    <h3 className="font-bold text-lg font-mono">YARP API Gateway</h3>
                                    <p className="text-xs text-neutral-400">Single Entry Point & Request Routing</p>
                                </div>
                                {/* Connecting Lines */}
                                <div className="absolute -bottom-12 left-1/2 w-px h-12 bg-white/20" />
                                <div className="absolute -bottom-12 left-[15%] right-[15%] h-px bg-white/20" />
                                <div className="absolute -bottom-12 left-[15%] w-px h-12 bg-white/20" />
                                <div className="absolute -bottom-12 right-[15%] w-px h-12 bg-white/20" />
                            </div>

                            {/* Microservices */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                                {/* Service 1 */}
                                <div className="border border-white/10 bg-white/5 p-6 rounded-lg hover:border-yellow-500/50 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-yellow-500/10 rounded">
                                            <IconShieldLock className="w-5 h-5 text-yellow-500" />
                                        </div>
                                        <h4 className="font-bold font-mono">Identity Service</h4>
                                        <span className="text-[10px] text-neutral-500 ml-auto">PORT:5101</span>
                                    </div>
                                    <ul className="text-xs text-neutral-400 space-y-2">
                                        <li className="flex items-center gap-2"><IconCheck className="w-3 h-3 text-cyber-green" /> Authentication (JWT)</li>
                                        <li className="flex items-center gap-2"><IconCheck className="w-3 h-3 text-cyber-green" /> User Management</li>
                                        <li className="flex items-center gap-2"><IconCheck className="w-3 h-3 text-cyber-green" /> Gamification Engine</li>
                                    </ul>
                                </div>
                                {/* Service 2 */}
                                <div className="border border-white/10 bg-white/5 p-6 rounded-lg hover:border-cyber-green/50 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-cyber-green/10 rounded">
                                            <IconDatabase className="w-5 h-5 text-cyber-green" />
                                        </div>
                                        <h4 className="font-bold font-mono">Catalog Service</h4>
                                        <span className="text-[10px] text-neutral-500 ml-auto">PORT:5102</span>
                                    </div>
                                    <ul className="text-xs text-neutral-400 space-y-2">
                                        <li className="flex items-center gap-2"><IconCheck className="w-3 h-3 text-cyber-green" /> Formations & Inscriptions</li>
                                        <li className="flex items-center gap-2"><IconCheck className="w-3 h-3 text-cyber-green" /> Training Needs Analysis</li>
                                        <li className="flex items-center gap-2"><IconCheck className="w-3 h-3 text-cyber-green" /> Dashboard & File Mgmt</li>
                                    </ul>
                                </div>
                                {/* Service 3 */}
                                <div className="border border-white/10 bg-white/5 p-6 rounded-lg hover:border-pink-500/50 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-pink-500/10 rounded">
                                            <IconActivity className="w-5 h-5 text-pink-500" />
                                        </div>
                                        <h4 className="font-bold font-mono">Interaction Service</h4>
                                        <span className="text-[10px] text-neutral-500 ml-auto">PORT:5103</span>
                                    </div>
                                    <ul className="text-xs text-neutral-400 space-y-2">
                                        <li className="flex items-center gap-2"><IconCheck className="w-3 h-3 text-cyber-green" /> SignalR Hubs (Real-time)</li>
                                        <li className="flex items-center gap-2"><IconCheck className="w-3 h-3 text-cyber-green" /> Messaging System</li>
                                        <li className="flex items-center gap-2"><IconCheck className="w-3 h-3 text-cyber-green" /> Evaluations & Notifications</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Key Features */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <h2 className="text-2xl font-bold font-mono tracking-tighter uppercase">Key <span className="text-cyber-green">Features</span></h2>
                            <div className="h-px bg-white/10 flex-1" />
                        </div>
                        <div className="space-y-6">
                            {[
                                { icon: IconServer, title: "Microservices Architecture", desc: "Clean separation of concerns across 3 domain services plus an API Gateway." },
                                { icon: IconActivity, title: "Real-time Communication", desc: "SignalR-powered live notifications and interactive messaging across the platform." },
                                { icon: IconTrophy, title: "Gamification System", desc: "Engagement layer incorporating points, badges, and user achievements." },
                                { icon: IconLayoutDashboard, title: "Full Training Lifecycle", desc: "End-to-end management from needs identification to post-training evaluation and analytics." },
                                { icon: IconShieldLock, title: "Role-Based Security", desc: "JWT-secured endpoints with complex multi-role access control schemas." },
                                { icon: IconDeviceMobile, title: "Mobile Ready", desc: "Cross-platform mobile application integration included in the project scope." }
                            ].map((feature, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="mt-1 p-2 bg-white/5 border border-white/10 rounded shrink-0 self-start">
                                        <feature.icon className="w-5 h-5 text-neutral-300" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-neutral-400">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Challenges & Solutions */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <h2 className="text-2xl font-bold font-mono tracking-tighter uppercase">Challenges <span className="text-yellow-500">& Solutions</span></h2>
                            <div className="h-px bg-white/10 flex-1" />
                        </div>
                        <div className="space-y-8">
                            <div className="border-l-2 border-white/10 pl-6 relative">
                                <div className="absolute w-3 h-3 bg-neutral-800 border-2 border-electric-blue rounded-full -left-[7px] top-1" />
                                <h4 className="font-mono text-sm uppercase tracking-widest text-neutral-500 mb-2">Challenge: Service Coordination</h4>
                                <p className="text-white mb-3">Coordinating communication between distributed microservices efficiently.</p>
                                <div className="bg-electric-blue/10 border border-electric-blue/20 p-4 rounded text-sm text-neutral-300">
                                    <strong className="text-electric-blue">Solution:</strong> Deployed YARP API Gateway to act as a unified, single entry point to securely route and proxy traffic to the underlying domain services.
                                </div>
                            </div>

                            <div className="border-l-2 border-white/10 pl-6 relative">
                                <div className="absolute w-3 h-3 bg-neutral-800 border-2 border-cyber-green rounded-full -left-[7px] top-1" />
                                <h4 className="font-mono text-sm uppercase tracking-widest text-neutral-500 mb-2">Challenge: Real-time Scale</h4>
                                <p className="text-white mb-3">Delivering real-time events and notifications across separated services.</p>
                                <div className="bg-cyber-green/10 border border-cyber-green/20 p-4 rounded text-sm text-neutral-300">
                                    <strong className="text-cyber-green">Solution:</strong> Centralized WebSocket connections via SignalR hubs within the Interaction Service, successfully routed through the Gateway.
                                </div>
                            </div>

                            <div className="border-l-2 border-white/10 pl-6 relative">
                                <div className="absolute w-3 h-3 bg-neutral-800 border-2 border-yellow-500 rounded-full -left-[7px] top-1" />
                                <h4 className="font-mono text-sm uppercase tracking-widest text-neutral-500 mb-2">Challenge: Secure Access</h4>
                                <p className="text-white mb-3">Maintaining secure, multi-role access across a fragmented architecture.</p>
                                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded text-sm text-neutral-300">
                                    <strong className="text-yellow-500">Solution:</strong> Implemented centralized JWT validation at the gateway level, passing verified claims down to isolated services.
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Tech Stack */}
                <section className="mt-20 pt-10 border-t border-white/10">
                    <div className="text-center mb-8">
                        <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-500">Technology Stack</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                        {[".NET 8", "C#", "Microservices", "YARP API Gateway", "PostgreSQL", "JWT", "SignalR", "Entity Framework Core", "Mobile App"].map(tech => (
                            <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neutral-300 hover:border-white/30 transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
