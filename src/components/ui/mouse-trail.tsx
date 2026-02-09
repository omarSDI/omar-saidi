"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const Particle = ({ delay, mouseX, mouseY }: { delay: number, mouseX: any, mouseY: any }) => {
    const x = useSpring(mouseX, { damping: 30 + delay * 5, stiffness: 400 - delay * 50 });
    const y = useSpring(mouseY, { damping: 30 + delay * 5, stiffness: 400 - delay * 50 });

    return (
        <motion.div
            style={{ x, y }}
            className="w-1 h-1 rounded-full bg-cyber-green/20 blur-[1px] absolute -translate-x-1/2 -translate-y-1/2"
        />
    );
};

export const MouseTrail = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const mainX = useSpring(mouseX, springConfig);
    const mainY = useSpring(mouseY, springConfig);

    const secondaryX = useSpring(mouseX, { damping: 40, stiffness: 500 });
    const secondaryY = useSpring(mouseY, { damping: 40, stiffness: 500 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            <motion.div
                style={{ x: mainX, y: mainY }}
                className="w-4 h-4 rounded-full bg-electric-blue/30 blur-md absolute -translate-x-1/2 -translate-y-1/2"
            />
            {/* Space Dust Particles */}
            {[...Array(6)].map((_, i) => (
                <Particle key={i} delay={i} mouseX={mouseX} mouseY={mouseY} />
            ))}
            <motion.div
                style={{
                    x: secondaryX,
                    y: secondaryY
                }}
                className="w-2 h-2 rounded-full bg-cyber-green/40 blur-sm absolute -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    );
};
