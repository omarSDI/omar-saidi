import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SocialDock } from "@/components/ui/social-dock";

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
    icon: "/logo.png?v=2",
    apple: "/logo.png?v=2",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Omar Saidi",
              url: "https://omarsaidi.dev",
              image: "https://omarsaidi.dev/assets/omar.jpg",
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / ISET Béja"
              },
              sameAs: [
                "https://github.com/omarSDI",
                "https://linkedin.com/in/omarsaidi"
              ],
              description: "Full Stack Developer specializing in Next.js, Spring Boot, and Scalable Solutions.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Béja",
                addressCountry: "TN"
              }
            })
          }}
        />
        <div className="nebula-bg" />
        <SocialDock />
        {children}
      </body>
    </html>
  );
}
