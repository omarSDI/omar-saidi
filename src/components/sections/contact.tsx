import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import { cn } from "@/lib/utils";
import { useAudio } from "../ui/audio-manager";
import { IconCheck } from "@tabler/icons-react";

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const { playSFX } = useAudio();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!supabase) {
            console.warn("Supabase not configured. Please fill in .env.local with real credentials.");
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
            return;
        }

        setStatus("sending");

        const { error } = await supabase
            .from('messages')
            .insert([formData]);

        if (error) {
            console.error("Submission Error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        } else {
            setStatus("success");
            playSFX("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[10px] font-mono text-cyber-green mb-4 uppercase tracking-[0.5em]">DIRECT_COMM_CHANNEL</h2>
                    <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter uppercase">
                        SEND A <span className="text-neutral-500">SIGNAL</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green/20 to-electric-blue/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>

                    <form
                        onSubmit={handleSubmit}
                        className="relative glassmorphism backdrop-blur-[20px] border border-white/5 p-8 md:p-12 rounded-xl space-y-6 buraq-glow"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-mono text-neutral-500 tracking-widest pl-1">Name_Identifier</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="OMAR SAIDI"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm font-mono text-white placeholder:text-neutral-700 focus:outline-none focus:border-cyber-green/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-mono text-neutral-500 tracking-widest pl-1">Email_Coordinates</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="SAIDI@IMPACT.COM"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm font-mono text-white placeholder:text-neutral-700 focus:outline-none focus:border-cyber-green/50 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-mono text-neutral-500 tracking-widest pl-1">Message_Payload</label>
                            <textarea
                                required
                                rows={5}
                                placeholder="BUILDING TO IMPACT..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm font-mono text-white placeholder:text-neutral-700 focus:outline-none focus:border-cyber-green/50 transition-colors resize-none"
                            />
                        </div>

                        <button
                            disabled={status === "sending"}
                            className={cn(
                                "relative w-full py-4 rounded font-mono text-xs uppercase tracking-[0.3em] font-bold transition-all duration-500 shadow-[0_0_20px_rgba(0,255,65,0.1)] overflow-hidden",
                                status === "success" ? "bg-cyber-green text-black" : "bg-white/5 border border-white/10 text-white hover:bg-cyber-green hover:text-black"
                            )}
                        >
                            <AnimatePresence mode="wait">
                                {status === "idle" && (
                                    <motion.span key="idle">Execute_Transmission</motion.span>
                                )}
                                {status === "sending" && (
                                    <motion.span key="sending" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity }}>Transmitting...</motion.span>
                                )}
                                {status === "success" && (
                                    <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center justify-center gap-2">
                                        <IconCheck className="w-4 h-4" /> SUCCESS
                                    </motion.div>
                                )}
                                {status === "error" && (
                                    <motion.span key="error">{!supabase ? "Config_Missing_//_.env.local" : "Transmission_Failed"}</motion.span>
                                )}
                            </AnimatePresence>

                            {/* Portal Rings */}
                            {status === "success" && (
                                <>
                                    <motion.div initial={{ scale: 0, opacity: 1 }} animate={{ scale: 4, opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0 border-2 border-cyber-green rounded-full pointer-events-none" />
                                    <motion.div initial={{ scale: 0, opacity: 1 }} animate={{ scale: 6, opacity: 0 }} transition={{ duration: 1.5, delay: 0.2 }} className="absolute inset-0 border-2 border-cyber-green rounded-full pointer-events-none" />
                                </>
                            )}
                        </button>

                        {/* Status Message Overlay */}
                        <AnimatePresence>
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 15 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute -bottom-12 left-0 right-0 text-center"
                                >
                                    <span className="text-cyber-green font-mono text-[10px] animate-pulse">
                                        /// PORTAL SYNCHRONIZATION COMPLETE ///
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
