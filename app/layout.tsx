import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Name | Full-Stack Developer',
  description: 'Welcome to my personal portfolio. I develope a beautiful, high-performance web experiences.',
  keywords: 'developer, portfolio, react, next.js, web development, full-stack',
  authors: [{name: 'Your Name'}],
  openGraph:{
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    siteName: 'Your Portfolio',
    title: 'Your Name | Full-Stack Developer',
    description: 'Welcome to my personal portfolio. I develope a beautiful, high-performance web experiences.',
  },
  twitter:{
    card: 'summary_large_image',
    title: 'Your Name | Full-Stack Developer',
    description: 'Welcome to my personal portfolio. I develope a beautiful, high-performance web experiences.',
  },
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, inital-scale=1" />
      </head>
      <body className={inter.className}>
        <Providers>
          <ScrollProgress />
          <Navbar />
          <main className="smooth-scroll">{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
