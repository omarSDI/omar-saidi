"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import { IconMail, IconPhone, IconMapPin, IconSend } from "@tabler/icons-react";

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 bg-black relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-16">
                    <span className="text-cyber-green text-sm font-mono tracking-widest uppercase">04. Contact</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Me <span className="text-neutral-500">Contacter</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold">Discutons de votre projet</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Disponible pour des opportunités en freelance ou des postes de développement. N'hésitez pas à m'envoyer un message !
                        </p>
                        
                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-4 text-neutral-300 bg-white/5 p-4 rounded-xl border border-white/5">
                                <IconMail className="w-6 h-6 text-cyber-green" />
                                <span>saidiiomar.it@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-neutral-300 bg-white/5 p-4 rounded-xl border border-white/5">
                                <IconPhone className="w-6 h-6 text-cyber-green" />
                                <span>+216 27 566 936</span>
                            </div>
                            <div className="flex items-center gap-4 text-neutral-300 bg-white/5 p-4 rounded-xl border border-white/5">
                                <IconMapPin className="w-6 h-6 text-cyber-green" />
                                <span>Béja, Tunisie 9023</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl space-y-6">
                            <div className="space-y-2">
                                <input
                                    required
                                    type="text"
                                    placeholder="Votre Nom"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyber-green/50 transition-colors"
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <input
                                    required
                                    type="email"
                                    placeholder="Votre Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyber-green/50 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    required
                                    rows={5}
                                    placeholder="Votre Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyber-green/50 transition-colors resize-none"
                                />
                            </div>

                            <button
                                disabled={status === "sending"}
                                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                                    status === "success" 
                                        ? "bg-cyber-green text-black" 
                                        : "bg-white text-black hover:bg-neutral-200"
                                }`}
                            >
                                {status === "idle" && <><IconSend className="w-5 h-5"/> Envoyer le message</>}
                                {status === "sending" && "Envoi en cours..."}
                                {status === "success" && "Message envoyé !"}
                                {status === "error" && (!supabase ? "Erreur : Supabase non configuré" : "Erreur d'envoi")}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
