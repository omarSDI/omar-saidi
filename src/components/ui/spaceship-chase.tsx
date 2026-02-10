"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SpaceshipChase = () => {
    const [loop, setLoop] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoop((prev) => prev + 1);
        }, 12000); // Sequence duration
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* The Green Ship */}
            <AnimatePresence>
                <div key={loop}>
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
                                className="absolute right-0 top-1 w-12 h-[1px] bg-cyber-green shadow-[0_0_5px_rgba(0,255,65,0.8)]"
                            />
                        </div>
                    </motion.div>
                </div>
            </AnimatePresence>
        </div>
    );
};
