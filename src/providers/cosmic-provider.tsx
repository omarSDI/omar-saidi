"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeMode = "default" | "matrix" | "sith";

interface CosmicThemeContextType {
    mode: ThemeMode;
    toggleMode: (mode: ThemeMode) => void;
    warpSpeed: boolean;
}

const CosmicThemeContext = createContext<CosmicThemeContextType>({
    mode: "default",
    toggleMode: () => { },
    warpSpeed: false,
});

export const useCosmicTheme = () => useContext(CosmicThemeContext);

export const CosmicProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>("default");
    const [warpSpeed, setWarpSpeed] = useState(false);
    const [inputBuffer, setInputBuffer] = useState("");

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const char = e.key.toUpperCase();
            setInputBuffer((prev) => (prev + char).slice(-10)); // Keep last 10 chars
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (inputBuffer.includes("OMAR")) {
            triggerTheme("matrix");
            setInputBuffer("");
        } else if (inputBuffer.includes("SITH")) {
            triggerTheme("sith");
            setInputBuffer("");
        } else if (inputBuffer.includes("SPACE")) {
            triggerWarp();
            setInputBuffer("");
        }
    }, [inputBuffer]);

    const triggerTheme = (newMode: ThemeMode) => {
        console.log("Theme Triggered:", newMode); // Debug
        setMode(newMode);
        setWarpSpeed(true);
        setTimeout(() => setWarpSpeed(false), 3000); // 3s Warp
    };

    const triggerWarp = () => {
        setWarpSpeed(true);
        setTimeout(() => setWarpSpeed(false), 3000);
    };

    return (
        <CosmicThemeContext.Provider value={{ mode, toggleMode: setMode, warpSpeed }}>
            <div className={
                mode === "matrix" ? "theme-matrix" :
                    mode === "sith" ? "theme-sith" : ""
            }>
                {children}
            </div>
        </CosmicThemeContext.Provider>
    );
};
