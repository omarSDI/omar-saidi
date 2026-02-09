import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "./audio-manager";

export const SpaceshipChase = () => {
    const [loop, setLoop] = useState(0);
    const [isExploding, setIsExploding] = useState(false);
    const { playSFX } = useAudio();

    useEffect(() => {
        const interval = setInterval(() => {
            setLoop((prev) => prev + 1);
        }, 12000); // Sequence duration
        return () => clearInterval(interval);
    }, []);

    // Supernova trigger timing
    useEffect(() => {
        const laserInterval = setInterval(() => {
            if (!isExploding) playSFX("laser");
        }, 800);

        const timer = setTimeout(() => {
            setIsExploding(true);
            playSFX("explosion");
            setTimeout(() => setIsExploding(false), 3000);
        }, 9000); // Expansion starts at 9s

        return () => {
            clearTimeout(timer);
            clearInterval(laserInterval);
        };
    }, [loop, isExploding, playSFX]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* The Chase */}
            <AnimatePresence>
                {!isExploding && (
                    <div key={loop}>
                        {/* Mother Ship */}
                        <motion.div
                            initial={{ x: "-20%", y: "40%", scale: 1.5, opacity: 0 }}
                            animate={{
                                x: "120%",
                                y: "30%",
                                opacity: [0, 1, 1, 0],
                                transition: { duration: 10, ease: "linear" }
                            }}
                            className="absolute"
                        >
                            <div className="w-16 h-8 bg-neutral-800 rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center">
                                <div className="w-10 h-1 bg-blue-500/50 blur-[2px] animate-pulse" />
                            </div>
                        </motion.div>

                        {/* Starfighter 1 */}
                        <motion.div
                            initial={{ x: "-30%", y: "45%", scale: 0.8, opacity: 0 }}
                            animate={{
                                x: "130%",
                                y: "32%",
                                opacity: [0, 1, 1, 0],
                                transition: { duration: 10, ease: "linear", delay: 0.5 }
                            }}
                            className="absolute"
                        >
                            <div className="w-6 h-3 bg-neutral-700 rounded-sm border border-cyber-green/30 relative">
                                {/* Laser Pulse */}
                                <motion.div
                                    animate={{ opacity: [0, 1, 0], x: [0, 40] }}
                                    transition={{ repeat: Infinity, duration: 0.3 }}
                                    className="absolute right-0 top-1 w-12 h-[1px] bg-orange-500 shadow-[0_0_5px_orange]"
                                />
                            </div>
                        </motion.div>

                        {/* Starfighter 2 */}
                        <motion.div
                            initial={{ x: "-35%", y: "35%", scale: 0.7, opacity: 0 }}
                            animate={{
                                x: "135%",
                                y: "28%",
                                opacity: [0, 1, 1, 0],
                                transition: { duration: 10, ease: "linear", delay: 0.8 }
                            }}
                            className="absolute"
                        >
                            <div className="w-6 h-3 bg-neutral-700 rounded-sm border border-electric-blue/30 relative">
                                {/* Laser Pulse */}
                                <motion.div
                                    animate={{ opacity: [0, 1, 0], x: [0, 40] }}
                                    transition={{ repeat: Infinity, duration: 0.4 }}
                                    className="absolute right-0 top-1 w-12 h-[1px] bg-red-500 shadow-[0_0_5px_red]"
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Supernova Expansion */}
            <AnimatePresence>
                {isExploding && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0, 2, 4],
                            opacity: [0, 0.8, 0],
                            transition: { duration: 2.5, ease: "easeOut" }
                        }}
                        exit={{ opacity: 0 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] rounded-full bg-gradient-to-r from-white via-gold-500 to-transparent blur-[100px]"
                    />
                )}
            </AnimatePresence>
        </div>
    );
};
