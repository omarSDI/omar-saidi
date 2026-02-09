"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const COMMANDS: { [key: string]: string | React.ReactNode } = {
    whoami: (
        <div className="flex items-start gap-4 mt-2">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-cyber-green/50 flex-shrink-0 bg-neutral-900 flex items-center justify-center">
                <Image
                    src="/assets/omar.jpg"
                    alt="Avatar"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all"
                    onError={(e) => {
                        const target = e.target as any;
                        target.style.display = 'none';
                        target.parentElement.innerHTML = '<div class="text-[10px] text-cyber-green font-mono font-bold">OS</div>';
                    }}
                />
            </div>
            <p className="text-neutral-300 leading-relaxed italic">
                I am an IT student at ISET Béja specializing in Computer Systems Development. I engineer high-performance backend architectures and scalable digital ecosystems.
            </p>
        </div>
    ),
    contact: (
        <div className="flex flex-col gap-1 py-1">
            <a href="mailto:saidiomar537@gmail.com" className="text-cyber-green hover:text-white transition-colors glow-text underline decoration-cyber-green/30 tracking-widest">[ EMAIL_SECURE ] saidiomar537@gmail.com</a>
            <div className="flex gap-4">
                <a href="https://linkedin.com/in/omar-saidi-9306283a0/" target="_blank" className="text-electric-blue hover:text-white transition-all underline decoration-electric-blue/30">[ LINKED_IN ]</a>
                <a href="https://github.com/omarSDI" target="_blank" className="text-neutral-500 hover:text-white transition-all underline decoration-white/10">[ GIT_HUB ]</a>
                <a href="https://www.instagram.com/omarsaidii_/" target="_blank" className="text-pink-500 hover:text-white transition-all underline decoration-pink-500/30 font-bold">[ INSTA ]</a>
            </div>
        </div>
    ),
    skills: "Initializing neural visualization... Analyzing tech stack: Spring Boot 3, Microservices, Node.js, NestJS, Next.js, Docker, Kubernetes. System status: OPTIMAL.",
    cv: (
        <div className="mt-2 text-xs border-l-2 border-cyber-green pl-2 py-1">
            <p className="mb-2 text-neutral-400">Accessing secure file: OMAR-SAIDI.pdf</p>
            <a href="/OMAR-SAIDI.pdf" download className="text-cyber-green underline font-bold uppercase tracking-widest hover:text-white transition-colors">
                [ DOWNLOAD_SECURE_COPY ]
            </a>
        </div>
    ),
    help: "Available commands: whoami, ls missions, contact, skills, cv, clear, help",
};

export const Terminal = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<(string | React.ReactNode)[]>([]);
    const [isAutoTyping, setIsAutoTyping] = useState(true);
    const [currentLine, setCurrentLine] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const autoCommands = [
        { cmd: "init_systems", text: "Initializing Systems...", delay: 200 },
        { cmd: "load_omar", text: "Loading Omar Saidi...", delay: 300 },
        { cmd: "exec_mission", text: "Executing Mission: Tunis Shoes...", delay: 400 },
    ];

    useEffect(() => {
        if (isAutoTyping) {
            runSequence();
        }
    }, []);

    const runSequence = async () => {
        setHistory(["System Initialization v5.0", "Securing peripheral nodes..."]);
        await new Promise(r => setTimeout(r, 1000));

        for (const item of autoCommands) {
            await typeCommand(item.text === item.cmd ? item.cmd : item.text);
            await new Promise(r => setTimeout(r, item.delay));
            executeCommand(item.cmd);
            await new Promise(r => setTimeout(r, 1500)); // Pause after execution
        }
        setIsAutoTyping(false);
    };

    const typeCommand = async (cmd: string) => {
        for (let i = 0; i <= cmd.length; i++) {
            setCurrentLine(cmd.substring(0, i));
            await new Promise(r => setTimeout(r, 30));
        }
    };

    const executeCommand = (cmd: string) => {
        if (cmd === "init_systems") {
            setHistory(prev => [...prev, "✓ Kernel_v5.2.0 loaded", "✓ Particle_Engine linked"]);
        } else if (cmd === "load_omar") {
            setHistory(prev => [...prev, (
                <div className="flex items-center gap-2 text-white">
                    <span className="text-cyber-green font-bold">[ USER ]</span> Omar Saidi - Verified Full Stack Developer
                </div>
            )]);
        } else if (cmd === "exec_mission") {
            setHistory(prev => [...prev, (
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-electric-blue font-bold">[ MISSION ]</span> Tunis Shoes Ecosystem
                    </div>
                    <span className="text-cyber-green text-[10px] ml-6 animate-pulse">{'>>'} ACCESS_GRANTED // LIVE_DEMO_READY</span>
                </div>
            )]);
        } else if (cmd === "contact") {
            setHistory(prev => [...prev, COMMANDS.contact]);
        } else if (COMMANDS[cmd]) {
            setHistory(prev => [...prev, COMMANDS[cmd]]);
        }
        setCurrentLine("");
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history, currentLine]);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isAutoTyping || !input.trim()) return;

        const cmd = input.toLowerCase().trim();
        setHistory(prev => [...prev, `> ${input}`]);

        if (cmd === "clear") {
            setHistory([]);
        } else if (COMMANDS[cmd]) {
            setHistory(prev => [...prev, COMMANDS[cmd]]);
        } else if (cmd === "ls missions") {
            executeCommand("map_missions");
        } else {
            setHistory(prev => [...prev, `System error: command NOT FOUND [${cmd}]`]);
        }
        setInput("");
    };

    return (
        <div ref={containerRef} id="terminal" className="w-full max-w-4xl mx-auto my-10 font-mono text-sm group relative z-20">
            <div className="bg-[#121212]/80 backdrop-blur-md rounded-t-lg p-3 flex items-center justify-between border-b border-white/5 shadow-2xl">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <span className="text-neutral-500 text-[10px] ml-4 tracking-tighter uppercase">Omar Saidi — Secure Shell</span>
                </div>
                <div className="text-[10px] text-neutral-700 tracking-widest hidden md:block">ENCRYPTED_AES_256</div>
            </div>
            <div
                ref={scrollRef}
                className="bg-black/95 p-6 h-[400px] overflow-y-auto border border-white/5 rounded-b-lg scrollbar-hide glassmorphism"
            >
                <div className="space-y-2">
                    {history.map((line, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            key={i}
                            className={cn(
                                "leading-relaxed",
                                typeof line === "string" && line.startsWith(">") ? "text-neutral-500" : "text-cyber-green"
                            )}
                        >
                            {line}
                        </motion.div>
                    ))}

                    <div className="flex items-center text-cyber-green">
                        <span className="mr-2 text-neutral-600">{">"}</span>
                        <span>{currentLine}</span>
                        <span className="w-2 h-4 bg-cyber-green ml-1 animate-pulse" />
                    </div>

                    {!isAutoTyping && (
                        <form onSubmit={handleFormSubmit} className="flex relative">
                            <span className="mr-2 text-neutral-600">{">"}</span>
                            <input
                                type="text"
                                className="bg-transparent border-none outline-none text-cyber-green w-full p-0"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                autoFocus
                                autoComplete="off"
                            />
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
