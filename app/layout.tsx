import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "./providers";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Souradeep Maity | Full-Stack Developer",
  description:
    "Portfolio of Souradeep Maity — Full-Stack Developer and AI Builder.",
  keywords: [
    "developer",
    "portfolio",
    "react",
    "next.js",
    "web development",
    "full-stack",
    "AI",
  ],
  authors: [{ name: "Souradeep Maity" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ScrollProgress />
          <Navbar />

          <main className="smooth-scroll">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
