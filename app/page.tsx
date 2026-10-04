'use client';

import { useState } from 'react';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import IntroLoader from '@/components/IntroLoader';
import ThemeRope from "@/components/ThemeRope";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {/* Custom cursor */}
      <ThemeRope />
      {/* Opening experience */}
      {!introFinished && (
        <IntroLoader
          onComplete={() => setIntroFinished(true)}
        />
      )}

      {/* Main portfolio */}
      <main
        className={`transition-opacity duration-700 ${
          introFinished ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}