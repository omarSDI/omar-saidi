"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SupernovaProps {
    isActive: boolean;
    onComplete?: () => void;
}

export const SupernovaTransition: React.FC<SupernovaProps> = ({ isActive, onComplete }) => {
    return (
        <AnimatePresence>
            {isActive && (
                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                    {/* Implosion Phase */}
                    <motion.div
                        initial={{ scale: 20, opacity: 0 }}
                        animate={{ scale: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "circIn" }}
                        className="absolute w-[200vw] h-[200vw] rounded-full bg-black z-40"
                    />

                    {/* Explosion Phase */}
                    <motion.div
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 50, opacity: 0 }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                        className="absolute w-[100px] h-[100px] rounded-full bg-white z-50"
                        onAnimationComplete={onComplete}
                    />

                    {/* Flash */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.2, delay: 0.8 }}
                        className="absolute inset-0 bg-white z-[60]"
                    />
                </div>
            )}
        </AnimatePresence>
    );
};
