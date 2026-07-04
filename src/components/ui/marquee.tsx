"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
    IconBrandReact, IconBrandNextjs, IconBrandAngular, IconBrandTypescript,
    IconBrandFlutter, IconBrandPython, IconBrandNodejs, IconBrandTailwind,
    IconBrandDocker, IconDatabase, IconCode, IconTerminal2, IconServer
} from "@tabler/icons-react";

export const Marquee = () => {
    const skills = [
        { name: "React", icon: <IconBrandReact className="w-5 h-5 text-blue-400" /> },
        { name: "Next.js", icon: <IconBrandNextjs className="w-5 h-5 text-white" /> },
        { name: "Angular", icon: <IconBrandAngular className="w-5 h-5 text-red-500" /> },
        { name: "TypeScript", icon: <IconBrandTypescript className="w-5 h-5 text-blue-500" /> },
        { name: "Flutter", icon: <IconBrandFlutter className="w-5 h-5 text-cyan-400" /> },
        { name: "Spring Boot", icon: <IconServer className="w-5 h-5 text-green-500" /> },
        { name: ".NET Core", icon: <IconTerminal2 className="w-5 h-5 text-purple-500" /> },
        { name: "C#", icon: <IconCode className="w-5 h-5 text-purple-400" /> },
        { name: "Java", icon: <IconCode className="w-5 h-5 text-orange-500" /> },
        { name: "Python", icon: <IconBrandPython className="w-5 h-5 text-yellow-400" /> },
        { name: "Node.js", icon: <IconBrandNodejs className="w-5 h-5 text-green-400" /> },
        { name: "PostgreSQL", icon: <IconDatabase className="w-5 h-5 text-blue-300" /> },
        { name: "MongoDB", icon: <IconDatabase className="w-5 h-5 text-green-500" /> },
        { name: "Docker", icon: <IconBrandDocker className="w-5 h-5 text-blue-500" /> },
        { name: "Tailwind CSS", icon: <IconBrandTailwind className="w-5 h-5 text-cyan-300" /> },
        { name: "Microservices", icon: <IconServer className="w-5 h-5 text-neutral-300" /> },
        { name: "Gemini API", icon: <IconTerminal2 className="w-5 h-5 text-blue-400" /> }
    ];

    // Double the array to ensure smooth infinite scrolling
    const duplicatedSkills = [...skills, ...skills];

    return (
        <div className="relative w-full overflow-hidden bg-transparent py-6 mt-4">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" style={{ width: '100%', height: '100%' }}></div>
            
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                    className="flex gap-12 items-center px-4"
                >
                    {duplicatedSkills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-3">
                            {skill.icon}
                            <span className="text-neutral-300 font-bold font-mono uppercase tracking-widest text-sm">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
