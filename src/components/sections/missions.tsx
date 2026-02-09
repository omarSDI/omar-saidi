"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconRocket, IconActivity, IconCpu, IconShieldCheck } from "@tabler/icons-react";

export const Missions = () => {
    const [metrics, setMetrics] = React.useState({ inventory: 124, uptime: "99.98" });

    React.useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => ({
                inventory: prev.inventory + (Math.random() > 0.5 ? 1 : -1),
                uptime: (99.95 + Math.random() * 0.04).toFixed(2)
            }));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="missions" className="py-24 bg-black text-white px-4 relative">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter mb-4">
                        FEATURED <span className="text-cyber-green">MISSION</span>
                    </h2>
                    <p className="text-neutral-500 font-mono text-xs uppercase tracking-[0.3em]">System Level 01: [ACTIVE_ENGINE]</p>
                </div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="w-full"
                >
                    <Button
                        borderRadius="0.5rem"
                        className="bg-[#0a0a0a]/80 backdrop-blur-md border-white/5 p-8 text-left items-stretch flex-col gap-6 fire-spray shadow-2xl"
                        containerClassName="h-auto w-full min-h-[400px]"
                    >
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            {/* Visual Engine Representation */}
                            <div className="w-full md:w-1/3 flex flex-col gap-4">
                                <div className="p-4 border border-white/5 bg-white/5 rounded-lg flex items-center gap-4">
                                    <div className="p-2 rounded bg-cyber-green/10 text-cyber-green">
                                        <IconActivity className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-neutral-500 uppercase flex items-center gap-2">
                                            Live Status
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-ping" />
                                        </p>
                                        <p className="text-xs text-cyber-green font-mono animate-pulse">SYSTEM_ACTIVE</p>
                                    </div>
                                </div>
                                <div className="p-4 border border-white/5 bg-white/5 rounded-lg flex items-center gap-4">
                                    <div className="p-2 rounded bg-electric-blue/10 text-electric-blue">
                                        <IconCpu className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-neutral-500 uppercase">Engine Sync</p>
                                        <p className="text-xs text-white font-mono">Real-time DB // Supabase</p>
                                    </div>
                                </div>
                                <div className="p-4 border border-white/5 bg-white/5 rounded-lg flex items-center gap-4">
                                    <div className="p-2 rounded bg-yellow-500/10 text-yellow-500">
                                        <IconShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-neutral-500 uppercase">Auth Integrity</p>
                                        <p className="text-xs text-white font-mono">Secure_Supabase_Auth</p>
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="flex-1 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-4xl font-bold tracking-tight text-white group-hover:text-cyber-green transition-colors">Tunis Shoes</h3>
                                        <span className="px-2 py-0.5 bg-cyber-green/10 border border-cyber-green/30 text-cyber-green text-[10px] rounded uppercase font-mono tracking-tighter">Active_V3_Engine</span>
                                    </div>
                                    <p className="text-neutral-400 leading-relaxed font-sans italic border-l-2 border-cyber-green pl-4">
                                        "A mission-critical E-commerce ecosystem engineered for high impact. Developed using Next.js 15 (App Router) and Supabase for a seamless architecture with real-time inventory management and secure authentication."
                                    </p>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                                        <div className="border border-white/5 bg-white/5 p-3 rounded">
                                            <p className="text-[8px] text-neutral-600 uppercase mb-1">UP_TIME</p>
                                            <p className="text-xs text-cyber-green font-mono">{metrics.uptime}%</p>
                                        </div>
                                        <div className="border border-white/5 bg-white/5 p-3 rounded">
                                            <p className="text-[8px] text-neutral-600 uppercase mb-1">INVENTORY</p>
                                            <p className="text-xs text-electric-blue font-mono">{metrics.inventory} UNIT</p>
                                        </div>
                                        <div className="border border-white/5 bg-white/5 p-3 rounded col-span-2">
                                            <p className="text-[8px] text-neutral-600 uppercase mb-1">Real-time Stream</p>
                                            <p className="text-[10px] text-neutral-300 font-mono italic">Supabase Edge Functions Active...</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-300 font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <a
                                        href="https://github.com/omarSDI"
                                        target="_blank"
                                        className="flex-1 py-3 text-center border border-white/10 text-xs uppercase tracking-widest hover:bg-white/5 transition-colors font-mono"
                                    >
                                        Source Code
                                    </a>
                                    <a
                                        href="https://tunis-shoes-admin.vercel.app/"
                                        target="_blank"
                                        className="flex-1 py-3 text-center bg-cyber-green text-black text-xs uppercase font-bold tracking-widest hover:opacity-90 transition-opacity font-mono shadow-[0_0_20px_#00ff41]"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Button>
                </motion.div>

            </div>
        </section>
    );
};
