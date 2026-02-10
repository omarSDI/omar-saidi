"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCosmicTheme } from "@/providers/cosmic-provider";

interface TrailPoint {
    id: number;
    x: number;
    y: number;
}

export const MouseTrail = () => {
    const { mode } = useCosmicTheme();
    const [trail, setTrail] = useState<TrailPoint[]>([]);
    const requestRef = useRef<number>(null);
    const timerRef = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setTrail((prev) => [
                ...prev.slice(-15), // Keep last 15 points
                { id: Date.now(), x: e.clientX, y: e.clientY }
            ]);
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup old points periodically
        const interval = setInterval(() => {
            setTrail((prev) => prev.filter(p => Date.now() - p.id < 500));
        }, 100);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearInterval(interval);
        };
    }, []);

    // Color based on theme
    const trailColor = mode === "matrix" ? "bg-[#00ff41]" : mode === "sith" ? "bg-red-500" : "bg-electric-blue";

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            <AnimatePresence>
                {trail.map((point, index) => (
                    <motion.div
                        key={point.id}
                        initial={{ opacity: 0.8, scale: 1 }}
                        animate={{ opacity: 0, scale: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute w-1.5 h-1.5 rounded-full blur-[1px] ${trailColor}`}
                        style={{
                            left: point.x,
                            top: point.y,
                            transform: "translate(-50%, -50%)"
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Main Cursor Glow */}
            <motion.div
                className={`w-6 h-6 rounded-full blur-md absolute -translate-x-1/2 -translate-y-1/2 hidden md:block ${trailColor} opacity-40`}
                animate={{
                    x: trail[trail.length - 1]?.x || 0,
                    y: trail[trail.length - 1]?.y || 0
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
        </div>
    );
};
