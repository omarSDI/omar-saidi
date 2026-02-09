"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import { motion } from "framer-motion";
import { IconVolume, IconVolumeOff } from "@tabler/icons-react";

interface AudioContextType {
    isMuted: boolean;
    toggleMute: () => void;
    playSFX: (sound: "laser" | "explosion" | "success") => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) throw new Error("useAudio must be used within an AudioProvider");
    return context;
};

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
    const [isMuted, setIsMuted] = useState(true);
    const [ambient, setAmbient] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = new Audio("/assets/sounds/ambient-loop.mp3");
        audio.loop = true;
        audio.volume = 0.3;
        setAmbient(audio);
        return () => audio.pause();
    }, []);

    useEffect(() => {
        if (!ambient) return;
        if (isMuted) {
            ambient.pause();
        } else {
            ambient.play().catch(e => console.warn("Audio autoplay blocked:", e));
        }
    }, [isMuted, ambient]);

    const toggleMute = () => setIsMuted(!isMuted);

    const playSFX = (sound: "laser" | "explosion" | "success") => {
        if (isMuted) return;
        const sfx = new Audio(`/assets/sounds/${sound}.mp3`);
        sfx.volume = sound === "explosion" ? 0.6 : 0.4;
        sfx.play().catch(e => console.warn("SFX blocked:", e));
    };

    return (
        <AudioContext.Provider value={{ isMuted, toggleMute, playSFX }}>
            {children}
            <div className="fixed top-8 right-8 z-[100]">
                <button
                    onClick={toggleMute}
                    className="p-3 glassmorphism rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors shadow-2xl"
                >
                    {isMuted ? <IconVolumeOff className="w-5 h-5" /> : <IconVolume className="w-5 h-5" />}
                </button>
            </div>
        </AudioContext.Provider>
    );
};
