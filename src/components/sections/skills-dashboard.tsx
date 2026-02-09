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
        <div className="py-20 px-4 bg-black">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 font-mono tracking-tighter">
                THE <span className="text-cyber-green">DASHBOARD</span>
            </h2>
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={item.className}
                    />
                ))}
            </BentoGrid>
        </div>
    );
};
