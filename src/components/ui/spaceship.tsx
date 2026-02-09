"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Spaceship = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const triggerFlyBy = () => {
            if (Math.random() > 0.7) { // 30% chance every check
                setIsVisible(true);
                setTimeout(() => setIsVisible(false), 8000); // Duration matches animation
            }
        };

        const interval = setInterval(triggerFlyBy, 30000); // Check every 30s
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ x: "-20vw", y: "20vh", opacity: 0, scale: 0.5, rotate: 15 }}
                    animate={{
                        x: "120vw",
                        y: "60vh",
                        opacity: [0, 1, 1, 0],
                        scale: 1,
                        rotate: 5
                    }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="fixed z-[5] pointer-events-none"
                >
                    <div className="relative">
                        {/* Neon Trail */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 300 }}
                            className="absolute right-full top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-30 blur-sm"
                        />
                        <svg
                            width="60"
                            height="20"
                            viewBox="0 0 60 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="drop-shadow-[0_0_15px_rgba(0,255,65,0.6)]"
                        >
                            <path
                                d="M0 10L10 5L50 5L60 10L50 15L10 15L0 10Z"
                                fill="#111"
                                stroke="#00ff41"
                                strokeWidth="0.5"
                            />
                            <rect x="15" y="8" width="20" height="4" fill="#00ff41" className="animate-pulse" />
                            <circle cx="55" cy="10" r="2" fill="#00ff41" />
                        </svg>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
