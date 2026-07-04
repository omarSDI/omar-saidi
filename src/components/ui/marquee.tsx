"use client";
import React from "react";
import { motion } from "framer-motion";

export const Marquee = () => {
    const skills = [
        "React", "Next.js", "Angular", "TypeScript", "Flutter", 
        "Spring Boot", ".NET Core", "C#", "Java", "Python", 
        "Node.js", "PostgreSQL", "MongoDB", "Docker", "Tailwind CSS",
        "Microservices", "YARP", "SignalR", "Gemini API"
    ];

    // Double the array to ensure smooth infinite scrolling
    const duplicatedSkills = [...skills, ...skills];

    return (
        <div className="relative w-full overflow-hidden bg-cyber-green py-3 mt-10">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" style={{ width: '100%', height: '100%' }}></div>
            
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                    className="flex gap-10 items-center px-4"
                >
                    {duplicatedSkills.map((skill, index) => (
                        <span key={index} className="text-black font-bold font-mono uppercase tracking-widest text-sm">
                            • {skill}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
