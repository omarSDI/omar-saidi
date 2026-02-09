import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpaceDust } from "@/components/ui/space-dust";
import { Spaceship } from "@/components/ui/spaceship";
import { SocialDock } from "@/components/ui/social-dock";
import { MouseTrail } from "@/components/ui/mouse-trail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "Portfolio of Omar Saidi, a Full Stack Developer specializing in Next.js 15, Spring Boot 3, and Supabase. Building scalable digital ecosystems with a focus on impact and modern architecture.",
  keywords: ["Omar Saidi", "Full Stack Developer", "ISET Béja", "Next.js", "Spring Boot", "Supabase", "Web Development Tunisia", "Tunis Shoes"],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="nebula-bg" />
        <SpaceDust />
        <MouseTrail />
        <Spaceship />
        <SocialDock />
        {children}
      </body>
    </html>
  );
}
