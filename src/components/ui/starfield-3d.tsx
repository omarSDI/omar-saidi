"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useCosmicTheme } from "@/providers/cosmic-provider";
import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

const StarFieldContent = (props: any) => {
    const { mode, warpSpeed } = useCosmicTheme();
    const ref = useRef<any>(null);

    // Dynamic color based on mode
    const color = useMemo(() => {
        if (mode === "matrix") return "#00ff41"; // Neon Green
        if (mode === "sith") return "#ff0000";   // Sith Red
        return "#ffffff";                        // Default White/Blueish
    }, [mode]);

    const sphere = useMemo(() => {
        const positions = new Float32Array(5000 * 3);
        const radius = 1.5;
        for (let i = 0; i < 5000; i++) {
            const r = radius * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Speed up if warpSpeed is active
            const speedMultiplier = warpSpeed ? 10 : 1;
            ref.current.rotation.x -= (delta / 10) * speedMultiplier;
            ref.current.rotation.y -= (delta / 15) * speedMultiplier;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color={color}
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
};

export const Starfield3D = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <StarFieldContent />
            </Canvas>
        </div>
    );
};
