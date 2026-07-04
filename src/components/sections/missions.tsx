"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
    IconBrain, IconDatabase, IconCoins, IconWand, IconShieldCheck, 
    IconServer, IconNetwork, IconDeviceMobile, IconTrophy, IconArrowRight
} from "@tabler/icons-react";

export const Missions = () => {
    const [metrics, setMetrics] = React.useState({ atsScore: 85, tokens: 1250, gatewayRequests: 1420 });

    React.useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => ({
                atsScore: Math.min(99, prev.atsScore + (Math.random() > 0.7 ? 1 : 0)),
                tokens: prev.tokens - (Math.random() > 0.8 ? 5 : 0),
                gatewayRequests: prev.gatewayRequests + Math.floor(Math.random() * 5)
            }));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="missions" className="py-24 bg-black text-white px-4 relative">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter mb-4">
                        FEATURED <span className="text-cyber-green">MISSIONS</span>
                    </h2>
                    <p className="text-neutral-500 font-mono text-xs uppercase tracking-[0.3em]">System Level 01: [ACTIVE_PROJECTS]</p>
                </div>

                {/* PROJECT 1: Lansy.ai */}
                <motion.div whileHover={{ y: -5 }} className="w-full">
                    <Button
                        borderRadius="0.5rem"
                        className="bg-[#0a0a0a]/80 backdrop-blur-md border-white/5 p-8 text-left items-stretch flex-col gap-6 fire-spray shadow-2xl"
                        containerClassName="h-auto w-full min-h-[400px]"
                    >
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            {/* Visual Engine Representation */}
                            <div className="w-full md:w-1/3 flex flex-col gap-4">
                                <div className="p-4 border border-white/5 bg-white/5 rounded-lg flex items-center gap-4 group hover:bg-cyber-green/5 transition-colors">
                                    <div className="p-2 rounded bg-cyber-green/10 text-cyber-green group-hover:scale-110 transition-transform">
                                        <IconBrain className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-neutral-500 uppercase flex items-center gap-2">
                                            AI Engine
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-ping" />
                                        </p>
                                        <p className="text-xs text-cyber-green font-mono animate-pulse">GEMINI_1.5_PRO</p>
                                    </div>
                                </div>
                                <div className="p-4 border border-white/5 bg-white/5 rounded-lg flex items-center gap-4 group hover:bg-electric-blue/5 transition-colors">
                                    <div className="p-2 rounded bg-electric-blue/10 text-electric-blue group-hover:scale-110 transition-transform">
                                        <IconDatabase className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-neutral-500 uppercase">Vector Sync</p>
                                        <p className="text-xs text-white font-mono">ChromaDB // RAG</p>
                                    </div>
                                </div>
                                <div className="p-4 border border-white/5 bg-white/5 rounded-lg flex items-center gap-4 group hover:bg-yellow-500/5 transition-colors">
                                    <div className="p-2 rounded bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform">
                                        <IconCoins className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-neutral-500 uppercase">Economy</p>
                                        <p className="text-xs text-white font-mono">Konnect_Gateway</p>
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="flex-1 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-4xl font-bold tracking-tight text-white group-hover:text-cyber-green transition-colors">Lansy.ai</h3>
                                        <span className="px-2 py-0.5 bg-cyber-green/10 border border-cyber-green/30 text-cyber-green text-[10px] rounded uppercase font-mono tracking-tighter">AI_SaaS_Platform</span>
                                    </div>
                                    <p className="text-sm text-neutral-400">Full-Stack Developer & AI Engineer</p>
                                    <p className="text-neutral-400 leading-relaxed font-sans italic border-l-2 border-cyber-green pl-4">
                                        "An advanced AI-powered platform generating highly optimized, ATS-friendly CVs tailored to specific job offers using RAG and intelligent analysis."
                                    </p>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                                        <div className="border border-white/5 bg-white/5 p-3 rounded">
                                            <p className="text-[8px] text-neutral-600 uppercase mb-1">ATS_SCORE</p>
                                            <p className="text-xs text-cyber-green font-mono">{metrics.atsScore}%</p>
                                        </div>
                                        <div className="border border-white/5 bg-white/5 p-3 rounded">
                                            <p className="text-[8px] text-neutral-600 uppercase mb-1">NETWORK_TOKENS</p>
                                            <p className="text-xs text-electric-blue font-mono">{metrics.tokens}</p>
                                        </div>
                                        <div className="border border-white/5 bg-white/5 p-3 rounded col-span-2">
                                            <p className="text-[8px] text-neutral-600 uppercase mb-1">Generation Stream</p>
                                            <p className="text-[10px] text-neutral-300 font-mono italic">LangChain processing...</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {["Next.js", "FastAPI", "Gemini API", "ChromaDB", "Supabase Auth", "PostgreSQL"].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-300 font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <div className="flex-1 py-3 text-center border border-white/10 text-xs uppercase tracking-widest text-neutral-500 font-mono flex justify-center items-center gap-2 cursor-not-allowed">
                                        <IconShieldCheck className="w-4 h-4" /> Private Repo
                                    </div>
                                    <a
                                        href="#live-demo"
                                        className="flex-1 py-3 text-center bg-cyber-green text-black text-xs uppercase font-bold tracking-widest hover:opacity-90 transition-opacity font-mono shadow-[0_0_20px_#00ff41] flex justify-center items-center gap-2"
                                    >
                                        <IconWand className="w-4 h-4" /> Launch App
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Button>
                </motion.div>

                {/* PROJECT 2: Gestion de Formation */}
                <motion.div whileHover={{ y: -5 }} className="w-full mt-10">
                    <Button
                        borderRadius="0.5rem"
                        className="bg-[#0a0a0a]/80 backdrop-blur-md border-white/5 p-8 text-left items-stretch flex-col gap-6 fire-spray shadow-2xl"
                        containerClassName="h-auto w-full min-h-[400px]"
                    >
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            {/* Visual Engine Representation */}
                            <div className="w-full md:w-1/3 flex flex-col gap-4">
                                <div className="p-4 border border-white/5 bg-white/5 rounded-lg flex items-center gap-4 group hover:bg-electric-blue/5 transition-colors">
                                    <div className="p-2 rounded bg-electric-blue/10 text-electric-blue group-hover:scale-110 transition-transform">
                                        <IconNetwork className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-neutral-500 uppercase flex items-center gap-2">
                                            API Gateway
                                            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-ping" />
                                        </p>
                                        <p className="text-xs text-electric-blue font-mono animate-pulse">YARP_ROUTER</p>
                                    </div>
                                </div>
                                <div className="p-4 border border-white/5 bg-white/5 rounded-lg flex items-center gap-4 group hover:bg-cyber-green/5 transition-colors">
                                    <div className="p-2 rounded bg-cyber-green/10 text-cyber-green group-hover:scale-110 transition-transform">
                                        <IconServer className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-neutral-500 uppercase">Microservices</p>
                                        <p className="text-xs text-white font-mono">.NET 8 Ecosystem</p>
                                    </div>
                                </div>
                                <div className="p-4 border border-white/5 bg-white/5 rounded-lg flex items-center gap-4 group hover:bg-yellow-500/5 transition-colors">
                                    <div className="p-2 rounded bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform">
                                        <IconTrophy className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-neutral-500 uppercase">Real-Time Event</p>
                                        <p className="text-xs text-white font-mono">SignalR Hub</p>
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="flex-1 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-electric-blue transition-colors">Gestion de Formation</h3>
                                        <span className="px-2 py-0.5 bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-[10px] rounded uppercase font-mono tracking-tighter hidden md:inline-block">Enterprise</span>
                                        <span className="px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-[10px] rounded uppercase font-mono tracking-tighter">PFE_Project</span>
                                    </div>
                                    <p className="text-sm text-neutral-400">Full-Stack Developer (Solo)</p>
                                    <p className="text-neutral-400 leading-relaxed font-sans italic border-l-2 border-electric-blue pl-4">
                                        "A comprehensive Training Management Platform built with a Microservices Architecture using .NET 8. End-to-end lifecycle management of professional training programs."
                                    </p>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                                        <div className="border border-white/5 bg-white/5 p-3 rounded">
                                            <p className="text-[8px] text-neutral-600 uppercase mb-1">SERVICES</p>
                                            <p className="text-xs text-electric-blue font-mono">3 + GATEWAY</p>
                                        </div>
                                        <div className="border border-white/5 bg-white/5 p-3 rounded">
                                            <p className="text-[8px] text-neutral-600 uppercase mb-1">REQ_COUNT</p>
                                            <p className="text-xs text-cyber-green font-mono">{metrics.gatewayRequests}</p>
                                        </div>
                                        <div className="border border-white/5 bg-white/5 p-3 rounded col-span-2">
                                            <p className="text-[8px] text-neutral-600 uppercase mb-1">Real-Time WebSockets</p>
                                            <p className="text-[10px] text-neutral-300 font-mono italic">SignalR streaming active...</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {[".NET 8", "C#", "Microservices", "YARP", "PostgreSQL", "JWT", "SignalR"].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-300 font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <Link
                                        href="/projects/gestion-de-formation"
                                        className="flex-1 py-3 text-center bg-white/5 text-white border border-white/20 text-xs uppercase font-bold tracking-widest hover:bg-white/10 hover:border-white/50 transition-all font-mono flex justify-center items-center gap-2"
                                    >
                                        View Case Study <IconArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
