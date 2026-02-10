"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import { cn } from "@/lib/utils";
import { SupernovaTransition } from "@/components/ui/supernova-transition";

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [showSupernova, setShowSupernova] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setError("");

        try {
            const { error: supabaseError } = await supabase
                .from("contacts")
                .insert([{ ...formData, created_at: new Date().toISOString() }]);

            if (supabaseError) throw supabaseError;

            setStatus("success");
            setShowSupernova(true);
            setFormData({ name: "", email: "", message: "" });

        } catch (err: any) {
            setStatus("error");
            setError(err.message || "Transmission failed. Signal lost.");
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative">
            <SupernovaTransition isActive={showSupernova} onComplete={() => setShowSupernova(false)} />

            <div className="max-w-3xl mx-auto relative z-10">
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
                        className="relative glassmorphism backdrop-blur-[20px] border border-white/5 p-6 sm:p-8 md:p-12 rounded-xl space-y-6 buraq-glow"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-mono text-neutral-500 tracking-widest pl-1">Name_Identifier</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="OMAR SAIDI"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 sm:py-3.5 text-sm font-mono text-white placeholder:text-neutral-700 focus:outline-none focus:border-cyber-green/50 transition-colors"
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
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 sm:py-3.5 text-sm font-mono text-white placeholder:text-neutral-700 focus:outline-none focus:border-cyber-green/50 transition-colors"
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
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 sm:py-3.5 text-sm font-mono text-white placeholder:text-neutral-700 focus:outline-none focus:border-cyber-green/50 transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className={cn(
                                "w-full py-4 sm:py-5 rounded-xl font-mono text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold transition-all duration-500 shadow-[0_0_20px_rgba(0,255,65,0.1)] hover:shadow-[0_0_40px_rgba(0,255,65,0.4)] active:scale-[0.98] flex items-center justify-center text-center relative group overflow-hidden glassmorphism border border-white/10",
                                status === "success"
                                    ? "bg-cyber-green text-black"
                                    : status === "error"
                                        ? "bg-red-500/20 border border-red-500/30 text-red-400"
                                        : "hover:bg-cyber-green hover:text-black text-white"
                            )}
                        >
                            <span className="absolute w-2 h-2 rounded-full bg-cyber-green/50 blur-sm group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-8" />
                            {status === "idle" && "Execute_Transmission"}
                            {status === "sending" && "Transmitting..."}
                            {status === "success" && "✓ Signal_Delivered"}
                            {status === "error" && (!supabase ? "Config_Missing" : "Transmission_Failed")}
                        </button>

                        {/* Success Message */}
                        {status === "success" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="w-full flex items-center justify-center text-center py-3"
                            >
                                <span className="text-cyber-green font-mono text-[10px] sm:text-xs animate-pulse tracking-widest">
                                    /// MESSAGE TRANSMITTED SUCCESSFULLY ///
                                </span>
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
