"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconDatabase,
    IconDeviceMobile,
    IconLayout2,
    IconServer,
    IconTools,
    IconBrandFramer,
    IconRocket
} from "@tabler/icons-react";

export const SkillsDashboard = () => {
    const items = [
        {
            title: "Backend Core",
            description: "Spring Boot 3, Microservices (Java), Node.js (Express), NestJS ⚡",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-charcoal/50 border border-white/5 items-center justify-center group-hover:bg-cyber-green/10 transition-colors"><IconServer className="h-10 w-10 text-cyber-green" /></div>,
            icon: <IconServer className="h-4 w-4 text-neutral-500" />,
            className: "md:col-span-2 fire-spray glassmorphism lightning-border buraq-glow shimmer-card",
        },
        {
            title: "Frontend & Mobile",
            description: "Next.js 14, TypeScript, Flutter (Dart), Mobile Native 🚀",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-charcoal/50 border border-white/5 items-center justify-center group-hover:bg-electric-blue/10 transition-colors"><IconLayout2 className="h-10 w-10 text-electric-blue" /></div>,
            icon: <IconLayout2 className="h-4 w-4 text-neutral-500" />,
            className: "md:col-span-1 fire-spray glassmorphism lightning-border buraq-glow shimmer-card",
        },
        {
            title: "Databases",
            description: "PostgreSQL, MongoDB, SQL Server 🎯",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-charcoal/50 border border-white/5 items-center justify-center group-hover:bg-yellow-500/10 transition-colors"><IconDatabase className="h-10 w-10 text-yellow-500" /></div>,
            icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
            className: "md:col-span-1 fire-spray glassmorphism lightning-border buraq-glow shimmer-card",
        },
        {
            title: "Ecosystem & DevOps",
            description: "Docker, Kubernetes, FB Ads // STATUS: LEARNING_&_GROWING",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-charcoal/50 border border-white/5 items-center justify-center group-hover:bg-orange-500/10 transition-colors"><IconRocket className="h-10 w-10 text-orange-500" /></div>,
            icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
            className: "md:col-span-2 fire-spray glassmorphism lightning-border buraq-glow shimmer-card",
        },
    ];

    return (
        <div className="py-20 px-4 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-mono tracking-tighter">
                    THE <span className="text-violet-500">ARSENAL</span>
                </h2>

                <div className="relative flex flex-col items-center justify-center overflow-hidden">
                    <div className="flex gap-8 animate-scroll-left hover:[animation-play-state:paused] w-max py-4">
                        {[
                            { name: "React", icon: "⚛️", color: "text-blue-400" },
                            { name: "Angular", icon: "🅰️", color: "text-red-500" },
                            { name: "Flutter", icon: "🦋", color: "text-cyan-400" },
                            { name: "PHP", icon: "🐘", color: "text-indigo-400" },
                            { name: "Kotlin", icon: "K", color: "text-purple-400" },
                            { name: "JavaScript", icon: "JS", color: "text-yellow-400" },
                            { name: "TypeScript", icon: "TS", color: "text-blue-500" },
                            { name: "Java", icon: "☕", color: "text-red-400" },
                            { name: "Spring Boot", icon: "🍃", color: "text-green-500" },
                            { name: "PostgreSQL", icon: "🐘", color: "text-blue-300" },
                        ].map((skill, i) => (
                            <div key={i} className="group relative">
                                <div className="flex items-center gap-3 px-5 py-2 glassmorphism border border-white/10 rounded-full hover:border-violet-500/50 transition-all duration-300 hover:scale-110 cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] min-w-[140px] justify-center bg-black/40">
                                    <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                                    <span className="text-[10px] font-mono font-bold text-neutral-300 uppercase tracking-widest group-hover:text-white transition-colors">{skill.name}</span>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate for Loop */}
                        {[
                            { name: "React", icon: "⚛️", color: "text-blue-400" },
                            { name: "Angular", icon: "🅰️", color: "text-red-500" },
                            { name: "Flutter", icon: "🦋", color: "text-cyan-400" },
                            { name: "PHP", icon: "🐘", color: "text-indigo-400" },
                            { name: "Kotlin", icon: "K", color: "text-purple-400" },
                            { name: "JavaScript", icon: "JS", color: "text-yellow-400" },
                            { name: "TypeScript", icon: "TS", color: "text-blue-500" },
                            { name: "Java", icon: "☕", color: "text-red-400" },
                            { name: "Spring Boot", icon: "🍃", color: "text-green-500" },
                            { name: "PostgreSQL", icon: "🐘", color: "text-blue-300" },
                        ].map((skill, i) => (
                            <div key={`dup-${i}`} className="group relative">
                                <div className="flex items-center gap-3 px-5 py-2 glassmorphism border border-white/10 rounded-full hover:border-violet-500/50 transition-all duration-300 hover:scale-110 cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] min-w-[140px] justify-center bg-black/40">
                                    <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                                    <span className="text-[10px] font-mono font-bold text-neutral-300 uppercase tracking-widest group-hover:text-white transition-colors">{skill.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
