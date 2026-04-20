'use client';

import { useEffect, useState } from "react";


export default function ScrollProgress(){
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(scrolled);
        };

        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);
       return(
        <div
        className="fixed top-16 left-0 h-1 bg-linear-to-r from-blue-500 to-purple-600 transition-all duration-300 z-40"
          style={{ width: `${progress}%` }}
        />
       )
}