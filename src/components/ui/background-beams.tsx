"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beamsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Simple light effect for background
        const handleMouseMove = (e: MouseEvent) => {
            if (!beamsRef.current) return;
            const { clientX, clientY } = e;
            const x = clientX;
            const y = clientY;
            beamsRef.current.style.setProperty("--x", `${x}px`);
            beamsRef.current.style.setProperty("--y", `${y}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={beamsRef}
            className={cn(
                "absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden",
                className
            )}
            style={{
                background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(0, 255, 65, 0.15), transparent 80%)`,
            }}
        >
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>
        </div>
    );
};
